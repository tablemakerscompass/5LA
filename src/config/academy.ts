/**
 * THE 5LA ACADEMY — brand data.
 *
 * Training, leadership-development, and organizational-learning division of
 * The 5 Loaves Agency, LLC.
 *
 * WHAT WAS INSPECTED (2026-07-27) before any curriculum claim was written:
 * - The VelaXity application's Learning Hub (tablemakerscompass/velaxity-os),
 *   which carries the Academy's live learning surface.
 * - `src/app/lib/learningAcademy.ts`, the shared Academy vocabulary.
 * - The company Google Drive, searched for Academy, curriculum, LOAVES, and
 *   Tablemaker material.
 *
 * WHAT IS VERIFIED TO EXIST:
 * - The Tablemaker Standards: four codified principles, each with a written
 *   definition and an operational example (see `tablemakerStandards`).
 * - Academy completion records, issued inside an organization's own workspace
 *   when a training assignment is marked complete (see `completionRecords`).
 *   These are internal records, NOT accredited or third-party credentials.
 * - The LOAVES framework, already approved and used across the 5LA site.
 *
 * WHAT COULD NOT BE VERIFIED:
 * - A written Week One curriculum. The four concepts in `weekOneConcepts` come
 *   from approved brand copy, not from an inspected curriculum file, so the
 *   section is labelled as the foundation in development.
 *
 * NEVER claim: accreditation, degree or diploma status, third-party
 * certification, enrollment counts, completion rates, placement or employment
 * outcomes, named employer partners, testimonials, course prices, durations,
 * start dates, or instructor rosters.
 */

/** Availability language. Never imply more than the label states. */
export type AcStatus = "available" | "in-development" | "planned" | "future";

export const acStatusLabel: Record<AcStatus, string> = {
  available: "Available now",
  "in-development": "In development",
  planned: "Planned",
  future: "Future possibility",
};

export const acBrand = {
  name: "The 5LA Academy",
  slug: "5la-academy",
  path: "/our-companies/5la-academy",
  category: "Hospitality · Leadership · Workforce Development",
  type: "Training, leadership-development, and organizational-learning division",
  parent: "The 5 Loaves Agency, LLC",
  primarySector: "Training Experience",

  positioning:
    "Training experiences that equip people to lead, serve, and operate with excellence.",
  supporting:
    "The 5LA Academy develops practical hospitality, leadership, management, culture, and workforce-learning experiences grounded in real operations and the LOAVES framework.",

  coreMessage: "We hire for hospitality, but we train for excellence.",
  tablemakerMessage:
    "We develop Tablemakers—people who understand how to prepare the environment, carry the standard, and create room for others to succeed.",

  metaTitle:
    "The 5LA Academy | Hospitality, Leadership & Workforce Development",
  metaDescription:
    "Explore The 5LA Academy, offering practical hospitality, leadership, management, culture, and workforce-development experiences grounded in the LOAVES framework.",

  /**
   * Stated wherever completion or credentials could be misread. The Academy is
   * not an accredited institution and does not award recognized credentials.
   */
  accreditationNote:
    "The 5LA Academy is a professional training division, not an accredited school, college, or certifying body. Completion records recognize participation and learning inside an organization; they are not accredited credentials, and no program guarantees employment or placement.",

  /** Inquiry route. The inquiry form itself is built in a later phase. */
  inquiryPath: "/work-with-us",
} as const;

/**
 * Approved assets.
 *
 * The Academy has NO separate approved logo. Per brand direction the page pairs
 * the official 5LA monogram — unaltered — with a serif Academy wordmark, and
 * labels that pairing as a temporary treatment. Do not invent a permanent mark.
 */
export const acAssets = {
  /** Official 5LA monogram, unaltered. Sits on a light tile — it is opaque. */
  monogram: "/brand/5la-monogram.png",
  /** Approved 5LA training photography (also used by the Training sector). */
  hero: "/brand/sectors/training.jpg",
  heroAlt:
    "A facilitator presenting a development framework on a flip chart to an engaged group of professionals seated around a table in a green-panelled room.",
  /**
   * Dedicated Academy photography, curriculum previews, and a social card.
   * NOT SUPPLIED. Never fabricate a certificate, course dashboard, or
   * completion screen.
   */
  tablemakers: undefined as string | undefined,
  curriculumPreview: undefined as string | undefined,
  ogImage: undefined as string | undefined,
};

