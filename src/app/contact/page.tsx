import type { Metadata } from "next";
import PlaceholderPage from "@/components/layout/PlaceholderPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  path: "/contact",
  description: "Get in touch with The 5 Loaves Agency.",
});

export default function ContactPage() {
  return (
    <PlaceholderPage
      eyebrow="Contact"
      title="Start a conversation."
      crumbs={[{ label: "Contact" }]}
      note="Contact details and a contact form will be added in a later phase. No contact information is shown yet to avoid publishing unverified details."
      cta={false}
    />
  );
}
