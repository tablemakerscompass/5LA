import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./BusinessOutcomes.module.css";

const outcomes = [
  "Clearer expectations",
  "Stronger leadership alignment",
  "Better employee understanding",
  "More consistent service",
  "Improved accountability",
  "Reduced operational confusion",
  "Better preparation for growth",
  "More efficient implementation",
  "Stronger customer trust",
  "Greater confidence in daily operations",
];

/** Section 8 — outcomes, stated as what the work is designed to support. */
export default function BusinessOutcomes() {
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
              When the Foundation Improves, the Experience Becomes More
              Reliable.
            </h2>
            <p className={`body ${styles.intro}`}>
              Every organization is different, so the work is designed to
              support progress rather than promise a fixed result. Stronger
              structure can help create:
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
