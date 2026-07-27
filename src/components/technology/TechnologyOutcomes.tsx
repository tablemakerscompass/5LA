import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./TechnologyOutcomes.module.css";

const outcomes = [
  "Fewer disconnected processes",
  "Reduced repetitive work",
  "Clearer information",
  "Better leadership visibility",
  "More consistent reporting",
  "Stronger employee adoption",
  "Faster access to organizational knowledge",
  "More intentional AI use",
  "Better alignment between systems and operations",
  "Technology that supports rather than interrupts the human experience",
];

/** Section 10 — outcomes the work is designed to support. */
export default function TechnologyOutcomes() {
  return (
    <section
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="outcomes-heading"
    >
      <Container>
        <Reveal className={styles.head}>
          <p className="eyebrow">The Result</p>
          <hr className={`rule ${styles.rule}`} />
          <h2 id="outcomes-heading" className={`section-heading ${styles.heading}`}>
            Technology Becomes More Valuable When It Fits the Work.
          </h2>
          <p className={`body ${styles.intro}`}>
            Results depend on the organization and how the work is carried
            forward, so this sector is designed to help create:
          </p>
        </Reveal>

        <ol className={styles.list}>
          {outcomes.map((outcome, i) => (
            <Reveal
              as="li"
              key={outcome}
              delay={(i % 2) * 60}
              className={styles.item}
            >
              <span className={styles.n} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={styles.text}>{outcome}</span>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
