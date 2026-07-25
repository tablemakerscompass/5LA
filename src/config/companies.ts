/**
 * Companies, platforms, and intellectual-property brands within the 5LA ecosystem.
 * Single source of truth — consumed by navigation and the Our Companies pages.
 *
 * NOTE: Descriptions are concise PLACEHOLDERS written to be easily replaced.
 * Do not treat them as final marketing copy.
 */

export type Company = {
  name: string;
  slug: string;
  /** Ecosystem category label. */
  category: string;
  /** Concise placeholder description — replace with final copy. */
  description: string;
  /**
   * PLACEHOLDER logo path — replace with final brand logo when available.
   * Cards fall back to a monogram-style initial treatment when absent.
   */
  logo?: string;
  /** Whether the brand card is best presented on a dark surface. */
  dark?: boolean;
};

export const companies: Company[] = [
  {
    name: "The Georgia B. Media Group",
    slug: "georgia-b-media-group",
    category: "Media",
    description:
      "A media group within the 5LA ecosystem. Full description to be provided.",
  },
  {
    name: "The Georgia B. Society",
    slug: "georgia-b-society",
    category: "Community & Membership",
    description:
      "A society and membership initiative within the 5LA ecosystem. Full description to be provided.",
  },
  {
    name: "Aunt Sarah's Girls",
    slug: "aunt-sarahs-girls",
    category: "Media & Storytelling",
    description:
      "An original intellectual-property and storytelling brand. Full description to be provided.",
  },
  {
    name: "The Sarah Method",
    slug: "the-sarah-method",
    category: "Training & Methodology",
    description:
      "A training methodology within the 5LA ecosystem. Full description to be provided.",
  },
  {
    name: "VelaXity",
    slug: "velaxity",
    category: "Technology",
    description:
      "A technology platform within the 5LA ecosystem. Full description to be provided.",
    dark: true,
  },
  {
    name: "The 5LA Academy",
    slug: "5la-academy",
    category: "Training & Education",
    description:
      "The training and education arm of The 5 Loaves Agency. Full description to be provided.",
  },
  {
    name: "Tablemakers",
    slug: "tablemakers",
    category: "Business & Experience",
    description:
      "A business and experience initiative within the 5LA ecosystem. Full description to be provided.",
  },
];

export const getCompany = (slug: string) =>
  companies.find((c) => c.slug === slug);
