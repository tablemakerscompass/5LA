/**
 * AUNT SARAH'S GIRLS — brand data.
 *
 * Original literary, theatrical, and healing-centered property developed within
 * The Georgia B. Media Group and supported by The 5 Loaves Agency, LLC.
 *
 * NOTE FOR EDITORS:
 * - Nothing in this file may be presented as launched, scheduled, or for sale
 *   until an approved link/date has been supplied. Use the `status` field.
 * - Character descriptions, quotes, and portraits are intentionally EMPTY until
 *   approved copy and approved artwork are provided. Do not invent biographies,
 *   secrets, relationships, ages, or plot outcomes.
 * - Do not add publication dates, ISBNs, ticket links, venues, performance
 *   dates, reviews, awards, or sales figures.
 */

/** Availability language used across the page. Never imply more than this. */
export type AsgStatus = "available" | "in-development" | "planned" | "future";

export const statusLabel: Record<AsgStatus, string> = {
  available: "Available now",
  "in-development": "In development",
  planned: "Planned",
  future: "Future possibility",
};

export const asgBrand = {
  name: "Aunt Sarah’s Girls",
  slug: "aunt-sarahs-girls",
  path: "/our-companies/aunt-sarahs-girls",
  category: "Literary · Theatrical · Healing",
  type: "Original literary, theatrical, and community-centered property",
  parent: "The 5 Loaves Agency, LLC",
  division: "The Georgia B. Media Group",
  primarySector: "Media Experience",
  supportingSectors: [
    "Business Experience",
    "Technology Experience",
    "Training Experience",
  ],
  positioning:
    "A storytelling and healing platform exploring truth, womanhood, family, survival, and legacy.",
  supporting:
    "Aunt Sarah’s Girls is an original literary and theatrical property centered on the lives, truths, relationships, secrets, survival, and generational experiences of women.",
  coreMessage:
    "Every woman carries a story. Some were buried to keep the family standing.",
  invitation:
    "Aunt Sarah’s Girls creates space for women to recognize themselves, confront difficult truths, consider what has been passed down, and begin conversations that families often avoid.",
  setting: "Fort Wayne, Indiana",
  metaTitle:
    "Aunt Sarah’s Girls | A Story of Truth, Womanhood, Family & Legacy",
  metaDescription:
    "Discover Aunt Sarah’s Girls, an original novel, stage production, and healing-centered storytelling property exploring family secrets, womanhood, survival, truth, and legacy.",
  /**
   * Present but not visually dominant. Required wherever the healing mission,
   * The Sarah Method, or facilitated experiences are described.
   */
  disclaimer:
    "Aunt Sarah’s Girls and its companion experiences are created for storytelling, reflection, education, and community conversation. They are not substitutes for licensed mental-health, medical, legal, or crisis services.",
} as const;

/* -------------------------------------------------------------------------
   APPROVED BRAND ASSETS
   ------------------------------------------------------------------------- */
/**
 * Every ASG asset slot on the page. All are currently EMPTY: no approved
 * Aunt Sarah’s Girls artwork has been supplied to the repository yet, so each
 * slot renders a clearly-labelled placeholder naming the asset required.
 *
 * FOR EDITORS: drop the approved file into /public/brand/asg/ and set the path
 * here. Do not substitute stock photography, and do not invent a logo, a book
 * cover, or character portraits.
 */
