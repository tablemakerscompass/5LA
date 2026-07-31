/**
 * Organizations 5LA has worked with — the client / partner roster.
 *
 * This is deliberately SEPARATE from `config/companies.ts`. That file holds the
 * brands 5LA *owns* (the ecosystem). This file holds organizations 5LA has
 * *served*. Never merge the two, and never use the word "companies" in the
 * section copy below — visitors will conflate owned brands with clients.
 *
 * NOTE FOR EDITORS:
 * - Every entry below is a clearly-labeled PLACEHOLDER. Replace the names with
 *   real organizations, or delete the ones you don't need.
 * - Do not invent client names. An organization belongs here only if 5LA has
 *   actually done work for it.
 * - `logo` requires permission. See the note on the field.
 * - If `clients` is empty (or every entry is removed), the homepage section
 *   renders nothing at all — the page stays valid and shippable.
 */

export type Client = {
  /** Organization name, exactly as they style it. */
  name: string;
  /**
   * Optional one-line context — sector, or the nature of the engagement.
   * Shown only when `clientsSection.showDescriptors` is true.
   */
  descriptor?: string;
  /**
   * Path to a logo file under `public/clients/`.
   *
   * ONLY set this once logo usage is permitted — most agreements require the
   * client's okay, and some carry no-publicity clauses. Until then, leave it
   * undefined: the entry renders as an editorial name treatment instead, which
   * is a first-class presentation here, not a degraded one.
   *
   * Prefer SVG. If raster, supply a 2x asset on a transparent background.
   */
  logo?: string;
  /** Intrinsic logo dimensions. Required whenever `logo` is set. */
  logoWidth?: number;
  logoHeight?: number;
  /** Optional link to the organization's own site. */
  href?: string;
};

/** Section copy and display options. */
export const clientsSection = {
  /** Master switch — set false to pull the section without touching the page. */
  enabled: true,

  /* PLACEHOLDER copy — approve or rewrite before launch. */
  eyebrow: "Who We've Worked With",
  title: "Trusted by the Organizations Behind the Experience.",
  lead: "A selection of the organizations, institutions, and teams 5LA has partnered with across business, technology, training, and media.",

  /**
   * Optional line under the roster — useful for scope ("engagements from 2019
   * to present") or attribution. Set to null to hide.
   */
  footnote: null as string | null,

  /** Show each organization's descriptor beneath its name. */
  showDescriptors: false,
} as const;

export const clients: Client[] = [
  /*
   * Confirmed organizations. `descriptor` is intentionally left unset on every
   * entry — sector labels would be invented rather than approved. Add them (and
   * flip `showDescriptors` above) once the real ones are supplied.
   */
  { name: "Maximus Hospitality & Management" },
  { name: "The Outdoor Escape Experience" },
  { name: "Douglasville Cosmetic & Dental Implant Studio" },
  { name: "Get Your Business Right LLC" },
  { name: "Stephens Relocation & Transition Management" },
  { name: "Supreme Lioness, LLC" },

  /* Example of an entry once a logo is cleared and added to public/clients/:
   *
   * {
   *   name: "Example Organization",
   *   descriptor: "Hospitality",
   *   logo: "/clients/example-organization.svg",
   *   logoWidth: 220,
   *   logoHeight: 80,
   *   href: "https://example.com",
   * },
   */
];
