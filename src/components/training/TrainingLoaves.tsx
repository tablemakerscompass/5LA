import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import styles from "./TrainingLoaves.module.css";

const values = [
  {
    letter: "L",
    word: "Leadership",
    body: "Understanding how influence, communication, decisions, and behavior shape others.",
  },
  {
    letter: "O",
    word: "Ownership",
    body: "Taking responsibility for preparation, performance, standards, and outcomes.",
  },
  {
    letter: "A",
    word: "Alignment",
    body: "Connecting individual work with team expectations, organizational priorities, and the shared mission.",
  },
  {
    letter: "V",
    word: "Vision",
    body: "Understanding what the organization is building and how each person contributes to it.",
  },
  {
    letter: "E",
    word: "Excellence",
    body: "Performing with consistency, care, discipline, professionalism, and attention to detail.",
  },
  {
    letter: "S",
    word: "Service",
    body: "Recognizing the dignity, needs, and experience of the people we lead, support, and serve.",
  },
];

/**
 * Section 6 — LOAVES as the learning foundation. A shorter treatment than
 * the About page's expandable framework section.
 */
export default function TrainingLoaves() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="loaves-training-heading"
    >
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">Our Learning Foundation</p>
            <hr className={`rule ${styles.rule}`} />
            <h2
              id="loaves-training-heading"
              className={`section-heading ${styles.heading}`}
            >
              The LOAVES Framework Develops the Whole Experience Maker.
            </h2>
          </Reveal>
          <Reveal delay={100} className={styles.copy}>
            <p className="body">
              LOAVES is the values and development framework guiding how 5LA
              trains leaders, managers, employees, professionals, and experience
              builders.
            </p>
          </Reveal>
        </div>

        <dl className={styles.values}>
          {values.map((value, i) => (
            <Reveal key={value.word} delay={(i % 3) * 70} className={styles.value}>
              <dt className={styles.word}>
                <span className={styles.letter} aria-hidden="true">
                  {value.letter}
                </span>
                {value.word}
              </dt>
              <dd className={styles.body}>{value.body}</dd>
            </Reveal>
          ))}
        </dl>

        <Reveal delay={140} className={styles.footer}>
          <p className={styles.statement}>
            The framework can be introduced as a complete learning experience or
            integrated into customized leadership, hospitality, culture, and
            workforce-development programs.
          </p>
          <Button
            href="/about"
            variant="primary"
            size="lg"
            className={styles.cta}
          >
            Learn More About the LOAVES Framework
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
