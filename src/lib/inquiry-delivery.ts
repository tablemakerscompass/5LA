/**
 * Delivery for Work With Us inquiries.
 *
 * Two transports, chosen by environment variable. Nothing is stored in the
 * repository, rendered publicly, or written to the browser console, and full
 * inquiry contents are never written to the server log either — only an id,
 * the selected interest, and the outcome.
 *
 * Configure ONE of the following:
 *
 *   Email (SMTP — Zoho, or any mailbox provider)
 *     SMTP_USER           required — the full mailbox address
 *     SMTP_PASSWORD       required — an app password, never the login password
 *     SMTP_HOST           optional — defaults to smtp.zoho.com
 *     SMTP_PORT           optional — defaults to 465 (implicit TLS)
 *     SMTP_FROM_EMAIL     optional — the address to send AS. Must exist at the
 *                         provider as a mailbox or a verified alias of
 *                         SMTP_USER. An unverified one is refused, so delivery
 *                         falls back to SMTP_USER rather than failing.
 *     INQUIRY_TO_EMAIL    optional — defaults to the site contact address
 *     (INQUIRY_FROM_EMAIL is Resend-only and is ignored here)
 *
 *   Email (Resend)
 *     RESEND_API_KEY      required — https://resend.com API key
 *     INQUIRY_FROM_EMAIL  required — an address on a domain verified in Resend
 *     INQUIRY_TO_EMAIL    optional — defaults to the site contact address
 *
 *   Before a domain is verified, Resend's sandbox sends only from
 *   onboarding@resend.dev and only to the address the account was registered
 *   with. That combination works for a real inbox but reaches no one else.
 *
 *   Webhook (Zapier, Make, n8n, or your own endpoint)
 *     INQUIRY_WEBHOOK_URL     required — receives the inquiry as JSON
 *     INQUIRY_WEBHOOK_SECRET  optional — sent as the X-5LA-Signature header
 *
 * With neither configured the route reports the form as not yet connected
 * rather than silently accepting and dropping a real inquiry.
 */

import { interestLabel } from "@/config/inquiry";
import { site } from "@/config/site";
import type { InquiryPayload } from "./inquiry";

type Transport = "smtp" | "resend" | "webhook";

export type DeliveryResult =
  | { ok: true; transport: Transport }
  | { ok: false; reason: "unconfigured" | "failed" };

const RESEND_ENDPOINT = "https://api.resend.com/emails";

/** Which transport is configured, if any. SMTP wins when both are present. */
export function configuredTransport(): Transport | null {
  if (process.env.SMTP_USER && process.env.SMTP_PASSWORD) return "smtp";
  if (process.env.RESEND_API_KEY && process.env.INQUIRY_FROM_EMAIL) return "resend";
  if (process.env.INQUIRY_WEBHOOK_URL) return "webhook";
  return null;
}

/**
 * Replace anything address-shaped so a provider's rejection text can be logged
 * without carrying an address out of the request with it.
 */
const redactAddresses = (value: string) =>
  value.replace(/[^\s<>(),;"]+@[^\s<>(),;"]+/g, "[address]");

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Ordered label/value rows for the notification body. */
function rows(inquiry: InquiryPayload): [string, string][] {
  const optional: [string, string | undefined][] = [
    ["Phone", inquiry.phone],
    ["Website", inquiry.website],
    ["Organization type", inquiry.organizationType],
    ["Timeline", inquiry.timeline],
    ["Investment range", inquiry.budget],
    ["Preferred contact", inquiry.contactMethod],
    ["Heard about 5LA via", inquiry.referralSource],
  ];

  return [
    ["Name", `${inquiry.firstName} ${inquiry.lastName}`],
    ["Email", inquiry.email],
    ["Organization", inquiry.organization],
    ["Area of interest", interestLabel(inquiry.interest)],
    ...optional.filter((r): r is [string, string] => Boolean(r[1])),
    ["What they are building", inquiry.description],
  ];
}

function textBody(inquiry: InquiryPayload) {
  return rows(inquiry)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n\n");
}

function htmlBody(inquiry: InquiryPayload) {
  const cells = rows(inquiry)
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:6px 16px 6px 0;vertical-align:top;white-space:nowrap;color:#574f49;font-weight:600;">${escapeHtml(
          label
        )}</th><td style="padding:6px 0;color:#171514;white-space:pre-wrap;">${escapeHtml(
          value
        )}</td></tr>`
    )
    .join("");

  return `<div style="font-family:system-ui,-apple-system,'Segoe UI',sans-serif;font-size:15px;line-height:1.6;">
