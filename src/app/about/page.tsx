import type { Metadata } from "next";
import { site } from "@/config/site";
import AboutHero from "@/components/about/AboutHero";
import WhyExists from "@/components/about/WhyExists";
import WhatIs from "@/components/about/WhatIs";
import Approach from "@/components/about/Approach";
import LoavesFramework from "@/components/about/LoavesFramework";
import BuiltFrom from "@/components/about/BuiltFrom";
import Founder from "@/components/about/Founder";
import EcosystemArchitecture from "@/components/about/EcosystemArchitecture";
import WhoServes from "@/components/about/WhoServes";
import Different from "@/components/about/Different";
import FutureVision from "@/components/about/FutureVision";
import CTABanner from "@/components/ui/CTABanner";

const description =
  "Learn about The 5 Loaves Agency, a multidisciplinary experience company connecting business operations, technology, training, hospitality, media, and storytelling.";

export const metadata: Metadata = {
  title: {
    absolute: "About The 5 Loaves Agency | Our Vision, Values & Experience",
  },
  description,
  alternates: { canonical: `${site.url}/about` },
  openGraph: {
    title: "About The 5 Loaves Agency | Our Vision, Values & Experience",
    description,
    url: `${site.url}/about`,
    siteName: site.name,
    type: "website",
    // PLACEHOLDER social share image — replace /brand/og-image.png (1200×630).
    images: [{ url: "/brand/og-image.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About The 5 Loaves Agency | Our Vision, Values & Experience",
    description,
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhyExists />
      <WhatIs />
      <Approach />
      <LoavesFramework />
      <BuiltFrom />
      <Founder />
      <EcosystemArchitecture />
      <WhoServes />
      <Different />
      <FutureVision />
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
