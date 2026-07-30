import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import TmPendingAction from "./TmPendingAction";
import TmStatusPill from "./TmStatusPill";
import { compassThemes } from "@/config/tablemakers";
import styles from "./TmCompass.module.css";

/**
 * Section 7 — The Tablemakers Compass.
 *
 * VERIFIED: no Compass article has been published. The 5LA site's own insights
 * data is explicitly placeholder, the Drive holds no Compass documents, and no
 * publication URL exists anywhere in the three repositories.
 *
 * So this section shows THEMES the publication will explore — never articles.
 * There are no cards dressed as posts, no dates, no read times, no author
 * lines, and no links. When real pieces exist, add an `articles` export with
 * exact titles, dates, and URLs, and render them here instead.
 */
export default function TmCompass() {
  return (
    <section
      id="the-compass"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="tm-compass-heading"
    >
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">Thought Leadership</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="tm-compass-heading" className={`section-heading ${styles.heading}`}>
              The Tablemakers Compass: Insight for the People Guiding the
              Experience
            </h2>
            <p className={styles.statusRow}>
              <TmStatusPill status="in-development" />
            </p>
          </Reveal>
          <Reveal delay={100} className={styles.intro}>
            <p className={`body ${styles.body}`}>
              The Tablemakers Compass is the thought-leadership and editorial
              voice of the Tablemakers platform.
            </p>
            <p className={`body ${styles.body}`}>
              It explores the realities of hospitality, leadership, service,
              culture, operations, workforce development, events, professional
              standards, and the future of meaningful experiences.
            </p>
          </Reveal>
        </div>

        <Reveal delay={60} className={styles.themesBlock}>
          <h3 className={styles.subhead}>The themes it will follow</h3>
          <p className={styles.themesNote}>
            These are the questions the Compass is being written around. They are
            subjects, not published pieces — nothing has been released yet.
          </p>
          <ul className={styles.themes}>
            {compassThemes.map((theme) => (
              <li key={theme} className={styles.theme}>
                {theme}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100} className={styles.actions}>
          <TmPendingAction
            label="Read The Tablemakers Compass"
            note="No article has been published yet — this opens with the first piece"
          />
        </Reveal>
      </Container>
    </section>
  );
}