export const asgAssets: Record<string, string | undefined> = {
  /** Official ASG logo (horizontal or stacked lockup). */
  logo: undefined,
  /**
   * Hero: the approved key art — the family home at golden hour beneath the
   * women of the story, titled and dated. Shown whole; never cropped into.
   */
  hero: "/brand/asg/asg-key-art.jpg",
  /**
   * Story world: the house exterior at dusk, cropped out of the approved
   * artwork so that only the house shows — no title, tagline, or credit lines.
   */
  house: "/brand/asg/asg-house.jpg",
  /**
   * Cover artwork for “Aunt Sarah’s Girls: Legacy & Secrets” — the approved key
   * art, cropped to 2:3 with the “Coming 2027” and writing-credit bands removed.
   */
  bookCover: "/brand/asg/asg-book-cover.jpg",
  /**
   * Approved production photography from the theatrical work, cropped to 3:2.
   * Supplied at 640px wide — replace if a higher-resolution capture is found.
   */
  stage: "/brand/asg/asg-stage.jpg",
  /** Approved editorial portrait of Aunt Sarah, cropped to the frame's 3:4. */
  auntSarah: "/brand/asg/asg-aunt-sarah.jpg",
  /** Approved Sarah Method branding — the same logo the Sarah Method page uses. */
  sarahMethod: "/brand/sarah-method/sarah-method-logo.png",
  /** Social-sharing image for /our-companies/aunt-sarahs-girls. */
  ogImage: undefined,
};

/* -------------------------------------------------------------------------
   SECTION 3 — What the story explores
   ------------------------------------------------------------------------- */
export const asgThemes: { title: string; body: string }[] = [
  {
    title: "Family Secrets",
    body: "The truths hidden to preserve appearances, protect loved ones, or keep the family functioning.",
  },
  {
    title: "Womanhood",
    body: "The expectations, sacrifices, identities, and responsibilities women inherit and carry.",
  },
  {
    title: "Survival",
    body: "The ways women adapt, endure, protect, perform, and continue—even when healing has not yet happened.",
  },
  {
    title: "Communication",
    body: "What changes when women begin saying what was never allowed to be spoken.",
  },
  {
    title: "Healing",
    body: "The difficult work of recognizing what happened, what remains, and what must no longer be carried.",
  },
  {
    title: "Legacy",
    body: "What one generation leaves for the next—intentionally or unintentionally.",
  },
];

/** Reader themes surfaced in the novel section. */
export const novelThemes: string[] = [
  "Family secrets",
  "Generational patterns",
  "Womanhood",
  "Identity",
  "Betrayal",
  "Survival",
  "Faith",
  "Communication",
  "Healing",
  "Legacy",
];

/* -------------------------------------------------------------------------
   SECTION 5 — Stage production elements
   ------------------------------------------------------------------------- */
export const productionElements: string[] = [
  "Original stage play",
  "Ensemble of women",
  "Aunt Sarah’s home",
  "Intimate theatrical setting",
  "Character-driven storytelling",
  "Emotionally honest performances",
  "Audience reflection",
  "Post-show conversations",
  "Future revivals and adaptations",
];

/* -------------------------------------------------------------------------
   SECTION 6 — The women of Aunt Sarah's Girls
   ------------------------------------------------------------------------- */
/**
 * The gallery is deliberately anonymous. Only Aunt Sarah has been revealed;
 * every other card shows the cast portrait alone so readers can guess who is
 * who. Character names are NOT rendered — do not add one to a card until that
 * role has been publicly announced.
 */
export type AsgCastCard = {
  /** Stable key for the card. Never rendered — keep it free of role names. */
  id: string;
  /**
   * Approved portrait path. LEAVE UNDEFINED until the approved photograph is
   * dropped into /public/brand/asg/cast/ — the gallery renders an unlabelled
   * placeholder instead. Never alter approved faces, skin tones, hairstyles,
   * or clothing.
   */
  portrait?: string;
  /**
   * Alt text for the portrait. Keep it anonymous while the role is unrevealed:
   * describe the photograph, never the character.
   */
  portraitAlt?: string;
  /**
   * Approved cast credit, shown beneath the portrait in gold — e.g.
   * "Supreme Lioness as Aunt Sarah". Set ONLY once that casting has been
   * announced; leaving it undefined is what keeps the card a guessing game.
   */
  credit?: string;
  /**
   * Approved character description shown under the portrait. Written to stay
   * anonymous — it describes the woman, never names the role. A card without
   * one falls back to `asgCastTagline`.
   */
  description?: string;
};