/* -------------------------------------------------------------------------
   SECTION 3 — Who the Academy develops
   ------------------------------------------------------------------------- */
export const audiences: { title: string; body: string }[] = [
  {
    title: "Frontline professionals",
    body: "Employees responsible for welcoming, serving, communicating with, and supporting customers or guests.",
  },
  {
    title: "New hires",
    body: "People entering an organization who need a clear introduction to expectations, culture, professionalism, and service standards.",
  },
  {
    title: "Emerging leaders",
    body: "Employees preparing to supervise, guide, coach, or influence others.",
  },
  {
    title: "Managers and supervisors",
    body: "Leaders responsible for communication, accountability, performance, service, culture, and daily operations.",
  },
  {
    title: "Executives and business owners",
    body: "Leaders responsible for setting direction, modeling standards, aligning teams, and creating the environment in which others work.",
  },
  {
    title: "Hospitality professionals",
    body: "People working in restaurants, hotels, venues, events, tourism, guest services, and experience-driven organizations.",
  },
  {
    title: "Growing organizations",
    body: "Businesses building consistent onboarding, leadership development, culture, service standards, and employee-learning systems.",
  },
  {
    title: "Workforce-development partners",
    body: "Organizations preparing people for professional environments, hospitality roles, leadership, service, and employment readiness.",
  },
];

/* -------------------------------------------------------------------------
   SECTION 4 — Learning areas
   ------------------------------------------------------------------------- */
export type LearningArea = {
  number: string;
  title: string;
  statement: string;
  topics: string[];
};

export const learningAreas: LearningArea[] = [
  {
    number: "01",
    title: "Hospitality Foundations",
    statement:
      "Hospitality is not limited to a job title or industry. It is the intentional way people are received, understood, served, and remembered.",
    topics: [
      "Understanding hospitality",
      "Guest versus customer experience",
      "First impressions",
      "Professional presence",
      "Welcoming people",
      "Anticipating needs",
      "Service language",
      "Emotional awareness",
      "Personalization",
      "Experience recovery",
      "Teamwork",
      "Closing the experience well",
    ],
  },
  {
    number: "02",
    title: "Leadership Development",
    statement:
      "Leadership is experienced through what people consistently see, hear, receive, and are held accountable to.",
    topics: [
      "Leadership identity",
      "Communication",
      "Decision-making",
      "Accountability",
      "Ownership",
      "Delegation",
      "Coaching",
      "Feedback",
      "Conflict navigation",
      "Team alignment",
      "Culture leadership",
      "Leading change",
      "Executive presence",
      "Emerging-leader preparation",
    ],
  },
  {
    number: "03",
    title: "Manager Development",
    statement:
      "Managers need practical tools for the conversations, decisions, and responsibilities they face every day.",
    topics: [
      "Transitioning into management",
      "Setting expectations",
      "Shift or department leadership",
      "Daily communication",
      "Employee coaching",
      "Performance conversations",
      "Documentation",
      "Problem-solving",
      "Recognition",
      "Manager meetings",
      "Scheduling and preparation",
      "Manager operating rhythms",
      "Follow-through",
    ],
  },
  {
    number: "04",
    title: "Guest Experience & Service Excellence",
    statement:
      "Service excellence becomes sustainable when expectations are clear, practiced, observed, and reinforced.",
    topics: [
      "Guest journey",
      "Customer touchpoints",
      "Service sequence",
      "Professional communication",
      "Listening",
      "Complaint handling",
      "Experience recovery",
      "Service consistency",
      "Brand promise",
      "Environment and presentation",
      "Cross-department service",
      "Memorable moments",
      "Service accountability",
    ],
  },
  {
    number: "05",
    title: "Workforce Readiness",
    statement:
      "Workforce readiness connects employability with the professionalism, judgment, communication, and ownership required to succeed.",
    topics: [
      "Workplace expectations",
      "Professional communication",
      "Reliability",
      "Time awareness",
      "Personal responsibility",
      "Appearance and presence",
      "Problem-solving",
      "Team collaboration",
      "Customer awareness",
      "Confidence",
      "Workplace conduct",
      "Role ownership",
      "Career preparation",
    ],
  },
  {
    number: "06",
    title: "Culture & Employee Experience",
    statement:
      "Culture is not what the organization says once. It is what people experience repeatedly.",
    topics: [
      "Values in practice",
      "Culture expectations",
      "Employee experience",
      "Communication standards",
      "Trust and accountability",
      "Team alignment",
      "Recognition",
      "Belonging and dignity",
      "Culture reset",
      "Leadership consistency",
      "Shared language",
      "Change adoption",
    ],
  },
  {
    number: "07",
    title: "Operational Learning",
    statement:
      "Training becomes more useful when it reflects the systems and procedures employees are actually expected to use.",
    topics: [
      "SOP understanding",
      "Role clarity",
      "Service standards",
      "Opening and closing expectations",
      "Escalation",
      "Incident awareness",
      "Manager routines",
      "Department coordination",
      "Operational communication",
      "Accountability",
      "Quality standards",
      "Multi-location consistency",
    ],
  },
  {
    number: "08",
    title: "Custom Organizational Learning",
    statement:
      "Customized learning begins with the organization’s people, work, standards, and desired experience—not a recycled presentation.",
    topics: [
      "Training-needs assessment",
      "Curriculum design",
      "Role-based learning",
      "Facilitator guides",
      "Participant workbooks",
      "Digital modules",
      "Learning pathways",
      "Manager reinforcement",
      "Train-the-trainer programs",
      "Workshops",
      "Learning calendars",
      "Knowledge checks",
      "Evaluation plans",
      "Organizational learning strategy",
    ],
  },
];

