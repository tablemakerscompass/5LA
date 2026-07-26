import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./BusinessConnections.module.css";

const connections = [
  {
    sector: "Technology Experience",
    href: "/experience-sectors/technology",
    body: "Business systems may require automation, AI, digital tools, dashboards, or application development.",
  },
  {
    sector: "Training Experience",
    href: "/experience-sectors/training",
    body: "New standards and processes must be introduced, taught, practiced, and reinforced by leaders and employees.",
  },
  {
    sector: "Media Experience",
    href: "/experience-sectors/media",
    body: "Culture, service standards, launches, events, and business changes may require strong storytelling and communication.",
  },
];

/** Section 9 — how Business Experience connects to the other three sectors. */
export default function BusinessConnections() {
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
              Operations Rarely Improve in Isolation.
            </span>
          }
          divider
        />

        <div className={styles.grid}>
          {connections.map((connection, i) => (
            <Reveal
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
        </div>

        <Reveal delay={140}>
          <p className={styles.statement}>
            5LA connects the right sectors around the actual need rather than
            separating work that must function together.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
