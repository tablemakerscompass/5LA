import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { companies } from "@/config/companies";
import { getSector } from "@/config/sectors";
import styles from "./CompaniesPortfolio.module.css";

/**
 * Section 4 — one editorial feature per brand.
 *
 * Only VelaXity has an approved logo. Every other brand shows a text-based
 * wordmark panel instead; replace by adding a `logo` path in
 * `config/companies.ts` (assets belong in `public/brand/`). No mark is ever
 * invented for a brand that does not have one.
 */
export default function CompaniesPortfolio() {
  return (
    <section
      id="portfolio"
      className={`section ${styles.wrap}`}
      aria-labelledby="portfolio-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Our Companies, Platforms & Properties"
          title={
            <span id="portfolio-heading">
              Created for Different Audiences. Connected by the Same Vision.
            </span>
          }
          lead="Each brand within the 5LA ecosystem has its own purpose, identity, audience, and path for growth. Together, they demonstrate how 5LA uses business, technology, training, and media to build complete experiences."
          divider
        />
      </Container>

      <div className={styles.features}>
        {companies.map((company) => {
          const primary = company.primarySector
            ? getSector(company.primarySector)
            : undefined;

          return (
            <article
              key={company.slug}
              className={styles.feature}
              data-accent={company.accent}
              aria-labelledby={`brand-${company.slug}-heading`}
            >
              <Container>
                <div className={styles.layout}>
                  <Reveal className={styles.visual}>
                    <div className={styles.mark}>
                      {company.logo ? (
                        <Image
                          src={company.logo}
                          alt={`The ${company.name} logo`}
                          width={1254}
                          height={1254}
                          sizes="(min-width: 900px) 26rem, 80vw"
                          className={styles.logo}
                        />
                      ) : (
                        <span className={styles.wordmark}>{company.name}</span>
                      )}
                    </div>
                    <p className={styles.category}>{company.category}</p>
                  </Reveal>

                  <Reveal delay={100} className={styles.body}>
                    <p className={styles.brandType}>{company.brandType}</p>
                    <h3
                      id={`brand-${company.slug}-heading`}
                      className={`section-heading ${styles.name}`}
                    >
                      {company.name}
                    </h3>
                    <p className={styles.positioning}>{company.positioning}</p>

                    {company.overview?.map((paragraph) => (
                      <p key={paragraph} className={`body ${styles.overview}`}>
                        {paragraph}
                      </p>
                    ))}

                    <div className={styles.meta}>
                      {company.audience && (
                        <div className={styles.metaBlock}>
                          <h4 className={styles.metaLabel}>Primary audience</h4>
                          <p className={styles.audience}>
                            {company.audience.join(" · ")}
                          </p>
                        </div>
                      )}

                      {company.connection && (
                        <div className={styles.metaBlock}>
                          <h4 className={styles.metaLabel}>Connection to 5LA</h4>
                          <p className={styles.connection}>{company.connection}</p>
                        </div>
                      )}

                      {primary && (
                        <div className={styles.metaBlock}>
                          <h4 className={styles.metaLabel}>Experience sectors</h4>
                          <p className={styles.sectors}>
                            <Link
                              href={`/experience-sectors/${primary.slug}`}
                              className={styles.sectorPrimary}
                            >
                              {primary.name}
                            </Link>
                            <span className={styles.sectorRole}> — primary</span>
                            {company.supportingSectors?.length ? (
                              <>
                                {". Supported by "}
                                {company.supportingSectors.map((slug, i, arr) => {
                                  const s = getSector(slug);
                                  if (!s) return null;
                                  return (
                                    <span key={slug}>
                                      <Link
                                        href={`/experience-sectors/${slug}`}
                                        className={styles.sectorLink}
                                      >
                                        {s.shortName}
                                      </Link>
                                      {i < arr.length - 2
                                        ? ", "
                                        : i === arr.length - 2
                                          ? " and "
                                          : "."}
                                    </span>
                                  );
                                })}
                              </>
                            ) : null}
                          </p>
                        </div>
                      )}
                    </div>

                    <Link
                      href={`/our-companies/${company.slug}`}
                      className={styles.cta}
                    >
                      Explore {company.name}
                      <span className={styles.arrow} aria-hidden="true">
                        &rarr;
                      </span>
                    </Link>
                  </Reveal>
                </div>
              </Container>
            </article>
          );
        })}
      </div>
    </section>
  );
}
