import Container from "@/components/layout/Container";
import AsgImageFrame from "./AsgImageFrame";
import Reveal from "@/components/ui/Reveal";
import { asgAssets, auntSarahVoiceLines } from "@/config/aunt-sarahs-girls";
import styles from "./AsgAuntSarah.module.css";

/**
 * Section 7 — Aunt Sarah.
 *
 * Aunt Sarah is a character and a voice. She is never described as a licensed
 * counselor, therapist, minister, or medical professional.
 */
export default function AsgAuntSarah() {
  return (
    <section
      id="aunt-sarah"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="asg-sarah-heading"
    >
      <Container>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <Reveal>
              <p className="eyebrow">The Woman Who Makes Room</p>
              <hr className={`rule ${styles.rule}`} />
              <h2 id="asg-sarah-heading" className={`section-heading ${styles.heading}`}>
                Come On In. What Has Been Sitting Heavy on Your Heart?
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className={`body ${styles.body}`}>
                Aunt Sarah represents the presence many women need: someone
                willing to welcome them in, listen without rushing, tell the truth
                with care, and create room for the conversation they have been
                avoiding.
              </p>
              <p className={`body ${styles.body}`}>
                She is not presented as a therapist or someone with every answer.
                She is the voice inviting women to pause, speak honestly, examine
                what they are carrying, and consider what healing may require.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120} className={styles.figure}>
            <AsgImageFrame
              src={asgAssets.auntSarah}
              alt="Editorial portrait of Aunt Sarah in a deep burgundy gown and layered beaded necklaces, candlelight and a gilded frame behind her."
              placeholderLabel="Approved Aunt Sarah editorial artwork"
              placeholderNote="Asset required, or an approved text-based editorial treatment"
              aspect="3/4"
              caption="Supreme Lioness as Aunt Sarah"
            />
          </Reveal>
        </div>

        <Reveal delay={80} className={styles.voiceBlock}>
          <h3 className={styles.subhead}>In her words</h3>
          <ul className={styles.lines}>
            {auntSarahVoiceLines.map((line) => (
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
