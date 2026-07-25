"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./LoavesFramework.module.css";

const values = [
  { letter: "L", word: "Leadership", def: "Setting direction with clarity, responsibility, courage, and intention." },
  { letter: "O", word: "Ownership", def: "Taking responsibility for the work, the standard, the decisions, and the outcome." },
  { letter: "A", word: "Alignment", def: "Ensuring people, systems, priorities, communication, and purpose move together." },
  { letter: "V", word: "Vision", def: "Seeing what is possible and creating a practical path from idea to execution." },
  { letter: "E", word: "Excellence", def: "Delivering with care, consistency, discipline, and attention to detail." },
  { letter: "S", word: "Service", def: "Building around the needs, dignity, growth, and experience of people." },
];

export default function LoavesFramework() {
  // First value open by default; each row toggles independently (keyboard + touch).
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true });

  return (
    <section className={`section ${styles.wrap}`} aria-labelledby="loaves-about-heading">
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">The Standard Behind the Work</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="loaves-about-heading" className={`section-heading ${styles.heading}`}>
              Leadership. Ownership. Alignment. Vision. Excellence. Service.
            </h2>
          </Reveal>
          <Reveal delay={120} className={styles.copy}>
            <p className="body">
              LOAVES is more than the name behind the company. It is the framework
              guiding how 5LA leads, builds, develops people, creates experiences,
              and serves clients, partners, and communities.
            </p>
          </Reveal>
        </div>

        <ul className={styles.list}>
          {values.map((v, i) => {
            const isOpen = !!open[i];
            const panelId = `loaves-panel-${i}`;
            const btnId = `loaves-btn-${i}`;
            return (
              <li key={v.letter} className={styles.item} data-open={isOpen}>
                <h3 className={styles.itemHeading}>
                  <button
                    id={btnId}
                    type="button"
                    className={styles.trigger}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() =>
                      setOpen((cur) => ({ ...cur, [i]: !cur[i] }))
                    }
                  >
                    <span className={styles.letter} aria-hidden="true">
                      {v.letter}
                    </span>
                    <span className={styles.word}>{v.word}</span>
                    <span className={styles.icon} aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={styles.panel}
                  hidden={!isOpen}
                >
                  <p className={styles.def}>{v.def}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
