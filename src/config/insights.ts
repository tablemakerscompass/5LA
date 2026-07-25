/**
 * Insights preview data.
 *
 * PLACEHOLDER content — these are NOT real published articles. They exist so the
 * homepage Insights section has a realistic shape and can later be swapped for a
 * CMS/blog source. Each entry is clearly marked `placeholder: true`; no article
 * bodies, dates, or authors are fabricated.
 */

export type Insight = {
  category: string;
  title: string;
  href: string;
  placeholder: boolean;
};

export const insights: Insight[] = [
  {
    category: "Leadership",
    title: "What it means to build the experience behind the brand.",
    href: "/insights",
    placeholder: true,
  },
  {
    category: "Hospitality",
    title: "Service standards as an operating system, not a rulebook.",
    href: "/insights",
    placeholder: true,
  },
  {
    category: "Technology",
    title: "Making technology human: intelligence that supports people.",
    href: "/insights",
    placeholder: true,
  },
];
