/**
 * THE SARAH METHOD — brand data.
 *
 * Digital guided-reflection platform developed from the themes, voice, and
 * mission of Aunt Sarah's Girls, within The Georgia B. Media Group.
 *
 * SOURCE OF TRUTH: every feature, framework stage, and privacy statement below
 * was verified against the shipped application (tablemakerscompass/the-sarah-method,
 * live at https://www.thesarahmethod.com) on 2026-07-27. Do not add a feature,
 * stage, or data-handling claim here that is not in the product.
 *
 * Specifically NOT claimed, because they are not built or not verifiable:
 * encryption, anonymity, HIPAA compliance, in-app data deletion controls,
 * therapist review, crisis monitoring, human coaching, community forums,
 * AI conversation or memory, voice recognition, and mood diagnosis.
 */

/** Availability language. Never imply more than the label states. */
export type SmStatus = "available" | "in-development" | "planned" | "future";

export const smStatusLabel: Record<SmStatus, string> = {
  available: "Available now",
  "in-development": "In development",
  planned: "Planned",
  future: "Future possibility",
};

export const smBrand = {
  name: "The Sarah Method",
  slug: "the-sarah-method",
  path: "/our-companies/the-sarah-method",
  category: "Truth · Healing · Purpose",
  type: "Digital guided-reflection and personal-development platform",
  parent: "The 5 Loaves Agency, LLC",
  division: "The Georgia B. Media Group",
  origin: "Aunt Sarah’s Girls",
  primarySector: "Media Experience",

  /** VERIFIED live, HTTP 200, 2026-07-27. Installable PWA; works offline. */
  appUrl: "https://www.thesarahmethod.com",

  positioning:
    "A guided reflection experience helping women explore what has been sitting heavy on their hearts.",
  supporting:
    "The Sarah Method creates a welcoming digital space for women to pause, reflect, journal, communicate honestly, examine personal truths, and move toward greater clarity, healing, identity, and purpose.",

  metaTitle: "The Sarah Method | Truth, Healing, Reflection & Purpose",
  metaDescription:
    "Discover The Sarah Method, a guided digital reflection experience helping women explore personal truth, communication, identity, healing, and purpose.",

  /** Present and readable; never hidden, never dominant. */
  disclaimer:
    "The Sarah Method is designed for reflection, journaling, education, and personal development. It is not a substitute for licensed mental-health, medical, legal, or crisis services. Individuals experiencing immediate danger or a mental-health emergency should contact qualified local emergency or crisis support.",

  /**
   * VERIFIED from the application's own copy: "It is a guided faith-centered
   * framework built around truth, reflection, communication, prayer, healing,
   * and legacy." Stated plainly once on the page so no visitor is surprised by
   * what she finds inside. The page never preaches and never frames the
   * platform as a ministry.
   */
  faithNote:
    "The experience is faith-centered. Each movement of the framework carries a scripture, and prayer and testimony are part of how women use the space. It is offered as an invitation, never a requirement.",

  /** VERIFIED: the app gates entry on an 18+ confirmation. */
  ageNote: "The application is intended for women 18 and older.",
} as const;

/** Approved brand assets, copied unaltered from the application repository. */
export const smAssets = {
  /** Full approved logo: crowned S monogram, pen nib, wordmark, brand line. */
  logo: "/brand/sarah-method/sarah-method-logo.png",
  /** Simplified crowned-S monogram for small placements. */
  monogram: "/brand/sarah-method/sarah-method-monogram.png",
  /** Editorial hero photography — a quiet sitting room, warm lamp, journal. */
  hero: "/brand/sarah-method/sarah-method-room.jpg" as string | undefined,
  /** Warm interior still for the welcome section — chair, window, cup of tea. */
  welcome: "/brand/sarah-method/sarah-method-welcome.jpg" as string | undefined,
  /**
   * Real capture from the live application — no journal entry is shown.
   * Never fabricate an interface or a journal entry.
   */
  appScreens: "/brand/sarah-method/sarah-method-app.png" as string | undefined,
  /** Social-sharing card for this page. NOT SUPPLIED. */
  ogImage: undefined as string | undefined,
};

/* -------------------------------------------------------------------------
   SECTION 2 — Aunt Sarah's welcome
   ------------------------------------------------------------------------- */