/**
 * The fallback line, carried under any card that has no approved description
 * of its own.
 */
export const asgCastTagline =
  "Every woman has a secret. Some were buried to keep the family standing.";

/**
 * Cast gallery, in running order. Card 1 is the revealed Aunt Sarah portrait;
 * cards 2–9 are the cast photographs, which stay nameless on screen.
 *
 * The gallery lays out four across, so this array order IS the on-screen order:
 * slots 1–4 are the top row, 5–8 the second, and slot 9 wraps alone. The
 * cast-photo file numbers deliberately no longer run in sequence — Aunt Sarah
 * leads the gallery, and cast photos 1 and 5 were swapped by request — so read
 * the slot, not the filename. Each description belongs to the portrait it sits
 * with, so REORDERING THIS ARRAY MOVES COPY BETWEEN SLOTS; re-check every
 * pairing whenever the running order changes.
 *
 * The character each description was written for is recorded in a comment
 * above its card. Those names are supplied for editing only. They are NOT
 * rendered and NOT part of the data — comments never reach the browser — and
 * apart from the announced Aunt Sarah credit no name may appear on the page
 * until that role has been publicly revealed.
 */
export const asgCast: AsgCastCard[] = [
  /* ---- Top row on screen — slots 1–4 ---- */

  /* Slot 1 — Aunt Sarah (revealed) */
  {
    id: "aunt-sarah",
    portrait: "/brand/asg/asg-aunt-sarah.jpg",
    portraitAlt:
      "Cast portrait — a woman in a deep red gown, photographed in candlelight.",
    credit: "Supreme Lioness as Aunt Sarah",
    description:
      "She knows what was buried, what was protected, and what it cost to keep the family standing. Some women hold the house. She held the silence too.",
  },

  /* Slot 2 — Riley */
  {
    id: "cast-05",
    portrait: "/brand/asg/cast/asg-cast-05.jpg",
    portraitAlt: "Cast portrait — character not yet revealed.",
    description:
      "She mastered the art of surviving without being seen. But survival and healing are not the same thing—and eventually, the difference demands to be faced.",
  },

  /* Slot 3 — Rayann */
  {
    id: "cast-02",
    portrait: "/brand/asg/cast/asg-cast-02.jpg",
    portraitAlt: "Cast portrait — character not yet revealed.",
    description:
      "Some daughters inherit more than features and family names. They inherit questions, wounds, and silence that never belonged to them in the first place.",
  },

  /* Slot 4 — Crystal */
  {
    id: "cast-03",
    portrait: "/brand/asg/cast/asg-cast-03.jpg",
    portraitAlt: "Cast portrait — character not yet revealed.",
    description:
      "She wears confidence like armor, but even the strongest women grow tired of carrying what no one ever asked them about.",
  },

  /* ---- Second row on screen — slots 5–8 ---- */

  /* Slot 5 — Kayonna */
  {
    id: "cast-04",
    portrait: "/brand/asg/cast/asg-cast-04.jpg",
    portraitAlt: "Cast portrait — character not yet revealed.",
    description:
      "She still has softness in her eyes, but life has already asked her to grow up too quickly. Some truths do not wait until you are ready.",
  },

  /* Slot 6 — Stephanie */
  {
    id: "cast-01",
    portrait: "/brand/asg/cast/asg-cast-01.jpg",
    portraitAlt: "Cast portrait — character not yet revealed.",
    description:
      "She learned how to smile through pain and call it strength. But what happens when the version of you that survived is no longer the version that can heal?",
  },

  /* Slot 7 — Terry */
  {
    id: "cast-06",
    portrait: "/brand/asg/cast/asg-cast-06.jpg",
    portraitAlt: "Cast portrait — character not yet revealed.",
    description:
      "She carries herself with control, but some of the deepest battles are fought quietly. Not every breaking point makes a sound.",
  },

  /* Slot 8 — Shannon */
  {
    id: "cast-07",
    portrait: "/brand/asg/cast/asg-cast-07.jpg",
    portraitAlt: "Cast portrait — character not yet revealed.",
    description:
      "She looks tired of pretending. Maybe that is where truth begins—when performance ends and honesty finally has room to enter.",
  },

  /* ---- Third row on screen — slot 9, alone ---- */

  /* Slot 9 — April */
  {
    id: "cast-08",
    portrait: "/brand/asg/cast/asg-cast-08.jpg",
    portraitAlt: "Cast portrait — character not yet revealed.",
    description:
      "She has spent years holding pieces of everyone else together. The question is what remains of her when she finally stops carrying what was never hers.",
  },
];

