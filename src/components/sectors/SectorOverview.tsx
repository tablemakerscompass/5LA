import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { sectors } from "@/config/sectors";
import styles from "./SectorOverview.module.css";

/**
 * Section 3 — four full editorial sector sections with alternating image
 * placement, large numerals, capabilities, outcome, and entry link.
 */
export default function SectorOverview() {
  return (
    <section
      id="four-sectors"
      className={`section ${styles.wrap}`}
      aria-labelledby="four-sectors-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Our Four Experience Sectors"
          title={
            <span id="four-sectors-heading">
              Different Areas of Expertise. One Connected Standard.
            </span>
          }
          lead="Each sector addresses a different part of the experience. Some engagements may require one sector. Others may require several working together."
          divider
        />
      </Container>

      <div className={styles.sectors}>
        {sectors.map((sector) => (
          <article
            key={sector.slug}
            className={styles.sector}
            data-accent={sector.accent}
            aria-labelledby={`sector-${sector.slug}-heading`}
          >
            <Container>
              <div className={styles.layout}>
                <Reveal className={styles.visual}>
                  <div className={styles.frame}>
                    {sector.image ? (
                      <Image
                        src={sector.image}
                        alt={sector.imageAlt ?? ""}
                        fill
                        sizes="(min-width: 900px) 46vw, 100vw"
                        className={styles.image}
                      />
                    ) : (
                      <span className={styles.framePlaceholder}>
                        {sector.shortName} experience photography
                      </span>
                    )}
                  </div>
                  <span className={`numeral ${styles.number}`} aria-hidden="true">
                    {sector.number}
                  </span>
                </Reveal>

                <Reveal delay={100} className={styles.body}>
                  <p className={styles.kicker}>
                    Experience Sector {sector.number}
                  </p>
                  <h3
                    id={`sector-${sector.slug}-heading`}
                    className={`section-heading ${styles.name}`}
                  >
                    {sector.name}
                  </h3>
                  <p className={styles.statement}>{sector.statement}</p>
                  <p className={`body ${styles.overview}`}>{sector.overview}</p>

                  {sector.capabilities && (
                    <div className={styles.capabilities}>
                      <h4 className={styles.label}>Capabilities</h4>
                      <ul className={styles.capabilityList}>
                        {sector.capabilities.map((item) => (
                          <li key={item} className={styles.capability}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {sector.outcome && (
                    <div className={styles.outcome}>
                      <h4 className={styles.label}>Experience outcome</h4>
                      <p className={styles.outcomeText}>{sector.outcome}</p>
                    </div>
                  )}

                  <Link
                    href={`/experience-sectors/${sector.slug}`}
                    className={styles.cta}
                  >
                    Explore {sector.name}
                    <span className={styles.arrow} aria-hidden="true">
                      &rarr;
                    </span>
                  </Link>
                </Reveal>
              </div>
            </Container>
          </article>
        ))}
      </div>
    </section>
  );
}
