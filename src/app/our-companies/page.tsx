import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/layout/Section";
import CompanyCard from "@/components/ui/CompanyCard";
import CTABanner from "@/components/ui/CTABanner";
import Reveal from "@/components/ui/Reveal";
import { companies } from "@/config/companies";
import { createMetadata } from "@/lib/seo";
import styles from "./companies.module.css";

export const metadata: Metadata = createMetadata({
  title: "Our Companies",
  path: "/our-companies",
  description:
    "The growing ecosystem of companies, platforms, and intellectual-property brands within The 5 Loaves Agency.",
});

export default function OurCompaniesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Companies"
        title="A growing ecosystem of brands and platforms."
        lead="The 5 Loaves Agency is the parent company behind a connected family of business services, technology, training programs, media projects, and original intellectual property."
        crumbs={[{ label: "Our Companies" }]}
      />

      <Section>
        <div className={styles.grid}>
          {companies.map((company, i) => (
            <Reveal key={company.slug} delay={(i % 3) * 80}>
              <CompanyCard company={company} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABanner
        eyebrow="Work with 5LA"
        title="One ecosystem, built to work together."
        primary={{ label: "Work With Us", href: "/work-with-us" }}
        secondary={{ label: "Experience Sectors", href: "/experience-sectors" }}
      />
    </>
  );
}
