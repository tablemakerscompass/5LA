import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { methodMovements, smBrand } from "@/config/the-sarah-method";
import styles from "./SmMethod.module.css";

/**
 * Section 4 — The Method.
 *
 * These are the five movements a user actually meets in the application's
 * "The Method" tab, in the product's own order — they spell SARAH. The stage
 * descriptions here are written for this page; inside the app each movement
 * also carries a scripture and a journaling prompt.
 *
 * This is a reflection framework, not a clinical methodology. No claim of
 * evidence base, treatment, diagnosis, or guaranteed outcome is made.
 */
export default function SmMethod() {
  return (
    <section
      id="the-method"
      className={`section ${styles.wrap}`}
      aria-labelledby="sm-method-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="The Reflection Journey"
          title={<span id="sm-method-heading">Truth. Healing. Purpose.</span>}
          lead="Inside the application, reflection is organised around five movements. They spell her name, and they are meant to be walked at your own pace rather than completed."
          divider
        />

        <ol className={styles.list}>
          {methodMovements.map((movement, i) => (
            <Reveal
              key={movement.title}
              as="li"
              delay={(i % 2) * 80}
              className={styles.item}
            >
              <div className={styles.marker}>
                <span className={styles.letter} aria-hidden="true">
                  {movement.letter}
                </span>
                <span className={styles.index}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className={styles.itemBody}>
                <h3 className={styles.title}>{movement.title}</h3>
                <p className={`body ${styles.copy}`}>{movement.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={80}>
          <p className={`caption ${styles.note}`}>
            {smBrand.faithNote}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
