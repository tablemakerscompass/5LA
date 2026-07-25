import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import styles from "./Difference.module.css";

const elements = [
  { label: "Systems", note: "How the organization works." },
  { label: "People", note: "How the team is equipped." },
  { label: "Technology", note: "How the work is supported." },
  { label: "Story", note: "How it is communicated." },
];

export default function Difference() {
  return (
    <section
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="difference-heading"
    >
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">The 5LA Difference</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="difference-heading" className={`section-heading ${styles.heading}`}>
              We Do Not Treat Experience as a Single Touchpoint.
            </h2>
          </Reveal>
          <Reveal delay={120} className={styles.copy}>
            <p className="body">
              A business cannot deliver an exceptional experience when its
              operations are unclear, its team is underprepared, its technology is
              disconnected, or its story is difficult to understand.
            </p>
            <p className="body">
              5LA approaches every engagement by examining how the organization
              works, how its people are equipped, how technology supports the
              mission, and how the experience is communicated to the world.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className={styles.flow} role="list" aria-label="How the elements produce experience">
            {elements.map((el, i) => (
              <div key={el.label} className={styles.step} role="listitem">
                <div className={styles.node}>
                  <span className={styles.nodeLabel}>{el.label}</span>
                  <span className={styles.nodeNote}>{el.note}</span>
                </div>
                <span className={styles.op} aria-hidden="true">
                  {i < elements.length - 1 ? "+" : "="}
                </span>
              </div>
            ))}
            <div className={`${styles.node} ${styles.result}`} role="listitem">
              <span className={styles.nodeLabel}>Experience</span>
              <span className={styles.nodeNote}>What the world receives.</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200} className={styles.ctaWrap}>
          <Button href="/about" variant="text">
            Learn About 5LA
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
