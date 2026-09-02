/**
 * Capability content inherited from the retired Experience Sectors.
 *
 * These lists were the most detailed statement of the work on the old
 * /our-companies/5la-academy page. When that route was retired the categories
 * were split across the pages that actually do the work, rather than deleted.
 * Display numbers are resequenced per destination.
 */

import type { Capability } from "@/components/ui/CapabilityAccordion";

/** Leadership, manager, hospitality, culture and custom program design. */
export const academyCapabilities: Capability[] = [
  {
    n: "01",
    title: "Leadership Development",
    statement:
      "We help leaders understand that their behavior, communication, decisions, and consistency shape the experience of the entire organization.",
    items: [
      "Leadership foundations",
      "Self-awareness",
      "Communication",
      "Accountability",
      "Decision-making",
      "Delegation",
      "Coaching",
      "Feedback",
      "Conflict navigation",
      "Team alignment",
      "Culture leadership",
      "Leading through change",
      "Executive and emerging-leader development",
    ],
  },
  {
    n: "02",
    title: "Manager Development",
    statement:
      "We equip managers with practical tools they can use during the actual work—not only concepts discussed in a classroom.",
    items: [
      "Transitioning into management",
      "Manager expectations",
      "Shift or department leadership",
      "Daily communication",
      "Employee coaching",
      "Performance conversations",
      "Documentation",
      "Scheduling and preparation",
      "Operational accountability",
      "Recognition",
      "Team meetings",
      "Problem-solving",
      "Manager operating rhythms",
    ],
  },
  {
    n: "03",
    title: "Hospitality & Guest-Service Training",
    statement:
      "Hospitality is more than friendliness. It is the intentional way people are welcomed, understood, served, and remembered.",
    items: [
      "Hospitality mindset",
      "First impressions",
      "Guest communication",
      "Service sequence",
      "Anticipating needs",
      "Professional presence",
      "Experience recovery",
      "Handling complaints",
      "Service consistency",
      "Teamwork across departments",
      "Personalization",
      "Emotional intelligence",
      "Creating memorable experiences",
    ],
  },
  {
    n: "04",
    title: "Culture & Organizational Learning",
    statement:
      "Culture becomes real when people understand what the values require in their daily choices, communication, and behavior.",
    items: [
      "Culture alignment",
      "Values in practice",
      "Standards introduction",
      "Culture reset",
      "Internal communication",
      "Team expectations",
      "Leadership alignment workshops",
      "Employee-experience development",
      "Service-culture development",
      "Cross-functional learning",
      "Change adoption",
      "Organizational accountability",
    ],
  },
  {
    n: "05",
    title: "Custom Training Design",
    statement:
      "5LA designs training around the organization’s audience, operating reality, desired behavior, and experience standard.",
    items: [
      "Training-needs assessment",
      "Curriculum development",
      "Facilitator guides",
      "Participant workbooks",
      "Digital learning",
      "Live workshops",
      "Manager reinforcement tools",
      "Learning pathways",
      "Role-based training",
      "Microlearning",
      "Training calendars",
      "Completion tracking",
      "Evaluation and follow-up plans",
    ],
  },
];

/** Workforce and employee development resources. */
export const tablemakersCapabilities: Capability[] = [
  {
    n: "01",
    title: "Workforce & Employee Development",
    statement:
      "We help employees understand how their role connects to the larger experience and why their contribution matters.",
    items: [
      "New-hire orientation",
      "Workplace expectations",
      "Professional communication",
      "Ownership and accountability",
      "Team collaboration",
      "Time and priority management",
      "Customer awareness",
      "Workplace confidence",
      "Problem-solving",
      "Workplace culture",
      "Career development",
      "Employee readiness",
      "Role-specific learning",
    ],
  },
];
