import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./MediaOutcomes.module.css";

const outcomes = [
  "Clearer story and message",
  "Stronger emotional connection",
  "Better alignment between brand and audience",
  "More organized production",
  "Greater consistency across platforms",
  "Stronger audience pathways",
  "More intentional live experiences",
  "Clearer property-development direction",
  "Better coordination between creative and operational work",
  "Content and experiences that continue beyond a single launch or event",
];

/** Section 13 — outcomes the work is designed to strengthen. */
export default function MediaOutcomes() {
  return (
    <section
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="outcomes-heading"
    >
      <Container>
        <div className={styles.layout}>
          <Reveal className={styles.head}>
            <p className="eyebrow">The Result</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="outcomes-heading" className={`section-heading ${styles.heading}`}>
              The Work Becomes More Coherent, Memorable, and Ready to Grow.
            </h2>
            <p className={`body ${styles.intro}`}>
              Audiences and outcomes cannot be promised, so the work is designed
              to strengthen what an organization can control:
            </p>
          </Reveal>

          <Reveal delay={120} className={styles.listWrap}>
            <ul className={styles.list}>
              {outcomes.map((outcome) => (
                <li key={outcome} className={styles.item}>
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
