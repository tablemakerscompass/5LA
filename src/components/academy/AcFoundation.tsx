import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import AcStatusPill from "./AcStatusPill";
import {
  acBrand,
  completionRecords,
  tablemakerStandards,
  weekOneConcepts,
} from "@/config/academy";
import styles from "./AcFoundation.module.css";

/**
 * Section 6 — Where the learning begins.
 *
 * Two blocks, honestly separated:
 *
 * 1. The Tablemaker Standards — VERIFIED. Four codified principles with
 *    operational examples, live in the Academy's learning surface today.
 * 2. Week One — approved brand copy, but no written curriculum was found in
 *    the application or the company Drive, so it is labelled in development.
 *
 * Concepts are described, not reproduced: this shows the learning philosophy
 * without exposing proprietary curriculum. No certificate, course dashboard,
 * or completion screen is depicted.
 */
export default function AcFoundation() {
  return (
    <section
      id="current-foundation"
      className={`section ${styles.wrap}`}
      aria-labelledby="ac-foundation-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Where the Learning Begins"
          title={
            <span id="ac-foundation-heading">
              The Standards We Teach First.
            </span>
          }
          lead="A look at the Academy's learning philosophy through the material that anchors it. Full curriculum is shared with participating organizations rather than published here."
          divider
        />

        {/* --- Verified: the Tablemaker Standards --- */}
        <Reveal delay={60} className={styles.block}>
          <div className={styles.blockHead}>
            <h3 className={styles.blockTitle}>The Tablemaker Standards</h3>
            <AcStatusPill status="available" />
          </div>
          <p className={styles.blockIntro}>
            Four codified behaviors that turn a transaction into an experience.
            Each is taught with a definition and a real operational example, so
            learners can recognize the standard in their own work.
          </p>

          <ol className={styles.standards}>
            {tablemakerStandards.map((standard, i) => (
              <li key={standard.title} className={styles.standard}>
                <span className={styles.standardNumber} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className={styles.standardBody}>
                  <h4 className={styles.standardTitle}>{standard.title}</h4>
                  <p className={styles.standardDef}>{standard.definition}</p>
                  <p className={styles.standardExample}>
                    <span className={styles.exampleLabel}>In practice</span>
                    {standard.example}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        {/* --- In development: Week One --- */}
        <Reveal delay={100} className={styles.block}>
          <div className={styles.blockHead}>
            <h3 className={styles.blockTitle}>
              Week One: Foundation — LOAVES and the Guest Experience
            </h3>
            <AcStatusPill status="in-development" />
          </div>
          <p className={styles.blockIntro}>
            The opening week of the Academy learning pathway. These are the
            concepts it is being built around; the written sessions are still in
            development and will be published here once complete.
          </p>

          <ol className={styles.concepts}>
            {weekOneConcepts.map((concept, i) => (
              <li key={concept.title} className={styles.concept}>
                <span className={styles.conceptNumber} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className={styles.conceptTitle}>{concept.title}</h4>
                  <p className={styles.conceptBody}>{concept.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        {/* --- Completion records, described accurately --- */}
        <Reveal delay={140} className={styles.records}>
          <h3 className={styles.recordsTitle}>How completion is recognized</h3>
          <p className={styles.recordsIntro}>
            When an organization runs Academy learning through VelaXity, it can
            issue completion records to its own team as assignments are
            finished. These recognize participation and learning within that
            organization.
          </p>
          <ul className={styles.recordList}>
            {completionRecords.map((record) => (
              <li key={record} className={styles.record}>
                {record}
              </li>
            ))}
          </ul>
          <p className={styles.disclaimer}>{acBrand.accreditationNote}</p>
        </Reveal>
      </Container>
    </section>
  );
}
