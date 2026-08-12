/**
 * TABLEMAKERS — brand data.
 *
 * Professional community and thought-leadership platform within
 * The 5 Loaves Agency, LLC.
 *
 * WHAT WAS INSPECTED (2026-07-27) before any claim about community, events,
 * articles, membership, or subscriptions:
 * - The 5LA site's own insights config (explicitly placeholder, not articles).
 * - The VelaXity application, which carries the codified Tablemaker Standards.
 * - The company Google Drive, searched for Tablemakers, Compass, and
 *   Collective material.
 * - All three repositories, searched for a Meetup, LinkedIn, or publication URL.
 *
 * WHAT IS VERIFIED TO EXIST:
 * - The Tablemaker Standards — four codified behaviors, live in the Academy's
 *   learning surface inside VelaXity.
 * - The LOAVES framework, approved and used across the 5LA site.
 * - The Tablemakers brand identity itself (the organization operates as
 *   "tablemakerscompass").
 *
 * WHAT NOW EXISTS (2026-08-12):
 * - Published Tablemakers Compass writing, held in the 5LA Insights library
 *   (`src/config/articles.ts`) and surfaced here through `compassArticles`.
 *   The Compass links only ever point at pieces in that library.
 *
 * WHAT DOES NOT YET EXIST — and must therefore never be linked or implied:
 * - A Collective community destination (no Meetup, no group, no forum).
 * - A newsletter or signup function.
 * - Any scheduled gathering, event, or roundtable.
 * - Membership of any kind, paid or free.
 *
 * Every CTA on this page therefore points at a route that genuinely exists.
 * NEVER add: member or subscriber counts, event attendance, testimonials,
 * sponsors, named partners, membership prices, schedules, awards, or growth
 * statistics.
 */

/** Availability language. Never imply more than the label states. */
export type TmStatus = "available" | "in-development" | "planned" | "future";

export const tmStatusLabel: Record<TmStatus, string> = {
  available: "Available now",
  "in-development": "In development",
  planned: "Planned",
  future: "Future possibility",
};

export const tmBrand = {
  name: "Tablemakers",
  slug: "tablemakers",
  path: "/our-companies/tablemakers",
  category: "Community · Thought Leadership · Professional Development",
  type: "Professional community, thought-leadership, and continued-development platform",
  parent: "The 5 Loaves Agency, LLC",
  primarySector: "Training Experience",

  positioning:
    "A community for the people building stronger teams, cultures, businesses, and experiences.",
  supporting:
    "Tablemakers brings together leaders, managers, founders, hospitality professionals, operations professionals, culture builders, and experience makers responsible for preparing the environment, carrying the standard, and creating room for others to succeed.",

  coreMessage:
    "A Tablemaker does more than take a seat. A Tablemaker prepares the space, establishes the standard, develops the people, and creates room for others to succeed.",
  academyMessage: "We hire for hospitality, but we train for excellence.",

  metaTitle:
    "Tablemakers | Leadership, Hospitality, Culture & Professional Community",
  metaDescription:
    "Explore Tablemakers, a professional community and thought-leadership platform for leaders, managers, founders, hospitality professionals, and experience builders.",

  /**
   * The single real engagement route today. The inquiry form itself is built in
   * a later phase, but the route exists and is reachable.
   */
  connectPath: "/work-with-us",

  /**
   * Stated once, plainly, so no visitor expects something that is not there.
   */
  statusNote:
    "Tablemakers is being built in the open. The ideas, standards, and language are established; the Collective, the Compass, and the gatherings are still being prepared. Nothing on this page is a live community you can join today.",
} as const;

/**
 * Assets.
 *
 * Tablemakers has NO approved logo. Per brand direction the page uses a refined
 * text-based wordmark, labelled as a temporary treatment. Do not invent a
 * permanent symbol, and do not alter the official 5LA logo.
 */
export const tmAssets = {
  /**
   * Hero: a roundtable of professionals in conversation. Shares the approved
   * roundtable photograph with the Academy's Tablemakers section — the same
   * image is intended for both, so it lives under `brand/academy/`.
   */
  hero: "/brand/academy/tablemakers-roundtable.jpg" as string | undefined,
  /** Community gathering photography. NOT SUPPLIED. */
  gathering: undefined as string | undefined,
  /** Social-sharing card for this page. NOT SUPPLIED. */
  ogImage: undefined as string | undefined,
};