/* -------------------------------------------------------------------------
   SECTION 7 — Aunt Sarah's approved voice lines
   ------------------------------------------------------------------------- */
export const auntSarahVoiceLines: string[] = [
  "Come on in. I’ve been waiting for you.",
  "Whatever you’ve been carrying, you do not have to carry it in here.",
  "Tell me. What has been sitting heavy on your heart?",
];

/* -------------------------------------------------------------------------
   SECTION 9 — The Sarah Method (high-level approved concepts only)
   ------------------------------------------------------------------------- */
export const sarahMethodAreas: string[] = [
  "Guided reflection",
  "Journaling",
  "Personal truth",
  "Identity",
  "Healing",
  "Communication",
  "Purpose",
  "Aunt Sarah’s voice",
  "Ongoing reflection",
];

/* -------------------------------------------------------------------------
   SECTION 10 — Community experiences
   ------------------------------------------------------------------------- */
export const communityExperiences: { title: string; status: AsgStatus }[] = [
  { title: "Book-club conversations", status: "planned" },
  { title: "Women’s gatherings", status: "planned" },
  { title: "Post-show discussions", status: "in-development" },
  { title: "Family and legacy conversations", status: "planned" },
  { title: "Guided journaling", status: "in-development" },
  { title: "Community panels", status: "planned" },
  { title: "Women-focused partnerships", status: "planned" },
  { title: "Cultural programs", status: "future" },
  { title: "Facilitated story circles", status: "future" },
  { title: "Healing-centered reflection events", status: "planned" },
  { title: "Faith and community conversations", status: "future" },
  { title: "Companion resources", status: "in-development" },
];

/* -------------------------------------------------------------------------
   SECTION 11 — Book clubs & discussion partners
   ------------------------------------------------------------------------- */
export const discussionResources: { title: string; status: AsgStatus }[] = [
  { title: "Book-club discussion guide", status: "in-development" },
  { title: "Character reflection prompts", status: "in-development" },
  { title: "Family-conversation questions", status: "planned" },
  { title: "Legacy-letter exercise", status: "planned" },
  { title: "Guided journal", status: "planned" },
  { title: "Facilitator guide", status: "planned" },
  { title: "Group conversation framework", status: "planned" },
  { title: "Author conversation", status: "future" },
  { title: "Virtual book discussion", status: "future" },
  { title: "Community partnership experience", status: "future" },
];

/* -------------------------------------------------------------------------
   SECTION 12 — Future of the property (all unlaunched)
   ------------------------------------------------------------------------- */
export const futureDirections: { title: string; group: string }[] = [
  { title: "Additional books", group: "Literary" },
  { title: "Character-centered stories", group: "Literary" },
  { title: "Companion journals", group: "Literary" },
  { title: "Book-club resources", group: "Literary" },
  { title: "Stage revivals", group: "Theatrical" },
  { title: "Touring productions", group: "Theatrical" },
  { title: "Digital theater", group: "Theatrical" },
  { title: "Film or television development", group: "Screen & Audio" },
  { title: "Audio storytelling", group: "Screen & Audio" },
  { title: "Community programs", group: "Community & Learning" },
  { title: "Women’s conferences", group: "Community & Learning" },
  { title: "Educational and facilitated resources", group: "Community & Learning" },
  { title: "The Sarah Method expansion", group: "Digital & Partnerships" },
  { title: "Merchandise", group: "Digital & Partnerships" },
  { title: "Partnerships", group: "Digital & Partnerships" },
];

