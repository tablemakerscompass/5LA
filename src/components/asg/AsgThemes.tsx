import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { asgThemes } from "@/config/aunt-sarahs-girls";
import styles from "./AsgThemes.module.css";

/** Section 3 — What the story explores. Editorial typography, no icons. */
export default function AsgThemes() {
  return (
    <section
      id="what-the-story-explores"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="asg-themes-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="At the Heart of the Story"
          title={
            <span id="asg-themes-heading">
              The Truths Families Carry—and the Cost of Leaving Them Unspoken.
            </span>
          }
          divider
        />

        <ol className={styles.list}>
          {asgThemes.map((theme, i) => (
            <Reveal
              key={theme.title}
              as="li"
              delay={(i % 2) * 90}
              className={styles.item}
            >
              <span className={styles.number} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className={styles.itemBody}>
                <h3 className={styles.title}>{theme.title}</h3>
                <p className={`body ${styles.copy}`}>{theme.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
