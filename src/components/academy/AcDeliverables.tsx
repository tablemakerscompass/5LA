import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { deliverables, outcomes } from "@/config/academy";
import styles from "./AcDeliverables.module.css";

/**
 * Sections 12 and 13 — possible deliverables, and experience outcomes.
 *
 * Outcomes are framed as design intent throughout. No statistic, percentage, or
 * guaranteed result appears, because none has been measured.
 */
export default function AcDeliverables() {
  return (
    <section
      id="deliverables-and-outcomes"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="ac-deliverables-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Possible Deliverables"
          title={
            <span id="ac-deliverables-heading">
              The Learning Solution Depends on the Audience and the Experience
              That Must Improve.
            </span>
          }
          divider
        />

        <Reveal delay={60}>
          <ul className={styles.deliverables}>
            {deliverables.map((item) => (
              <li key={item} className={styles.deliverable}>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className={styles.outcomesBlock}>
          <Reveal>
            <p className={`eyebrow ${styles.outcomesEyebrow}`}>
              What Stronger Development Can Support
            </p>
            <h3 className={styles.outcomesHeading}>
              When People Are Better Equipped, the Experience Becomes More
              Consistent.
            </h3>
            <p className={styles.outcomesIntro}>
              These are the conditions stronger development is designed to help
              create. They describe intent, not guaranteed results.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <ul className={styles.outcomes}>
              {outcomes.map((outcome) => (
                <li key={outcome} className={styles.outcome}>
                  <span className={styles.marker} aria-hidden="true" />
                  {outcome}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