/* -------------------------------------------------------------------------
   SECTION 5 — LOAVES, in Academy terms
   Same six values as the approved 5LA framework, defined for learners.
   ------------------------------------------------------------------------- */
export const loaves: { letter: string; word: string; def: string }[] = [
  {
    letter: "L",
    word: "Leadership",
    def: "Understand how choices, communication, preparation, and behavior influence the people and experience around you.",
  },
  {
    letter: "O",
    word: "Ownership",
    def: "Take responsibility for your role, the standard, the work, and the outcome.",
  },
  {
    letter: "A",
    word: "Alignment",
    def: "Connect individual performance with team expectations, organizational priorities, and the shared mission.",
  },
  {
    letter: "V",
    word: "Vision",
    def: "Understand what is being built and how your contribution helps move it forward.",
  },
  {
    letter: "E",
    word: "Excellence",
    def: "Perform with care, consistency, discipline, professionalism, and attention to detail.",
  },
  {
    letter: "S",
    word: "Service",
    def: "Recognize the dignity, needs, and experience of the people you lead, support, and serve.",
  },
];

/* -------------------------------------------------------------------------
   SECTION 6 — Current Academy foundation
   ------------------------------------------------------------------------- */

/**
 * VERIFIED. The Tablemaker Standards are codified in the Academy's live
 * learning surface, each with a definition and an operational example. This is
 * the Academy material that demonstrably exists today.
 */
export const tablemakerStandards: {
  title: string;
  definition: string;
  example: string;
}[] = [
  {
    title: "Presence",
    definition:
      "The foundation of all hospitality — being completely available, intellectually and emotionally, to the person in front of you.",
    example:
      "Pausing the transaction and holding eye contact rather than continuing to type through the conversation.",
  },
  {
    title: "Anticipation",
    definition:
      "Meeting the needs a guest has not expressed, before they have to ask.",
    example:
      "Noticing a guest returning from a run and having chilled water ready before they reach the desk.",
  },
  {
    title: "Emotional Awareness",
    definition:
      "Reading energy and expression, then adjusting pace and tone to match what the moment actually needs.",
    example:
      "Recognizing that a guest is exhausted from travel and moving straight to the room key rather than making small talk.",
  },
  {
    title: "Ownership",
    definition:
      "Never handing a problem to another department. Whoever hears the concern owns the resolution.",
    example:
      "A guest mentions a broken air conditioner to the bartender; the bartender calls engineering and follows up personally.",
  },
];

