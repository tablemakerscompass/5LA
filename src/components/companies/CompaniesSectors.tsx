import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./CompaniesSectors.module.css";

const sectorRoles = [
  {
    name: "Business Experience",
    href: "/what-we-do",
    body: "Provides strategy, structure, operations, standards, partnerships, project management, and implementation.",
  },
  {
    name: "Technology Experience",
    href: "/our-companies/velaxity",
    body: "Provides AI, applications, digital systems, automation, user experience, and organizational intelligence.",
  },
  {
    name: "Training Experience",
    href: "/our-companies/5la-academy",
    body: "Provides leadership development, workforce learning, facilitation, professional resources, and adoption support.",
  },
  {
    name: "Media Experience",
    href: "/our-companies/georgia-b-media-group",
    body: "Provides publishing, storytelling, production, content, live experiences, and audience development.",
  },
];

/** Section 7 — the sectors as shared capability, not separate offerings. */
export default function CompaniesSectors() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="sectors-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Connected Capabilities"
          title={
            <span id="sectors-heading">
              Every Brand Is Strengthened by the Four 5LA Experience Sectors.
            </span>
          }
          divider
        />

        <ul className={styles.list}>
          {sectorRoles.map((sector, i) => (
            <Reveal
              as="li"
              key={sector.href}
              delay={(i % 2) * 70}
              className={styles.item}
            >
              <h3 className={styles.name}>
                <Link href={sector.href} className={styles.link}>
                  {sector.name}
                  <span className={styles.arrow} aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </h3>
              <p className={`body ${styles.body}`}>{sector.body}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={140}>
          <p className={styles.statement}>
            The sectors are not separate from the ecosystem. They are the shared
            capabilities helping each brand move from vision to experience.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
