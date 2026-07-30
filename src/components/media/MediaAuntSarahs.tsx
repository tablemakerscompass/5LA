import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import styles from "./MediaAuntSarahs.module.css";

const expressions = [
  "Novel",
  "Stage production",
  "Character storytelling",
  "Visual content",
  "Book discussions",
  "Women-focused conversations",
  "Companion resources",
  "Future adaptations",
  "Community experiences",
  "The Sarah Method",
];

/** Section 8 — Aunt Sarah's Girls as an original property. */
export default function MediaAuntSarahs() {
  return (
    <section
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="aunt-sarahs-heading"
    >
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">Original Property</p>
            <hr className={`rule ${styles.rule}`} />
            <h2
              id="aunt-sarahs-heading"
              className={`section-heading ${styles.heading}`}
            >
              Aunt Sarah’s Girls: Storytelling, Truth, Healing, and Legacy
            </h2>
          </Reveal>
        </div>

        <div className={styles.grid}>
          <Reveal delay={100} className={styles.copy}>
            <p className={`body ${styles.paragraph}`}>
              Aunt Sarah’s Girls is an original literary, theatrical, and
              community-centered property exploring the lives, truths,
              relationships, survival, and generational experiences of women.
            </p>
            <p className={`body ${styles.paragraph}`}>
              The ecosystem includes the novel, stage production, visual
              storytelling, healing-centered conversations, companion resources,
              future adaptations, and community experiences.
            </p>
          </Reveal>

          <Reveal delay={160} className={styles.aside}>
            <h3 className={styles.label}>Core expressions</h3>
            <ul className={styles.expressions}>
              {expressions.map((expression) => (
                <li key={expression} className={styles.expression}>
                  {expression}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className={styles.footer}>
          <p className={styles.statement}>
            Aunt Sarah’s Girls is designed not only to entertain, but to create
            recognition, reflection, communication, and healing.
          </p>
          <Button
            href="/our-companies/aunt-sarahs-girls"
            variant="gold"
            size="lg"
            className={styles.cta}
          >
            Explore Aunt Sarah’s Girls
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
