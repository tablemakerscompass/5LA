import type { Metadata } from "next";
import PlaceholderPage from "@/components/layout/PlaceholderPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Work With Us",
  path: "/work-with-us",
  description:
    "Partner with The 5 Loaves Agency to strengthen operations, develop people, implement technology, and create lasting experiences.",
});

export default function WorkWithUsPage() {
  return (
    <PlaceholderPage
      eyebrow="Work With Us"
      title="Let's build the experience behind your brand."
      crumbs={[{ label: "Work With Us" }]}
      note="The engagement overview and inquiry form will be built in a later phase. The shared form-style system is already in place to support it."
      cta={false}
    />
  );
}
