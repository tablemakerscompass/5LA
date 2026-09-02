import Link from "next/link";
import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import { sectors } from "@/config/sectors";
import { site } from "@/config/site";
import styles from "./CompaniesParent.module.css";

/**
 * Section 2 — the relationship between the parent company, the four
 * sectors, and the ecosystem brands. A hierarchy of type and hairlines,
 * not a legal org chart. Stacks vertically on small screens.
 */
export default function CompaniesParent() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="parent-heading"
    >
      <Container>
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">The Foundation</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="parent-heading" className={`section-heading ${styles.heading}`}>
              The 5 Loaves Agency Builds the Structure Beneath the Entire
              Ecosystem.
            </h2>
          </Reveal>
          <Reveal delay={120} className={styles.copy}>
            <p className={`body ${styles.paragraph}`}>
              The 5 Loaves Agency provides the strategic, operational,
              creative, technological, and developmental foundation supporting
              each company, platform, program, and original property within the
              ecosystem.
            </p>
            <p className={`body ${styles.paragraph}`}>
              Some 5LA work serves external organizations directly. Other work
              is focused on developing proprietary technology, training
              experiences, media properties, communities, applications, and
              original intellectual property.
            </p>
            <p className={`body ${styles.paragraph}`}>
              Every part of the ecosystem is connected by a shared commitment to
              leadership, ownership, alignment, vision, excellence, service, and
              meaningful experience.
            </p>
          </Reveal>
        </div>

        <Reveal delay={100} className={styles.diagram}>
          <div className={styles.parent}>
            <span className={styles.parentLabel}>Parent Company</span>
            <span className={styles.parentName}>{site.legalName}</span>
          </div>

          <span className={styles.stem} aria-hidden="true" />

          <div className={styles.sectorsWrap}>
            <h3 className={styles.tier}>The Four Experience Sectors</h3>
            <ul className={styles.sectors}>
              {sectors.map((sector) => (
                <li key={sector.slug} className={styles.sector}>
                  <Link
                    href={sector.href}
                    className={styles.sectorLink}
                  >
                    <span className={styles.sectorNumber} aria-hidden="true">
                      {sector.number}
                    </span>
                    {sector.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <span className={styles.stem} aria-hidden="true" />

          <div className={styles.brandsWrap}>
            <h3 className={styles.tier}>
              The Companies, Platforms &amp; Properties They Support
            </h3>
            <p className={styles.brandsNote}>
              Explored in full below.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
