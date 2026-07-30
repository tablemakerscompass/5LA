import { NextResponse } from "next/server";
import { validateInquiry, isValid, type InquiryPayload } from "@/lib/inquiry";
import { deliverInquiry } from "@/lib/inquiry-delivery";

/** Always run per-request; nothing here is cacheable. */
export const dynamic = "force-dynamic";

/* --------------------------------------------------------------------------
   Spam protection
   -------------------------------------------------------------------------- */

/** A real person needs at least this long to complete the form. */
const MIN_FILL_MS = 3_000;
/** Reject a stale form rather than accept a replayed one. */
const MAX_FORM_AGE_MS = 12 * 60 * 60 * 1000;

const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 };
const DEDUPE_TTL_MS = 10 * 60 * 1000;

/**
 * In-memory throttling. Sufficient for a single long-lived instance; on a
 * horizontally-scaled or per-request serverless deployment each instance keeps
 * its own counters, so pair this with platform-level rate limiting if traffic
 * ever warrants it. The honeypot and timing checks are unaffected.
 */
const recentByIp = new Map<string, number[]>();
const seenSubmissions = new Map<string, number>();

function prune(now: number) {
  for (const [id, at] of seenSubmissions) {
    if (now - at > DEDUPE_TTL_MS) seenSubmissions.delete(id);
  }
  for (const [ip, hits] of recentByIp) {
    const live = hits.filter((t) => now - t < RATE_LIMIT.windowMs);
    if (live.length) recentByIp.set(ip, live);
    else recentByIp.delete(ip);
  }
}

function rateLimited(ip: string, now: number) {
  const hits = (recentByIp.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT.windowMs
  );
  if (hits.length >= RATE_LIMIT.max) return true;
  hits.push(now);
  recentByIp.set(ip, hits);
  return false;
}

function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0].trim() || request.headers.get("x-real-ip") || "unknown";
}

/* --------------------------------------------------------------------------
   Handler
   -------------------------------------------------------------------------- */

const trim = (value: unknown, max = 4000) =>
  typeof value === "string" ? value.trim().slice(0, max) : undefined;

export async function POST(request: Request) {
  const now = Date.now();
  prune(now);

  let raw: Partial<InquiryPayload>;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "We could not read that submission. Please try again." },
      { status: 400 }
    );
  }

  // Honeypot: hidden from real users, commonly filled by bots. Answer 200 so
  // the bot sees success and does not retry with a different strategy.
  if (trim(raw.companyWebsite)) {
    return NextResponse.json({ ok: true });
  }

  // Timing: instant submissions are automated; very old ones are replays.
  const age = typeof raw.renderedAt === "number" ? now - raw.renderedAt : null;
  if (age !== null && (age < MIN_FILL_MS || age > MAX_FORM_AGE_MS)) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "This form could not be submitted. Please reload the page and try again.",
      },
      { status: 400 }
    );
  }

  if (rateLimited(clientIp(request), now)) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Several inquiries have already been submitted from this connection. Please try again later.",
      },
      { status: 429 }
    );
  }

  // De-duplicate retries of the same submission.
  const submissionId = trim(raw.submissionId, 100);
  if (submissionId && seenSubmissions.has(submissionId)) {
    return NextResponse.json({ ok: true, duplicate: true });
  }

  const inquiry: InquiryPayload = {
    firstName: trim(raw.firstName, 80) ?? "",
    lastName: trim(raw.lastName, 80) ?? "",
    email: trim(raw.email, 254) ?? "",
    organization: trim(raw.organization, 160) ?? "",
    interest: trim(raw.interest, 80) ?? "",
    description: trim(raw.description, 4000) ?? "",
    consent: raw.consent === true,
    phone: trim(raw.phone, 40),
    website: trim(raw.website, 200),
    organizationType: trim(raw.organizationType, 120),
    timeline: trim(raw.timeline, 120),
    contactMethod: trim(raw.contactMethod, 40),
    referralSource: trim(raw.referralSource, 120),
    budget: trim(raw.budget, 60),
  };

  const errors = validateInquiry(inquiry);
  if (!isValid(errors)) {
    return NextResponse.json(
      { ok: false, errors, message: "Please review the highlighted fields." },
      { status: 422 }
    );
  }

  const result = await deliverInquiry(inquiry);

  if (!result.ok) {
    // Log the outcome only — never the inquiry contents.
    console.error(
      `[inquiry] delivery ${result.reason} (interest: ${inquiry.interest})`
    );

    return NextResponse.json(
      {
        ok: false,
        message:
          result.reason === "unconfigured"
            ? "The inquiry form is not connected yet. Please email us directly and we will pick the conversation up from there."
            : "We could not deliver your inquiry just now. Please try again, or email us directly.",
      },
      { status: 503 }
    );
  }

  if (submissionId) seenSubmissions.set(submissionId, now);
  console.info(`[inquiry] delivered via ${result.transport} (interest: ${inquiry.interest})`);

  return NextResponse.json({ ok: true });
}
