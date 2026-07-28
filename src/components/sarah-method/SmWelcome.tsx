import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import SmImageFrame from "./SmImageFrame";
import { smAssets, smVoiceLines } from "@/config/the-sarah-method";
import styles from "./SmWelcome.module.css";

/** Section 2 — Aunt Sarah's welcome. Quiet, not theatrical. */
export default function SmWelcome() {
  return (
    <section
      id="the-welcome"
      className={`section ${styles.wrap}`}
      aria-labelledby="sm-welcome-heading"
    >
      <Container>
        <div className={styles.grid}>
          <Reveal className={styles.copy}>
            <p className="eyebrow">Aunt Sarah’s Welcome</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="sm-welcome-heading" className={`section-heading ${styles.heading}`}>
              You Do Not Have to Perform in Here.
            </h2>
            <p className={`body ${styles.body}`}>
              The Sarah Method begins with the belief that women need spaces
              where they can stop performing, stop explaining, and become honest
              about what they are carrying.
            </p>
            <p className={`body ${styles.body}`}>
              Aunt Sarah’s voice welcomes users without rushing, judging,
              lecturing, or pretending to have every answer.
            </p>
            <p className={`body ${styles.body}`}>
              The experience creates room to pause, name what feels heavy,
              explore what may be underneath it, and consider what truth,
              communication, healing, and purpose may require next.
            </p>
          </Reveal>

          <Reveal delay={120} className={styles.figure}>
            <SmImageFrame
              src={smAssets.welcome}
              alt="A comfortable chair beside a window, a cup of tea and a journal set out on a small table."
              placeholderLabel="A chair, a window, a cup of tea"
              placeholderNote="Asset required: warm, unhurried interior photography"
              aspect="3/4"
            />
          </Reveal>
        </div>

        <Reveal delay={80}>
          <ul className={styles.lines} aria-label="Aunt Sarah’s welcome, in her words">
            {smVoiceLines.map((line) => (
              <li key={line} className={styles.line}>
                <span className={styles.mark} aria-hidden="true">
                  &ldquo;
                </span>
                {line}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
