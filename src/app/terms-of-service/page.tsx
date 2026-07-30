import type { Metadata } from "next";
import { site } from "@/config/site";
import { breadcrumbSchema } from "@/lib/seo";
import LegalPage from "@/components/legal/LegalPage";
import { termsIntro, termsSections } from "@/content/legal/terms";

const title = "Terms of Service | The 5 Loaves Agency";
const description =
  "Review the terms governing use of The 5 Loaves Agency website, content, forms, links, and digital resources.";
const url = `${site.url}/terms-of-service`;

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

export default function TermsOfServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ label: "Terms of Service", path: "/terms-of-service" }])
          ),
        }}
      />
      <LegalPage
        eyebrow="Legal"
        title="Terms of Service"
        crumb="Terms of Service"
        intro={termsIntro}
        sections={termsSections}
        
      />
    </>
  );
}
