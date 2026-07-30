import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { exampleTables } from "@/config/tablemakers";
import styles from "./TmExampleTables.module.css";

/**
 * Section 13 — Example Tablemakers experiences.
 *
 * ILLUSTRATIONS ONLY. None of these is scheduled, and no facilitator, date,
 * venue, attendance figure, or result may ever be added to them. The heading
 * and the note both say so, so a reader never mistakes one for an invitation.
 */
export default function TmExampleTables() {
  return (
    <section
      id="example-tables"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="tm-examples-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="What This May Look Like"
          title={
            <span id="tm-examples-heading">
              Examples of Tablemakers Conversations and Gatherings
            </span>
          }
          lead="These are illustrations of what a table could cover — not scheduled events. None has a date, a venue, or a place to register."
          divider
        />

        <div className={styles.list}>
          {exampleTables.map((table, i) => (
            <Reveal key={table.title} delay={(i % 3) * 60} className={styles.table}>
              <h3 className={styles.title}>{table.title}</h3>
              <ul className={styles.topics}>
                {table.topics.map((topic) => (
                  <li key={topic} className={styles.topic}>
                    {topic}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
