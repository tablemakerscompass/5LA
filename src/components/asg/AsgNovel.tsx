import Image from "next/image";
import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import AsgPendingAction from "./AsgPendingAction";
import AsgStatusPill from "./AsgStatusPill";
import { asgAssets, novelThemes } from "@/config/aunt-sarahs-girls";
import styles from "./AsgNovel.module.css";

/**
 * Section 4 — The novel.
 *
 * FOR EDITORS: the three calls to action below are intentionally inert. When an
 * approved destination is supplied, replace the matching <AsgPendingAction>
 * with a <Button href="…"> carrying the same label. No publication date, ISBN,
 * retailer, or price may be added without approval.
 */
export default function AsgNovel() {
  return (
    <section
      id="the-novel"
      className={`section ${styles.wrap}`}
      aria-labelledby="asg-novel-heading"
    >
      <Container>
        <div className={styles.grid}>
          <Reveal className={styles.figure}>
            <div className={styles.coverFrame}>
              {asgAssets.bookCover ? (
                <Image
                  src={asgAssets.bookCover}
                  alt="Front cover of the novel Aunt Sarah’s Girls: Legacy & Secrets."
                  fill
                  sizes="(min-width: 900px) 380px, 70vw"
                  loading="lazy"
                  className={styles.cover}
                />
              ) : (
                <div className={styles.coverPlaceholder}>
                  <span className={styles.coverSpine} aria-hidden="true" />
                  <span className={styles.coverLabel}>
                    Approved book cover artwork
                  </span>
                  <span className={styles.coverNote}>
                    Asset required — no cover has been designed or approved for
                    publication here
                  </span>
                </div>
              )}
            </div>
          </Reveal>

          <div className={styles.copy}>
            <Reveal>
              <p className="eyebrow">The Literary Experience</p>
              <hr className={`rule ${styles.rule}`} />
              <h2 id="asg-novel-heading" className={`section-heading ${styles.heading}`}>
                Aunt Sarah’s Girls: Legacy &amp; Secrets
              </h2>
              <p className={styles.statusRow}>
                <AsgStatusPill status="in-development" />
              </p>
            </Reveal>

            <Reveal delay={90}>
              <p className={`body ${styles.body}`}>
                The novel brings readers into the lives, relationships, memories,
                and truths of the women connected to Aunt Sarah’s home.
              </p>
              <p className={`body ${styles.body}`}>
                Through layered character stories and family history, the book
                explores the consequences of silence, the complexity of survival,
                and the possibility of healing through truth and communication.
              </p>
            </Reveal>

            <Reveal delay={140} className={styles.themesBlock}>
              <h3 className={styles.subhead}>Themes readers will meet</h3>
              <ul className={styles.themes}>
                {novelThemes.map((theme) => (
                  <li key={theme} className={styles.theme}>
                    {theme}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={180}>
              <p className={`lead ${styles.readerStatement}`}>
                The goal is not simply for readers to observe the women. It is for
                readers to recognize the questions, patterns, silences, and truths
                within their own lives and families.
              </p>
            </Reveal>

            <Reveal delay={220} className={styles.actions}>
              <AsgPendingAction
                label="Learn About the Book"
                note="Detail page in development"
              />
              <AsgPendingAction
                label="Join the Book List"
                note="Sign-up not yet connected"
              />
              <AsgPendingAction
                label="Purchase or Preorder"
                note="No approved retailer link — not yet available"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
