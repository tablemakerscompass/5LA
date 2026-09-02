import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { companies } from "@/config/companies";
import styles from "./EcosystemTeaser.module.css";

/**
 * A two-line acknowledgement of the wider 5LA ecosystem, in place of the old
 * seven-card grid.
 *
 * The homepage now leads with hospitality, events, and business; the ventures
 * are context for that, not competing headliners. Names are read from the
 * companies config so the strip can never drift out of sync with
 * /our-companies, which still carries all seven in full.
 */
export default function EcosystemTeaser() {
  return (
    <section
      className={`section-tight ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="ecosystem-teaser-heading"
    >
      <Container>
        <Reveal className={styles.inner}>
          <div className={styles.text}>
            <p className="eyebrow">The 5LA Ecosystem</p>
            <hr className={`rule ${styles.rule}`} />
            <p id="ecosystem-teaser-heading" className={styles.statement}>
              Part of a growing vision — 5LA is also home to a family of ventures
              in technology, training, and media.
            </p>
            <p className={styles.names}>
              {companies.map((company) => company.name).join(" · ")}
            </p>
          </div>

          <div className={styles.action}>
            <Button href="/our-companies" variant="outline">
              Explore the 5LA Ecosystem
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
