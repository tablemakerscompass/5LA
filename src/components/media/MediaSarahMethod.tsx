import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import styles from "./MediaSarahMethod.module.css";

/** High-level areas only — no unbuilt app functionality is described. */
const features = [
  "Guided reflection",
  "Journaling",
  "Personal truth",
  "Healing conversations",
  "Identity",
  "Purpose",
  "Ongoing reflection",
  "Aunt Sarah’s welcoming voice",
];

/** Section 9 — The Sarah Method, led by its approved voice line. */
export default function MediaSarahMethod() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="sarah-method-heading"
    >
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">Digital Reflection Experience</p>
            <hr className={`rule ${styles.rule}`} />
            <h2
              id="sarah-method-heading"
              className={`section-heading ${styles.heading}`}
            >
              The Sarah Method: A Space for Truth, Healing, and Purpose
            </h2>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <figure className={styles.voice}>
            <blockquote className={styles.quote}>
              Come on in. I’ve been waiting for you. Whatever you’ve been
              carrying, you do not have to carry it in here.
            </blockquote>
            <figcaption className={styles.attribution}>
              The welcoming voice of Aunt Sarah
            </figcaption>
          </figure>
        </Reveal>

        <div className={styles.grid}>
          <Reveal delay={140} className={styles.copy}>
            <p className={`body ${styles.paragraph}`}>
              The Sarah Method is a digital reflection and healing platform
              developed from the themes, voice, and mission of Aunt Sarah’s
              Girls.
            </p>
            <p className={`body ${styles.paragraph}`}>
              It creates a welcoming space for women to pause, reflect,
              communicate, examine personal truths, and move toward healing and
              purpose.
            </p>
            <Button
              href="/our-companies/the-sarah-method"
              variant="primary"
              size="lg"
              className={styles.cta}
            >
              Explore The Sarah Method
            </Button>
          </Reveal>

          <Reveal delay={180} className={styles.aside}>
            <h3 className={styles.label}>Experience areas</h3>
            <ul className={styles.features}>
              {features.map((feature) => (
                <li key={feature} className={styles.feature}>
                  {feature}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