export const smVoiceLines: string[] = [
  "Come on in. I’ve been waiting for you.",
  "Whatever you have been carrying, you do not have to carry it in here.",
  "Tell me. What has been sitting heavy on your heart?",
];

/* -------------------------------------------------------------------------
   SECTION 4 — The Method
   VERIFIED: these are the five movements presented in the application's
   "The Method" tab, in order. Each carries a scripture, a teaching, and a
   journaling prompt in the product. Do not rename or reorder them here.
   ------------------------------------------------------------------------- */
export const methodMovements: {
  letter: string;
  title: string;
  body: string;
}[] = [
  {
    letter: "S",
    title: "Surrender",
    body: "Open hands before answers. Step away from the pressure to perform long enough to set down the outcomes, the timelines, and the versions of yourself that survival built.",
  },
  {
    letter: "A",
    title: "Acknowledge",
    body: "Name what is actually there — the wound, the pattern, the silence, the anger — without shame. What can be named honestly begins to lose its hold.",
  },
  {
    letter: "R",
    title: "Release",
    body: "Consider what is ready to be let go: old offenses, old identities, and the beliefs that decided who you had to be. Release here is for your own freedom.",
  },
  {
    letter: "A",
    title: "Align",
    body: "Rebuild on what is true. Bring words, boundaries, daily rhythms, and relationships back into agreement with it — clear communication is alignment made audible.",
  },
  {
    letter: "H",
    title: "Honor",
    body: "Carry it forward. Turn what you have learned into wisdom, and consider what you want to hand down on purpose rather than by accident.",
  },
];

/* -------------------------------------------------------------------------
   SECTION 5 — Areas of reflection
   ------------------------------------------------------------------------- */
export const reflectionAreas: { title: string; question: string }[] = [
  {
    title: "Truth",
    question: "What has been difficult to admit, say, or acknowledge?",
  },
  {
    title: "Identity",
    question:
      "Who have you been required to become, and who are you beneath those expectations?",
  },
  {
    title: "Family",
    question:
      "What patterns, beliefs, roles, and responsibilities have been passed down?",
  },
  {
    title: "Communication",
    question:
      "What remains unsaid, misunderstood, avoided, or repeatedly unresolved?",
  },
  {
    title: "Survival",
    question:
      "What helped you endure—and what may no longer be helping you live fully?",
  },
  {
    title: "Shame",
    question:
      "What have you blamed yourself for, hidden, or allowed to define your worth?",
  },
  {
    title: "Boundaries",
    question:
      "Where do responsibility, care, access, and self-respect need to be reconsidered?",
  },
  {
    title: "Grief",
    question: "What was lost, changed, denied, or never properly acknowledged?",
  },
  {
    title: "Healing",
    question:
      "What might honesty, support, release, forgiveness, repair, or acceptance look like?",
  },
  {
    title: "Purpose",
    question:
      "What are you being invited to understand, become, build, or carry differently?",
  },
];

/* -------------------------------------------------------------------------
   SECTION 6 — Inside the experience
   VERIFIED against the application. `appName` is the label a user actually
   sees in the product; omit it where the item is a quality rather than a screen.
   ------------------------------------------------------------------------- */
export const experienceAreas: {
  title: string;
  appName?: string;
  body: string;
  status: SmStatus;
}[] = [
  {
    title: "Guided prompts",
    appName: "Sit With Me",
    body: "A daily space that opens with a single question, a rotating reflection, and a gentle record of the days you have shown up.",
    status: "available",
  },
  {
    title: "Journaling",
    appName: "Truth Journal",
    body: "A private place to write, tag how a day felt, return to earlier entries, and notice patterns over time.",
    status: "available",
  },
  {
    title: "Naming what holds you",
    appName: "Stronghold Tracker",
    body: "Name a belief that has been running things, answer it with what is true, and move it through Named, Confronting, Breaking, and Broken at your own pace.",
    status: "available",
  },
  {
    title: "Guided sessions",
    appName: "Sessions",
    body: "Six step-by-step experiences — Facing the Mirror, Breaking the Stronghold, The Forgiveness Walk, Finding My Voice, Understanding My Assignment, and Evening Rest & Release. Answers save into the Truth Journal.",
    status: "available",
  },
  {
    title: "What you hand down",
    appName: "Legacy Room",
    body: "Letters, testimonies, and saved prayers kept in one place — words for the people who come after you.",
    status: "available",
  },
  {
    title: "Aunt Sarah’s voice",
    body: "Warm, grounding language throughout that invites reflection without judgment, pressure, or a rush toward conclusions.",
    status: "available",
  },
  {
    title: "Ongoing reflection",
    body: "The experience holds your place. You can leave, return, and pick up where a previous reflection ended.",
    status: "available",
  },
  {
    title: "Staying connected",
    appName: "ASG Connection",
    body: "Send a prayer request, share a testimony, or reach the Aunt Sarah’s Girls team — and read what other women have chosen to share publicly.",
    status: "available",
  },
];

