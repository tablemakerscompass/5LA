import type { Metadata } from "next";
import { site } from "@/config/site";
import { breadcrumbSchema } from "@/lib/seo";
import BusinessHero from "@/components/business/BusinessHero";
import BusinessMeaning from "@/components/business/BusinessMeaning";
import BusinessChallenges from "@/components/business/BusinessChallenges";
import BusinessCapabilities from "@/components/business/BusinessCapabilities";
import BusinessProcess from "@/components/business/BusinessProcess";
import BusinessDeliverables from "@/components/business/BusinessDeliverables";
import BusinessAudience from "@/components/business/BusinessAudience";
import BusinessOutcomes from "@/components/business/BusinessOutcomes";
import BusinessConnections from "@/components/business/BusinessConnections";
import BusinessEngagements from "@/components/business/BusinessEngagements";
import BusinessLoaves from "@/components/business/BusinessLoaves";
import CTABanner from "@/components/ui/CTABanner";

const title =
  "Business Experience | Operations, Hospitality & Organizational Development | 5LA";
const description =
  "Explore Business Experience at The 5 Loaves Agency, including operations, hospitality consulting, HR systems, service standards, leadership alignment, and implementation support.";
const url = `${site.url}/experience-sectors/business`;

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

export default function BusinessExperiencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { label: "Experience Sectors", path: "/experience-sectors" },
              { label: "Business", path: "/experience-sectors/business" },
            ])
          ),
        }}
      />

      <BusinessHero />
      <BusinessMeaning />
      <BusinessChallenges />
      <BusinessCapabilities />
      <BusinessProcess />
      <BusinessDeliverables />
      <BusinessAudience />
      <BusinessOutcomes />
      <BusinessConnections />
      <BusinessEngagements />
      <BusinessLoaves />

      <CTABanner
        eyebrow="Begin Here"
        title="Is the Experience Stronger Than the Structure Behind It?"
        body="5LA helps organizations identify the gaps between what they promise, how they operate, and what people actually experience."
        primary={{ label: "Work With 5LA", href: "/work-with-us" }}
        secondary={{ label: "Start a Conversation", href: "/contact" }}
      />
    </>
  );
}