/* -------------------------------------------------------------------------
   SECTION 2 — What a Tablemaker may be
   ------------------------------------------------------------------------- */
export const tablemakerRoles: string[] = [
  "A founder creating a business",
  "A leader shaping culture",
  "A manager preparing a team",
  "A hospitality professional designing an experience",
  "An operations professional building structure",
  "A trainer developing people",
  "A producer bringing others together",
  "A community leader creating room for voices",
  "An emerging professional preparing for greater responsibility",
];

/* -------------------------------------------------------------------------
   SECTION 3 — The Tablemaker identity
   ------------------------------------------------------------------------- */
export const identityQualities: { title: string; body: string }[] = [
  {
    title: "Prepared",
    body: "A Tablemaker understands that the quality of the experience begins before anyone enters the room.",
  },
  {
    title: "Observant",
    body: "A Tablemaker notices what others need, what the environment is communicating, and where the standard may be slipping.",
  },
  {
    title: "Responsible",
    body: "A Tablemaker takes ownership of the role, the details, the people, and the outcome.",
  },
  {
    title: "Welcoming",
    body: "A Tablemaker creates room for people to feel seen, respected, supported, and able to contribute.",
  },
  {
    title: "Consistent",
    body: "A Tablemaker understands that excellence is built through repeated behavior, not occasional performance.",
  },
  {
    title: "Courageous",
    body: "A Tablemaker is willing to address what is unclear, misaligned, uncomfortable, or below the standard.",
  },
  {
    title: "Development-minded",
    body: "A Tablemaker does not only perform well. A Tablemaker helps others become stronger.",
  },
  {
    title: "Service-centered",
    body: "A Tablemaker recognizes that leadership, hospitality, and service are responsibilities—not performances.",
  },
];

/* -------------------------------------------------------------------------
   SECTION 5 — Who the platform is for
   ------------------------------------------------------------------------- */
export const audiences: { title: string; body: string }[] = [
  {
    title: "Founders and business owners",
    body: "People building the structure, culture, team, standards, and experience behind a growing organization.",
  },
  {
    title: "Executives and leaders",
    body: "Professionals guiding direction, people, performance, priorities, and organizational culture.",
  },
  {
    title: "Managers and supervisors",
    body: "Leaders carrying the daily responsibility for communication, accountability, operations, development, and service.",
  },
  {
    title: "Hospitality professionals",
    body: "Professionals creating guest, customer, employee, venue, restaurant, hotel, tourism, or event experiences.",
  },
  {
    title: "Operations professionals",
    body: "People building the systems, workflows, standards, and routines allowing an organization to function well.",
  },
  {
    title: "Culture and people leaders",
    body: "Professionals shaping employee experience, workplace expectations, communication, trust, and belonging.",
  },
  {
    title: "Trainers and facilitators",
    body: "People preparing others to understand, practice, and carry the standard.",
  },
  {
    title: "Emerging leaders",
    body: "Professionals preparing for greater responsibility and seeking stronger leadership language, confidence, and community.",
  },
  {
    title: "Experience builders",
    body: "Producers, event professionals, community leaders, creatives, and strategists responsible for bringing people into meaningful environments.",
  },
];

/* -------------------------------------------------------------------------
   SECTION 6 — The Tablemakers Collective
   No destination exists. Every format below is unbuilt.
   ------------------------------------------------------------------------- */
export const collectiveFormats: { title: string; status: TmStatus }[] = [
  { title: "Roundtable conversations", status: "in-development" },
  { title: "Leadership discussions", status: "in-development" },
  { title: "Hospitality conversations", status: "planned" },
  { title: "Founder exchanges", status: "planned" },
  { title: "Manager-development sessions", status: "planned" },
  { title: "Professional-development gatherings", status: "planned" },
  { title: "Community conversations", status: "planned" },
  { title: "Resource sharing", status: "planned" },
  { title: "Workshops", status: "future" },
  { title: "Guest speakers", status: "future" },
  { title: "Peer insight", status: "future" },
  { title: "Experience-focused events", status: "future" },
];

