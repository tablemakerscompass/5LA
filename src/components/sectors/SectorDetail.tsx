import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import { companiesInSector, otherSectors } from "@/config/ecosystem";
import type { Sector } from "@/config/sectors";
import styles from "./SectorDetail.module.css";

/**
 * The body of an Experience Sector page. Every line of copy here comes from
 * the sector's approved entry in config/sectors.ts — overview, capabilities,
 * and outcome — so the page carries no claims that were not written for it.
 */
export default function SectorDetail({ sector }: { sector: Sector }) {
  const brands = companiesInSector(sector);
  const others = otherSectors(sector);

  return (
    <>
      {/* ------------------------------------------------ image + overview */}
      <section className="section" aria-labelledby="overview-heading">
        <Container>
          <div className={styles.overviewGrid}>
            <Reveal className={styles.figureCol}>
              {sector.image && (
                <div className={styles.imageFrame}>
                  <Image
                    src={sector.image}
                    alt={sector.imageAlt ?? ""}
                    width={1200}
                    height={900}
                    priority
                    sizes="(min-width: 900px) 52vw, 100vw"
                    className={styles.image}
                  />
                </div>
              )}
            </Reveal>

            <Reveal delay={120} className={styles.overviewText}>
              <p className={styles.eyebrow}>What This Sector Covers</p>
              <hr className="rule" />
              <h2 id="overview-heading" className="section-heading">
                {sector.statement}
              </h2>
              {sector.overview && <p className="body">{sector.overview}</p>}
              <p className={`body ${styles.summary}`}>{sector.summary}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* --------------------------------------------------- capabilities */}
      {sector.capabilities?.length ? (
        <section className={`section ${styles.capsSection}`} aria-labelledby="capabilities-heading">
          <Container>
            <div className={styles.head}>
              <p className={styles.eyebrow}>Capabilities</p>
              <hr className="rule" />
              <h2 id="capabilities-heading" className="section-heading">
                What {sector.name} Includes.
              </h2>
            </div>
            <ul className={styles.capabilities}>
              {sector.capabilities.map((capability) => (
                <li key={capability} className={styles.capability}>
                  {capability}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {/* -------------------------------------------------------- outcome */}
      {sector.outcome && (
        <section className="section" aria-labelledby="outcome-heading">
          <Container>
            <div className={styles.outcome}>
              <p className={styles.eyebrow}>The Outcome</p>
              <hr className="rule" />
              <h2 id="outcome-heading" className="visually-hidden">
                The outcome of {sector.name}
              </h2>
              <p className={styles.outcomeText}>{sector.outcome}</p>
            </div>
          </Container>
        </section>
      )}

      {/* --------------------------------------------- brands, then sectors */}
      {brands.length > 0 && (
        <section className={`section ${styles.brandsSection}`} aria-labelledby="brands-heading">
          <Container>
            <div className={styles.head}>
              <p className={styles.eyebrow}>Within This Sector</p>
              <hr className="rule" />
              <h2 id="brands-heading" className="section-heading">
                Brands and Platforms Built Here.
              </h2>
            </div>
            <ul className={styles.brands}>
              {brands.map((brand) => (
                <li key={brand.slug}>
                  <Link href={`/our-companies/${brand.slug}`} className={styles.brandCard}>
                    <span className={styles.brandCategory}>{brand.category}</span>
                    <span className={`subheading ${styles.brandName}`}>{brand.name}</span>
                    <span className={`body-sm ${styles.brandDesc}`}>{brand.description}</span>
                    <span className={styles.brandCue} aria-hidden="true">
                      View <span className={styles.arrow}>&rarr;</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <section className="section-tight" aria-labelledby="other-sectors-heading">
        <Container>
          <h2 id="other-sectors-heading" className={styles.otherHeading}>
            The Other Experience Sectors
          </h2>
          <ul className={styles.others}>
            {others.map((other) => (
              <li key={other.slug}>
                <Link href={`/experience-sectors/${other.slug}`} className={styles.otherLink}>
                  <span className={`numeral ${styles.otherNumber}`}>{other.number}</span>
                  <span>
                    <span className={styles.otherName}>{other.name}</span>
                    <span className={styles.otherStatement}>{other.statement}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
