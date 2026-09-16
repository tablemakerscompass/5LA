/**
 * Work With Us inquiry options.
 *
 * Single source of truth for the interest selector and the form's select
 * fields. Interest values double as the `?interest=` query-parameter values,
 * so a service package, brand page, or company page can deep-link a
 * preselected choice.
 */

import { services, strategySession } from "./services";
import { companies } from "./companies";

export type InterestOption = {
  /** Stable value — also the `?interest=` query-parameter value. */
  value: string;
  label: string;
};

export type InterestGroup = {
  heading: string;
  options: InterestOption[];
};

/** The six ways to work with 5LA — values match the service slugs. */
const serviceOptions: InterestOption[] = [
  ...services.map((s) => ({ value: s.slug, label: s.name })),
  { value: strategySession.slug, label: "Strategy Session" },
];

/** Brands and platforms — values match the company slugs. */
const brandOptions: InterestOption[] = companies.map((c) => ({
  value: c.slug,
  label: c.name,
}));

/** Inquiries that do not map to a single service or brand. */
const otherOptions: InterestOption[] = [
  { value: "speaking-facilitation", label: "Speaking or facilitation" },
  { value: "creative-partnership", label: "Creative or media partnership" },
  { value: "community-partnership", label: "Community partnership" },
  { value: "general", label: "General inquiry" },
  { value: "not-sure", label: "I'm not sure yet" },
];

export const interestGroups: InterestGroup[] = [
  { heading: "Ways to Work With Us", options: serviceOptions },
  { heading: "5LA Brands and Platforms", options: brandOptions },
  { heading: "Additional Inquiries", options: otherOptions },
];

/** Every interest option, flattened. */
export const interestOptions: InterestOption[] = interestGroups.flatMap(
  (g) => g.options
);

/** Valid interest values, for validation on both the client and the server. */
export const interestValues: string[] = interestOptions.map((o) => o.value);

/**
 * Extra `?interest=` spellings accepted for convenience, mapped to a canonical
 * value. Keeps older or shorthand links working without a redirect.
 */
const interestAliases: Record<string, string> = {
  /* Retired Experience Sector slugs, kept working as links to the service
     that now carries that work. */
  business: "business-setup",
  "business-experience": "business-setup",
  technology: "websites-technology",
  "technology-experience": "websites-technology",
  training: "hospitality-training",
  "training-experience": "hospitality-training",
  media: "content-media",
  "media-experience": "content-media",
  events: "events-experiences",
  "events-hospitality": "events-experiences",
  hospitality: "hospitality-training",
  brand: "brand-creative",
  strategy: "strategy-session",
  academy: "5la-academy",
  "georgia-b": "georgia-b-media-group",
  "the-georgia-b-media-group": "georgia-b-media-group",
  "the-georgia-b-society": "georgia-b-society",
  "sarah-method": "the-sarah-method",
  speaking: "speaking-facilitation",
  partnership: "creative-partnership",
  community: "community-partnership",
};

/**
 * Resolve a raw `?interest=` value to a valid option value, or `undefined`
 * when it matches nothing. Case- and whitespace-insensitive.
 */
export function resolveInterest(raw: string | null | undefined) {
  if (!raw) return undefined;
  const key = raw.trim().toLowerCase();
  if (interestValues.includes(key)) return key;
  return interestAliases[key];
}

/** Human-readable label for an interest value. */
export function interestLabel(value: string) {
  return interestOptions.find((o) => o.value === value)?.label ?? value;
}

export const timelineOptions = [
  "Right away",
  "Within 30 days",
  "Within one to three months",
  "More than three months away",
  "I'm still planning",
];

/**
 * Investment ranges. The brackets line up with the starting investments
 * published on the service packages, so the answer is informative rather than
 * a guess.
 */
export const budgetOptions = [
  "Under $500",
  "$500–$1,000",
  "$1,000–$2,500",
  "$2,500–$5,000",
  "$5,000–$10,000",
  "$10,000+",
  "I'm not sure yet",
];

export const organizationTypes = [
  "Business or corporation",
  "Hospitality or restaurant group",
  "Hotel, venue, or resort",
  "Nonprofit or foundation",
  "Government or public agency",
  "Educational institution",
  "Faith-based organization",
  "Association or membership group",
  "Startup or small business",
  "Individual or independent professional",
  "Other",
];

export const contactMethods = ["Email", "Phone", "Either"];

export const referralSources = [
  "Referral or word of mouth",
  "Google or search",
  "LinkedIn",
  "Facebook",
  "Instagram",
  "TikTok",
  "Event or community",
  "Previous client",
  "Other",
];
