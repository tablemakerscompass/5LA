import type { Metadata } from "next";
import CTABanner from "@/components/ui/CTABanner";
import TmHero from "@/components/tablemakers/TmHero";
import TmDefinition from "@/components/tablemakers/TmDefinition";
import TmIdentity from "@/components/tablemakers/TmIdentity";
import TmWhy from "@/components/tablemakers/TmWhy";
import TmAudiences from "@/components/tablemakers/TmAudiences";
import TmCollective from "@/components/tablemakers/TmCollective";
import TmCompass from "@/components/tablemakers/TmCompass";
import TmTopics from "@/components/tablemakers/TmTopics";
import TmLoaves from "@/components/tablemakers/TmLoaves";
import TmAcademy from "@/components/tablemakers/TmAcademy";
import TmStandards from "@/components/tablemakers/TmStandards";
import TmEngagement from "@/components/tablemakers/TmEngagement";
import TmExampleTables from "@/components/tablemakers/TmExampleTables";
import TmPartners from "@/components/tablemakers/TmPartners";
import TmEcosystem from "@/components/tablemakers/TmEcosystem";
import TmFuture from "@/components/tablemakers/TmFuture";
import TmJoin from "@/components/tablemakers/TmJoin";
import theme from "@/components/tablemakers/tm-theme.module.css";
import { tmAssets, tmBrand } from "@/config/tablemakers";
import { site } from "@/config/site";
import { breadcrumbSchema, createMetadata } from "@/lib/seo";

const base = createMetadata({
  title: tmBrand.name,
  path: tmBrand.path,
  description: tmBrand.metaDescription,
});

/**
 * The full page title is used verbatim rather than through the site title
 * template, because it already carries its own descriptor.
 */
export const metadata: Metadata = {
  ...base,
  title: { absolute: tmBrand.metaTitle },
  keywords: [
    "Tablemakers",
    "The Tablemakers Compass",
    "The Tablemakers Collective",
    "hospitality leadership community",
    "professional development community",
    "leadership thought leadership",
    "The 5 Loaves Agency",
  ],
  openGraph: {
    ...base.openGraph,
    title: tmBrand.metaTitle,
    description: tmBrand.metaDescription,
    // FOR EDITORS: set `tmAssets.ogImage` to an approved social card. Until
    // then the shared 5LA card is used rather than an invented graphic.
    ...(tmAssets.ogImage
      ? {
          images: [
            {
              url: tmAssets.ogImage,
              width: 1200,
              height: 630,
              alt: `${tmBrand.name} — ${tmBrand.category}`,
            },
          ],
        }
      : {}),
  },
  twitter: {
    ...base.twitter,
    title: tmBrand.metaTitle,
    description: tmBrand.metaDescription,
    ...(tmAssets.ogImage ? { images: [tmAssets.ogImage] } : {}),
  },
};

/**
 * Brand schema — the narrowest accurate type.
 *
 * NOT Organization with members, NOT Event, NOT Article or BlogPosting: no
 * gathering has been scheduled and no Compass piece has been published, so
 * emitting either would assert something untrue to search engines. Add Event
 * schema only for a real approved event, and Article schema only for a real
 * published piece with its exact title, date, and URL.
 */
function tablemakersSchema() {
  const url = new URL(tmBrand.path, site.url).toString();

  return {
    "@context": "https://schema.org",
    "@type": "Brand",
    name: tmBrand.name,
    url,
    description: tmBrand.metaDescription,
    slogan: tmBrand.positioning,
    parentOrganization: { "@type": "Organization", name: tmBrand.parent },
  };
}

export default function TablemakersPage() {
  return (
    <div className={theme.theme}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tablemakersSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { label: "Our Companies", path: "/our-companies" },
              { label: tmBrand.name, path: tmBrand.path },
            ])
          ),
        }}
      />

      {/* 1 */}
      <TmHero />
      {/* 2 */}
      <TmDefinition />
      {/* 3 */}
      <TmIdentity />
      {/* 4 */}
      <TmWhy />
      {/* 5 */}
      <TmAudiences />
      {/* 6 */}
      <TmCollective />
      {/* 7 */}
      <TmCompass />
      {/* 8 */}
      <TmTopics />
      {/* 9 */}
      <TmLoaves />
      {/* 10 */}
      <TmAcademy />
      {/* 11 */}
      <TmStandards />
      {/* 12 */}
      <TmEngagement />
      {/* 13 */}
      <TmExampleTables />
      {/* 14 */}
      <TmPartners />
      {/* 15 */}
      <TmEcosystem />
      {/* 16 */}
      <TmFuture />
      {/* 17 */}
      <TmJoin />

      {/* 18 — the shared global CTA banner, wearing the Tablemakers identity.
          The primary action is the strongest that genuinely exists. */}
      <CTABanner
        title="The Table Is Not Only Where Decisions Are Made. It Is Where People Are Prepared to Carry Them Forward."
        body="Tablemakers creates room for the leaders, managers, founders, hospitality professionals, and experience builders responsible for shaping stronger teams, cultures, businesses, and environments."
        primary={{ label: "Connect With Tablemakers", href: tmBrand.connectPath }}
        secondary={{
          label: "Explore The 5LA Academy",
          href: "/our-companies/5la-academy",
        }}
        tertiary={{
          label: "Discuss a Tablemakers Partnership",
          href: tmBrand.connectPath,
        }}
      />
    </div>
  );
}
