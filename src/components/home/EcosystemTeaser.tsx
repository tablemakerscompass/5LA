import Link from "next/link";
import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import { companies } from "@/config/companies";
import styles from "./EcosystemTeaser.module.css";

/**
 * A two-line acknowledgement of the wider 5LA ecosystem, in place of the old
 * seven-card grid.
 *
 * The homepage now leads with hospitality, events, and business; the ventures
 * are context for that, not competing headliners. Names are read from the
 * companies config so the strip can never drift out of sync with
 * /our-companies, which still carries all seven in full.
 */
/** Aunt Sarah's Girls was promoted to a top-level route; the rest stay nested. */
function companyHref(slug: string) {
  return slug === "aunt-sarahs-girls"
    ? "/aunt-sarahs-girls"
    : `/our-companies/${slug}`;
}

export default function EcosystemTeaser() {
  return (
    <section
      className={`section-tight ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="ecosystem-teaser-heading"
    >
      <Container>
        <Reveal className={styles.inner}>
          <div className={styles.text}>
            <p className="eyebrow">The 5LA Ecosystem</p>
            <hr className={`rule ${styles.rule}`} />
            <p id="ecosystem-teaser-heading" className={styles.statement}>
              Part of a growing vision — 5LA is also home to a family of ventures
              in technology, training, and media.
            </p>
            {/*
              * Each venture links to its own page. This used to be a plain
              * list beside one "Explore the 5LA Ecosystem" button pointing at
              * the /our-companies overview; that overview is retired, and the
              * company pages are no longer in the nav, so this strip is now
              * their only route in. A single button to a redirect would have
              * stranded all seven.
              */}
            <ul className={styles.names}>
              {companies.map((company) => (
                <li key={company.slug} className={styles.nameItem}>
                  <Link href={companyHref(company.slug)} className={styles.nameLink}>
                    {company.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
