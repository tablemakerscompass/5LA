/**
 * Capability content inherited from the retired Experience Sectors.
 *
 * These lists were the most detailed statement of the work on the old
 * /our-companies/georgia-b-media-group page. When that route was retired the categories
 * were split across the pages that actually do the work, rather than deleted.
 * Display numbers are resequenced per destination.
 */

import type { Capability } from "@/components/ui/CapabilityAccordion";

/** Publishing, theater, brand storytelling and production structure. */
export const gbMediaCapabilities: Capability[] = [
  {
    n: "01",
    title: "Publishing & Literary Development",
    statement:
      "We help move literary projects from manuscript or concept toward a complete reader, brand, and audience experience.",
    items: [
      "Book concept development",
      "Manuscript planning",
      "Editorial structure",
      "Publishing strategy",
      "Imprint development",
      "Author positioning",
      "Book-launch planning",
      "Reader experience",
      "Discussion guides",
      "Companion resources",
      "Literary brand development",
      "Adaptation planning",
    ],
  },
  {
    n: "02",
    title: "Theater, Live Production & Digital Theater",
    statement:
      "We connect the creative vision with the operational structure required to bring the work to life.",
    items: [
      "Stage-play development",
      "Production planning",
      "Creative direction",
      "Casting strategy",
      "Rehearsal structure",
      "Run-of-show development",
      "Audience experience",
      "Venue planning",
      "Production operations",
      "Visual storytelling",
      "Digital theater",
      "Filmed-performance development",
      "Touring or revival planning",
    ],
  },
  {
    n: "03",
    title: "Brand Storytelling & Content",
    statement:
      "We help brands communicate what they do, why it matters, and how people should feel when they encounter the work.",
    items: [
      "Brand narrative",
      "Founder story",
      "Campaign development",
      "Editorial content",
      "Social content strategy",
      "Video concepts",
      "Interview and conversation formats",
      "Thought leadership",
      "Internal storytelling",
      "Culture communication",
      "Launch storytelling",
      "Audience messaging",
      "Content ecosystems",
    ],
  },
  {
    n: "04",
    title: "Media Strategy & Production Structure",
    statement:
      "Creative work becomes more sustainable when ownership, timelines, resources, and decisions are clearly structured.",
    items: [
      "Creative brief",
      "Development roadmap",
      "Production schedule",
      "Budget framework",
      "Roles and responsibilities",
      "Partnership planning",
      "Content calendar",
      "Audience strategy",
      "Distribution planning",
      "Launch plan",
      "Post-production workflow",
      "Asset management",
      "Evaluation and next-step planning",
    ],
  },
];

/** Live experiences, gatherings and community conversations. */
export const gbSocietyCapabilities: Capability[] = [
  {
    n: "01",
    title: "Live Experiences & Community Engagement",
    statement:
      "We design live experiences that create connection in the room and continue through conversation, content, and community.",
    items: [
      "Conferences",
      "Community conversations",
      "Book events",
      "Theater conversations",
      "Women-focused experiences",
      "Cultural gatherings",
      "Legacy events",
      "Branded experiences",
      "Audience engagement",
      "Facilitated discussions",
      "Partnership experiences",
      "Post-event content and resources",
    ],
  },
];

/** Original story worlds and the IP built around them. */
export const asgCapabilities: Capability[] = [
  {
    n: "01",
    title: "Original Intellectual Property",
    statement:
      "We help creators and organizations think beyond a single release and build the larger world, structure, and audience around an original property.",
    items: [
      "Story-world development",
      "Character development",
      "Brand architecture",
      "Property positioning",
      "Franchise planning",
      "Companion-platform development",
      "Adaptation pathways",
      "Audience-extension strategy",
      "Property documentation",
      "Product and experience extensions",
      "Legacy planning",
      "Long-term development roadmaps",
    ],
  },
];
