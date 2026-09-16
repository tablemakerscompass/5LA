/**
 * The six ways to work with The 5 Loaves Agency.
 *
 * This is the site's single service vocabulary. It replaced two older frames
 * that had drifted apart: the three What We Do offerings and the four
 * Experience Sectors (Business, Technology, Training, Media) that tagged the
 * brand pages. Everything that names what 5LA does — the homepage, What We Do,
 * Work With Us, the inquiry selector, and the ecosystem sections on the
 * company pages — now reads from here, so the six names cannot drift again.
 *
 * Each `slug` doubles as an interest value (see config/inquiry.ts), so any
 * card can deep-link the inquiry form with that choice preselected. The old
 * sector slugs still resolve, as aliases, to the service that carries that
 * work now.
 */

export type ServicePackage = {
  /** Stable key — the interest value, the `?interest=` link, and the anchor. */
  slug: string;
  name: string;
  /** Compact label for tags and tight layouts. */
  shortName: string;
  /** Sequential display number, in canonical order. */
  number: string;
  /** One-line positioning statement. */
  statement: string;
  /** Where the fuller description of this service lives. */
  href: string;
  /** Given full editorial treatment on Work With Us. */
  featured: boolean;
  /** Starting investment, exactly as displayed. */
  startingAt: string;
  /** Qualifying second line under the investment, where one applies. */
  investmentNote?: string;
  /** What the work actually is. */
  summary: string;
  /** Fuller description, for What We Do. */
  overview: string;
  /** Representative capabilities within the service. */
  capabilities: string[];
  /** What the organization is left with. */
  outcome: string;
  /** "Good fit if you're" signals. Featured services only. */
  fitFor?: string[];
  /** Call-to-action label, without the trailing arrow. */
  cta: string;
  /** Accent theme key mapped to design tokens (see globals.css). */
  accent: "burgundy" | "gold" | "green" | "ink";
  /** Editorial photography. Layouts fall back to an accent panel when absent. */
  image?: string;
  /** Descriptive alt text for `image`. */
  imageAlt?: string;
};

/**
 * Canonical order. Numbering, the inquiry selector, and every service list on
 * the site follow this sequence.
 */