/**
 * Week One as described in approved brand copy. NOT verified against a written
 * curriculum — no such document was found in the application or the company
 * Drive — so the section is presented as the foundation in development.
 */
export const weekOneConcepts: { title: string; body: string }[] = [
  {
    title: "Orientation and Culture",
    body: "Introduces learners to the Academy, the role of culture, and the expectations shaping the learning experience.",
  },
  {
    title: "Understanding LOAVES",
    body: "Explores Leadership, Ownership, Alignment, Vision, Excellence, and Service as the foundation for professional and organizational excellence.",
  },
  {
    title: "First Impressions",
    body: "Examines how presence, preparation, communication, environment, and behavior shape the experience before service fully begins.",
  },
  {
    title: "Reflection: Building Your Own Table",
    body: "Encourages learners to consider the kind of environment they are responsible for creating and the people they are making room to support.",
  },
];

/**
 * VERIFIED. Completion records an organization can issue inside its own
 * workspace when a training assignment is marked complete. These recognize
 * participation and learning — they are not accredited credentials.
 */
export const completionRecords: string[] = [
  "Presence Certified",
  "Anticipation Certified",
  "Emotional Awareness Certified",
  "Ownership Certified",
  "Tablemaker Standards Certified",
  "Guest Journey Certified",
  "Service Recovery Certified",
  "Roleplay Proficiency",
  "Onboarding Complete",
  "Training Completion",
];

/* -------------------------------------------------------------------------
   SECTION 7 — Tablemaker qualities
   ------------------------------------------------------------------------- */
export const tablemakerQualities: string[] = [
  "Prepared",
  "Responsible",
  "Welcoming",
  "Observant",
  "Accountable",
  "Service-minded",
  "Consistent",
  "Courageous",
  "Intentional",
  "Committed to excellence",
];

/* -------------------------------------------------------------------------
   SECTION 8 — Training philosophy
   ------------------------------------------------------------------------- */
export const philosophy: { title: string; body: string }[] = [
  {
    title: "Relevant",
    body: "Learning should reflect the audience’s actual responsibilities, challenges, and operating environment.",
  },
  {
    title: "Practical",
    body: "Participants should understand what to do differently after the learning experience.",
  },
  {
    title: "Interactive",
    body: "Discussion, reflection, scenarios, application, and practice strengthen understanding.",
  },
  {
    title: "Human-centered",
    body: "Learning should respect participants’ dignity, experience, concerns, and pace.",
  },
  {
    title: "Reinforced",
    body: "Managers, communication, tools, and follow-up should continue supporting the standard.",
  },
  {
    title: "Operationally connected",
    body: "Training must align with the organization’s policies, systems, leadership behavior, and available resources.",
  },
];

/* -------------------------------------------------------------------------
   SECTION 9 — Learning formats
   ------------------------------------------------------------------------- */
export const formats: { title: string; body: string }[] = [
  {
    title: "Live organizational workshops",
    body: "In-person or virtual learning built around discussion, practice, reflection, and application.",
  },
  {
    title: "Leadership intensives",
    body: "Focused learning experiences for executives, managers, supervisors, or emerging leaders.",
  },
  {
    title: "Multi-session programs",
    body: "Structured learning pathways supporting continued development over time.",
  },
  {
    title: "Digital learning",
    body: "Guided modules, resources, reflection activities, and knowledge reinforcement.",
  },
  {
    title: "Customized company training",
    body: "Learning built around the organization’s standards, workforce, goals, and operating environment.",
  },
  {
    title: "Train-the-trainer development",
    body: "Preparation for managers, internal facilitators, or leaders responsible for continuing the learning.",
  },
  {
    title: "Team-development experiences",
    body: "Facilitated experiences supporting communication, alignment, accountability, culture, and collaboration.",
  },
  {
    title: "Professional resources",
    body: "Workbooks, facilitator guides, manager tools, checklists, discussion guides, and reinforcement materials.",
  },
];

