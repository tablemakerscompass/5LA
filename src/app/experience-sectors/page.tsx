import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/layout/Section";
import SectorCard from "@/components/ui/SectorCard";
import QuoteBlock from "@/components/ui/QuoteBlock";
import CTABanner from "@/components/ui/CTABanner";
import Reveal from "@/components/ui/Reveal";
import { sectors } from "@/config/sectors";
import { site } from "@/config/site";
import { createMetadata } from "@/lib/seo";
import styles from "./sectors.module.css";

export const metadata: Metadata = createMetadata({
  title: "Experience Sectors",
  path: "/experience-sectors",
  description:
    "The four connected experience sectors of The 5 Loaves Agency: Business, Technology, Training, and Media.",
});

export default function ExperienceSectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Experience Sectors"
        title="Four connected sectors. One experience."
        lead={site.brand.principle}
        crumbs={[{ label: "Experience Sectors" }]}
      />

      <Section>
        <div className={styles.grid}>
          {sectors.map((sector, i) => (
            <Reveal key={sector.slug} delay={i * 80}>
              <SectorCard sector={sector} />
            </Reveal>
          ))}
        </div>
      </Section>

      <QuoteBlock quote={site.brand.belief} eyebrow="Our belief" />

      <CTABanner
        eyebrow="Work with 5LA"
        title="Explore how the sectors work together."
        body="Every engagement draws on the systems, people, technology, and stories that shape a lasting experience."
        primary={{ label: "Work With Us", href: "/work-with-us" }}
        secondary={{ label: "About 5LA", href: "/about" }}
      />
    </>
  );
}
