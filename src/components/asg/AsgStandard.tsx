import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { asgStandards } from "@/config/aunt-sarahs-girls";
import styles from "./AsgStandard.module.css";

/** Section 15 — The ASG experience standard. Editorial typography, no icons. */
export default function AsgStandard() {
  return (
    <section
      id="experience-standard"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="asg-standard-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="How the Work Should Feel"
          title={
            <span id="asg-standard-heading">
              Emotionally Honest. Culturally Grounded. Welcoming Enough for Truth.
            </span>
          }
          divider
        />

        <dl className={styles.list}>
          {asgStandards.map((standard, i) => (
            <Reveal key={standard.title} delay={(i % 3) * 70} className={styles.item}>
              <dt className={styles.term}>{standard.title}</dt>
              <dd className={styles.desc}>{standard.body}</dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