/* -------------------------------------------------------------------------
   SECTION 10 — Organizational training
   ------------------------------------------------------------------------- */
export const orgTrainingAreas: string[] = [
  "Hospitality standards",
  "Guest experience",
  "Manager development",
  "Leadership alignment",
  "New-hire orientation",
  "Culture and values",
  "Service recovery",
  "Professional communication",
  "Workforce readiness",
  "SOP introduction",
  "Change adoption",
  "Multi-location standards",
  "Train-the-trainer preparation",
];

export const orgProcess: { number: string; title: string; body: string }[] = [
  {
    number: "01",
    title: "Discover",
    body: "Understand the organization, audience, standards, challenges, and desired outcome.",
  },
  {
    number: "02",
    title: "Assess",
    body: "Identify knowledge, skill, behavior, leadership, and system gaps.",
  },
  {
    number: "03",
    title: "Design",
    body: "Build the curriculum, learning activities, resources, scenarios, and reinforcement plan.",
  },
  {
    number: "04",
    title: "Facilitate",
    body: "Deliver the experience through instruction, discussion, reflection, and application.",
  },
  {
    number: "05",
    title: "Reinforce",
    body: "Equip managers and participants with tools supporting continued use.",
  },
  {
    number: "06",
    title: "Evaluate",
    body: "Review feedback, understanding, application, and future development needs.",
  },
];

/* -------------------------------------------------------------------------
   SECTION 11 — Individual professional development
   No individual course is open for enrollment. Statuses reflect that.
   ------------------------------------------------------------------------- */
export const individualLearning: { title: string; status: AcStatus }[] = [
  { title: "The LOAVES framework", status: "available" },
  { title: "Tablemaker development", status: "available" },
  { title: "Hospitality foundations", status: "in-development" },
  { title: "Service excellence", status: "in-development" },
  { title: "Leadership readiness", status: "planned" },
  { title: "New-manager preparation", status: "planned" },
  { title: "Professional communication", status: "planned" },
  { title: "Accountability", status: "planned" },
  { title: "Culture and teamwork", status: "planned" },
  { title: "Workplace confidence", status: "future" },
  { title: "Career readiness", status: "future" },
];

/* -------------------------------------------------------------------------
   SECTION 12 — Possible deliverables
   ------------------------------------------------------------------------- */
export const deliverables: string[] = [
  "Training-needs assessment",
  "Customized curriculum",
  "Leadership workshop",
  "Manager-development program",
  "Hospitality training",
  "New-hire orientation",
  "Guest-service program",
  "Culture workshop",
  "Facilitator guide",
  "Participant workbook",
  "Digital learning module",
  "Learning pathway",
  "Training calendar",
  "Manager reinforcement toolkit",
  "Discussion guide",
  "Knowledge checks",
  "Train-the-trainer program",
  "Evaluation plan",
  "Professional-development resource",
];

/* -------------------------------------------------------------------------
   SECTION 13 — Experience outcomes (design intent, never guarantees)
   ------------------------------------------------------------------------- */
export const outcomes: string[] = [
  "Clearer expectations",
  "More confident employees",
  "Better-prepared managers",
  "Stronger leadership communication",
  "More consistent guest service",
  "Greater accountability",
  "Better connection to organizational values",
  "Improved role understanding",
  "More practical application of standards",
  "Stronger workplace professionalism",
  "More intentional culture",
  "Greater readiness for responsibility",
];

/* -------------------------------------------------------------------------
   SECTION 14 — Partnership audiences
   ------------------------------------------------------------------------- */
export const partners: { title: string; body: string }[] = [
  {
    title: "Hospitality businesses",
    body: "Restaurants, hotels, venues, event companies, and guest-experience organizations.",
  },
  {
    title: "Small and growing businesses",
    body: "Organizations formalizing onboarding, management, culture, service, and employee development.",
  },
  {
    title: "Multi-location operators",
    body: "Businesses seeking more consistent leadership and training across teams and locations.",
  },
  {
    title: "Workforce-development organizations",
    body: "Programs preparing people for employment, hospitality, service, professional environments, and leadership.",
  },
  {
    title: "Community organizations",
    body: "Groups supporting career readiness, youth or adult development, leadership, and professional growth.",
  },
  {
    title: "Faith and service organizations",
    body: "Organizations seeking aligned learning around service, leadership, hospitality, communication, and responsibility.",
  },
  {
    title: "Educational and training partners",
    body: "Schools, facilitators, programs, and organizations interested in aligned workforce or hospitality development.",
  },
];