/* -------------------------------------------------------------------------
   SECTION 7 — The Tablemakers Compass
   The entries below are THEMES the publication explores — never presented as
   articles, never given a date, an author, a read time, or a link.
   Published Compass pieces live in `src/config/articles.ts` and are read from
   `compassArticles` there; add new ones to that library, not to this list.
   ------------------------------------------------------------------------- */
export const compassThemes: string[] = [
  "The future of events is not bigger—it is more meaningful",
  "The decline of hospitality basics",
  "Leadership and accountability",
  "Service standards",
  "Culture in practice",
  "Employee experience",
  "Operational excellence",
  "Professional presence",
  "Experience design",
  "Developing managers",
  "Building stronger teams",
  "The future of hospitality",
  "Obedience, responsibility, and professional purpose",
];

/* -------------------------------------------------------------------------
   SECTION 8 — Conversation categories
   ------------------------------------------------------------------------- */
export const conversationTopics: {
  number: string;
  title: string;
  topics: string[];
}[] = [
  {
    number: "01",
    title: "Leadership",
    topics: [
      "Leadership identity",
      "Accountability",
      "Communication",
      "Decision-making",
      "Coaching",
      "Manager development",
      "Courage",
      "Follow-through",
      "Executive responsibility",
      "Emerging leadership",
    ],
  },
  {
    number: "02",
    title: "Hospitality",
    topics: [
      "Service foundations",
      "Guest experience",
      "First impressions",
      "Professional presence",
      "Anticipating needs",
      "Experience recovery",
      "Service culture",
      "Hospitality leadership",
      "The future of hospitality",
    ],
  },
  {
    number: "03",
    title: "Culture",
    topics: [
      "Values in practice",
      "Employee experience",
      "Trust",
      "Standards",
      "Belonging",
      "Communication",
      "Recognition",
      "Workplace behavior",
      "Leadership consistency",
      "Culture repair",
    ],
  },
  {
    number: "04",
    title: "Operations",
    topics: [
      "Structure",
      "Systems",
      "SOPs",
      "Ownership",
      "Preparation",
      "Multi-location consistency",
      "Project execution",
      "Operational rhythm",
      "Quality control",
      "Experience delivery",
    ],
  },
  {
    number: "05",
    title: "Professional Development",
    topics: [
      "Career readiness",
      "Confidence",
      "Workplace communication",
      "Leadership preparation",
      "Service mindset",
      "Personal accountability",
      "Professional standards",
      "Continued learning",
      "Purpose in the work",
    ],
  },
  {
    number: "06",
    title: "Experience Building",
    topics: [
      "Events",
      "Environments",
      "Community gatherings",
      "Brand experiences",
      "Storytelling",
      "Audience care",
      "Team preparation",
      "Service design",
      "Meaningful moments",
      "Experience legacy",
    ],
  },
];

/* -------------------------------------------------------------------------
   SECTION 9 — LOAVES, in Tablemaker terms
   ------------------------------------------------------------------------- */
export const loaves: { letter: string; word: string; def: string }[] = [
  {
    letter: "L",
    word: "Leadership",
    def: "Influence the environment through preparation, communication, decisions, behavior, and care.",
  },
  {
    letter: "O",
    word: "Ownership",
    def: "Take responsibility for the standard, the details, the team, and the outcome.",
  },
  {
    letter: "A",
    word: "Alignment",
    def: "Connect people, priorities, systems, and expectations around the shared experience.",
  },
  {
    letter: "V",
    word: "Vision",
    def: "Understand what is being built and help others see their role within it.",
  },
  {
    letter: "E",
    word: "Excellence",
    def: "Protect quality through discipline, consistency, professionalism, and attention.",
  },
  {
    letter: "S",
    word: "Service",
    def: "Create room for others to feel welcomed, respected, supported, and able to succeed.",
  },
];

/* -------------------------------------------------------------------------
   SECTION 10 — Academy relationship
   ------------------------------------------------------------------------- */
