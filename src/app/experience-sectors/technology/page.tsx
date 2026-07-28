import type { Metadata } from "next";
import { site } from "@/config/site";
import { breadcrumbSchema } from "@/lib/seo";
import TechnologyHero from "@/components/technology/TechnologyHero";
import TechnologyMeaning from "@/components/technology/TechnologyMeaning";
import TechnologyChallenges from "@/components/technology/TechnologyChallenges";
import TechnologyCapabilities from "@/components/technology/TechnologyCapabilities";
import TechnologyAI from "@/components/technology/TechnologyAI";
import TechnologyVelaxity from "@/components/technology/TechnologyVelaxity";
import TechnologyProcess from "@/components/technology/TechnologyProcess";
import TechnologyDeliverables from "@/components/technology/TechnologyDeliverables";
import TechnologyAudience from "@/components/technology/TechnologyAudience";
import TechnologyOutcomes from "@/components/technology/TechnologyOutcomes";
import TechnologyEngagements from "@/components/technology/TechnologyEngagements";
import TechnologyConnections from "@/components/technology/TechnologyConnections";
import TechnologyLoaves from "@/components/technology/TechnologyLoaves";
import CTABanner from "@/components/ui/CTABanner";

const title = "Technology Experience | AI, Automation & Digital Systems | 5LA";
const description =
  "Explore Technology Experience at The 5 Loaves Agency, including AI strategy, workflow automation, digital systems, application development, and VelaXity.";
const url = `${site.url}/experience-sectors/technology`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: site.name,
    type: "website",
    images: [
      { url: "/brand/og-image.png", width: 1200, height: 630, alt: site.name },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/brand/og-image.png"],
  },
};

export default function TechnologyExperiencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { label: "Experience Sectors", path: "/experience-sectors" },
              { label: "Technology", path: "/experience-sectors/technology" },
            ])
          ),
        }}
      />

      <TechnologyHero />
      <TechnologyMeaning />
      <TechnologyChallenges />
      <TechnologyCapabilities />
      <TechnologyAI />
      <TechnologyVelaxity />
      <TechnologyProcess />
      <TechnologyDeliverables />
      <TechnologyAudience />
      <TechnologyOutcomes />
      <TechnologyEngagements />
      <TechnologyConnections />
      <TechnologyLoaves />

      <CTABanner
        eyebrow="Begin Here"
        title="Is Your Technology Supporting the Work—or Making It Harder?"
        body="5LA helps organizations identify where AI, automation, digital systems, or executive technology can create practical value without losing clarity, accountability, or human connection."
        primary={{ label: "Work With 5LA", href: "/work-with-us" }}
        secondary={{ label: "Start a Conversation", href: "/contact" }}
      />
    </>
  );
}