<p style="margin:0 0 16px;font-weight:600;">New Work With Us inquiry</p>
<table cellpadding="0" cellspacing="0">${cells}</table>
</div>`;
}

/**
 * Send through the mailbox provider's own SMTP server. Preferred over an API
 * transport when the domain already has a mailbox: the notification arrives
 * from a real address on the domain, with no separate sending service to
 * verify. The credential must be an app password — providers reject the
 * account login password for SMTP once MFA is on.
 */
async function deliverViaSmtp(inquiry: InquiryPayload): Promise<DeliveryResult> {
  const to = process.env.INQUIRY_TO_EMAIL || site.contact.inquiries;
  if (!to) return { ok: false, reason: "unconfigured" };

  const port = Number(process.env.SMTP_PORT ?? 465);
  const nodemailer = (await import("nodemailer")).default;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.zoho.com",
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER as string,
      pass: process.env.SMTP_PASSWORD as string,
    },
  });

  /**
   * The mailbox we authenticated as. A provider will always relay for this
   * one, which makes it the safe sender of last resort.
   */
  const authenticated = process.env.SMTP_USER as string;

  /**
   * Send as SMTP_FROM_EMAIL when it is set — an address like inquiries@ reads
   * better on a notification than a personal mailbox. It has to exist at the
   * provider as a real mailbox or an alias verified against the authenticated
   * account; anything else is refused.
   */
  const preferred = process.env.SMTP_FROM_EMAIL?.trim() || authenticated;

  const send = (from: string) =>
    transporter.sendMail({
      from,
      to,
      replyTo: inquiry.email,
      subject: `Inquiry — ${interestLabel(inquiry.interest)} — ${inquiry.organization}`,
      text: textBody(inquiry),
      html: htmlBody(inquiry),
    });

  try {
    await send(preferred);
  } catch (error) {
    /*
     * An unverified sender is refused outright — "553 Sender is not allowed to
     * relay emails" — and that once took this form down for every visitor
     * while the credentials were perfectly valid. A preferred sender is a
     * presentational choice, so it must never cost us the inquiry: fall back
     * to the mailbox we authenticated as, which the provider always accepts.
     * Retrying on any failure rather than on a matched error string is
     * deliberate — a refusal we failed to pattern-match would put us straight
     * back into that outage, and a second attempt costs far less than a lost
     * lead.
     */
    if (preferred === authenticated) throw error;
    console.warn(
      `[inquiry] smtp refused "${preferred}" as sender; retrying as the authenticated mailbox`
    );
    await send(authenticated);
  }

  return { ok: true, transport: "smtp" };
}

async function deliverViaResend(inquiry: InquiryPayload): Promise<DeliveryResult> {
  const to = process.env.INQUIRY_TO_EMAIL || site.contact.inquiries;
  if (!to) return { ok: false, reason: "unconfigured" };

  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.INQUIRY_FROM_EMAIL,
      to: [to],
      reply_to: inquiry.email,
      subject: `Inquiry — ${interestLabel(inquiry.interest)} — ${inquiry.organization}`,
      text: textBody(inquiry),
      html: htmlBody(inquiry),
    }),
  });

  if (res.ok) return { ok: true, transport: "resend" };

  // Log why Resend refused — its own error name and message, never the
  // inquiry contents. Without this the cause is invisible in production.
  let detail = "";
  try {
    const body = (await res.json()) as { name?: string; message?: string };
    detail = [body.name, body.message].filter(Boolean).join(" — ").slice(0, 300);
  } catch {
    // Non-JSON error body; the status code alone still tells us something.
  }
  console.error(`[inquiry] resend refused ${res.status}${detail ? `: ${detail}` : ""}`);

  return { ok: false, reason: "failed" };
}

async function deliverViaWebhook(inquiry: InquiryPayload): Promise<DeliveryResult> {
  const url = process.env.INQUIRY_WEBHOOK_URL as string;
  const secret = process.env.INQUIRY_WEBHOOK_SECRET;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(secret ? { "X-5LA-Signature": secret } : {}),
    },
    body: JSON.stringify({
      receivedAt: new Date().toISOString(),
      interestLabel: interestLabel(inquiry.interest),
      inquiry,
    }),
  });

  return res.ok ? { ok: true, transport: "webhook" } : { ok: false, reason: "failed" };
}

/** Deliver an inquiry using whichever transport is configured. */
export async function deliverInquiry(
  inquiry: InquiryPayload
): Promise<DeliveryResult> {
  const transport = configuredTransport();
  if (!transport) return { ok: false, reason: "unconfigured" };

  try {
    if (transport === "smtp") return await deliverViaSmtp(inquiry);
    if (transport === "resend") return await deliverViaResend(inquiry);
    return await deliverViaWebhook(inquiry);
  } catch (error) {
    // Log the error type and any transport code (EAUTH, ECONNECTION, …), plus
    // the provider's own rejection reason, which is the only thing that says
    // WHY a send failed — a bare code cannot distinguish a spam refusal from a
    // policy one. Addresses are stripped first: the reason must never echo
    // anything from the request, and the inquirer's address rides along as the
    // Reply-To header.
    const name = error instanceof Error ? error.name : "unknown error";
    const detail = (key: string) =>
      typeof error === "object" && error !== null && key in error
        ? String((error as Record<string, unknown>)[key] ?? "")
        : "";

    const code = detail("code");
    const status = detail("responseCode");
    const reason = redactAddresses(detail("response")).slice(0, 300);

    console.error(
      `[inquiry] ${transport} threw ${name}` +
        `${code ? ` (${code})` : ""}` +
        `${status ? ` status ${status}` : ""}` +
        `${reason ? ` — ${reason}` : ""}`
    );
    return { ok: false, reason: "failed" };
  }
}
