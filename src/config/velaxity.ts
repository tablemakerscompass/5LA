/**
 * VELAXITY — brand data.
 *
 * AI-powered executive operating system developed within The 5 Loaves Agency, LLC.
 *
 * SOURCE OF TRUTH: every hub, capability, and data statement below was verified
 * against the application source (tablemakerscompass/velaxity-os) on 2026-07-27.
 * Each hub carries a `status`, and capabilities carry their own where they
 * differ from the hub. Do not add a capability here that is not in the product.
 *
 * VERIFIED ARCHITECTURE (for anyone editing the trust section):
 * - Auth: Supabase Auth, magic-link sign-in. MFA is NOT enabled — the app's own
 *   MFA screen says code-based verification is not yet active.
 * - Data: Supabase Postgres, with row-level-security policies and four
 *   permission roles (owner, admin, manager, employee) enforced by route guards.
 * - Billing: Stripe, via server-side checkout/portal/webhook functions.
 * - Integration: Google Reviews sync (scheduled). No other integration exists.
 * - AI: deterministic. The AI Hub derives answers from the workspace's own
 *   records. No LLM or external AI provider is wired in — no OpenAI, Anthropic,
 *   or any other model receives workspace data today.
 *
 * NEVER claim: SOC 2, ISO, HIPAA, end-to-end encryption, zero retention,
 * enterprise-grade security, anonymity, guaranteed confidentiality, regulatory
 * compliance, predictive accuracy, uptime, or any customer outcome.
 */

/** Availability language. Never imply more than the label states. */
export type VxStatus = "available" | "in-development" | "planned" | "future";

export const vxStatusLabel: Record<VxStatus, string> = {
  available: "Available now",
  "in-development": "In development",
  planned: "Planned",
  future: "Future possibility",
};

export const vxBrand = {
  name: "VelaXity",
  slug: "velaxity",
  path: "/our-companies/velaxity",
  category: "Artificial Intelligence · Leadership · Operations",
  type: "AI-powered executive operating system",
  parent: "The 5 Loaves Agency, LLC",
  primarySector: "Technology Experience",

  positioning:
    "An AI-powered executive operating system built around people, performance, standards, culture, and organizational growth.",
  supporting:
    "VelaXity gives leaders one connected executive environment for accessing organizational intelligence, managing priorities, supporting teams, strengthening standards, and making better-informed decisions.",

  coreMessage:
    "Leadership has enough tools. VelaXity is designed to create one connected place to think, see, decide, and lead.",
  supportingLine:
    "Built to help leaders move from scattered information toward clearer organizational intelligence.",

  metaTitle: "VelaXity | AI-Powered Executive Operating System",
  metaDescription:
    "Discover VelaXity, an AI-powered executive operating system helping leaders manage people, performance, standards, culture, operations, and organizational growth.",

  /**
   * VERIFIED: the AI Hub is deterministic. Its own source states that
   * everything is "derived only from live Supabase records for the current
   * workspace — no demo data and no unapproved AI generation." Stated plainly
   * so no reader assumes a chatbot or a generative assistant.
   */
  aiNote:
    "Today the platform's intelligence is derived from an organization’s own records inside VelaXity — its standards, team information, learning activity, and operating signals. Generative and conversational AI features are in development and are not part of the platform yet.",

  /** Demo route. Preselects VelaXity on the Work With Us inquiry form. */
  demoPath: "/work-with-us?interest=velaxity",
} as const;

/**
 * Approved brand assets, copied unaltered from the application repository.
 * The wordmark is set in the approved serif rather than shipped as artwork —
 * this is how the application itself renders it. Do not redraw the monogram,
 * add an arrow, bevel or emboss it, or alter the ring.
 */
export const vxAssets = {
  /** VX monogram in its ring, on the approved deep-maroon ground. */
  monogram: "/brand/velaxity/velaxity-monogram.png",
  /** Same monogram, WebP, used at larger display sizes. */
  logo: "/brand/velaxity/velaxity-logo.webp",
  /** Approved executive photography used by the application itself. */
  hero: "/brand/velaxity/velaxity-hero.webp",
  /**
   * Real interface screenshots, captured from the running application with the
   * signed-in account identity blurred out. Never fabricate a screenshot or
   * present a mockup as a live screen.
   */
  screenExecutive: "/brand/velaxity/velaxity-executive-hub.png" as
    | string
    | undefined,
  screenAi: "/brand/velaxity/velaxity-ai-hub.png" as string | undefined,
  screenStandards: "/brand/velaxity/velaxity-standards-hub.png" as
    | string
    | undefined,
  /** Social-sharing card for this page. NOT SUPPLIED. */
  ogImage: undefined as string | undefined,
};

