import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { asgBrand, asgEcosystem } from "@/config/aunt-sarahs-girls";
import styles from "./AsgEcosystem.module.css";

/** Section 13 — How Aunt Sarah's Girls connects to the 5LA ecosystem. */
export default function AsgEcosystem() {
  const companies = asgEcosystem.filter((e) => e.kind === "company");
  const sectors = asgEcosystem.filter((e) => e.kind === "sector");

  return (
    <section
      id="the-ecosystem"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="asg-ecosystem-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Built Within a Larger Experience Company"
          title={
            <span id="asg-ecosystem-heading">
              The Story Is Supported by Business, Technology, Training, and Media.
            </span>
          }
          divider
        />

        <Reveal className={styles.lineage}>
          <span className={styles.lineageLabel}>Parent company</span>
          <span className={styles.lineageName}>{asgBrand.parent}</span>
          <span className={styles.stem} aria-hidden="true" />
          <span className={styles.lineageLabel}>Media division</span>
          <span className={styles.lineageName}>{asgBrand.division}</span>
          <span className={styles.stem} aria-hidden="true" />
          <span className={styles.lineageLabel}>Original property</span>
          <span className={`${styles.lineageName} ${styles.lineageCurrent}`}>
            {asgBrand.name}
          </span>
        </Reveal>

        <div className={styles.block}>
          <h3 className={styles.blockLabel}>Within the ecosystem</h3>
          <ul className={styles.list}>
            {companies.map((entry, i) => (
              <Reveal key={entry.href} as="li" delay={i * 70} className={styles.item}>
                <Link href={entry.href} className={styles.itemLink}>
                  <span className={styles.itemName}>
                    {entry.name}
                    <span className={styles.arrow} aria-hidden="true">
                      &rarr;
                    </span>
                  </span>
                </Link>
                <p className={styles.itemRole}>{entry.role}</p>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className={styles.block}>
          <h3 className={styles.blockLabel}>
            Supported by the Experience Sectors
            <span className={styles.blockNote}>
              Media Experience is the primary sector for this property.
            </span>
          </h3>
          <ul className={styles.list}>
            {sectors.map((entry, i) => (
              <Reveal key={entry.href} as="li" delay={i * 70} className={styles.item}>
                <Link href={entry.href} className={styles.itemLink}>
                  <span className={styles.itemName}>
                    {entry.name}
                    {entry.name === asgBrand.primarySector && (
                      <span className={styles.primaryTag}>Primary</span>
                    )}
                    <span className={styles.arrow} aria-hidden="true">
                      &rarr;
                    </span>
                  </span>
                </Link>
                <p className={styles.itemRole}>{entry.role}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