/* -------------------------------------------------------------------------
   SECTION 7 — Aunt Sarah principles
   ------------------------------------------------------------------------- */
export const sarahPrinciples: { title: string; body: string }[] = [
  {
    title: "Welcoming",
    body: "The user should feel invited rather than evaluated.",
  },
  {
    title: "Honest",
    body: "The language should make room for truth without shame or harshness.",
  },
  {
    title: "Patient",
    body: "The experience should not rush users toward a conclusion.",
  },
  {
    title: "Grounded",
    body: "Reflection should remain connected to real choices, relationships, needs, and next steps.",
  },
  {
    title: "Respectful",
    body: "The platform should honor the user’s dignity, agency, pace, and boundaries.",
  },
];

/* -------------------------------------------------------------------------
   SECTION 9 — The experience standard
   ------------------------------------------------------------------------- */
export const experienceStandard: { title: string; body: string }[] = [
  {
    title: "Welcoming",
    body: "The user should feel invited into a private moment rather than processed through a system.",
  },
  {
    title: "Nonjudgmental",
    body: "The language should encourage honesty without creating shame.",
  },
  {
    title: "Clear",
    body: "Prompts and navigation should be understandable, focused, and emotionally grounded.",
  },
  {
    title: "Private in tone",
    body: "The experience should feel personal and discreet even when technical privacy claims cannot be made.",
  },
  {
    title: "Unhurried",
    body: "Users should be able to pause, leave, return, and continue without pressure.",
  },
  {
    title: "Purposeful",
    body: "Every prompt, message, and feature should support reflection rather than create digital clutter.",
  },
];

/* -------------------------------------------------------------------------
   SECTION 10 — Care boundaries
   ------------------------------------------------------------------------- */
export const isDesignedFor: string[] = [
  "Guided personal reflection",
  "Journaling",
  "Self-examination",
  "Communication preparation",
  "Identity and purpose exploration",
  "Story-based insight",
  "Personal-development support",
  "Continued reflection after Aunt Sarah’s Girls",
];

export const isNot: string[] = [
  "Therapy",
  "Counseling",
  "Medical treatment",
  "Mental-health diagnosis",
  "Legal advice",
  "Crisis intervention",
  "Emergency support",
  "A substitute for licensed professional care",
];

/* -------------------------------------------------------------------------
   SECTION 11 — Who it may serve
   ------------------------------------------------------------------------- */
export const audiences: { title: string; body: string }[] = [
  {
    title: "Readers of Aunt Sarah’s Girls",
    body: "Women who want to continue exploring the themes and questions raised by the story.",
  },
  {
    title: "Women carrying unresolved questions",
    body: "Those reflecting on family, identity, communication, shame, grief, survival, boundaries, or purpose.",
  },
  {
    title: "Women in seasons of transition",
    body: "Those navigating change, endings, new beginnings, leadership, relationships, family shifts, or personal redefinition.",
  },
  {
    title: "Journaling and reflection communities",
    body: "Women already using writing, prompts, faith, personal development, or intentional reflection as part of their growth.",
  },
  {
    title: "Women-focused organizations",
    body: "Groups interested in guided reflection, companion experiences, discussion, and personal-development resources.",
  },
  {
    title: "Book clubs and community groups",
    body: "Communities seeking a private continuation of conversations opened through Aunt Sarah’s Girls.",
  },
];

/* -------------------------------------------------------------------------
   SECTION 12 — Organizational & community extensions
   ------------------------------------------------------------------------- */