/* -------------------------------------------------------------------------
   SECTION 13 — Ecosystem relationships
   ------------------------------------------------------------------------- */
export const asgEcosystem: {
  name: string;
  href: string;
  role: string;
  kind: "company" | "sector";
}[] = [
  {
    name: "The Georgia B. Media Group",
    href: "/our-companies/georgia-b-media-group",
    kind: "company",
    role: "Provides the creative, publishing, production, storytelling, and original-property home for Aunt Sarah’s Girls.",
  },
  {
    name: "The Georgia B. Society",
    href: "/our-companies/georgia-b-society",
    kind: "company",
    role: "May extend the themes of family, women, story, truth, and legacy into community conversations and cultural experiences.",
  },
  {
    name: "Business Experience",
    href: "/experience-sectors/business",
    kind: "sector",
    role: "Supports production planning, partnerships, events, timelines, operating structure, and implementation.",
  },
  {
    name: "Technology Experience",
    href: "/experience-sectors/technology",
    kind: "sector",
    role: "Supports digital platforms, audience experiences, content systems, applications, and The Sarah Method.",
  },
  {
    name: "Training Experience",
    href: "/experience-sectors/training",
    kind: "sector",
    role: "Supports facilitators, discussion leaders, community partners, companion learning, and guided experiences.",
  },
  {
    name: "Media Experience",
    href: "/experience-sectors/media",
    kind: "sector",
    role: "Supports publishing, theater, visual storytelling, content, live experiences, and audience development.",
  },
];

/* -------------------------------------------------------------------------
   SECTION 14 — Partnership pathways
   ------------------------------------------------------------------------- */
export const partnershipPathways: {
  number: string;
  title: string;
  body: string;
}[] = [
  {
    number: "01",
    title: "Book and literary partnerships",
    body: "Book clubs, literary organizations, libraries, bookstores, publishers, and reader communities.",
  },
  {
    number: "02",
    title: "Theater and venue partnerships",
    body: "Theaters, performance spaces, producers, arts organizations, and cultural venues.",
  },
  {
    number: "03",
    title: "Women-focused partnerships",
    body: "Women’s groups, leadership communities, healing-centered organizations, and cultural programs.",
  },
  {
    number: "04",
    title: "Community and faith partnerships",
    body: "Organizations interested in family, truth, communication, legacy, and reflective conversation.",
  },
  {
    number: "05",
    title: "Media and adaptation partnerships",
    body: "Producers, filmmakers, digital platforms, creative teams, and partners interested in future story extensions.",
  },
];

/* -------------------------------------------------------------------------
   SECTION 15 — The ASG experience standard
   ------------------------------------------------------------------------- */
export const asgStandards: { title: string; body: string }[] = [
  {
    title: "Honest",
    body: "The work should not avoid difficult truths for the sake of comfort.",
  },
  {
    title: "Dignified",
    body: "Women’s pain, survival, family experiences, and choices should not be exploited.",
  },
  {
    title: "Layered",
    body: "No character should be reduced to a single mistake, secret, or wound.",
  },
  {
    title: "Welcoming",
    body: "The audience should feel invited into reflection rather than judged or preached at.",
  },
  {
    title: "Hopeful",
    body: "The story may be difficult, but the work should leave room for communication, agency, identity, and healing.",
  },
  {
    title: "Memorable",
    body: "The experience should remain with the audience beyond the final page, scene, or conversation.",
  },
];
