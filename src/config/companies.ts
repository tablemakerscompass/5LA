/**
 * Companies, platforms, and intellectual-property brands within the 5LA ecosystem.
 * Single source of truth — consumed by navigation and the Our Companies pages.
 *
 * Descriptions are approved short copy; full profiles are built in a later phase.
 * Do not invent logos for brands without approved logo files.
 */

export type Company = {
  name: string;
  slug: string;
  /** Ecosystem category label. */
  category: string;
  /** Approved short description. */
  description: string;
  /**
   * PLACEHOLDER logo path — replace with final brand logo when available.
   * Cards fall back to a monogram-style initial treatment when absent.
   */
  logo?: string;
  /** Whether the brand card is best presented on a dark surface. */
  dark?: boolean;
  /** Feature this brand more prominently on the homepage ecosystem grid. */
  featured?: boolean;
  /**
   * True once the brand has its own hand-built route under /our-companies.
   * Those slugs are excluded from the shared [slug] placeholder page so a
   * single URL is never generated twice.
   */
  hasOwnPage?: boolean;
};

export const companies: Company[] = [
  {
    name: "The Georgia B. Media Group",
    slug: "georgia-b-media-group",
    category: "Media · Publishing · Productions",
    description:
      "The media, publishing, production, and storytelling division of The 5 Loaves Agency.",
    featured: true,
  },
  {
    name: "VelaXity",
    slug: "velaxity",
    category: "Artificial Intelligence · Leadership · Operations",
    description:
      "An AI-powered executive operating system designed to support leadership, culture, performance, standards, and growth.",
    dark: true,
    featured: true,
    hasOwnPage: true,
  },
  {
    name: "The 5LA Academy",
    slug: "5la-academy",
    category: "Hospitality · Leadership · Workforce Development",
    description:
      "Training experiences that equip professionals and organizations to lead, serve, and operate with excellence.",
    featured: true,
  },
  {
    name: "The Georgia B. Society",
    slug: "georgia-b-society",
    category: "Legacy · Community · Culture",
    description:
      "A legacy-centered initiative preserving stories, creating meaningful gatherings, and supporting community impact.",
  },
  {
    name: "Aunt Sarah’s Girls",
    slug: "aunt-sarahs-girls",
    category: "Literary · Theatrical · Healing",
    description:
      "A storytelling and healing platform exploring truth, womanhood, family, survival, and legacy.",
    hasOwnPage: true,
  },
  {
    name: "The Sarah Method",
    slug: "the-sarah-method",
    category: "Truth · Healing · Purpose",
    description:
      "A guided reflection and healing experience developed from the world and mission of Aunt Sarah’s Girls.",
    hasOwnPage: true,
  },
  {
    name: "Tablemakers",
    slug: "tablemakers",
    category: "Community · Thought Leadership · Professional Development",
    description:
      "A professional community and resource platform for those building stronger teams, cultures, and guest experiences.",
  },
];

export const getCompany = (slug: string) =>
  companies.find((c) => c.slug === slug);
