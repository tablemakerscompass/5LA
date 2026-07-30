import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./GbsFuture.module.css";

/** Every item here is a possibility, labeled as such in the section itself. */
const possibilities = [
  "Regional gatherings",
  "Story-preservation projects",
  "Legacy publications",
  "Women’s programs",
  "Youth and elder storytelling",
  "Community partnerships",
  "Cultural experiences",
  "Scholarships or grants",
  "Family-history resources",
  "A digital legacy platform",
];

/** Section 13 — where the Society may grow. Nothing presented as active. */
export default function GbsFuture() {
  return (
    <section
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="future-heading"
    >
      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <Reveal>
              <p className="eyebrow">Where the Society May Grow</p>
              <hr className={`rule ${styles.rule}`} />
              <h2
                id="future-heading"
                className={`section-heading ${styles.heading}`}
              >
                Building a Legacy Platform That Families and Communities Can
                Carry Forward.
              </h2>
            </Reveal>

            <Reveal delay={120} className={styles.copy}>
              <p className={`body ${styles.paragraph}`}>
                The long-term vision for The Georgia B. Society is to become a
                trusted home for legacy preservation, community storytelling,
                women-focused experiences, cultural gatherings, intergenerational
                connection, and resources helping people document what matters.
              </p>
              <p className={`body ${styles.paragraph}`}>
                Growth should remain intentional. Every future program,
                partnership, publication, gathering, or initiative must reflect
                the values of care, dignity, service, truth, and community.
              </p>
            </Reveal>
          </div>

          <Reveal delay={160} className={styles.aside}>
            <h3 className={styles.label}>
              Potential future areas
              <span className={styles.tag}>Not yet launched</span>
            </h3>
            <ul className={styles.list}>
              {possibilities.map((item) => (
                <li key={item} className={styles.item}>
                  {item}
                </li>
              ))}
            </ul>
            <p className={styles.note}>
              These are directions under consideration, not current offerings.
              Scholarships, grants, or funding of any kind would require a
              formal structure before being offered.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
