import Container from "@/components/layout/Container";
import EditorialImage from "@/components/ui/EditorialImage";
import Reveal from "@/components/ui/Reveal";
import styles from "./GbLegacy.module.css";

/**
 * Section 3 — the legacy behind the name.
 *
 * Uses the approved photograph of Georgia B. (`public/brand/georgia-b-portrait.jpg`).
 * No portrait is generated or altered, and no biographical detail beyond the
 * approved copy appears here.
 */
export default function GbLegacy() {
  return (
    <section
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="legacy-heading"
    >
      <Container>
        <div className={styles.grid}>
          <Reveal className={styles.figure}>
            <EditorialImage
              src="/brand/georgia-b-portrait.jpg"
              alt="Portrait of Georgia B., the woman the Media Group is named in honor of."
              aspect="3/4"
              className={styles.image}
            />
          </Reveal>

          <div className={styles.content}>
            <Reveal>
              <p className="eyebrow">The Woman Behind the Name</p>
              <hr className={`rule ${styles.rule}`} />
              <h2
                id="legacy-heading"
                className={`section-heading ${styles.heading}`}
              >
                Named in Honor of Georgia B.—A Legacy of Care, Family,
                Hospitality, and Making Room for Others.
              </h2>
            </Reveal>

            <Reveal delay={120} className={styles.copy}>
              <p className={`body ${styles.paragraph}`}>
                The Georgia B. Media Group carries the name of a woman whose
                life represented care, family, hospitality, strength, and the
                ability to make room for people.
              </p>
              <p className={`body ${styles.paragraph}`}>
                Her legacy serves as a reminder that stories are not created
                only for recognition. They are created to preserve what matters,
                give language to lived experience, bring people together, and
                leave something meaningful for those who come next.
              </p>
              <p className={`body ${styles.paragraph}`}>
                That spirit guides how the Media Group approaches publishing,
                production, storytelling, and community-centered work.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <figure className={styles.quoteWrap}>
                <blockquote className={styles.quote}>
                  Legacy is not only what we leave behind. It is what we build
                  carefully enough for others to carry forward.
                </blockquote>
              </figure>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
