import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import AcImageFrame from "./AcImageFrame";
import { acAssets, acBrand, tablemakerQualities } from "@/config/academy";
import styles from "./AcTablemakers.module.css";

/**
 * Section 7 — Tablemakers.
 *
 * Deliberately distinct from the sections around it: a dark, table-centred
 * block. The imagery direction is a roundtable of professionals, never a
 * restaurant scene.
 */
export default function AcTablemakers() {
  return (
    <section
      id="tablemakers"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="ac-tablemakers-heading"
    >
      <Container>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <Reveal>
              <p className="eyebrow">The People We Develop</p>
              <hr className={`rule ${styles.rule}`} />
              <h2
                id="ac-tablemakers-heading"
                className={`section-heading ${styles.heading}`}
              >
                A Tablemaker Does More Than Take a Seat.
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className={`body ${styles.body}`}>
                A Tablemaker prepares the environment, establishes the standard,
                develops the people, and creates room for others to succeed.
              </p>
              <p className={`body ${styles.body}`}>
                The 5LA Academy develops Tablemakers across hospitality,
                leadership, management, service, culture, and professional
                development.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className={styles.message}>{acBrand.tablemakerMessage}</p>
            </Reveal>
            <Reveal delay={180}>
              <Button
                href="/our-companies/tablemakers"
                variant="gold"
                size="lg"
                className={styles.cta}
              >
                Explore Tablemakers
              </Button>
            </Reveal>
          </div>

          <Reveal delay={120} className={styles.figure}>
            <AcImageFrame
              src={acAssets.tablemakers}
              alt="Professionals seated around a long table in facilitated discussion."
              placeholderLabel="A roundtable of professionals in discussion"
              placeholderNote="Asset required: a refined meeting table, engaged participants, notebooks — not a restaurant scene"
              aspect="4/3"
            />
          </Reveal>
        </div>

        <Reveal delay={80} className={styles.qualitiesBlock}>
          <h3 className={styles.subhead}>Tablemaker qualities</h3>
          <ul className={styles.qualities}>
            {tablemakerQualities.map((quality) => (
              <li key={quality} className={styles.quality}>
                {quality}
              </li>
            ))}
          </ul>
          <p className={`caption ${styles.note}`}>
            Tablemakers understand that leadership and hospitality are not
            performances. They are responsibilities expressed through
            preparation, care, standards, and service.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