/* -------------------------------------------------------------------------
   SECTION 3 — The problems VelaXity addresses
   ------------------------------------------------------------------------- */
export const challenges: { title: string; body: string }[] = [
  {
    title: "Scattered organizational information",
    body: "Standards, team concerns, performance, training, priorities, client activity, and operational information live in different places.",
  },
  {
    title: "Leadership operating reactively",
    body: "Important work is driven by the newest message or most urgent issue instead of clear priorities and organizational visibility.",
  },
  {
    title: "AI without organizational context",
    body: "Generic AI tools can answer questions but may not understand the organization’s standards, people, culture, clients, or priorities.",
  },
  {
    title: "Culture that is difficult to see",
    body: "Leaders may sense changes in morale, communication, trust, or accountability without a clear way to organize those signals.",
  },
  {
    title: "Standards that are inconsistently reinforced",
    body: "Policies and expectations exist, but leaders struggle to monitor, communicate, and strengthen them across teams or locations.",
  },
  {
    title: "Learning disconnected from performance",
    body: "Training is delivered without a connected view of employee needs, completion, application, or organizational priorities.",
  },
  {
    title: "Too many leadership systems",
    body: "Executives lose time moving between platforms that were not designed to work as one leadership environment.",
  },
  {
    title: "Limited portfolio visibility",
    body: "Leaders overseeing multiple clients, locations, projects, or divisions may not have a concise view of what requires attention.",
  },
];

/* -------------------------------------------------------------------------
   SECTION 4 — Platform architecture
   ------------------------------------------------------------------------- */
export const architectureLayers: {
  label: string;
  members: string[];
  note: string;
}[] = [
  {
    label: "Leadership layer",
    members: ["Executive intelligence", "Predictive insight"],
    note: "Where priorities, organizational pulse, and forward-looking attention areas surface.",
  },
  {
    label: "Operating layer",
    members: ["Standards", "Learning", "Teams"],
    note: "Where the day-to-day work of consistency, development, and people is held.",
  },
  {
    label: "Reach layer",
    members: ["Portfolio", "Artificial intelligence"],
    note: "Where visibility extends across clients or locations, and where organizational context is interpreted.",
  },
];

/* -------------------------------------------------------------------------
   SECTION 5 — The hubs
   VERIFIED against src/app/routes.tsx and each hub's screens.
   ------------------------------------------------------------------------- */
export type VxHub = {
  id: string;
  name: string;
  status: VxStatus;
  positioning: string;
  /** Capabilities present in the application today, unless marked otherwise. */
  areas: { label: string; status?: VxStatus }[];
  /** An honest limit, stated so no reader over-reads the hub. */
  limit?: string;
};

