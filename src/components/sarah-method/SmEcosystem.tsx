import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { smBrand, smEcosystem } from "@/config/the-sarah-method";
import styles from "./SmEcosystem.module.css";

/** Section 15 — Connection to the 5LA ecosystem. */
export default function SmEcosystem() {
  const companies = smEcosystem.filter((e) => e.kind === "company");
  const sectors = smEcosystem.filter((e) => e.kind === "sector");

  return (
    <section
      id="the-ecosystem"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="sm-ecosystem-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Built Within a Larger Experience Company"
          title={
            <span id="sm-ecosystem-heading">
              The Sarah Method Connects Story, Technology, Reflection, and
              Learning.
            </span>
          }
          divider
        />

        <Reveal className={styles.lineage}>
          <span className={styles.lineageLabel}>Parent company</span>
          <span className={styles.lineageName}>{smBrand.parent}</span>
          <span className={styles.stem} aria-hidden="true" />
          <span className={styles.lineageLabel}>Media division</span>
          <span className={styles.lineageName}>{smBrand.division}</span>
          <span className={styles.stem} aria-hidden="true" />
          <span className={styles.lineageLabel}>Originating property</span>
          <span className={styles.lineageName}>{smBrand.origin}</span>
          <span className={styles.stem} aria-hidden="true" />
          <span className={styles.lineageLabel}>Platform</span>
          <span className={`${styles.lineageName} ${styles.lineageCurrent}`}>
            {smBrand.name}
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
              Media Experience is the primary sector for this platform.
            </span>
          </h3>
          <ul className={styles.list}>
            {sectors.map((entry, i) => (
              <Reveal key={entry.href} as="li" delay={i * 70} className={styles.item}>
                <Link href={entry.href} className={styles.itemLink}>
                  <span className={styles.itemName}>
                    {entry.name}
                    {entry.name === smBrand.primarySector && (
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
