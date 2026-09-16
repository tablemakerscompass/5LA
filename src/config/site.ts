/**
 * Global site configuration and brand language.
 *
 * NOTE FOR EDITORS:
 * - Values marked `PLACEHOLDER` must be replaced with real information before launch.
 * - Do not invent addresses, phone numbers, emails, or social handles — leave the
 *   placeholders until the real values are provided.
 */

export const site = {
  legalName: "The 5 Loaves Agency, LLC",
  name: "The 5 Loaves Agency",
  shortName: "5LA",
  descriptor: "Business · Hospitality · Events",

  /** Canonical production URL. Update if the domain changes. */
  url: "https://www.the5loavesagency.com",

  /** Primary positioning language — use sparingly across the site. */
  brand: {
    primaryStatement: "We Build the Experience Behind the Brand.",
    supportingStatement:
      "The 5 Loaves Agency helps organizations strengthen operations, develop people, implement technology, and create stories and experiences that leave a lasting impact.",
    principle:
      "Every exceptional customer, employee, digital, live, and audience experience is shaped by the systems, people, technology, and stories behind it.",
    belief:
      "Experience is not one department. It is the result of everything working together.",
    footerStatement:
      "The 5 Loaves Agency designs the systems, people, technology, and stories behind meaningful experiences.",
    metaDescription:
      "The 5 Loaves Agency is a multidisciplinary experience company that designs the systems, people, technology, and stories behind meaningful experiences across business, technology, training, and media.",
  },

  /**
   * Contact details — the approved business email and phone. No address or
   * service area is published; contact is by email and phone only.
   *
   * Two addresses, because they are read by people in different situations.
   * `inquiries` is what the site publishes to someone deciding whether to get
   * in touch. `email` is the business address of record, and is what the legal
   * documents cite for a formal notice, a privacy request, or an accessibility
   * report — those should reach the business itself rather than a channel
   * named for new work. Both are delivered to the same mailbox.
   */
  contact: {
    email: "admin@the5loavesagency.com",
    /** Published wherever the site invites someone to make contact. */
    inquiries: "inquiries@the5loavesagency.com",
    phone: "470-252-8258",
    /** E.164 form used for `tel:` links. */
    phoneHref: "+14702528258",
  },

  /**
   * Scheduling. The free 30-minute discovery call, booked directly.
   *
   * Deliberately NOT in the navigation or used as a standalone page CTA: the
   * Work With Us form stays the primary route so a call starts with the
   * business name, service area, and described challenge already in hand.
   * It belongs only where someone has already told us something (the inquiry
   * confirmation and its auto-reply) or has said they would rather talk first
   * (the quiet link beneath "Not Sure Which One Fits?").
   */
  booking: {
    discoveryCall: "https://calendly.com/the5loavesagency/discovery-call",
    discoveryCallLabel: "Book a Discovery Call",
  },

  /** Approved social profiles. LinkedIn is the founder's personal profile. */
  social: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/armentha-tubbs-a1053137a",
    },
    { label: "Instagram", href: "https://www.instagram.com/the5loavesagency" },
    { label: "TikTok", href: "https://www.tiktok.com/@the5loavesagency" },
  ],
} as const;

export type SiteConfig = typeof site;
