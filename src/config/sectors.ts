/**
 * The four connected Experience Sectors of The 5 Loaves Agency.
 * Single source of truth — consumed by navigation, sector pages, and cards.
 */

export type Sector = {
  /** Display name. */
  name: string;
  /** Short label used in compact navigation. */
  shortName: string;
  /** URL slug (route: /experience-sectors/[slug]). */
  slug: string;
  /** One-line positioning statement. */
  statement: string;
  /** Fuller description of what the sector covers. */
  summary: string;
  /** Sequential display number. */
  number: string;
  /**
   * Accent theme key mapped to design tokens (see globals.css).
   * Each sector leans on the shared palette with a distinct accent.
   */
  accent: "burgundy" | "gold" | "green" | "ink";
  /**
   * PLACEHOLDER image path — replace with final editorial photography.
   * Files are not yet present; cards fall back to a tasteful editorial panel.
   */
  image?: string;
};

export const sectors: Sector[] = [
  {
    name: "Business Experience",
    shortName: "Business",
    slug: "business",
    statement:
      "We build the operational foundation behind exceptional organizations.",
    summary:
      "Business operations, organizational development, hospitality strategy, HR systems, service standards, project implementation, and event management.",
    number: "01",
    accent: "burgundy",
    image: undefined, // PLACEHOLDER — /brand/sectors/business.jpg
  },
  {
    name: "Technology Experience",
    shortName: "Technology",
    slug: "technology",
    statement: "We make technology useful, intelligent, and human.",
    summary:
      "AI strategy, workflow automation, digital systems, executive technology, application development, and VelaXity.",
    number: "02",
    accent: "ink",
    image: undefined, // PLACEHOLDER — /brand/sectors/technology.jpg
  },
  {
    name: "Training Experience",
    shortName: "Training",
    slug: "training",
    statement:
      "We develop the people responsible for delivering the promise.",
    summary:
      "Leadership development, hospitality training, team workshops, manager development, the LOAVES framework, and the 5LA Academy.",
    number: "03",
    accent: "green",
    image: undefined, // PLACEHOLDER — /brand/sectors/training.jpg
  },
  {
    name: "Media Experience",
    shortName: "Media",
    slug: "media",
    statement: "We create stories and experiences that live beyond the moment.",
    summary:
      "Publishing, theater, original content, live experiences, brand storytelling, The Georgia B. Media Group, and Aunt Sarah’s Girls.",
    number: "04",
    accent: "gold",
    image: undefined, // PLACEHOLDER — /brand/sectors/media.jpg
  },
];

export const getSector = (slug: string) =>
  sectors.find((s) => s.slug === slug);
