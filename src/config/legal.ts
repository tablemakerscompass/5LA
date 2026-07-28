/**
 * Shared configuration for the legal and accessibility pages.
 *
 * IMPORTANT — these documents are website templates prepared from an audit of
 * what this website actually does. They are NOT legal advice and must be
 * reviewed by a licensed attorney before publication. Clauses that especially
 * need that review are marked with `attorneyReview` notes in the page content.
 *
 * EDITOR NOTES
 * - `effectiveDate` / `lastUpdated` are the dates shown on all three pages.
 *   Update `lastUpdated` whenever the wording changes; update `effectiveDate`
 *   only when the terms themselves change.
 * - `mailingAddress` is intentionally empty. No address has been supplied, and
 *   nothing is invented here — the contact blocks omit the line entirely while
 *   it is blank. Fill it in only with a real address 5LA is willing to publish.
 */

import { site } from "./site";

export const legal = {
  /** Date the current version of these documents takes effect (ISO). */
  effectiveDate: "2026-07-28",
  /** Date the wording was last revised (ISO). */
  lastUpdated: "2026-07-28",

  /** State of formation. */
  jurisdiction: "Georgia",
  jurisdictionLong: "State of Georgia, United States",

  contact: {
    entity: site.legalName,
    /** Approved business address for legal, privacy, and accessibility mail. */
    email: site.contact.email,
    phone: site.contact.phone,
    phoneHref: site.contact.phoneHref,
    /** PLACEHOLDER — no mailing address supplied. Left blank deliberately. */
    mailingAddress: "",
  },

  /** Standing notice shown at the top of the two legal documents. */
  reviewNotice:
    "This document is provided for general informational purposes and is not legal advice. It should be reviewed by a licensed attorney before it is relied upon.",
} as const;

/** "July 28, 2026" — formatted deterministically so SSR and the client match. */
export function formatLegalDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${months[month - 1]} ${day}, ${year}`;
}
