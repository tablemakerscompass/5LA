import type { Metadata } from "next";
import { site } from "@/config/site";
import { breadcrumbSchema } from "@/lib/seo";
import PageHero from "@/components/layout/PageHero";
import FeaturedArticle from "@/components/insights/FeaturedArticle";
import ArticleGrid from "@/components/insights/ArticleGrid";
import CTABanner from "@/components/ui/CTABanner";
import { featuredArticle, supportingArticles } from "@/config/articles";

const title =
  "The Tablemakers Compass | Hospitality, Leadership & Experience | 5LA";
const description =
  "The Tablemakers Compass is the thought-leadership and editorial voice of the Tablemakers platform, exploring hospitality, leadership, service, culture, operations, workforce development, events, and professional standards.";
const url = `${site.url}/insights`;

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

export default function InsightsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ label: "The Tablemakers Compass", path: "/insights" }])
          ),
        }}
      />

      <PageHero
        /*
         * Language taken from the Compass section on the Tablemakers page
         * (components/tablemakers/TmCompass.tsx), so the publication describes
         * itself the same way in both places.
         */
        eyebrow="The Tablemakers Compass"
        title="Insight for the People Guiding the Experience."
        lead="The thought-leadership and editorial voice of the Tablemakers platform — exploring the realities of hospitality, leadership, service, culture, operations, workforce development, events, professional standards, and the future of meaningful experiences."
        crumbs={[{ label: "The Tablemakers Compass" }]}
      />

      <FeaturedArticle article={featuredArticle} />

      <ArticleGrid articles={supportingArticles} />

      <CTABanner
        eyebrow="From Insight to Experience"
        title="Insight Should Change the Experience."
        body="Explore how 5LA can help strengthen the systems, technology, people, and stories behind your organization."
        primary={{ label: "Work With 5LA", href: "/work-with-us" }}
        secondary={{ label: "Explore What We Do", href: "/what-we-do" }}
      />
    </>
  );
}