export const services: ServicePackage[] = [
  {
    slug: "business-setup",
    name: "Business Setup & Operations",
    shortName: "Business & Operations",
    number: "01",
    statement:
      "We build the operational foundation behind exceptional organizations.",
    href: "/what-we-do#business-setup",
    featured: false,
    startingAt: "Starting at $495",
    summary:
      "For the business owner who has the vision but needs help turning it into an organized, functioning business — systems, SOPs, and structure instead of memory and sticky notes.",
    overview:
      "Business Setup & Operations focuses on how an organization operates, leads, communicates, and delivers consistently. It strengthens the structure behind the customer experience and the environment in which employees perform.",
    capabilities: [
      "Business launch support",
      "Operational assessment",
      "Workflow and process improvement",
      "Department structure and role clarity",
      "Standard operating procedures",
      "Employee policies and manager guides",
      "Accountability systems",
      "Daily and weekly operating rhythms",
      "Internal communication structure",
      "Multi-location operational alignment",
      "HR process development",
      "Project implementation",
    ],
    outcome:
      "Clearer systems, stronger structure, and an organization that runs on documented practice rather than memory.",
    cta: "Let's Build the Business Behind the Business",
    accent: "burgundy",
    image: "/brand/sectors/business.jpg",
    imageAlt:
      "A hospitality executive in a burgundy suit reviewing operating documents at a candlelit dining room table before service.",
  },
  {
    slug: "brand-creative",
    name: "Brand & Creative Direction",
    shortName: "Brand & Creative",
    number: "02",
    statement: "We make a business look like one business.",
    href: "/what-we-do#brand-creative",
    featured: true,
    startingAt: "Starting at $350",
    investmentNote: "Ongoing support available",
    summary:
      "Your brand should feel like one business — not ten disconnected decisions. 5LA helps businesses establish the voice, visual direction, messaging, campaigns, and creative consistency that allow people to recognize and trust the brand.",
    overview:
      "Brand & Creative Direction establishes the voice, visual language, and messaging a business is recognized by, then holds every campaign and touchpoint to it. It is the difference between a business that produces materials and a business people recognize.",
    capabilities: [
      "Brand positioning",
      "Voice and messaging development",
      "Visual direction",
      "Brand guidelines",
      "Campaign concepting",
      "Creative direction",
      "Launch and repositioning support",
      "Collateral and template systems",
      "Brand-to-service alignment",
      "Creative review and consistency",
    ],
    outcome:
      "A brand that reads as one business everywhere it appears, and a clear standard for every creative decision that follows.",
    fitFor: [
      "Launching or repositioning your brand",
      "Unsure whether your message still matches your business",
      "Producing content regularly but struggling with consistency",
      "Tired of making every creative decision alone",
      "Ready for your business to look as professional as the work you provide",
    ],
    cta: "Strengthen My Brand",
    accent: "gold",
  },
  {
    slug: "content-media",
    name: "Content, Media & Marketing",
    shortName: "Content & Marketing",
    number: "03",
    statement: "We keep a business visible to the people it is built for.",
    href: "/what-we-do#content-media",
    featured: false,
    startingAt: "Starting at $275",
    investmentNote: "Monthly support from $650",
    summary:
      "Strategic content and promotional materials designed to keep small businesses visible, consistent, and connected to their audience.",
    overview:
      "Content, Media & Marketing develops the stories, publications, content, and promotional materials that create connection and keep a business present with its audience between the moments it needs them most.",
    capabilities: [
      "Content strategy",
      "Editorial and content calendars",
      "Social and channel management",
      "Brand storytelling",
      "Photo and video production",
      "Promotional materials",
      "Email and audience communication",
      "Publishing support",
      "Audience development",
      "Campaign execution",
    ],
    outcome:
      "A consistent, recognizable presence that keeps the business in front of the right people instead of appearing only when work is slow.",
    cta: "Help My Business Get Seen",
    accent: "gold",
    image: "/brand/sectors/media.jpg",
    imageAlt:
      "A producer reviewing a script at a production desk while a performance is lit on the theater stage behind her.",
  },
  {
    slug: "websites-technology",
    name: "Websites, Technology & AI",
    shortName: "Technology & AI",
    number: "04",
    statement: "We make technology useful, intelligent, and human.",
    href: "/what-we-do#websites-technology",
    featured: false,
    startingAt: "Starting at $950",
    investmentNote: "Custom technology quoted by project",
    summary:
      "Practical digital tools and systems that strengthen your professional presence and simplify processes. We learned the technology so you wouldn't have to.",
    overview:
      "Websites, Technology & AI helps organizations adopt the digital systems, automation, and artificial intelligence that improve how people work, communicate, and make decisions — without adding another disconnected tool.",
    capabilities: [
      "Website design and development",
      "AI strategy and implementation",
      "Workflow automation",
      "Digital-system planning",
      "Business application development",
      "Process modernization",
      "Executive technology support",
      "Technology adoption and training",
      "Digital-product strategy",
      "VelaXity",
    ],
    outcome:
      "Practical technology that supports the organization's actual work instead of creating another process to manage.",
    cta: "Build My Digital Presence",
    accent: "ink",
    image: "/brand/sectors/technology.jpg",
    imageAlt:
      "A diverse leadership team discussing performance dashboards on a wall screen in a dark, gold-accented boardroom.",
  },
  {
    slug: "hospitality-training",
    name: "Hospitality, Training & Culture",
    shortName: "Hospitality & Training",
    number: "05",
    statement: "We develop the people responsible for delivering the promise.",
    href: "/what-we-do#hospitality-training",
    featured: true,
    startingAt: "Starting at $750",
    investmentNote: "Team training from $1,250",
    summary:
      "Great service isn't a script. It's what happens when standards, culture, leadership, and people work together. 5LA helps restaurants, venues, hospitality businesses, service companies, event teams, and guest-facing organizations create stronger experiences from the inside out.",
    overview:
      "Hospitality, Training & Culture prepares leaders, managers, and teams to understand the standard, perform with confidence, and create a consistent experience for the people they serve. It covers both the guest journey and the culture that produces it.",
    capabilities: [
      "Hospitality and guest-service training",
      "Leadership and manager development",
      "Service standards and sequences",
      "Guest journey assessment",
      "Culture standards and development",
      "New-hire and workforce development",
      "Team workshops",
      "Performance-management structure",
      "Experience recovery standards",
      "Multi-location service consistency",
      "The LOAVES framework",
      "The 5LA Academy",
    ],
    outcome:
      "Better-prepared leaders and employees who understand the expectations, have the tools, and carry the organization's promise forward.",
    fitFor: [
      "Struggling with turnover, training, or inconsistent service",
      "Hearing different versions of “how we do things here”",
      "Opening a new concept and want the culture right from day one",
      "Ready to turn tribal knowledge into real systems and SOPs",
      "Looking to improve how customers or guests experience your business",
    ],
    cta: "Strengthen My Team & Guest Experience",
    accent: "green",
    image: "/brand/sectors/training.jpg",
    imageAlt:
      "A facilitator presenting a development framework on a flip chart to an engaged group of professionals in an elegant, green-paneled room.",
  },
  {
    slug: "events-experiences",
    name: "Events & Experiences",
    shortName: "Events",
    number: "06",
    statement: "We turn many moving parts into one seamless experience.",
    href: "/what-we-do#events-experiences",
    featured: true,
    startingAt: "Starting at $350",
    investmentNote: "Event services from $1,500",
    summary:
      "From the first idea to the final guest walking out the door, 5LA helps turn moving parts into one seamless experience — the strategy, logistics, hospitality, planning, and operational details behind successful events.",
    overview:
      "Events & Experiences brings structure to the many moving parts behind live and branded experiences, holding the logistics and the guest experience to the same standard from concept through post-event review.",
    capabilities: [
      "Event concept development",
      "Experience design",
      "Production planning",
      "Run-of-show development",
      "Staffing structure",
      "Guest-flow planning",
      "Vendor coordination",
      "On-site operations",
      "Event guest experience",
      "Business and brand launch experiences",
      "Post-event evaluation",
    ],
    outcome:
      "An event that holds together end to end, with a plan behind it rather than a hope that everything comes together.",
    fitFor: [
      "Planning an event and don't know where to begin",
      "Managing too many moving pieces yourself",
      "Producing a customer, corporate, community, or branded experience",
      "Needing someone focused on both logistics and guest experience",
      "Ready to stop hoping everything comes together and build an actual plan",
    ],
    cta: "Let's Plan the Experience",
    accent: "burgundy",
  },
];

/** The three given full editorial treatment on Work With Us. */
export const featuredServices = services.filter((s) => s.featured);

/** The rest, presented compactly. */
export const additionalServices = services.filter((s) => !s.featured);

/** Look up a service by slug. */
export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);

/** Display name for a service slug, falling back to the slug itself. */
export const serviceName = (slug: string) => getService(slug)?.name ?? slug;

/**
 * The entry point for people who do not need a package yet. Kept separate from
 * `services` because it is scoped by time rather than by discipline.
 */
export const strategySession = {
  slug: "strategy-session",
  name: "Start With a Strategy Session",
  investment: "$150 · 60 minutes",
  summary:
    "Sometimes you don't need a package yet. You need clarity. Bring us the idea, challenge, decision, launch, event, system, or business problem you're trying to work through. We'll spend 60 focused minutes identifying priorities, opportunities, and practical next steps.",
  note: "This is a working session — not a sales call.",
  cta: "Book a Strategy Session",
} as const;

/**
 * Shown under the packages. Starting investments exist to help a visitor judge
 * fit, not to price the work in advance.
 */
export const investmentNote =
  "Every business is different. Starting investments are provided to help you determine fit. Larger or more complex engagements receive a custom proposal.";
