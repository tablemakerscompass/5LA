import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./GbSectors.module.css";

const sectorRoles = [
  {
    name: "Business Experience",
    href: "/experience-sectors/business",
    body: "Supports operations, project management, timelines, budgets, partnerships, events, structure, and implementation.",
  },
  {
    name: "Technology Experience",
    href: "/experience-sectors/technology",
    body: "Supports digital platforms, applications, audience tools, automation, content systems, and online experiences.",
  },
  {
    name: "Training Experience",
    href: "/experience-sectors/training",
    body: "Supports facilitator development, cast or team preparation, partner education, workshops, and companion learning experiences.",
  },
  {
    name: "Media Experience",
    href: "/experience-sectors/media",
    body: "Supports publishing, storytelling, production, audience development, visual content, and live experiences.",
  },
];

/** Section 8 — how the shared 5LA sectors support the Media Group. */
export default function GbSectors() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="gb-sectors-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Powered by the 5LA Experience Sectors"
          title={
            <span id="gb-sectors-heading">
              Creative Vision Is Strengthened by Shared Business, Technology,
              Training, and Media Capabilities.
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
            This shared infrastructure allows the Media Group to develop stories
            with both creative depth and operational discipline.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
