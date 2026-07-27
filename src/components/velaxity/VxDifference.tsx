import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { distinctions } from "@/config/velaxity";
import styles from "./VxDifference.module.css";

/**
 * Section 8 — Why VelaXity is different.
 * No competitor is named, and no comparative claim is made.
 */
export default function VxDifference() {
  return (
    <section
      id="the-difference"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="vx-difference-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="The Difference"
          title={
            <span id="vx-difference-heading">
              Built From Leadership and Operations Experience—not From Features
              Looking for a Problem.
            </span>
          }
          divider
        />

        <ol className={styles.list}>
          {distinctions.map((item, i) => (
            <Reveal
              key={item.number}
              as="li"
              delay={(i % 3) * 70}
              className={styles.item}
            >
              <span className={styles.number} aria-hidden="true">
                {item.number}
              </span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.body}>{item.body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
