import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./TrainingConnections.module.css";

const connections = [
  {
    sector: "Business Experience",
    href: "/experience-sectors/business",
    body: "Employees need clear operations, policies, responsibilities, standards, and leadership systems supporting what they are taught.",
  },
  {
    sector: "Technology Experience",
    href: "/experience-sectors/technology",
    body: "Learning may require digital platforms, knowledge systems, AI support, completion tracking, or technology-adoption training.",
  },
  {
    sector: "Media Experience",
    href: "/experience-sectors/media",
    body: "Culture, standards, internal communication, branded learning, and audience-facing programs often require strong storytelling and content.",
  },
];

/** Section 15 — how Training Experience connects to the other sectors. */
export default function TrainingConnections() {
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
              Training Cannot Correct Systems That Do Not Support the Standard.
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
            5LA connects learning with the systems, tools, communication, and
            leadership required to make it usable and sustainable.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
