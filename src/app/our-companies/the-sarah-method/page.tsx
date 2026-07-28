import type { Metadata } from "next";
import CTABanner from "@/components/ui/CTABanner";
import SmHero from "@/components/sarah-method/SmHero";
import SmWelcome from "@/components/sarah-method/SmWelcome";
import SmWhy from "@/components/sarah-method/SmWhy";
import SmMethod from "@/components/sarah-method/SmMethod";
import SmReflectionAreas from "@/components/sarah-method/SmReflectionAreas";
import SmInside from "@/components/sarah-method/SmInside";
import SmSarahRole from "@/components/sarah-method/SmSarahRole";
import SmAsgConnection from "@/components/sarah-method/SmAsgConnection";
import SmStandard from "@/components/sarah-method/SmStandard";
import SmCareBoundaries from "@/components/sarah-method/SmCareBoundaries";
import SmAudiences from "@/components/sarah-method/SmAudiences";
import SmCommunity from "@/components/sarah-method/SmCommunity";
import SmPrivacy from "@/components/sarah-method/SmPrivacy";
import SmFuture from "@/components/sarah-method/SmFuture";
import SmEcosystem from "@/components/sarah-method/SmEcosystem";
import theme from "@/components/sarah-method/sm-theme.module.css";
import { smAssets, smBrand } from "@/config/the-sarah-method";
import { site } from "@/config/site";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

const base = createMetadata({
  title: smBrand.name,
  path: smBrand.path,
  description: smBrand.metaDescription,
});

/**
 * The full page title is used verbatim rather than through the site title
 * template, because it already carries its own descriptor.
 */
export const metadata: Metadata = {
  ...base,
  title: { absolute: smBrand.metaTitle },
  keywords: [
    "The Sarah Method",
    "guided reflection",
    "journaling app for women",
    "Aunt Sarah’s Girls",
    "The Georgia B. Media Group",
    "personal development",
    "truth healing purpose",
  ],
  openGraph: {
    ...base.openGraph,
    title: smBrand.metaTitle,
    description: smBrand.metaDescription,
    // FOR EDITORS: set `smAssets.ogImage` to an approved social card. Until
    // then the shared 5LA card is used rather than an invented graphic.
    ...(smAssets.ogImage
      ? {
          images: [
            {
              url: smAssets.ogImage,
              width: 1200,
              height: 630,
              alt: `${smBrand.name} — ${smBrand.category}`,
            },
          ],
        }
      : {}),
  },
  twitter: {
    ...base.twitter,
    title: smBrand.metaTitle,
    description: smBrand.metaDescription,
    ...(smAssets.ogImage ? { images: [smAssets.ogImage] } : {}),
  },
};

/**
 * WebApplication schema. The Sarah Method genuinely is a browser-based,
 * installable application, so the type is technically appropriate here.
 *
 * `isAccessibleForFree` is stated because the application charges nothing
 * today. No rating, review, download count, user count, or release date is
 * included — none of those are known or verifiable.
 */
function sarahMethodSchema() {
  const url = new URL(smBrand.path, site.url).toString();

  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: smBrand.name,
    url: smBrand.appUrl,
    sameAs: url,
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Any modern web browser",
    browserRequirements: "Requires JavaScript.",
    isAccessibleForFree: true,
    inLanguage: "en",
    description: smBrand.metaDescription,
    slogan: smBrand.positioning,
    audience: {
      "@type": "Audience",
      audienceType: "Women 18 and older",
    },
    publisher: { "@type": "Organization", name: smBrand.division },
    provider: { "@type": "Organization", name: smBrand.parent },
    isBasedOn: {
      "@type": "CreativeWorkSeries",
      name: smBrand.origin,
      url: new URL("/our-companies/aunt-sarahs-girls", site.url).toString(),
    },
    about: [
      "Truth",
      "Healing",
      "Purpose",
      "Identity",
      "Communication",
      "Family",
      "Legacy",
    ],
  };
}

export default function TheSarahMethodPage() {
  return (
    <div className={theme.theme}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sarahMethodSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { label: "Our Companies", path: "/our-companies" },
              { label: smBrand.name, path: smBrand.path },
            ])
          ),
        }}
      />

      {/* 1 */}
      <SmHero />
      {/* 2 */}
      <SmWelcome />
      {/* 3 */}
      <SmWhy />
      {/* 4 */}
      <SmMethod />
      {/* 5 */}
      <SmReflectionAreas />
      {/* 6 */}
      <SmInside />
      {/* 7 */}
      <SmSarahRole />
      {/* 8 */}
      <SmAsgConnection />
      {/* 9 */}
      <SmStandard />
      {/* 10 */}
      <SmCareBoundaries />
      {/* 11 */}
      <SmAudiences />
      {/* 12 */}
      <SmCommunity />
      {/* 13 */}
      <SmPrivacy />
      {/* 14 */}
      <SmFuture />
      {/* 15 */}
      <SmEcosystem />

      {/* 16 — the shared global CTA banner, wearing the Sarah Method identity. */}
      <CTABanner
        title="Come On In. You Do Not Have to Carry Everything Without Examining It."
        body="Enter The Sarah Method to pause, reflect, write honestly, and consider what truth, healing, identity, communication, and purpose may be asking of you next."
        primary={{
          label: "Enter The Sarah Method",
          href: smBrand.appUrl,
          external: true,
        }}
        secondary={{
          label: "Explore Aunt Sarah’s Girls",
          href: "/our-companies/aunt-sarahs-girls",
        }}
        tertiary={{
          label: "Discuss a Community or Organizational Partnership",
          href: "/work-with-us?interest=the-sarah-method",
        }}
      />
    </div>
  );
}
