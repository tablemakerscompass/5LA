/**
 * Global navigation structure — single source of truth for header, mobile menu,
 * and footer. Company children are derived from the company config so
 * navigation never duplicates that data.
 *
 * The Experience Sectors dropdown was retired with the /experience-sectors
 * routes: Business is now the "What We Do" flow, and Technology, Training and
 * Media live on the company pages that actually do that work.
 */

import { companies } from "./companies";

export type NavLink = {
  label: string;
  href: string;
  /** Optional dropdown children. */
  children?: NavLink[];
};

/** Primary navigation shown in the desktop header and mobile menu. */
export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Our Companies",
    href: "/our-companies",
    children: companies.map((c) => ({
      label: c.name,
      href: `/our-companies/${c.slug}`,
    })),
  },
  { label: "Insights", href: "/insights" },
  { label: "Work With Us", href: "/work-with-us" },
];

/** Primary call-to-action surfaced in the header. */
export const primaryCta = { label: "Work With Us", href: "/work-with-us" };

/** Footer navigation columns. */
export const footerNav = {
  explore: {
    heading: "Explore",
    links: [
      { label: "About", href: "/about" },
      { label: "What We Do", href: "/what-we-do" },
      { label: "Our Companies", href: "/our-companies" },
      { label: "Insights", href: "/insights" },
    ] as NavLink[],
  },
  connect: {
    heading: "Connect",
    links: [
      { label: "Work With Us", href: "/work-with-us" },
      { label: "Contact", href: "/contact" },
    ] as NavLink[],
  },
};

/** Legal links shown in the footer bottom bar. */
export const legalNav: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Accessibility", href: "/accessibility" },
];
