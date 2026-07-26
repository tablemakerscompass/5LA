import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import styles from "./BusinessLoaves.module.css";

const values = [
  { word: "Leadership", body: "Clear direction and responsible decision-making." },
  { word: "Ownership", body: "Defined responsibility and accountability." },
  { word: "Alignment", body: "People, systems, and priorities moving together." },
  {
    word: "Vision",
    body: "Structure designed around where the organization is going.",
  },
  { word: "Excellence", body: "Consistent standards and attention to detail." },
  { word: "Service", body: "Systems built around the needs and dignity of people." },
];

/**
 * Section 11 — how LOAVES applies to operational work. The full framework
 * lives on the About page; this is the sector-level connection.
 */
export default function BusinessLoaves() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="loaves-business-heading"
    >
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">Our Standard</p>
            <hr className={`rule ${styles.rule}`} />
            <h2
              id="loaves-business-heading"
              className={`section-heading ${styles.heading}`}
            >
              The LOAVES Framework Guides How We Build.
            </h2>
          </Reveal>
        </div>

        <dl className={styles.values}>
          {values.map((value, i) => (
            <Reveal key={value.word} delay={(i % 3) * 70} className={styles.value}>
              <dt className={styles.word}>
                <span className={styles.letter} aria-hidden="true">
                  {value.word.charAt(0)}
                </span>
                {value.word}
              </dt>
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
