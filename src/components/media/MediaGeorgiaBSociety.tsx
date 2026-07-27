import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import styles from "./MediaGeorgiaBSociety.module.css";

/** Areas under development — labeled as such rather than presented as live. */
const potentialAreas = [
  "Legacy conversations",
  "Community gatherings",
  "Story preservation",
  "Women-focused experiences",
  "Family-history initiatives",
  "Cultural programming",
  "Community partnerships",
  "Future scholarship or support initiatives",
];

/** Section 7 — The Georgia B. Society. */
export default function MediaGeorgiaBSociety() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="society-heading"
    >
      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <Reveal>
              <p className="eyebrow">Legacy · Community · Culture</p>
              <hr className={`rule ${styles.rule}`} />
              <h2
                id="society-heading"
                className={`section-heading ${styles.heading}`}
              >
                The Georgia B. Society: Preserving Stories and Creating Space
                for Community
              </h2>
            </Reveal>

            <Reveal delay={100} className={styles.copy}>
              <p className={`body ${styles.paragraph}`}>
                The Georgia B. Society is a legacy-centered cultural and
                community initiative inspired by the values of family, care,
                storytelling, hospitality, and service.
              </p>
              <p className={`body ${styles.paragraph}`}>
                It creates space for gatherings, conversations, community
                programs, legacy preservation, and future initiatives honoring
                the people and stories shaping families and communities.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <Button
                href="/our-companies/georgia-b-society"
                variant="primary"
                size="lg"
                className={styles.cta}
              >
                Explore The Georgia B. Society
              </Button>
            </Reveal>
          </div>

          <Reveal delay={140} className={styles.aside}>
            <h3 className={styles.label}>Potential and developing areas</h3>
            <ul className={styles.areas}>
              {potentialAreas.map((area) => (
                <li key={area} className={styles.area}>
                  {area}
                </li>
              ))}
            </ul>
            <p className={styles.note}>
              These areas are in development and are shared as direction rather
              than currently scheduled programming.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