/* -------------------------------------------------------------------------
   SECTION 15 — VelaXity connection
   VERIFIED against the VelaXity Learning Hub. Anything not present there is
   labelled, and no LMS integration is claimed.
   ------------------------------------------------------------------------- */
export const velaxityConnections: { title: string; status: AcStatus }[] = [
  { title: "Learning resource library", status: "available" },
  { title: "Training assignments", status: "available" },
  { title: "Completion visibility", status: "available" },
  { title: "Completion records", status: "available" },
  { title: "Standards reinforcement", status: "available" },
  { title: "Manager tools", status: "available" },
  { title: "Role-based access", status: "available" },
  { title: "Leadership-development pathways", status: "in-development" },
  { title: "Organizational learning priorities", status: "in-development" },
  { title: "Learning analytics", status: "in-development" },
  { title: "Guided scenarios and roleplay", status: "in-development" },
  { title: "AI-supported preparation", status: "planned" },
];

/* -------------------------------------------------------------------------
   SECTION 16 — Ecosystem relationships
   ------------------------------------------------------------------------- */
export const acEcosystem: {
  name: string;
  href: string;
  role: string;
  kind: "sector" | "company";
}[] = [
  {
    name: "Training Experience",
    href: "/experience-sectors/training",
    kind: "sector",
    role: "Provides the learning, leadership, facilitation, workforce-development, and professional-development foundation.",
  },
  {
    name: "Business Experience",
    href: "/experience-sectors/business",
    kind: "sector",
    role: "Ensures learning aligns with operations, SOPs, leadership expectations, service standards, and accountability.",
  },
  {
    name: "Technology Experience",
    href: "/experience-sectors/technology",
    kind: "sector",
    role: "May support digital learning, knowledge access, adoption, AI tools, and VelaXity.",
  },
  {
    name: "Media Experience",
    href: "/experience-sectors/media",
    kind: "sector",
    role: "Supports branded learning, storytelling, training content, guides, and audience-facing educational experiences.",
  },
  {
    name: "Tablemakers",
    href: "/our-companies/tablemakers",
    kind: "company",
    role: "Extends Academy learning into thought leadership, professional community, resources, and continued development.",
  },
];

/* -------------------------------------------------------------------------
   SECTION 17 — Future directions (all unbuilt or unapproved)
   ------------------------------------------------------------------------- */
export const futureDirections: { title: string; group: string }[] = [
  { title: "Expanded digital courses", group: "Programs" },
  { title: "Structured Academy pathways", group: "Programs" },
  { title: "Leadership cohorts", group: "Programs" },
  { title: "Manager-development programs", group: "Programs" },
  { title: "Live Academy intensives", group: "Programs" },
  { title: "Hospitality certificates", group: "Recognition" },
  { title: "Approved certification programs", group: "Recognition" },
  { title: "Tablemaker development pathways", group: "Recognition" },
  { title: "Organizational learning portals", group: "Platform" },
  { title: "Academy resource library", group: "Platform" },
  { title: "VelaXity-connected learning", group: "Platform" },
  { title: "Train-the-trainer programs", group: "Community" },
  { title: "Workforce-development partnerships", group: "Community" },
  { title: "Community learning programs", group: "Community" },
  { title: "Youth or emerging-professional pathways", group: "Community" },
];

/* -------------------------------------------------------------------------
   SECTION 18 — Inquiry topics
   ------------------------------------------------------------------------- */
export const inquiryTopics: string[] = [
  "Hospitality",
  "Leadership",
  "Manager development",
  "Guest experience",
  "Culture",
  "New-hire training",
  "Workforce readiness",
  "Organizational learning",
  "Customized curriculum",
  "Team development",
  "Train-the-trainer support",
];
