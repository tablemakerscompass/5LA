import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./MediaConnections.module.css";

const connections = [
  {
    sector: "Business Experience",
    href: "/experience-sectors/business",
    body: "Media properties require project structure, budgets, timelines, partnerships, events, standards, and operating systems.",
  },
  {
    sector: "Technology Experience",
    href: "/experience-sectors/technology",
    body: "Stories and audiences may require digital platforms, applications, content systems, automation, data, or online experiences.",
  },
  {
    sector: "Training Experience",
    href: "/experience-sectors/training",
    body: "Facilitators, speakers, production teams, partners, cast members, and community leaders may require preparation, tools, standards, or guided learning.",
  },
];

/** Section 15 — how Media Experience connects to the other sectors. */
export default function MediaConnections() {
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
              Stories Need Operations, Technology, and Prepared People to Reach
              Their Full Potential.
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
            5LA connects the creative work with the infrastructure required to
            deliver, extend, and sustain it.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