export const academyRelationship: string[] = [
  "Academy learning",
  "Continued professional development",
  "Leadership conversations",
  "Community application",
  "Thought leadership",
  "Shared resources",
  "Workshops",
  "Tablemaker identity",
  "Professional connection",
  "Future development pathways",
];

/* -------------------------------------------------------------------------
   SECTION 11 — Community experience standards
   ------------------------------------------------------------------------- */
export const communityStandards: { title: string; body: string }[] = [
  {
    title: "Welcoming",
    body: "Professionals should feel respected whether they are established leaders or preparing for their first leadership opportunity.",
  },
  {
    title: "Useful",
    body: "Conversations should connect to real work, real decisions, and real responsibility.",
  },
  {
    title: "Honest",
    body: "The community should make room for the realities of leadership, hospitality, culture, operations, and professional growth.",
  },
  {
    title: "Respectful",
    body: "Disagreement should not remove dignity, curiosity, or professional care.",
  },
  {
    title: "Generous",
    body: "Members and participants should contribute insight without treating every interaction as a sales opportunity.",
  },
  {
    title: "Standard-driven",
    body: "The community should model the preparation, communication, excellence, and service it discusses.",
  },
];

/* -------------------------------------------------------------------------
   SECTION 12 — Ways to engage
   ------------------------------------------------------------------------- */
export const engagementGroups: {
  label: string;
  status: TmStatus;
  items: string[];
}[] = [
  {
    label: "Editorial content",
    status: "in-development",
    items: [
      "The Tablemakers Compass",
      "Articles",
      "Leadership notes",
      "Hospitality insights",
      "Culture commentary",
      "Operational guidance",
    ],
  },
  {
    label: "Community conversations",
    status: "in-development",
    items: [
      "Roundtables",
      "Virtual discussions",
      "Local gatherings",
      "Leadership conversations",
      "Hospitality forums",
      "Founder exchanges",
    ],
  },
  {
    label: "Professional resources",
    status: "planned",
    items: [
      "Reflection guides",
      "Manager tools",
      "Discussion guides",
      "Checklists",
      "Workbooks",
      "Leadership prompts",
      "Hospitality resources",
    ],
  },
  {
    label: "Learning experiences",
    status: "planned",
    items: [
      "Workshops",
      "Academy-linked sessions",
      "Manager development",
      "Leadership intensives",
      "Guest conversations",
      "Continued-development programs",
    ],
  },
  {
    label: "Events",
    status: "future",
    items: [
      "Community gatherings",
      "Professional breakfasts",
      "Leadership tables",
      "Hospitality conversations",
      "Experience-focused events",
      "Future conferences",
    ],
  },
];

/* -------------------------------------------------------------------------
   SECTION 13 — Example tables
   These are ILLUSTRATIONS of what a gathering could cover. None is scheduled,
   and no facilitator, date, venue, or attendance figure may ever be added.
   ------------------------------------------------------------------------- */
export const exampleTables: { title: string; topics: string[] }[] = [
  {
    title: "The Leadership Table",
    topics: [
      "Leadership challenges",
      "Accountability",
      "Communication",
      "Team development",
      "Decision-making",
      "Peer discussion",
      "Action commitments",
    ],
  },
  {
    title: "The Hospitality Table",
    topics: [
      "Service standards",
      "Guest experience",
      "Professional presence",
      "Experience recovery",
      "Hospitality culture",
      "Industry realities",
      "Future trends",
    ],
  },
  {
    title: "The Manager Table",
    topics: [
      "New-manager challenges",
      "Coaching",
      "Documentation",
      "Delegation",
      "Team communication",
      "Operating rhythms",
      "Leadership confidence",
    ],
  },
  {
    title: "The Founder Table",
    topics: [
      "Building systems",
      "Culture",
      "Service",
      "Hiring",
      "Growth",
      "Standards",
      "Founder responsibility",
      "Business reality",
    ],
  },
  {
    title: "The Experience Table",
    topics: [
      "Events",
      "Audience experience",
      "Storytelling",
      "Community building",
      "Environment",
      "Service design",
      "Meaningful connection",
    ],
  },
  {
    title: "The Emerging Tablemaker Experience",
    topics: [
      "Professional readiness",
      "Leadership identity",
      "Confidence",
      "Communication",
      "Hospitality",
      "Career ownership",
      "Mentorship conversations",
    ],
  },
];

