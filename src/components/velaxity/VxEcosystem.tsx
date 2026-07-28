import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { vxBrand, vxEcosystem } from "@/config/velaxity";
import styles from "./VxEcosystem.module.css";

/** Section 14 — VelaXity and the 5LA ecosystem. */
export default function VxEcosystem() {
  const sectors = vxEcosystem.filter((e) => e.kind === "sector");
  const companies = vxEcosystem.filter((e) => e.kind === "company");

  return (
    <section
      id="the-ecosystem"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="vx-ecosystem-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Built From the 5LA Experience"
          title={
            <span id="vx-ecosystem-heading">
              VelaXity Connects Technology With Operations, People, Standards,
              and Leadership.
            </span>
          }
          divider
        />

        <div className={styles.block}>
          <h3 className={styles.blockLabel}>
            The Experience Sectors behind the platform
            <span className={styles.blockNote}>
              Technology Experience is the primary sector.
            </span>
          </h3>
          <ul className={styles.list}>
            {sectors.map((entry, i) => (
              <Reveal key={entry.href} as="li" delay={i * 70} className={styles.item}>
                <Link href={entry.href} className={styles.itemLink}>
                  <span className={styles.itemName}>
                    {entry.name}
                    {entry.name === vxBrand.primarySector && (
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

        <Reveal delay={80}>
          <p className={`lead ${styles.statement}`}>
            VelaXity is a technology platform, but its design is grounded in the
            full experience of how organizations lead, operate, develop people,
            and deliver standards.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
