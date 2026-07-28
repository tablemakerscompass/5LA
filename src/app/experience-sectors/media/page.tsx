import type { Metadata } from "next";
import { site } from "@/config/site";
import { breadcrumbSchema } from "@/lib/seo";
import MediaHero from "@/components/media/MediaHero";
import MediaMeaning from "@/components/media/MediaMeaning";
import MediaChallenges from "@/components/media/MediaChallenges";
import MediaCapabilities from "@/components/media/MediaCapabilities";
import MediaPhilosophy from "@/components/media/MediaPhilosophy";
import MediaGeorgiaB from "@/components/media/MediaGeorgiaB";
import MediaGeorgiaBSociety from "@/components/media/MediaGeorgiaBSociety";
import MediaAuntSarahs from "@/components/media/MediaAuntSarahs";
import MediaSarahMethod from "@/components/media/MediaSarahMethod";
import MediaProcess from "@/components/media/MediaProcess";
import MediaDeliverables from "@/components/media/MediaDeliverables";
import MediaAudience from "@/components/media/MediaAudience";
import MediaOutcomes from "@/components/media/MediaOutcomes";
import MediaEngagements from "@/components/media/MediaEngagements";
import MediaConnections from "@/components/media/MediaConnections";
import MediaLoaves from "@/components/media/MediaLoaves";
import CTABanner from "@/components/ui/CTABanner";

const title =
  "Media Experience | Publishing, Productions, Storytelling & Original IP | 5LA";
const description =
  "Explore Media Experience at The 5 Loaves Agency, including publishing, theater, original intellectual property, brand storytelling, content production, and live experiences.";
const url = `${site.url}/experience-sectors/media`;

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

export default function MediaExperiencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { label: "Experience Sectors", path: "/experience-sectors" },
              { label: "Media", path: "/experience-sectors/media" },
            ])
          ),
        }}
      />

      <MediaHero />
      <MediaMeaning />
      <MediaChallenges />
      <MediaCapabilities />
      <MediaPhilosophy />
      <MediaGeorgiaB />
      <MediaGeorgiaBSociety />
      <MediaAuntSarahs />
      <MediaSarahMethod />
      <MediaProcess />
      <MediaDeliverables />
      <MediaAudience />
      <MediaOutcomes />
      <MediaEngagements />
      <MediaConnections />
      <MediaLoaves />

      <CTABanner
        eyebrow="Begin Here"
        title="What Story, Property, or Experience Are You Ready to Bring to Life?"
        body="5LA helps creators, organizations, and communities move from idea to structure, from structure to production, and from production to lasting audience connection."
        primary={{ label: "Work With 5LA", href: "/work-with-us" }}
        secondary={{ label: "Start a Conversation", href: "/contact" }}
      />
    </>
  );
}
