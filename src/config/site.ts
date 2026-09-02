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
   */
  contact: {
    email: "admin@the5loavesagency.com",
    phone: "470-252-8258",
    /** E.164 form used for `tel:` links. */
    phoneHref: "+14702528258",
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
