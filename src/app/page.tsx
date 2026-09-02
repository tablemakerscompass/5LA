import type { Metadata } from "next";
import { site } from "@/config/site";
import Hero from "@/components/home/Hero";
import WhatWeDoOfferings from "@/components/what-we-do/WhatWeDoOfferings";
import Proof from "@/components/home/Proof";
import EcosystemTeaser from "@/components/home/EcosystemTeaser";
import CTABanner from "@/components/ui/CTABanner";

const title = "The 5 Loaves Agency | Hospitality, Events & Business Experience";
const description =
  "The 5 Loaves Agency helps hospitality-driven organizations strengthen their operations, develop their people, and produce events and experiences guests actually remember.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${site.url}/` },
  openGraph: {
    title,
    description,
    url: `${site.url}/`,
    siteName: site.name,
    type: "website",
    images: [{ url: "/brand/og-image.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/brand/og-image.png"],
  },
};

/**
 * The homepage is deliberately five sections: promise, offer, proof, context,
 * ask.
 *
 * 5LA now leads with hospitality, events, and business. The company story that
 * used to live here — the 5LA Difference, the LOAVES framework, the founder's
 * background, the full sector and ecosystem grids — is carried on /about,
 * /experience-sectors, and /our-companies, which this page links into rather
 * than reproducing.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDoOfferings />
      <Proof />
      <EcosystemTeaser />
      <CTABanner
        eyebrow="Let's Begin"
        title="What Experience Are You Ready to Build?"
        body="Whether you are strengthening an organization, developing your people, implementing technology, or bringing a story to life, 5LA begins by understanding the experience you want to create."
        primary={{ label: "Work With 5LA", href: "/work-with-us" }}
        secondary={{ label: "Start a Conversation", href: "/contact" }}
      />
    </>
  );
}
