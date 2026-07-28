import type { Metadata } from "next";
import { site } from "@/config/site";
import { breadcrumbSchema } from "@/lib/seo";
import PageHero from "@/components/layout/PageHero";
import ContactMethods from "@/components/contact/ContactMethods";

const title = "Contact The 5 Loaves Agency";
const description =
  "Reach The 5 Loaves Agency by email or phone for general questions, media requests, speaking enquiries, or existing-project communication.";
const url = `${site.url}/contact`;

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

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ label: "Contact", path: "/contact" }])
          ),
        }}
      />

      <PageHero
        eyebrow="Contact"
        title="Reach The 5 Loaves Agency."
        lead="For general questions, media and speaking requests, existing-project communication, or anything about this website. If you are starting a new project, the Work With Us form is the better route."
        crumbs={[{ label: "Contact" }]}
      />

      <ContactMethods />
    </>
  );
}
