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
   * Official brand logo. Only VelaXity has one today; every other brand
   * falls back to a text-based editorial treatment. When a final logo
   * arrives, add it to `public/brand/` and reference it here — nothing else
   * needs to change. Never substitute an invented mark.
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


  /* ---- Ecosystem portfolio fields (Our Companies overview) ---- */
  /** What kind of thing this is — division, platform, initiative, property. */
  brandType?: string;
  /** One-line positioning statement. */
  positioning?: string;
  /** Approved overview copy, one string per paragraph. */
  overview?: string[];
  /** Who the brand primarily serves. */
  audience?: string[];
  /** How 5LA supports the brand. */
  connection?: string;
  /** Sector slug this brand leads with. */
  primarySector?: string;
  /** Sector slugs that support it. */
  supportingSectors?: string[];
  /**
   * Accent key for the brand's editorial treatment. Maps to tokens already
   * in the design system — no new brand colors are introduced.
   */
  accent?: "burgundy" | "green" | "gold" | "maroon";
};

export const companies: Company[] = [
  {
    name: "The Georgia B. Media Group",
    slug: "georgia-b-media-group",
    category: "Media · Publishing · Productions",
    description:
      "The media, publishing, production, and storytelling division of The 5 Loaves Agency.",
    featured: true,
    brandType: "Media and production division",
    positioning:
      "Stories, productions, and original properties created with purpose, culture, and legacy.",
    overview: [
      "The Georgia B. Media Group is the publishing, production, media, and original-storytelling division within The 5 Loaves Agency.",
      "It provides the creative and organizational home for literary projects, theatrical productions, digital content, live experiences, film development, and future original properties.",
    ],
    audience: [
      "Readers",
      "Theater audiences",
      "Creative partners",
      "Authors",
      "Playwrights",
      "Producers",
      "Cultural organizations",
      "Community partners",
    ],
    connection:
      "5LA provides the strategy, operations, technology, training, experience development, and business infrastructure supporting the media group and its properties.",
    primarySector: "media",
    supportingSectors: ["business", "technology", "training"],
    accent: "burgundy",
  hasOwnPage: true,
  },
  {
    name: "VelaXity",
    slug: "velaxity",
    category: "Artificial Intelligence · Leadership · Operations",
    description:
      "An AI-powered executive operating system designed to support leadership, culture, performance, standards, and growth.",
    logo: "/brand/velaxity-logo.png",
    dark: true,
    featured: true,
    hasOwnPage: true,
    brandType: "AI-powered executive technology platform",
    positioning:
      "An AI-powered executive operating system built around people, performance, standards, culture, and organizational growth.",
    overview: [
      "VelaXity is a technology platform designed to help leaders access organizational intelligence, manage priorities, support teams, strengthen standards, and make better-informed decisions from one connected executive environment.",
      "It brings together operational insight, leadership support, culture, learning, performance, standards, portfolio visibility, and AI-powered assistance.",
    ],
    audience: [
      "Executives",
      "Business owners",
      "Hospitality leaders",
      "Organizational leaders",
      "Multi-location operators",
      "Leadership teams",
      "Experience-driven organizations",
    ],
    connection:
      "VelaXity was developed from 5LA’s hands-on experience in operations, hospitality, workforce development, leadership, culture, and organizational systems.",
    primarySector: "technology",
    supportingSectors: ["business", "training"],
    accent: "gold",
  },
  {
    name: "The 5LA Academy",
    slug: "5la-academy",
    category: "Hospitality · Leadership · Workforce Development",
    description:
      "Training experiences that equip professionals and organizations to lead, serve, and operate with excellence.",
    featured: true,
    hasOwnPage: true,
    brandType: "Training and workforce-development division",
    positioning:
      "Training experiences that equip people to lead, serve, and operate with excellence.",
    overview: [
      "The 5LA Academy delivers hospitality, leadership, manager-development, workforce-development, service, and culture-building experiences grounded in real operations and the LOAVES framework.",
      "Programs may include organizational training, live workshops, digital learning, leadership development, customized learning experiences, and professional resources.",
    ],
    audience: [
      "Hospitality organizations",
      "Small businesses",
      "Managers",
      "Supervisors",
      "Frontline professionals",
      "Leadership teams",
      "Experience-driven organizations",
      "Workforce-development partners",
    ],
    connection:
      "The Academy transforms 5LA’s operational, hospitality, leadership, culture, and workforce-development expertise into practical learning experiences.",
    primarySector: "training",
    supportingSectors: ["business", "technology"],
    accent: "burgundy",
  },
  {
    name: "The Georgia B. Society",
    slug: "georgia-b-society",
    category: "Legacy · Community · Culture",
    description:
      "A legacy-centered initiative preserving stories, creating meaningful gatherings, and supporting community impact.",
    brandType: "Legacy and community initiative",
    positioning:
      "Preserving stories, honoring legacy, and creating meaningful community experiences.",
    overview: [
      "The Georgia B. Society is a legacy-centered cultural and community initiative inspired by the values of family, care, storytelling, hospitality, and service.",
      "It creates space for gatherings, conversations, community programs, legacy preservation, and future initiatives honoring the people and stories shaping families and communities.",
    ],
    audience: [
      "Women",
      "Families",
      "Community organizations",
      "Legacy-focused groups",
      "Cultural partners",
      "Storytellers",
      "Community leaders",
    ],
    connection:
      "The Society is supported through 5LA’s media, event, training, community-experience, storytelling, and operational capabilities.",
    primarySector: "media",
    supportingSectors: ["business", "training"],
    accent: "green",
  hasOwnPage: true,
  },
  {
    name: "Aunt Sarah’s Girls",
    slug: "aunt-sarahs-girls",
    category: "Literary · Theatrical · Healing",
    description:
      "A storytelling and healing platform exploring truth, womanhood, family, survival, and legacy.",
    hasOwnPage: true,
    brandType: "Original literary, theatrical, and healing-centered property",
    positioning:
      "A storytelling and healing platform exploring truth, womanhood, family, survival, and legacy.",
    overview: [
      "Aunt Sarah’s Girls is an original literary, theatrical, and community-centered property developed around the lives, truths, relationships, survival, and generational experiences of women.",
      "The ecosystem includes the novel, stage production, visual storytelling, healing-centered conversations, companion resources, future adaptations, and community experiences.",
    ],
    audience: [
      "Women",
      "Readers",
      "Theater audiences",
      "Book clubs",
      "Families",
      "Women-focused organizations",
      "Community partners",
      "Cultural organizations",
    ],
    connection:
      "Aunt Sarah’s Girls is developed within The Georgia B. Media Group and supported by 5LA’s media, business, technology, training, event, and experience-development capabilities.",
    primarySector: "media",
    supportingSectors: ["business", "technology", "training"],
    accent: "maroon",
  },
  {
    name: "The Sarah Method",
    slug: "the-sarah-method",
    category: "Truth · Healing · Purpose",
    description:
      "A guided reflection and healing experience developed from the world and mission of Aunt Sarah’s Girls.",
    hasOwnPage: true,
    brandType: "Digital reflection and healing platform",
    positioning:
      "A guided reflection experience helping women explore what has been sitting heavy on their hearts.",
    overview: [
      "The Sarah Method is a digital reflection and healing platform developed from the themes, voice, and mission of Aunt Sarah’s Girls.",
      "It creates a welcoming space for women to pause, reflect, communicate, examine personal truths, and move toward healing, identity, and purpose.",
    ],
    audience: [
      "Women seeking guided reflection",
      "Readers of Aunt Sarah’s Girls",
      "Women-focused communities",
      "Faith-centered audiences",
      "Personal-development audiences",
      "Community partners",
    ],
    connection:
      "The Sarah Method is supported by 5LA’s technology, media, training, content-development, and user-experience capabilities.",
    primarySector: "media",
    supportingSectors: ["technology", "training"],
    accent: "maroon",
  },
  {
    name: "Tablemakers",
    slug: "tablemakers",
    category: "Community · Thought Leadership · Professional Development",
    description:
      "A professional community and resource platform for those building stronger teams, cultures, and guest experiences.",
    hasOwnPage: true,
    brandType: "Professional community and thought-leadership platform",
    positioning:
      "A community for the people building stronger teams, cultures, businesses, and experiences.",
    overview: [
      "Tablemakers brings together leaders, professionals, founders, hospitality practitioners, and experience builders responsible for creating environments where people, service, culture, and excellence can thrive.",
      "The brand may include the Tablemakers Collective, The Tablemakers Compass, professional resources, conversations, events, and future development experiences.",
    ],
    audience: [
      "Hospitality professionals",
      "Managers",
      "Founders",
      "Operations leaders",
      "Community builders",
      "Experience professionals",
      "Emerging leaders",
      "Culture builders",
    ],
    connection:
      "Tablemakers extends 5LA’s thought leadership, training, community, hospitality, and professional-development mission.",
    primarySector: "training",
    supportingSectors: ["business", "media"],
    accent: "green",
  },
];

export const getCompany = (slug: string) =>
  companies.find((c) => c.slug === slug);
