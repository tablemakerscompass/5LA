import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./SmWhy.module.css";

/** Section 3 — Why the platform exists. */
export default function SmWhy() {
  return (
    <section
      id="why-this-exists"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="sm-why-heading"
    >
      <Container narrow>
        <SectionIntro
          eyebrow="Why This Space Was Created"
          title={
            <span id="sm-why-heading">
              Some Women Have Been Carrying the Story Without Ever Having Space
              to Examine It.
            </span>
          }
          divider
        />

        <Reveal delay={80} className={styles.copy}>
          <p className={`body ${styles.body}`}>
            The Sarah Method grew from the questions at the heart of Aunt Sarah’s
            Girls: What happens when women are expected to survive without
            speaking? What does silence pass from one generation to the next?
            What changes when someone finally tells the truth?
          </p>
          <p className={`body ${styles.body}`}>
            The platform creates a private, guided environment where women can
            reflect on what happened, what they learned to carry, how it shaped
            their identity, and what they may be ready to release, communicate,
            or understand differently.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <figure className={styles.quoteWrap}>
            <span className={styles.quoteMark} aria-hidden="true">
              &ldquo;
            </span>
            <blockquote className={`quote ${styles.quote}`}>
              Healing often begins when what has been carried silently is finally
              given language.
            </blockquote>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
