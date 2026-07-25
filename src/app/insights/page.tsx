import type { Metadata } from "next";
import PlaceholderPage from "@/components/layout/PlaceholderPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Insights",
  path: "/insights",
  description: "Perspectives and ideas from The 5 Loaves Agency.",
});

export default function InsightsPage() {
  return (
    <PlaceholderPage
      eyebrow="Insights"
      title="Ideas on experience, systems, and story."
      crumbs={[{ label: "Insights" }]}
      note="Articles and perspectives will be published here in a later phase."
    />
  );
}