export const communityExtensions: { title: string; status: SmStatus }[] = [
  { title: "Book-club reflection companions", status: "planned" },
  { title: "Women’s-group discussion resources", status: "planned" },
  { title: "Aunt Sarah’s Girls event companions", status: "in-development" },
  { title: "Guided journaling experiences", status: "available" },
  { title: "Workshop materials", status: "planned" },
  { title: "Facilitator resources", status: "planned" },
  { title: "Community conversation prompts", status: "planned" },
  { title: "Faith-community reflection experiences", status: "future" },
  { title: "Leadership and identity reflections", status: "future" },
  { title: "Retreat companions", status: "future" },
  { title: "Legacy and family-conversation resources", status: "in-development" },
];

/* -------------------------------------------------------------------------
   SECTION 13 — Privacy, trust & responsible design
   Every line below was read out of the application's source and its own
   Safety & Privacy screen. Revise here only after re-verifying the product.
   ------------------------------------------------------------------------- */
export const privacyFacts: { label: string; body: string }[] = [
  {
    label: "What stays on your device",
    body: "Journal entries, strongholds, and legacy letters are stored in your own browser on your own device. They are not sent to a server, and the team cannot read them.",
  },
  {
    label: "What leaves your device",
    body: "Only what you choose to send. Prayer requests, testimonies, and notes go to the Aunt Sarah’s Girls team. If you share them, your first name, email, and birthday are kept so the team can send you a note on your birthday.",
  },
  {
    label: "What others can see",
    body: "Nothing you write is public unless you ask for it to be shared and it is reviewed and approved first — and then only under a display name you choose.",
  },
  {
    label: "Removing your information",
    body: "You can ask for anything held about you to be removed by emailing the team. The address is published inside the application.",
  },
  {
    label: "Where the limits are",
    body: "The experience makes no claim of encryption, anonymity, or medical-privacy compliance, and it does not monitor entries for risk. Anyone who needs immediate help should reach qualified local support.",
  },
];

/* -------------------------------------------------------------------------
   SECTION 14 — Future of the platform (all unbuilt)
   ------------------------------------------------------------------------- */
export const futureDirections: { title: string; group: string }[] = [
  { title: "Expanded reflection pathways", group: "Reflection" },
  { title: "Personalized reflection pathways", group: "Reflection" },
  { title: "Progress and reflection history", group: "Reflection" },
  { title: "Companion journals", group: "Companions" },
  { title: "Guided programs", group: "Companions" },
  { title: "Additional ASG companion experiences", group: "Companions" },
  { title: "Audio reflections", group: "Voice & Audio" },
  { title: "Aunt Sarah voice experiences", group: "Voice & Audio" },
  { title: "Book-club companions", group: "Groups & Partners" },
  { title: "Women’s-group resources", group: "Groups & Partners" },
  { title: "Facilitator tools", group: "Groups & Partners" },
  { title: "Community partnerships", group: "Groups & Partners" },
  { title: "Organizational programs", group: "Groups & Partners" },
];

/* -------------------------------------------------------------------------
   SECTION 15 — Ecosystem relationships
   ------------------------------------------------------------------------- */
export const smEcosystem: {
  name: string;
  href: string;
  role: string;
  kind: "company" | "sector";
}[] = [
  {
    name: "Aunt Sarah’s Girls",
    href: "/our-companies/aunt-sarahs-girls",
    kind: "company",
    role: "Provides the story world, themes, voice, emotional foundation, and invitation into truth-centered conversation.",
  },
  {
    name: "The Georgia B. Media Group",
    href: "/our-companies/georgia-b-media-group",
    kind: "company",
    role: "Provides the media, storytelling, original-property, content, and creative-development home.",
  },
  {
    name: "The Georgia B. Society",
    href: "/our-companies/georgia-b-society",
    kind: "company",
    role: "May extend themes of women, family, legacy, communication, and community into gatherings and cultural experiences.",
  },
  {
    name: "Technology Experience",
    href: "/our-companies/velaxity",
    kind: "sector",
    role: "Supports application development, user experience, digital systems, responsible AI use, privacy communication, and platform improvement.",
  },
  {
    name: "Training Experience",
    href: "/our-companies/5la-academy",
    kind: "sector",
    role: "Supports guided resources, facilitators, workshops, organizational programs, and learning experiences.",
  },
  {
    name: "Media Experience",
    href: "/our-companies/georgia-b-media-group",
    kind: "sector",
    role: "Supports story, content, brand voice, audience connection, and companion experiences.",
  },
];
