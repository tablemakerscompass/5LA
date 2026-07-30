import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import styles from "./TechnologyLoaves.module.css";

const values = [
  {
    word: "Leadership",
    body: "Technology supports better direction and decision-making.",
  },
  {
    word: "Ownership",
    body: "Every system requires clear responsibility for use, review, and improvement.",
  },
  {
    word: "Alignment",
    body: "Tools, workflows, information, and priorities must work together.",
  },
  {
    word: "Vision",
    body: "Technology should support where the organization is going, not only where it is today.",
  },
  {
    word: "Excellence",
    body: "Systems should be reliable, understandable, purposeful, and well maintained.",
  },
  {
    word: "Service",
    body: "Technology should improve the experience of the people using and receiving it.",
  },
];

/**
 * Section 13 — how LOAVES applies to technology work. The full framework
 * lives on the About page.
 */
export default function TechnologyLoaves() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="loaves-technology-heading"
    >
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">Our Standard</p>
            <hr className={`rule ${styles.rule}`} />
            <h2
              id="loaves-technology-heading"
              className={`section-heading ${styles.heading}`}
            >
              Technology Must Still Reflect Leadership, Ownership, Alignment,
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
