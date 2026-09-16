/**
 * The six ways to work with The 5 Loaves Agency, plus the strategy session
 * that precedes them.
 *
 * Single source of truth for the Work With Us page. Each `slug` doubles as an
 * interest value (see config/inquiry.ts), so a package card can deep-link the
 * inquiry form with the right choice already selected.
 */

export type ServicePackage = {
  /** Stable key — also the interest value and `?interest=` deep link. */
  slug: string;
  name: string;
  /** Starting investment, exactly as displayed. */
  startingAt: string;
  /** Qualifying second line under the investment, where one applies. */
  investmentNote?: string;
  /** What the work actually is. */
  summary: string;
  /** "Good fit if you're" signals. Featured packages only. */
  fitFor?: string[];
  /** Call-to-action label, without the trailing arrow. */
  cta: string;
};

/**
 * The three packages given full editorial treatment — the work businesses most
 * often arrive asking for.
 */
export const featuredServices: ServicePackage[] = [
  {
    slug: "brand-creative",
    name: "Brand & Creative Direction",
    startingAt: "Starting at $350",
    investmentNote: "Ongoing support available",
    summary:
      "Your brand should feel like one business — not ten disconnected decisions. 5LA helps businesses establish the voice, visual direction, messaging, campaigns, and creative consistency that allow people to recognize and trust the brand.",
    fitFor: [
      "Launching or repositioning your brand",
      "Unsure whether your message still matches your business",
      "Producing content regularly but struggling with consistency",
      "Tired of making every creative decision alone",
      "Ready for your business to look as professional as the work you provide",
    ],
    cta: "Strengthen My Brand",
  },
  {
    slug: "hospitality-training",
    name: "Hospitality, Training & Culture",
    startingAt: "Starting at $750",
    investmentNote: "Team training from $1,250",
    summary:
      "Great service isn't a script. It's what happens when standards, culture, leadership, and people work together. 5LA helps restaurants, venues, hospitality businesses, service companies, event teams, and guest-facing organizations create stronger experiences from the inside out.",
    fitFor: [
      "Struggling with turnover, training, or inconsistent service",
      "Hearing different versions of “how we do things here”",
      "Opening a new concept and want the culture right from day one",
      "Ready to turn tribal knowledge into real systems and SOPs",
      "Looking to improve how customers or guests experience your business",
    ],
    cta: "Strengthen My Team & Guest Experience",
  },
  {
    slug: "events-experiences",
    name: "Events & Experiences",
    startingAt: "Starting at $350",
    investmentNote: "Event services from $1,500",
    summary:
      "From the first idea to the final guest walking out the door, 5LA helps turn moving parts into one seamless experience — the strategy, logistics, hospitality, planning, and operational details behind successful events.",
    fitFor: [
      "Planning an event and don't know where to begin",
      "Managing too many moving pieces yourself",
      "Producing a customer, corporate, community, or branded experience",
      "Needing someone focused on both logistics and guest experience",
      "Ready to stop hoping everything comes together and build an actual plan",
    ],
    cta: "Let's Plan the Experience",
  },
];

/** The rest of what runs underneath, presented compactly. */
export const additionalServices: ServicePackage[] = [
  {
    slug: "business-setup",
    name: "Business Setup & Operations",
    startingAt: "Starting at $495",
    summary:
      "For the business owner who has the vision but needs help turning it into an organized, functioning business — systems, SOPs, and structure instead of memory and sticky notes.",
    cta: "Let's Build the Business Behind the Business",
  },
  {
    slug: "content-media",
    name: "Content, Media & Marketing",
    startingAt: "Starting at $275",
    investmentNote: "Monthly support from $650",
    summary:
      "Strategic content and promotional materials designed to keep small businesses visible, consistent, and connected to their audience.",
    cta: "Help My Business Get Seen",
  },
  {
    slug: "websites-technology",
    name: "Websites, Technology & AI",
    startingAt: "Starting at $950",
    investmentNote: "Custom technology quoted by project",
    summary:
      "Practical digital tools and systems that strengthen your professional presence and simplify processes. We learned the technology so you wouldn't have to.",
    cta: "Build My Digital Presence",
  },
];

/** Every package, in display order. */
export const services: ServicePackage[] = [
  ...featuredServices,
  ...additionalServices,
];

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
