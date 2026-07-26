import type { Metadata } from "next";
import { site } from "@/config/site";
import Hero from "@/components/home/Hero";
import Belief from "@/components/home/Belief";
import Sectors from "@/components/home/Sectors";
import Difference from "@/components/home/Difference";
import Ecosystem from "@/components/home/Ecosystem";
import Outcomes from "@/components/home/Outcomes";
import Loaves from "@/components/home/Loaves";
import Leadership from "@/components/home/Leadership";
import InsightsPreview from "@/components/home/InsightsPreview";
import CTABanner from "@/components/ui/CTABanner";

const description =
  "The 5 Loaves Agency is a multidisciplinary experience company helping organizations strengthen operations, develop people, implement technology, and create meaningful media and experiences.";

export const metadata: Metadata = {
  title: {
    absolute: "The 5 Loaves Agency | Business, Technology, Training & Media",
  },
  description,
  alternates: { canonical: `${site.url}/` },
  openGraph: {
    title: "The 5 Loaves Agency | Business, Technology, Training & Media",
    description,
    url: `${site.url}/`,
    siteName: site.name,
    type: "website",
    images: [{ url: "/brand/og-image.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The 5 Loaves Agency | Business, Technology, Training & Media",
    description,
    images: ["/brand/og-image.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Belief />
      <Sectors />
      <Difference />
      <Ecosystem />
      <Outcomes />
      <Loaves />
      <Leadership />
      <InsightsPreview />
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
