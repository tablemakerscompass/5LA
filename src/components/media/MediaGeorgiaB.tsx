import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import styles from "./MediaGeorgiaB.module.css";

const focusAreas = [
  "Publishing",
  "Theater",
  "Productions",
  "Digital content",
  "Original intellectual property",
  "Live experiences",
  "Creative partnerships",
  "Audience development",
  "Cultural storytelling",
  "Property development",
];

/** Section 6 — The Georgia B. Media Group's place within the sector. */
export default function MediaGeorgiaB() {
  return (
    <section
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="georgia-b-heading"
    >
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">Built Within 5LA</p>
            <hr className={`rule ${styles.rule}`} />
            <h2
              id="georgia-b-heading"
              className={`section-heading ${styles.heading}`}
            >
              The Georgia B. Media Group: The Creative and Production Home of
              the 5LA Ecosystem
            </h2>
          </Reveal>
        </div>

        <div className={styles.grid}>
          <Reveal delay={100} className={styles.copy}>
            <p className={`body ${styles.paragraph}`}>
              The Georgia B. Media Group is the publishing, production, media,
              and original-storytelling division within The 5 Loaves Agency.
            </p>
            <p className={`body ${styles.paragraph}`}>
              It provides the creative and organizational home for literary
              projects, theatrical productions, digital content, live
              experiences, film development, and future original properties.
            </p>
          </Reveal>

          <Reveal delay={160} className={styles.aside}>
            <h3 className={styles.label}>Focus areas</h3>
            <ul className={styles.areas}>
              {focusAreas.map((area) => (
                <li key={area} className={styles.area}>
                  {area}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className={styles.footer}>
          <p className={styles.statement}>
            The media group is named in honor of Georgia B., whose legacy of
            care, family, hospitality, and making room for others continues to
            shape the work.
          </p>
          <Button
            href="/our-companies/georgia-b-media-group"
            variant="gold"
            size="lg"
            className={styles.cta}
          >
            Explore The Georgia B. Media Group
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
