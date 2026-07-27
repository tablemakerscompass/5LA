import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { implementationSteps } from "@/config/velaxity";
import styles from "./VxImplementation.module.css";

/** Section 9 — The implementation experience. */
export default function VxImplementation() {
  return (
    <section
      id="implementation"
      className={`section ${styles.wrap}`}
      aria-labelledby="vx-implementation-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="From Platform to Practice"
          title={
            <span id="vx-implementation-heading">
              A Leadership System Only Creates Value When the Organization Is
              Prepared to Use It.
            </span>
          }
          divider
        />

        <ol className={styles.list}>
          {implementationSteps.map((step, i) => (
            <Reveal
              key={step.number}
              as="li"
              delay={(i % 2) * 60}
              className={styles.item}
            >
              <span className={styles.number} aria-hidden="true">
                {step.number}
              </span>
              <div className={styles.itemBody}>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.body}>{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
