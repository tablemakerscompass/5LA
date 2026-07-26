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
   * Editorial photography for the sector. Replaceable at any time — layouts
   * crop responsively and fall back to an accent panel when absent.
   */
  image?: string;
  /** Descriptive alt text for `image`. */
  imageAlt?: string;
  /** Approved long-form overview used on the Experience Sectors page. */
  overview?: string;
  /** Representative capabilities within the sector. */
  capabilities?: string[];
  /** What the organization is left with — the experience outcome. */
  outcome?: string;
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
    image: "/brand/sectors/business.jpg",
    imageAlt:
      "A hospitality executive in a burgundy suit reviewing operating documents at a candlelit dining room table before service.",
    overview:
      "Business Experience focuses on how an organization operates, leads, communicates, serves, and delivers consistently. This sector strengthens the structure behind the customer experience and the environment in which employees perform.",
    capabilities: [
      "Business operations",
      "Organizational development",
      "Hospitality consulting",
      "Guest-experience strategy",
      "HR systems and processes",
      "SOP development",
      "Leadership alignment",
      "Culture development",
      "Service standards",
      "Project implementation",
      "Event strategy and management",
      "Business launches",
    ],
    outcome:
      "Clearer systems, stronger leadership, more consistent delivery, and an organization better prepared to support its people and customers.",
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
    image: "/brand/sectors/technology.jpg",
    imageAlt:
      "A diverse leadership team discussing performance dashboards on a wall screen in a dark, gold-accented boardroom.",
    overview:
      "Technology Experience helps organizations adopt AI, automation, digital systems, and executive tools that improve how people work, communicate, make decisions, and manage performance.",
    capabilities: [
      "AI strategy",
      "AI implementation",
      "Workflow automation",
      "Digital-system planning",
      "Business application development",
      "Executive technology support",
      "Process modernization",
      "Organizational intelligence",
      "Digital-product strategy",
      "Technology adoption",
      "Technology training",
      "VelaXity",
    ],
    outcome:
      "Practical technology that supports the organization’s actual work instead of creating another disconnected tool or process.",
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
    image: "/brand/sectors/training.jpg",
    imageAlt:
      "A facilitator presenting a development framework on a flip chart to an engaged group of professionals in an elegant, green-paneled room.",
    overview:
      "Training Experience prepares leaders, managers, employees, and teams to understand the standard, perform with confidence, and create more consistent experiences for the people they serve.",
    capabilities: [
      "Leadership development",
      "Manager development",
      "Hospitality training",
      "Guest-service training",
      "Team workshops",
      "New-hire development",
      "Workforce development",
      "Customized organizational learning",
      "Culture training",
      "The LOAVES framework",
      "The 5LA Academy",
      "Tablemakers resources",
    ],
    outcome:
      "Better-prepared leaders and employees who understand the expectations, possess the tools, and are equipped to carry the organization’s promise forward.",
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
    image: "/brand/sectors/media.jpg",
    imageAlt:
      "A producer reviewing a script at a production desk while a performance is lit on the theater stage behind her.",
    overview:
      "Media Experience develops stories, publications, productions, content, and live experiences that create emotional connection, cultural meaning, and long-term audience engagement.",
    capabilities: [
      "Publishing",
      "Theater",
      "Film and digital theater",
      "Original intellectual property",
      "Story development",
      "Content production",
      "Brand storytelling",
      "Live experiences",
      "Conferences and community conversations",
      "The Georgia B. Media Group",
      "The Georgia B. Society",
      "Aunt Sarah’s Girls",
      "The Sarah Method",
    ],
    outcome:
      "Stories and experiences that audiences remember, discuss, revisit, and carry forward.",
  },
];

export const getSector = (slug: string) =>
  sectors.find((s) => s.slug === slug);
