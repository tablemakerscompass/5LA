import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./TrainingOutcomes.module.css";

const outcomes = [
  "Clearer expectations",
  "More confident employees",
  "Better-prepared managers",
  "Stronger leadership communication",
  "Improved service consistency",
  "Greater accountability",
  "Better alignment with organizational values",
  "Stronger employee understanding",
  "More practical application of standards",
  "A clearer connection between individual work and the customer experience",
];

/** Section 13 — outcomes the work is designed to support. */
export default function TrainingOutcomes() {
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
              When People Are Better Equipped, the Experience Becomes More
              Consistent.
            </h2>
            <p className={`body ${styles.intro}`}>
              Development is a continuing practice rather than a single event,
              so this sector is designed to help create:
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
