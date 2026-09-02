import type { Metadata } from "next";
import { site } from "@/config/site";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import Founder from "@/components/about/Founder";
import CTABanner from "@/components/ui/CTABanner";

const description =
  "Learn about The 5 Loaves Agency and its founder, L.J. — more than two decades of hospitality, events, and operations experience behind organizations that want the structure to match the promise.";

export const metadata: Metadata = {
  title: {
    absolute: "About The 5 Loaves Agency | Our Story & Founder",
  },
  description,
  alternates: { canonical: `${site.url}/about` },
  openGraph: {
    title: "About The 5 Loaves Agency | Our Story & Founder",
    description,
    url: `${site.url}/about`,
    siteName: site.name,
    type: "website",
    images: [{ url: "/brand/og-image.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About The 5 Loaves Agency | Our Story & Founder",
    description,
    images: ["/brand/og-image.png"],
  },
};

/**
 * About is four sections: hero, story, founder, ask.
 *
 * It previously ran eleven. The sector grid, the ecosystem tree, the LOAVES
 * framework, the five-stage approach, "Who We Serve", "The 5LA Difference",
 * and "Where We Are Going" all restated, at length, what the sector pages and
 * /our-companies already say in place. What only About can carry is why the
 * company exists and who is behind it, so that is what it carries.
 */
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <Founder />
      <CTABanner
        eyebrow="Let's Begin"
        title="Let's Build the Experience Behind Your Vision."
        body="Whether you are strengthening an organization, developing your people, implementing practical technology, or bringing a meaningful story to life, 5LA begins with understanding what you are building and why it matters."
        primary={{ label: "Work With 5LA", href: "/work-with-us" }}
        secondary={{ label: "Explore Our Experience Sectors", href: "/experience-sectors" }}
      />
    </>
  );
}