/* -------------------------------------------------------------------------
   SECTION 14 — Partnership audiences
   ------------------------------------------------------------------------- */
export const partners: { title: string; body: string }[] = [
  {
    title: "Hospitality organizations",
    body: "Restaurants, hotels, venues, tourism organizations, event companies, and service-driven businesses.",
  },
  {
    title: "Leadership and professional organizations",
    body: "Communities, associations, networks, and programs supporting leaders, managers, founders, or professionals.",
  },
  {
    title: "Workforce-development partners",
    body: "Organizations preparing people for leadership, hospitality, management, professional environments, and employment readiness.",
  },
  {
    title: "Community organizations",
    body: "Groups seeking thoughtful conversations around service, leadership, culture, professional development, and experience.",
  },
  {
    title: "Media and content partners",
    body: "Publications, podcasts, event platforms, and organizations interested in aligned Tablemakers conversations.",
  },
  {
    title: "Venue and event partners",
    body: "Spaces interested in hosting leadership tables, hospitality conversations, professional gatherings, or development experiences.",
  },
  {
    title: "Education and training partners",
    body: "Schools, programs, facilitators, and organizations interested in aligned learning and community experiences.",
  },
];

/* -------------------------------------------------------------------------
   SECTION 15 — Ecosystem relationships
   ------------------------------------------------------------------------- */
export const tmEcosystem: {
  name: string;
  href: string;
  role: string;
  kind: "sector" | "company";
}[] = [
  {
    name: "The 5LA Academy",
    href: "/our-companies/5la-academy",
    kind: "company",
    role: "Provides structured hospitality, leadership, manager, culture, and workforce-development learning.",
  },
  {
    name: "Business Experience",
    href: "/experience-sectors/business",
    kind: "sector",
    role: "Provides operational, organizational, leadership, culture, and service insight shaping Tablemakers conversations.",
  },
  {
    name: "Training Experience",
    href: "/experience-sectors/training",
    kind: "sector",
    role: "Provides the learning, facilitation, leadership-development, and professional-development foundation.",
  },
  {
    name: "Media Experience",
    href: "/experience-sectors/media",
    kind: "sector",
    role: "Supports The Tablemakers Compass, editorial content, conversations, events, and audience development.",
  },
  {
    name: "VelaXity",
    href: "/our-companies/velaxity",
    kind: "company",
    role: "May extend leadership and organizational-intelligence conversations through technology, AI, standards, learning, and executive support.",
  },
  {
    name: "The Georgia B. Society",
    href: "/our-companies/georgia-b-society",
    kind: "company",
    role: "Shares a commitment to making room, preserving meaningful stories, welcoming community, and creating experiences with care.",
  },
];

/* -------------------------------------------------------------------------
   SECTION 16 — Future directions (all unbuilt)
   ------------------------------------------------------------------------- */
export const futureDirections: { title: string; group: string }[] = [
  { title: "Expanded Tablemakers Collective", group: "Community" },
  { title: "Regional gatherings", group: "Community" },
  { title: "Leadership roundtables", group: "Community" },
  { title: "Hospitality conversations", group: "Community" },
  { title: "Manager-development communities", group: "Community" },
  { title: "Founder tables", group: "Community" },
  { title: "Workshops", group: "Learning" },
  { title: "Academy-connected development", group: "Learning" },
  { title: "Mentorship opportunities", group: "Learning" },
  { title: "Professional-resource library", group: "Publishing" },
  { title: "Compass publication archive", group: "Publishing" },
  { title: "Guest contributors", group: "Publishing" },
  { title: "Podcast or video conversations", group: "Publishing" },
  { title: "Annual Tablemakers event", group: "Growth" },
  { title: "Community memberships", group: "Growth" },
  { title: "Tablemaker recognition programs", group: "Growth" },
  { title: "Industry partnerships", group: "Growth" },
];
