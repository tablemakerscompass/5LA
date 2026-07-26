import type { Metadata, Viewport } from "next";
import { serif, sans } from "@/lib/fonts";
import { site } from "@/config/site";
import { organizationSchema } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — We Build the Experience Behind the Brand`,
    template: `%s — ${site.name}`,
  },
  description: site.brand.metaDescription,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  keywords: [
    "The 5 Loaves Agency",
    "5LA",
    "experience company",
    "business experience",
    "technology experience",
    "training experience",
    "media experience",
  ],
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — We Build the Experience Behind the Brand`,
    description: site.brand.metaDescription,
    url: site.url,
    images: [{ url: "/brand/og-image.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — We Build the Experience Behind the Brand`,
    description: site.brand.metaDescription,
    images: ["/brand/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#171514",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
