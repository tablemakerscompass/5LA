import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import styles from "./MediaLoaves.module.css";

const values = [
  {
    word: "Leadership",
    body: "Creative direction and responsible stewardship of the work.",
  },
  {
    word: "Ownership",
    body: "Clear responsibility for the story, process, decisions, and outcome.",
  },
  {
    word: "Alignment",
    body: "Story, audience, production, brand, and partners moving together.",
  },
  {
    word: "Vision",
    body: "Understanding the larger world, purpose, and future of the property.",
  },
  {
    word: "Excellence",
    body: "Care in writing, development, production, presentation, and audience experience.",
  },
  {
    word: "Service",
    body: "Respecting the people whose stories are represented and the audiences receiving them.",
  },
];

/**
 * Section 16 — how LOAVES applies to creative work. The full framework
 * lives on the About page.
 */
export default function MediaLoaves() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="loaves-media-heading"
    >
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">Our Standard</p>
            <hr className={`rule ${styles.rule}`} />
            <h2
              id="loaves-media-heading"
              className={`section-heading ${styles.heading}`}
            >
              Storytelling Still Requires Leadership, Ownership, Alignment,
              Vision, Excellence, and Service.
            </h2>
          </Reveal>
        </div>

        <dl className={styles.values}>
          {values.map((value, i) => (
            <Reveal key={value.word} delay={(i % 2) * 70} className={styles.value}>
              <dt className={styles.word}>{value.word}</dt>
              <dd className={styles.body}>{value.body}</dd>
            </Reveal>
          ))}
        </dl>

        <Reveal delay={140} className={styles.ctaWrap}>
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
