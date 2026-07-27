import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { outcomes } from "@/config/velaxity";
import styles from "./VxOutcomes.module.css";

/**
 * Section 11 — What VelaXity may help leaders do.
 *
 * Framed as design intent throughout. No revenue, retention, productivity,
 * compliance, risk, forecasting, or cost claim appears here, because none has
 * been measured.
 */
export default function VxOutcomes() {
  return (
    <section
      id="leadership-outcomes"
      className={`section ${styles.wrap}`}
      aria-labelledby="vx-outcomes-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Leadership Outcomes"
          title={
            <span id="vx-outcomes-heading">
              Designed to Create More Clarity Across the Work of Leadership.
            </span>
          }
          lead="These are the platform's design goals. They describe what VelaXity is built to support, not results it guarantees."
          divider
        />

        <ul className={styles.list}>
          {outcomes.map((outcome, i) => (
            <Reveal
              key={outcome}
              as="li"
              delay={(i % 4) * 50}
              className={styles.item}
            >
              <span className={styles.marker} aria-hidden="true" />
              {outcome}
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
