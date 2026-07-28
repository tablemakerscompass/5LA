import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import styles from "./CompaniesLoaves.module.css";

const values = [
  "Leadership",
  "Ownership",
  "Alignment",
  "Vision",
  "Excellence",
  "Service",
];

/**
 * Section 10 — the shared standard across the ecosystem. A concise
 * treatment; the full framework lives on the About page.
 */
export default function CompaniesLoaves() {
  return (
    <section
      className={`section-tight ${styles.wrap}`}
      aria-labelledby="loaves-companies-heading"
    >
      <Container>
        <div className={styles.grid}>
          <Reveal className={styles.head}>
            <p className="eyebrow">One Shared Standard</p>
            <hr className={`rule ${styles.rule}`} />
            <h2
              id="loaves-companies-heading"
              className={`section-heading ${styles.heading}`}
            >
              Every Brand Is Guided by Leadership, Ownership, Alignment, Vision,
              Excellence, and Service.
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
              The brands may serve different audiences and express different
              identities, but the LOAVES framework remains the standard behind
              how each initiative is built, led, developed, and experienced.
            </p>
            <Button href="/about" variant="primary" size="lg">
              Learn About the LOAVES Framework
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
