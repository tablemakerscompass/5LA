/**
 * Global navigation structure — single source of truth for header, mobile menu,
 * and footer. Sector/company children are derived from their config files so
 * navigation never duplicates that data.
 */

import { sectors } from "./sectors";
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
    label: "Experience Sectors",
    href: "/experience-sectors",
    children: sectors.map((s) => ({
      label: s.name,
      href: `/experience-sectors/${s.slug}`,
    })),
  },
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
      { label: "Experience Sectors", href: "/experience-sectors" },
      { label: "Our Companies", href: "/our-companies" },
      { label: "Insights", href: "/insights" },
    ] as NavLink[],
  },
  sectors: {
    heading: "Experience Sectors",
    links: sectors.map((s) => ({
      label: s.name,
      href: `/experience-sectors/${s.slug}`,
    })) as NavLink[],
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
