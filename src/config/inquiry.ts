/**
 * Work With Us inquiry options.
 *
 * Single source of truth for the interest selector and the form's select
 * fields. Interest values double as the `?interest=` query-parameter values,
 * so Experience Sector and brand pages can deep-link a preselected choice.
 */

import { sectors } from "./sectors";
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

/** Experience Sectors — values match the sector slugs. */
const sectorOptions: InterestOption[] = sectors.map((s) => ({
  value: s.slug,
  label: s.name,
}));

/** Brands and platforms — values match the company slugs. */
const brandOptions: InterestOption[] = companies.map((c) => ({
  value: c.slug,
  label: c.name,
}));

/** Inquiries that do not map to a single sector or brand. */
const otherOptions: InterestOption[] = [
  { value: "events-hospitality", label: "Event or hospitality support" },
  { value: "speaking-facilitation", label: "Speaking or facilitation" },
  { value: "creative-partnership", label: "Creative or media partnership" },
  { value: "community-partnership", label: "Community partnership" },
  { value: "general", label: "General inquiry" },
  { value: "not-sure", label: "Not sure yet" },
];

export const interestGroups: InterestGroup[] = [
  { heading: "5LA Experience Sectors", options: sectorOptions },
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
  "business-experience": "business",
  "technology-experience": "technology",
  "training-experience": "training",
  "media-experience": "media",
  academy: "5la-academy",
  "georgia-b": "georgia-b-media-group",
  "the-georgia-b-media-group": "georgia-b-media-group",
  "the-georgia-b-society": "georgia-b-society",
  "sarah-method": "the-sarah-method",
  events: "events-hospitality",
  hospitality: "events-hospitality",
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
  "As soon as possible",
  "Within 30 days",
  "Within 60–90 days",
  "Within three to six months",
  "Planning for the future",
  "Not sure yet",
];

/**
 * Optional investment ranges. Deliberately framed as a range question, not a
 * price list — 5LA does not publish packages, and not every project fits these.
 */
export const budgetOptions = [
  "Not determined",
  "Under $2,500",
  "$2,500–$5,000",
  "$5,000–$10,000",
  "$10,000–$25,000",
  "$25,000+",
  "Prefer to discuss",
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
  "Search",
  "Social media",
  "Referral or word of mouth",
  "Event or speaking engagement",
  "A 5LA brand or platform",
  "Existing relationship",
  "Other",
];
