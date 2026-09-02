import type { Metadata } from "next";
import CTABanner from "@/components/ui/CTABanner";
import AsgHero from "@/components/asg/AsgHero";
import AsgStoryWorld from "@/components/asg/AsgStoryWorld";
import AsgThemes from "@/components/asg/AsgThemes";
import AsgNovel from "@/components/asg/AsgNovel";
import AsgStage from "@/components/asg/AsgStage";
import AsgHealingMission from "@/components/asg/AsgHealingMission";
import AsgSarahMethod from "@/components/asg/AsgSarahMethod";
import AsgPartnerships from "@/components/asg/AsgPartnerships";
import theme from "@/components/asg/asg-theme.module.css";
import CapabilityAccordion from "@/components/ui/CapabilityAccordion";
import { asgCapabilities } from "@/config/media-capabilities";
import { asgAssets, asgBrand } from "@/config/aunt-sarahs-girls";
import { site } from "@/config/site";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

const base = createMetadata({
  title: asgBrand.name,
  path: asgBrand.path,
  description: asgBrand.metaDescription,
});

/**
 * The full page title is used verbatim (rather than through the site title
 * template) because it already carries its own descriptor.
 */
export const metadata: Metadata = {
  ...base,
  title: { absolute: asgBrand.metaTitle },
  keywords: [
    "Aunt Sarah’s Girls",
    "Learical Jonez",
    "original novel",
    "stage production",
    "womanhood",
    "family secrets",
    "generational healing",
    "legacy",
  ],
  openGraph: {
    ...base.openGraph,
    title: asgBrand.metaTitle,
    description: asgBrand.metaDescription,
    // FOR EDITORS: set `asgAssets.ogImage` to an approved ASG social image.
    // Until then the shared 5LA card is used rather than an invented graphic.
    ...(asgAssets.ogImage
      ? {
          images: [
            {
              url: asgAssets.ogImage,
              width: 1200,
              height: 630,
              alt: `${asgBrand.name} — ${asgBrand.category}`,
            },
          ],
        }
      : {}),
  },
  twitter: {
    ...base.twitter,
    title: asgBrand.metaTitle,
    description: asgBrand.metaDescription,
    ...(asgAssets.ogImage ? { images: [asgAssets.ogImage] } : {}),
  },
};

/**
 * CreativeWork schema for the property, with the novel and the stage work as
 * parts. Only facts that have been approved are described: no publication date,
 * ISBN, price, venue, performance date, review, or award appears here, and no
 * Event schema is emitted because no production has been scheduled publicly.
 */
function asgSchema() {
  const url = new URL(asgBrand.path, site.url).toString();

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWorkSeries",
    name: asgBrand.name,
    alternateName: "Aunt Sarah’s Girls: Legacy & Secrets",
    url,
    description: asgBrand.metaDescription,
    genre: ["Literary fiction", "Drama"],
    inLanguage: "en",
    about: [
      "Truth",
      "Womanhood",
      "Family",
      "Survival",
      "Communication",
      "Healing",
      "Legacy",
    ],
    contentLocation: { "@type": "Place", name: asgBrand.setting },
    publisher: { "@type": "Organization", name: asgBrand.division },
    producer: { "@type": "Organization", name: asgBrand.parent },
    hasPart: [
      {
        "@type": "Book",
        name: "Aunt Sarah’s Girls: Legacy & Secrets",
        bookFormat: "https://schema.org/Hardcover",
        inLanguage: "en",
        author: { "@type": "Organization", name: asgBrand.division },
        description:
          "A novel following the lives, relationships, memories, and truths of the women connected to Aunt Sarah’s home.",
      },
      {
        "@type": "Play",
        name: "Aunt Sarah’s Girls",
        inLanguage: "en",
        description:
          "An original stage work in development, bringing the women of Aunt Sarah’s home to a live, intimate theatrical setting.",
      },
    ],
  };
}

/**
 * Pared back while the property is early in development: the cast grid, the
 * Aunt Sarah portrait, the community, book-club, future, ecosystem and
 * experience-standard sections are gone, and the stage production moved up to
 * sit directly under the hero. Detail returns as production moves forward.
 */
export default function AuntSarahsGirlsPage() {
  return (
    <div className={theme.theme}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(asgSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ label: asgBrand.name, path: asgBrand.path }])
          ),
        }}
      />

      {/* 1 */}
      <AsgHero />
      {/* 2 — moved up from position 5: the stage work leads now. */}
      <AsgStage />
      {/* 3 */}
      <AsgStoryWorld />
      {/* 4 */}
      <AsgThemes />
      {/* 5 */}
      <AsgNovel />
      {/* 6 */}
      <AsgHealingMission />
      {/* 7 */}
      <AsgSarahMethod />
      {/* 8 — inherited from the retired /experience-sectors/media page. */}
      <CapabilityAccordion
        id="original-ip"
        eyebrow="Original Intellectual Property"
        title="Story Worlds Built to Last Beyond a Single Telling."
        categories={asgCapabilities}
      />
      {/* 9 */}
      <AsgPartnerships />

      {/* 10 — the shared global CTA banner, wearing the ASG identity. */}
      <CTABanner
        title="Come On In. The Story Is Ready to Be Told—and the Conversation Is Ready to Begin."
        body="Explore the novel, follow the theatrical journey, experience the women’s stories, or discuss bringing Aunt Sarah’s Girls into your organization, community, venue, or book club."
        primary={{ label: "Explore the Story", href: "#the-novel" }}
        secondary={{ label: "Discuss a Partnership", href: "/work-with-us?interest=aunt-sarahs-girls" }}
        tertiary={{
          label: "Continue With The Sarah Method",
          href: "/our-companies/the-sarah-method",
        }}
      />
    </div>
  );
}
