import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { conversationTopics } from "@/config/tablemakers";
import styles from "./TmTopics.module.css";

/**
 * Section 8 — Conversations Tablemakers leads.
 *
 * Full-width editorial blocks, all topics visible: no tabs, no accordion, no
 * hover-revealed content. Usable by keyboard, touch, and screen reader alike.
 */
export default function TmTopics() {
  return (
    <section
      id="conversation-topics"
      className={`section ${styles.wrap}`}
      aria-labelledby="tm-topics-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="What We Talk About"
          title={
            <span id="tm-topics-heading">
              The Work Is Broader Than a Job Title—and Deeper Than a Trend.
            </span>
          }
          divider
        />

        <div className={styles.list}>
          {conversationTopics.map((category, i) => (
            <Reveal
              key={category.number}
              delay={(i % 2) * 60}
              className={styles.category}
            >
              <article
                className={styles.categoryInner}
                aria-labelledby={`topic-${category.number}-heading`}
              >
                <div className={styles.head}>
                  <span className={styles.number} aria-hidden="true">
                    {category.number}
                  </span>
                  <h3
                    id={`topic-${category.number}-heading`}
                    className={styles.title}
                  >
                    {category.title}
                  </h3>
                </div>
                <ul className={styles.topics}>
                  {category.topics.map((topic) => (
                    <li key={topic} className={styles.topic}>
                      {topic}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
