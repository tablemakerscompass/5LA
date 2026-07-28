import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import { companies } from "@/config/companies";
import { site } from "@/config/site";
import styles from "./CompaniesHero.module.css";

/**
 * Hero — a typographic brand-family composition rather than a logo wall.
 * Only VelaXity has an approved logo today, so every name is set in type;
 * this keeps the family reading as one architecture and avoids inventing
 * marks for brands that do not have them yet.
 */
export default function CompaniesHero() {
  return (
    <section
      className={styles.hero}
      data-surface="dark"
      aria-labelledby="companies-hero-heading"
    >
      <div className={styles.inner}>
        <Breadcrumbs
          items={[{ label: "Our Companies" }]}
          className={styles.crumbs}
        />

        <div className={styles.grid}>
          <div className={styles.content}>
            <Reveal>
              <p className="eyebrow">The 5LA Ecosystem</p>
            </Reveal>
            <Reveal delay={80}>
              <h1
                id="companies-hero-heading"
                className={`page-title ${styles.headline}`}
              >
                Distinct Brands. Shared Vision. One Parent Company.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className={`lead ${styles.lead}`}>
                The 5 Loaves Agency develops and supports companies, platforms,
                programs, communities, and original properties created to serve
                different audiences while remaining connected by one experience
                standard.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className={styles.actions}>
                <Button href="#portfolio" variant="gold" size="lg">
                  Explore the Ecosystem
                </Button>
                <Button href="/about" variant="outline" size="lg">
                  Learn About 5LA
                </Button>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <p className={styles.descriptor}>{site.descriptor}</p>
            </Reveal>
          </div>

          <Reveal delay={160} className={styles.figure}>
            <div className={styles.composition} aria-hidden="true">
              <span className={styles.parentLabel}>Parent Company</span>
              <span className={styles.parentName}>{site.legalName}</span>
              <span className={styles.stem} />
              <ul className={styles.names}>
                {companies.map((company) => (
                  <li key={company.slug} className={styles.name}>
                    {company.name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
