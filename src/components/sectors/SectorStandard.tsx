import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import styles from "./SectorStandard.module.css";

const values = [
  "Leadership",
  "Ownership",
  "Alignment",
  "Vision",
  "Excellence",
  "Service",
];

/**
 * Section 7 — a concise reference to the LOAVES framework. The full
 * treatment lives on the About page; this is the sector-level summary.
 */
export default function SectorStandard() {
  return (
    <section
      className={`section-tight ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="standard-heading"
    >
      <Container>
        <div className={styles.grid}>
          <Reveal className={styles.head}>
            <p className="eyebrow">One Standard</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="standard-heading" className={`section-heading ${styles.heading}`}>
              Every Sector Is Guided by the LOAVES Framework.
            </h2>
            <ul className={styles.values}>
              {values.map((value) => (
                <li key={value} className={styles.value}>
                  <span className={styles.letter} aria-hidden="true">
                    {value.charAt(0)}
                  </span>
                  <span className={styles.word}>{value}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className={styles.copy}>
            <p className={`body ${styles.body}`}>
              Whether we are strengthening operations, implementing technology,
              developing people, or producing a story, the standard remains the
              same: clear leadership, responsible ownership, shared alignment,
              meaningful vision, disciplined excellence, and service centered on
              people.
            </p>
            <Button
              href="/about"
              variant="outline"
              size="lg"
              className={styles.cta}
            >
              Learn About the LOAVES Framework
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
