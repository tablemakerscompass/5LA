/**
 * Global navigation structure — single source of truth for header, mobile menu,
 * and footer.
 *
 * The nav is deliberately flat — five items, no dropdowns. The Experience
 * Sectors menu went with the /experience-sectors routes, and the Our Companies
 * menu went with its overview page: the company pages are still live, reached
 * from the ecosystem strip on the homepage rather than from the nav. Aunt
 * Sarah's Girls is the exception, promoted to a top-level route of its own.
 */

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
  /* The publication kept its /insights route; only the name changed. */
  { label: "Tablemakers Compass", href: "/insights" },
  { label: "Aunt Sarah’s Girls", href: "/aunt-sarahs-girls" },
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
      { label: "Tablemakers Compass", href: "/insights" },
      { label: "Aunt Sarah’s Girls", href: "/aunt-sarahs-girls" },
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
