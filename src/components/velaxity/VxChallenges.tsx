import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { challenges } from "@/config/velaxity";
import styles from "./VxChallenges.module.css";

/**
 * Section 3 — The problems VelaXity addresses.
 * Large editorial numerals rather than warning icons.
 */
export default function VxChallenges() {
  return (
    <section
      id="the-leadership-reality"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="vx-challenges-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="The Leadership Reality"
          title={
            <span id="vx-challenges-heading">
              When Every Tool Holds a Piece of the Organization but No Tool Shows
              the Whole.
            </span>
          }
          divider
        />

        <ol className={styles.list}>
          {challenges.map((challenge, i) => (
            <Reveal
              key={challenge.title}
              as="li"
              delay={(i % 2) * 70}
              className={styles.item}
            >
              <span className={styles.number} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className={styles.itemBody}>
                <h3 className={styles.title}>{challenge.title}</h3>
                <p className={styles.body}>{challenge.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
