import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./TechnologyConnections.module.css";

const connections = [
  {
    sector: "Business Experience",
    href: "/experience-sectors/business",
    body: "Technology must support clear operations, ownership, workflows, standards, and organizational priorities.",
  },
  {
    sector: "Training Experience",
    href: "/experience-sectors/training",
    body: "Leaders and employees must understand how the system works, why it matters, and how it supports their responsibilities.",
  },
  {
    sector: "Media Experience",
    href: "/experience-sectors/media",
    body: "Digital platforms, launches, internal communication, and audience experiences often require clear storytelling and content.",
  },
];

/** Section 12 — how Technology Experience connects to the other sectors. */
export default function TechnologyConnections() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="connections-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Connected Experience"
          title={
            <span id="connections-heading">
              Technology Cannot Succeed Without the Business, the People, and
              the Story.
            </span>
          }
          divider
        />

        <ul className={styles.list}>
          {connections.map((connection, i) => (
            <Reveal
              as="li"
              key={connection.href}
              delay={i * 80}
              className={styles.item}
            >
              <h3 className={styles.sector}>
                <Link href={connection.href} className={styles.link}>
                  {connection.sector}
                  <span className={styles.arrow} aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </h3>
              <p className={`body ${styles.body}`}>{connection.body}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={140}>
          <p className={styles.statement}>
            5LA connects the sectors required to make technology useful,
            adopted, and aligned with the experience.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