export const hubs: VxHub[] = [
  {
    id: "executive",
    name: "Executive Hub",
    status: "available",
    positioning:
      "A leadership command center for priorities, organizational pulse, executive briefs, and decision support.",
    areas: [
      { label: "Executive overview" },
      { label: "Brief archive" },
      { label: "Culture analytics" },
      { label: "Risk summary" },
      { label: "Cross-hub summaries", status: "in-development" },
    ],
    limit:
      "Briefs are assembled from the records an organization keeps in VelaXity; they are not generated automatically.",
  },
  {
    id: "ai",
    name: "AI Hub",
    status: "available",
    positioning:
      "Organizational intelligence derived from the workspace’s own records, organized around the leader’s role and responsibilities.",
    areas: [
      { label: "Ask about the workspace" },
      { label: "Diagnosis" },
      { label: "Insights" },
      { label: "Reports" },
      { label: "Action plans" },
      { label: "Knowledge library" },
      { label: "Saved outputs and history" },
      { label: "Generative drafting and conversation", status: "in-development" },
    ],
    limit:
      "Answers are derived from the organization’s own records by rules, not produced by a language model. No external AI provider receives workspace information.",
  },
  {
    id: "standards",
    name: "Standards Hub",
    status: "available",
    positioning:
      "A connected home for policies, standards, SOPs, expectations, and organizational consistency.",
    areas: [
      { label: "SOP library" },
      { label: "Version history" },
      { label: "Service journeys" },
      { label: "Service recovery" },
      { label: "Templates" },
      { label: "Search" },
      { label: "Mobile access" },
    ],
    limit:
      "The hub organizes and communicates standards. It does not perform formal compliance monitoring or auditing.",
  },
  {
    id: "learning",
    name: "Learning Hub",
    status: "available",
    positioning:
      "Leadership and workforce-development visibility connected to organizational needs.",
    areas: [
      { label: "Assignments" },
      { label: "Progress" },
      { label: "Certifications" },
      { label: "Feedback" },
      { label: "Resource library" },
      { label: "Scenarios and roleplay", status: "in-development" },
      { label: "Learning analytics", status: "in-development" },
    ],
    limit:
      "Scenario and roleplay content waits on approved material and a connected engine; those screens stay empty until then.",
  },
  {
    id: "team",
    name: "Team Hub",
    status: "available",
    positioning:
      "A leadership view of people, roles, communication, development, and team needs.",
    areas: [
      { label: "Team directory" },
      { label: "Member profiles" },
      { label: "Coaching" },
      { label: "Recognition" },
      { label: "Reflections" },
      { label: "Training and certifications" },
      { label: "Growth planning", status: "in-development" },
    ],
    limit:
      "VelaXity is not a payroll, benefits, or full HRIS platform, and does not perform those functions.",
  },
  {
    id: "portfolio",
    name: "Portfolio Hub",
    status: "available",
    positioning:
      "Visibility across clients, locations, projects, properties, or organizational units.",
    areas: [
      { label: "Portfolio overview" },
      { label: "Add a client" },
      { label: "Comparison" },
      { label: "Regional view" },
      { label: "Alerts" },
      { label: "Briefs" },
    ],
    limit:
      "Portfolio views require several live workspaces with real records. Until those exist the screens stay empty rather than showing sample properties.",
  },
  {
    id: "predictive",
    name: "Predictive Hub",
    status: "in-development",
    positioning:
      "Forward-looking insight intended to help leaders identify patterns, risks, opportunities, and emerging needs.",
    areas: [
      { label: "Overview", status: "in-development" },
      { label: "Turnover signals", status: "in-development" },
      { label: "Burnout signals", status: "in-development" },
      { label: "Mystery shopper", status: "in-development" },
      { label: "Competitive view", status: "in-development" },
      { label: "Trends", status: "in-development" },
      { label: "Alerts", status: "in-development" },
    ],
    limit:
      "This hub is built but deliberately shows nothing yet. It waits on approved model logic and persisted results — no forecasts, risk scores, or sample charts are displayed.",
  },
];

/* -------------------------------------------------------------------------
   SECTION 6 — AI principles
   ------------------------------------------------------------------------- */
export const aiPrinciples: { title: string; body: string }[] = [
  {
    title: "Context before answers",
    body: "AI should understand the role, organization, standards, and task before offering support.",
  },
  {
    title: "Leadership remains responsible",
    body: "AI may assist with analysis and preparation, but people remain accountable for decisions.",
  },
  {
    title: "Useful over impressive",
    body: "The best AI feature is the one that meaningfully improves the work.",
  },
  {
    title: "Clear review",
    body: "Outputs should be reviewed, corrected, and used with professional judgment.",
  },
  {
    title: "Responsible information use",
    body: "Organizations should understand what information is entered and how it is handled.",
  },
  {
    title: "Simplicity",
    body: "AI should reduce unnecessary steps rather than create another complicated workflow.",
  },
];

/* -------------------------------------------------------------------------
   SECTION 7 — Who it is for
   ------------------------------------------------------------------------- */
