import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import TmPendingAction from "./TmPendingAction";
import TmStatusPill from "./TmStatusPill";
import { compassThemes } from "@/config/tablemakers";
import {
  compassArticles,
  formatDate,
  readingMinutes,
} from "@/config/articles";
import styles from "./TmCompass.module.css";

/**
 * Section 7 — The Tablemakers Compass.
 *
 * Published pieces come from `compassArticles` — real articles in the 5LA
 * Insights library, carrying their own titles, dates, and routes. Nothing here
 * is dressed up: when that list is empty the section falls back to the THEMES
 * the publication will explore, with no cards posing as posts and no link to a
 * destination that does not exist.
 */
export default function TmCompass() {
  const published = compassArticles;
  const latest = published[0];

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
              <TmStatusPill status={latest ? "available" : "in-development"} />
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

        {published.length > 0 && (
          <Reveal delay={60} className={styles.publishedBlock}>
            <h3 className={styles.subhead}>Published</h3>
            <ul className={styles.published}>
              {published.map((article) => (
                <li key={article.slug} className={styles.publishedItem}>
                  <Link
                    href={`/insights/${article.slug}`}
                    className={styles.publishedLink}
                  >
                    {article.title}
                  </Link>
                  <p className={styles.publishedMeta}>
                    {formatDate(article.date)} · {readingMinutes(article)} min
                    read
                  </p>
                  <p className={styles.publishedExcerpt}>{article.excerpt}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        <Reveal delay={60} className={styles.themesBlock}>
          <h3 className={styles.subhead}>The themes it follows</h3>
          <p className={styles.themesNote}>
            These are the questions the Compass is written around. They are
            subjects, not a publication schedule.
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
          {latest ? (
            <Button href={`/insights/${latest.slug}`} variant="gold" size="lg">
              Read The Tablemakers Compass
            </Button>
          ) : (
            <TmPendingAction
              label="Read The Tablemakers Compass"
              note="No article has been published yet — this opens with the first piece"
            />
          )}
        </Reveal>
      </Container>
    </section>
  );
}
