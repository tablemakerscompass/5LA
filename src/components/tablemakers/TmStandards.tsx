import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { communityStandards } from "@/config/tablemakers";
import styles from "./TmStandards.module.css";

/** Section 11 — Community experience standards. Editorial, no icons. */
export default function TmStandards() {
  return (
    <section
      id="community-standards"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="tm-standards-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="How the Community Should Feel"
          title={
            <span id="tm-standards-heading">
              Professional Enough to Grow. Human Enough to Be Honest.
            </span>
          }
          divider
        />

        <dl className={styles.list}>
          {communityStandards.map((standard, i) => (
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