export const audiences: { title: string; body: string }[] = [
  {
    title: "Executives and business owners",
    body: "Leaders responsible for organizational direction, priorities, people, standards, performance, and growth.",
  },
  {
    title: "Hospitality leaders",
    body: "Operators managing guest experience, teams, service standards, multiple departments, locations, or properties.",
  },
  {
    title: "Multi-location operators",
    body: "Organizations seeking greater visibility and consistency across managers, teams, and locations.",
  },
  {
    title: "Leadership teams",
    body: "Executives and department leaders who need shared context without losing role-specific responsibility.",
  },
  {
    title: "Consultants and management partners",
    body: "Professionals overseeing clients, portfolios, projects, implementation, standards, or organizational development.",
  },
  {
    title: "Growing organizations",
    body: "Businesses moving beyond informal systems and seeking a more connected leadership environment.",
  },
  {
    title: "Experience-driven companies",
    body: "Organizations where people, culture, service, standards, and operations directly shape the brand promise.",
  },
];

/* -------------------------------------------------------------------------
   SECTION 8 — Distinctions
   ------------------------------------------------------------------------- */
export const distinctions: { number: string; title: string; body: string }[] = [
  {
    number: "01",
    title: "Grounded in real operations",
    body: "VelaXity was shaped by experience across hospitality, events, workforce development, leadership, culture, and organizational systems.",
  },
  {
    number: "02",
    title: "More than a chatbot",
    body: "AI is one part of a broader executive environment.",
  },
  {
    number: "03",
    title: "Human-centered",
    body: "The platform is designed to support leadership, communication, development, and service—not remove humanity from the work.",
  },
  {
    number: "04",
    title: "Connected by design",
    body: "Standards, learning, teams, priorities, and organizational insight should strengthen one another.",
  },
  {
    number: "05",
    title: "Built for implementation",
    body: "The platform should reflect how organizations actually work and how leaders adopt new systems.",
  },
];

/* -------------------------------------------------------------------------
   SECTION 9 — Implementation journey
   ------------------------------------------------------------------------- */
export const implementationSteps: {
  number: string;
  title: string;
  body: string;
}[] = [
  {
    number: "01",
    title: "Discovery",
    body: "Understand the organization, leadership structure, priorities, standards, teams, workflows, and desired outcomes.",
  },
  {
    number: "02",
    title: "Configuration",
    body: "Organize the platform around the organization’s roles, information, standards, portfolio, and leadership needs.",
  },
  {
    number: "03",
    title: "Organizational identity",
    body: "Establish approved language, values, standards, operating context, and leadership expectations within the platform where supported.",
  },
  {
    number: "04",
    title: "Setup",
    body: "Prepare users, access, data, hub structure, resources, and initial content.",
  },
  {
    number: "05",
    title: "Leadership introduction",
    body: "Help leaders understand the platform, responsibilities, workflows, and expectations for use.",
  },
  {
    number: "06",
    title: "Adoption",
    body: "Support practical use through training, communication, reinforcement, and feedback.",
  },
  {
    number: "07",
    title: "Review and improvement",
    body: "Evaluate what is useful, what needs refinement, and how the platform should evolve with the organization.",
  },
];

/* -------------------------------------------------------------------------
   SECTION 10 — Organizational Identity Suite
   VERIFIED: the first block is captured during onboarding today. The rest is
   established through configuration or is not yet a structured feature.
   ------------------------------------------------------------------------- */
export const identityComponents: { label: string; status: VxStatus }[] = [
  { label: "Company profile", status: "available" },
  { label: "Mission and vision", status: "available" },
  { label: "Core values", status: "available" },
  { label: "Service philosophy", status: "available" },
  { label: "Locations or business units", status: "available" },
  { label: "Leadership roles and permissions", status: "available" },
  { label: "Service standards", status: "available" },
  { label: "Key policies", status: "available" },
  { label: "Learning priorities", status: "in-development" },
  { label: "Organizational priorities", status: "in-development" },
  { label: "Approved terminology", status: "planned" },
  { label: "Brand language", status: "planned" },
  { label: "Culture expectations", status: "planned" },
  { label: "Executive context", status: "planned" },
];

/* -------------------------------------------------------------------------
   SECTION 11 — Leadership outcomes
   Framed as intent, never as guaranteed result.
   ------------------------------------------------------------------------- */
export const outcomes: string[] = [
  "See priorities more clearly",
  "Access organizational context faster",
  "Reduce movement between disconnected tools",
  "Prepare for conversations and decisions",
  "Strengthen standards visibility",
  "Connect learning to organizational needs",
  "Improve portfolio awareness",
  "Organize leadership information",
  "Identify issues requiring attention",
  "Support more consistent follow-through",
  "Create a shared leadership language",
  "Spend more time leading and less time searching",
];

