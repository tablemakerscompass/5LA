import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import styles from "./TrainingTablemakers.module.css";

const offerings = [
  "The Tablemakers Collective",
  "The Tablemakers Compass",
  "Leadership conversations",
  "Hospitality insights",
  "Professional resources",
  "Community gatherings",
  "Workshops",
  "Future development experiences",
];

/** Section 8 — Tablemakers as a professional community, not a venue brand. */
export default function TrainingTablemakers() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="tablemakers-heading"
    >
      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <Reveal>
              <p className="eyebrow">Community &amp; Thought Leadership</p>
              <hr className={`rule ${styles.rule}`} />
              <h2
                id="tablemakers-heading"
                className={`section-heading ${styles.heading}`}
              >
                Tablemakers: For the People Responsible for Building the
                Environment
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className={`body ${styles.paragraph}`}>
                Tablemakers is a professional-development and community platform
                for leaders, managers, founders, hospitality professionals, and
                experience builders creating environments where people, service,
                culture, and excellence can thrive.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <Button href="/our-companies/tablemakers" variant="primary" size="lg">
                Explore Tablemakers
              </Button>
            </Reveal>
          </div>

          <Reveal delay={140} className={styles.aside}>
            <h3 className={styles.label}>Tablemakers may include</h3>
            <ul className={styles.offerings}>
              {offerings.map((offering) => (
                <li key={offering} className={styles.offering}>
                  {offering}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <figure className={styles.pullQuote}>
            <blockquote className={styles.quote}>
              A Tablemaker does more than take a seat. A Tablemaker prepares the
              space, establishes the standard, develops the people, and creates
              room for others to succeed.
            </blockquote>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
