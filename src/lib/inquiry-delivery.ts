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

export type DeliveryResult =
  | { ok: true; transport: "resend" | "webhook" }
  | { ok: false; reason: "unconfigured" | "failed" };

const RESEND_ENDPOINT = "https://api.resend.com/emails";

/** Which transport is configured, if any. */
export function configuredTransport(): "resend" | "webhook" | null {
  if (process.env.RESEND_API_KEY && process.env.INQUIRY_FROM_EMAIL) return "resend";
  if (process.env.INQUIRY_WEBHOOK_URL) return "webhook";
  return null;
}

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

async function deliverViaResend(inquiry: InquiryPayload): Promise<DeliveryResult> {
  const to = process.env.INQUIRY_TO_EMAIL || site.contact.email;
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

  return res.ok ? { ok: true, transport: "resend" } : { ok: false, reason: "failed" };
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
    return transport === "resend"
      ? await deliverViaResend(inquiry)
      : await deliverViaWebhook(inquiry);
  } catch {
    // Intentionally swallow the error object: it can echo request contents.
    return { ok: false, reason: "failed" };
  }
}
