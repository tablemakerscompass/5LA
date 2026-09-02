import Container from "@/components/layout/Container";
import AsgImageFrame from "./AsgImageFrame";
import Reveal from "@/components/ui/Reveal";
import AsgStatusPill from "./AsgStatusPill";
import { asgAssets } from "@/config/aunt-sarahs-girls";
import styles from "./AsgStage.module.css";

/**
 * The stage production — now the second section on the page, directly after
 * the hero.
 *
 * The production-elements list and the production-information actions were
 * removed while the property is still early in development; only the
 * descriptive copy remains.
 *
 * FOR EDITORS: no dates, venues, ticket links, or casting details appear here,
 * and none may be added until they are approved and supplied.
 */
export default function AsgStage() {
  return (
    <section
      id="the-stage-production"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="asg-stage-heading"
    >
      <Container>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <Reveal>
              <p className="eyebrow">The Theatrical Experience</p>
              <hr className={`rule ${styles.rule}`} />
              <h2 id="asg-stage-heading" className={`section-heading ${styles.heading}`}>
                The Story Moves From the Page to the Stage.
              </h2>
              <p className={styles.statusRow}>
                <AsgStatusPill status="in-development" />
              </p>
            </Reveal>
            <Reveal delay={90}>
              <p className={`body ${styles.body}`}>
                Aunt Sarah’s Girls began as a theatrical work and is being
                developed as a live experience where audiences can witness the
                women’s truths, relationships, humor, conflict, pain, and
                resilience in the room together.
              </p>
              <p className={`body ${styles.body}`}>
                The stage production combines intimate storytelling, emotionally
                layered performances, family history, and the shared energy of an
                audience confronting the story in real time.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120} className={styles.figure}>
            <AsgImageFrame
              src={asgAssets.stage}
              alt="The Aunt Sarah’s Girls ensemble in performance, gathered around a sofa on the living-room set under stage light."
              placeholderLabel="Approved production or rehearsal photography"
              placeholderNote="Asset required: black-box setting, living-room set, warm stage light"
              aspect="3/2"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
