import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import { loaves } from "@/config/tablemakers";
import styles from "./TmLoaves.module.css";

/**
 * Section 9 — LOAVES, in Tablemaker terms.
 *
 * The same six approved values, defined for how a Tablemaker shapes a room —
 * deliberately shorter than the About and Academy treatments so the page does
 * not repeat them.
 */
export default function TmLoaves() {
  return (
    <section
      id="loaves-framework"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="tm-loaves-heading"
    >
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">The Standard Behind the Community</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="tm-loaves-heading" className={`section-heading ${styles.heading}`}>
              Leadership. Ownership. Alignment. Vision. Excellence. Service.
            </h2>
          </Reveal>
          <Reveal delay={100} className={styles.intro}>
            <p className={`body ${styles.body}`}>
              The LOAVES framework provides the shared language connecting
              Tablemakers across industries, titles, and experience levels.
            </p>
          </Reveal>
        </div>

        <ol className={styles.list}>
          {loaves.map((value, i) => (
            <Reveal
              key={value.letter}
              as="li"
              delay={(i % 3) * 60}
              className={styles.item}
            >
              <span className={styles.letter} aria-hidden="true">
                {value.letter}
              </span>
              <div className={styles.itemBody}>
                <h3 className={styles.word}>{value.word}</h3>
                <p className={styles.def}>{value.def}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={80}>
          <p className={styles.statement}>
            Tablemakers do not carry these values only when someone is watching.
            They use them to shape how the room operates.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
