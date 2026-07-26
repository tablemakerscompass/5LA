import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { getCompany } from "@/config/companies";
import styles from "./SectorEcosystem.module.css";

type Group = {
  sector: string;
  accent: "burgundy" | "ink" | "green" | "gold";
  href: string;
  /** Company slugs, or a prose statement where no separate brand applies. */
  slugs?: string[];
  statement?: string;
};

const groups: Group[] = [
  {
    sector: "Media Experience",
    accent: "gold",
    href: "/experience-sectors/media",
    slugs: [
      "georgia-b-media-group",
      "georgia-b-society",
      "aunt-sarahs-girls",
      "the-sarah-method",
    ],
  },
  {
    sector: "Technology Experience",
    accent: "ink",
    href: "/experience-sectors/technology",
    slugs: ["velaxity"],
  },
  {
    sector: "Training Experience",
    accent: "green",
    href: "/experience-sectors/training",
    slugs: ["5la-academy", "tablemakers"],
  },
  {
    sector: "Business Experience",
    accent: "burgundy",
    href: "/experience-sectors/business",
    statement:
      "The strategic and operational foundation supporting the full 5LA ecosystem and external client engagements.",
  },
];

/**
 * Section 8 — typographic brand architecture mapping each sector to the
 * companies, platforms, and properties it supports.
 */
export default function SectorEcosystem() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="ecosystem-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Built Within the 5LA Ecosystem"
          title={
            <span id="ecosystem-heading">
              Our Sectors Support the Companies, Platforms, and Properties We
              Build.
            </span>
          }
          divider
        />

        <div className={styles.groups}>
          {groups.map((group, i) => (
            <Reveal
              key={group.sector}
              delay={i * 80}
              className={styles.group}
            >
              <div className={styles.groupInner} data-accent={group.accent}>
                <h3 className={styles.sector}>
                  <Link href={group.href} className={styles.sectorLink}>
                    {group.sector}
                  </Link>
                </h3>

                {group.slugs && (
                  <ul className={styles.brands}>
                    {group.slugs.map((slug) => {
                      const company = getCompany(slug);
                      if (!company) return null;
                      return (
                        <li key={slug}>
                          <Link
                            href={`/our-companies/${slug}`}
                            className={styles.brand}
                          >
                            {company.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}

                {group.statement && (
                  <p className={styles.statement}>{group.statement}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140} className={styles.ctaWrap}>
          <Button href="/our-companies" variant="primary" size="lg">
            Explore Our Companies
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
