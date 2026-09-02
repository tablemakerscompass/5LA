import type { Metadata } from "next";
import { site } from "@/config/site";
import { breadcrumbSchema } from "@/lib/seo";
import PageHero from "@/components/layout/PageHero";
import FeaturedArticle from "@/components/insights/FeaturedArticle";
import ArticleGrid from "@/components/insights/ArticleGrid";
import CTABanner from "@/components/ui/CTABanner";
import { featuredArticle, supportingArticles } from "@/config/articles";

const title = "5LA Insights | Leadership, Hospitality, Technology & Experience";
const description =
  "Explore practical 5LA insight on leadership, hospitality, culture, artificial intelligence, training, events, storytelling, and meaningful experience.";
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
            breadcrumbSchema([{ label: "Insights", path: "/insights" }])
          ),
        }}
      />

      <PageHero
        eyebrow="5LA Insights"
        title="Ideas for the People Building the Experience Behind the Brand."
        lead="Practical perspective on leadership, hospitality, culture, artificial intelligence, training, events, storytelling, and the systems shaping how organizations serve people."
        crumbs={[{ label: "Insights" }]}
      />

      <FeaturedArticle article={featuredArticle} />

      <ArticleGrid articles={supportingArticles} />

      <CTABanner
        eyebrow="From Insight to Experience"
        title="Insight Should Change the Experience."
        body="Explore how 5LA can help strengthen the systems, technology, people, and stories behind your organization."
        primary={{ label: "Work With 5LA", href: "/work-with-us" }}
        secondary={{ label: "Explore Our Experience Sectors", href: "/what-we-do" }}
      />
    </>
  );
}
