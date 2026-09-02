/**
 * The three core offerings of The 5 Loaves Agency.
 *
 * Single source of truth, consumed by the homepage "What We Do" section and by
 * the /what-we-do page, so the two can never drift apart.
 *
 * This replaced the four Experience Sectors: Business became this flow, and
 * Technology, Training and Media moved onto the company pages that do that
 * work. Each card links to where the detail actually lives.
 */

export type Offering = {
  /** Sequential display number. */
  n: string;
  title: string;
  body: string;
  /** Link label, without the trailing arrow. */
  cta: string;
  href: string;
};

export const offerings: Offering[] = [
  {
    n: "01",
    title: "Business Operations & Strategy",
    body: "We build the operational foundation behind hospitality-driven organizations — SOPs, service standards, HR systems, and the structure that lets a team deliver consistently, not just on a good night.",
    cta: "Explore What We Build",
    href: "/what-we-do#capabilities",
  },
  {
    n: "02",
    title: "Hospitality & Culture Training",
    body: "We develop the people responsible for the guest experience — leadership development, staff training, and the standards that turn a job into a culture worth staying for.",
    cta: "Explore the 5LA Academy",
    href: "/our-companies/5la-academy",
  },
  {
    n: "03",
    title: "Events & Experience Design",
    body: "We design and produce events and live experiences that hold together end to end — from concept to execution to the moment a guest walks away talking about it.",
    cta: "Explore Events & Experience",
    href: "/what-we-do#capabilities",
  },
];
