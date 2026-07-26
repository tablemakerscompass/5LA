import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { sectors } from "@/config/sectors";
import styles from "./SectorsConnect.module.css";

/**
 * Section 4 — a typographic relationship composition: the four sectors set
 * around a central "Experience" statement. Interlocking panels on desktop,
 * a legible vertical sequence on small screens.
 */
export default function SectorsConnect() {
  return (
    <section
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="connect-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="One Experience System"
          title={
            <span id="connect-heading">
              The Sectors Are Most Powerful When They Work Together.
            </span>
          }
          lead="A new system may require employee training. A service standard may require stronger operations. A business launch may require technology, storytelling, and leadership alignment. A media property may require project management, audience strategy, and live-experience development."
          divider
        />

        <Reveal delay={100}>
          <p className={`body ${styles.note}`}>
            5LA does not force every engagement into all four sectors. We
            identify what the experience requires and connect the right
            capabilities around the need.
          </p>
        </Reveal>

        <Reveal delay={140} className={styles.diagram}>
          <ul className={styles.panels}>
            {sectors.map((sector) => (
              <li key={sector.slug} className={styles.panel}>
                <span className={styles.panelNumber} aria-hidden="true">
                  {sector.number}
                </span>
                <span className={styles.panelName}>{sector.shortName}</span>
                <span className={styles.panelStatement}>{sector.statement}</span>
              </li>
            ))}
          </ul>

          <p className={styles.center}>
            <span className={styles.centerLabel}>The Result</span>
            <span className={styles.centerWord}>Experience</span>
            <span className={styles.centerLine} aria-hidden="true" />
            <span className={styles.centerNote}>
              Everything working together.
            </span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