/* -------------------------------------------------------------------------
   SECTION 13 — Data, privacy & responsible use
   Every line verified in the application source. Re-verify before editing.
   ------------------------------------------------------------------------- */
export const trustFacts: { label: string; body: string }[] = [
  {
    label: "How people sign in",
    body: "Access is through Supabase Auth using a magic link sent to a work email address. Code-based multi-factor verification is not enabled yet; the application says so on its own sign-in screen rather than implying otherwise.",
  },
  {
    label: "Where information is stored",
    body: "Organizational records are held in a hosted Postgres database with row-level security, so a workspace’s records are reachable only by that workspace.",
  },
  {
    label: "Who can see what",
    body: "Four roles — owner, admin, manager, and employee — determine which hubs and records a person can reach. Executive, portfolio, and predictive areas are limited to owners and admins.",
  },
  {
    label: "What AI does with your information",
    body: "Nothing leaves the platform for AI processing. The AI Hub reads the workspace’s own records and derives its answers directly; no external AI provider is connected.",
  },
  {
    label: "Connected services",
    body: "Payments are handled by Stripe, which processes billing details rather than VelaXity. A Google Reviews sync can bring public review content in on a schedule. There are no other integrations.",
  },
  {
    label: "Where the limits are",
    body: "VelaXity claims no security certification, no encryption guarantee beyond standard transport and hosting protections, and no regulatory compliance. It is not designed to hold sensitive employee records such as medical, benefits, or payroll information.",
  },
];

/* -------------------------------------------------------------------------
   SECTION 15 — Future directions (none of this is built)
   ------------------------------------------------------------------------- */
export const futureDirections: { title: string; group: string }[] = [
  { title: "Deeper AI personalization", group: "Intelligence" },
  { title: "Cross-hub recommendations", group: "Intelligence" },
  { title: "Advanced organizational insights", group: "Intelligence" },
  { title: "Predictive signals", group: "Intelligence" },
  { title: "Multi-location comparison", group: "Portfolio" },
  { title: "Portfolio intelligence", group: "Portfolio" },
  { title: "Standards alerts", group: "Portfolio" },
  { title: "Expanded integrations", group: "Platform" },
  { title: "Mobile access", group: "Platform" },
  { title: "Custom organizational workflows", group: "Platform" },
  { title: "Role-based executive experiences", group: "Leadership" },
  { title: "Automated executive briefs", group: "Leadership" },
  { title: "Learning recommendations", group: "Leadership" },
];

/* -------------------------------------------------------------------------
   SECTION 16 — Demo conversation topics
   ------------------------------------------------------------------------- */
export const conversationTopics: string[] = [
  "Leadership challenges",
  "Current tools",
  "Organizational visibility",
  "Standards",
  "Learning",
  "Team structure",
  "Multi-location needs",
  "Portfolio oversight",
  "AI readiness",
  "Implementation readiness",
];

/* -------------------------------------------------------------------------
   SECTION 14 — Ecosystem relationships
   ------------------------------------------------------------------------- */
export const vxEcosystem: {
  name: string;
  href: string;
  role: string;
  kind: "sector" | "company";
}[] = [
  {
    name: "Technology Experience",
    href: "/experience-sectors/technology",
    kind: "sector",
    role: "Provides the AI, application, automation, digital-system, and user-experience foundation.",
  },
  {
    name: "Business Experience",
    href: "/experience-sectors/business",
    kind: "sector",
    role: "Provides the operational, organizational, leadership, culture, standards, and implementation foundation.",
  },
  {
    name: "Training Experience",
    href: "/experience-sectors/training",
    kind: "sector",
    role: "Provides leadership development, adoption support, learning, manager preparation, and workforce development.",
  },
  {
    name: "The 5LA Academy",
    href: "/our-companies/5la-academy",
    kind: "company",
    role: "May provide training, implementation learning, leadership development, and role-based support connected to VelaXity.",
  },
  {
    name: "Tablemakers",
    href: "/our-companies/tablemakers",
    kind: "company",
    role: "Extends thought leadership and professional conversation around leadership, culture, hospitality, operations, and the future of experience.",
  },
];
