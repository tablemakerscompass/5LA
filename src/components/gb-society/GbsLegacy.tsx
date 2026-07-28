import Container from "@/components/layout/Container";
import EditorialImage from "@/components/ui/EditorialImage";
import Reveal from "@/components/ui/Reveal";
import styles from "./GbsLegacy.module.css";

/**
 * Section 3 — the legacy behind the name.
 *
 * The approved photograph of Georgia B. is not in the repository. A labeled
 * placeholder holds its position; when the authorized photo is supplied, drop
 * it in `public/brand/` and swap the EditorialImage for an Image with
 * respectful alt text. No portrait is generated, no face altered, no dates or
 * personal family details are added, and nothing here reads as a memorial.
 */
export default function GbsLegacy() {
  return (
    <section
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="legacy-heading"
    >
      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <Reveal>
              <p className="eyebrow">The Woman Behind the Name</p>
              <hr className={`rule ${styles.rule}`} />
              <h2
                id="legacy-heading"
                className={`section-heading ${styles.heading}`}
              >
                Georgia B. Represented Care, Family, Hospitality, Strength, and
                Making Room for Others.
              </h2>
            </Reveal>

            <Reveal delay={120} className={styles.copy}>
              <p className={`body ${styles.paragraph}`}>
                The Georgia B. Society carries the name of a woman whose life
                reflected care, family, hospitality, strength, and the ability
                to make room for people.
              </p>
              <p className={`body ${styles.paragraph}`}>
                Her example is the foundation of the Society’s purpose: honoring
                the people who held families together, preserving the stories
                that shaped generations, and continuing the spirit of service
                through meaningful community experiences.
              </p>
              <p className={`body ${styles.paragraph}`}>
                The Society is not intended to tell only one family’s story. It
                begins with Georgia B.’s legacy and creates room for others to
                reflect on, preserve, and honor their own.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <figure className={styles.quoteWrap}>
                <blockquote className={styles.quote}>
                  She made room for people. The Society carries that spirit
                  forward.
                </blockquote>
              </figure>
            </Reveal>
          </div>

          <Reveal delay={100} className={styles.figure}>
            <EditorialImage
              placeholderLabel="Approved photograph of Georgia B."
              aspect="3/4"
              className={styles.image}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
