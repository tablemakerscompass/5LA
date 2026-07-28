import Link from "next/link";
import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import { relatedCompanies, sectorForCompany } from "@/config/ecosystem";
import type { Company } from "@/config/companies";
import { site } from "@/config/site";
import styles from "./CompanyProfile.module.css";

/**
 * A brand's page within the ecosystem.
 *
 * Everything shown is approved copy: the brand's own description (in the page
 * hero, not repeated here), the Experience Sector whose capabilities name it,
 * and that sector's statement. `overview` and `highlights` render only once
 * real profile copy is added to config/companies.ts — nothing is written here
 * to fill the space in the meantime.
 */
export default function CompanyProfile({ company }: { company: Company }) {
  const sector = sectorForCompany(company);
  const related = relatedCompanies(company);
  const hasProfileCopy = Boolean(company.overview?.length || company.highlights?.length);

  return (
    <>
      <section className="section" aria-labelledby="about-heading">
        <Container>
          <div className={styles.grid}>
            <Reveal className={styles.main}>
              <p className={styles.eyebrow}>
                {hasProfileCopy ? "About This Brand" : "In the Ecosystem"}
              </p>
              <hr className="rule" />
              <h2 id="about-heading" className="section-heading">
                {hasProfileCopy
                  ? `About ${company.name}.`
                  : `Where ${company.name} Sits.`}
              </h2>

              {hasProfileCopy ? (
                <>
                  {company.overview?.map((paragraph) => (
                    <p key={paragraph} className="body">
                      {paragraph}
                    </p>
                  ))}
                  {company.highlights?.length ? (
                    <ul className={styles.highlights}>
                      {company.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </>
              ) : (
                <>
                  {/* Stated plainly from approved facts — the sector's own
                      statement is quoted verbatim in the panel alongside,
                      rather than reworded into this sentence. */}
                  <p className="body">
                    {`${company.name} is one of the brands and platforms operating within ${site.legalName}.`}
                    {sector
                      ? ` It sits within ${sector.name}, one of the four connected Experience Sectors through which 5LA works.`
                      : ""}
                  </p>
                  <p className="body">{site.brand.belief}</p>
                </>
              )}

              <p className={`body ${styles.principle}`}>{site.brand.principle}</p>
            </Reveal>

            <Reveal delay={120} className={styles.aside}>
              {sector && (
                <div className={styles.sectorCard}>
                  <p className={styles.asideLabel}>Experience Sector</p>
                  <p className={`subheading ${styles.sectorName}`}>{sector.name}</p>
                  <p className={`body-sm ${styles.sectorStatement}`}>{sector.statement}</p>
                  <Link
                    href={`/experience-sectors/${sector.slug}`}
                    className={styles.sectorLink}
                  >
                    Explore {sector.name} <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              )}

              <div className={styles.metaCard}>
                <p className={styles.asideLabel}>Focus</p>
                <p className={styles.metaValue}>{company.category}</p>
                <p className={styles.asideLabel}>Part of</p>
                <p className={styles.metaValue}>{site.legalName}</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className={`section ${styles.relatedSection}`} aria-labelledby="related-heading">
        <Container>
          <div className={styles.head}>
            <p className={styles.eyebrow}>Also in the Ecosystem</p>
            <hr className="rule" />
            <h2 id="related-heading" className="section-heading">
              {related.length && sector
                ? `More Within ${sector.name}.`
                : "More From 5LA."}
            </h2>
          </div>

          {related.length > 0 && (
            <ul className={styles.related}>
              {related.map((brand) => (
                <li key={brand.slug}>
                  <Link href={`/our-companies/${brand.slug}`} className={styles.card}>
                    <span className={styles.cardCategory}>{brand.category}</span>
                    <span className={`subheading ${styles.cardName}`}>{brand.name}</span>
                    <span className={`body-sm ${styles.cardDesc}`}>{brand.description}</span>
                    <span className={styles.cardCue} aria-hidden="true">
                      View <span className={styles.arrow}>&rarr;</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <p className={styles.allLink}>
            <Link href="/our-companies" className={styles.textLink}>
              See every brand and platform <span aria-hidden="true">&rarr;</span>
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
