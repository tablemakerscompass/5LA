import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { tmBrand, tmEcosystem } from "@/config/tablemakers";
import styles from "./TmEcosystem.module.css";

/** Section 15 — Tablemakers and the 5LA ecosystem. */
export default function TmEcosystem() {
  return (
    <section
      id="the-ecosystem"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="tm-ecosystem-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Part of a Complete Experience Company"
          title={
            <span id="tm-ecosystem-heading">
              Tablemakers Extends the Ideas, Learning, and Standards Behind 5LA
              Into Community.
            </span>
          }
          divider
        />

        <ul className={styles.list}>
          {tmEcosystem.map((entry, i) => (
            <Reveal key={entry.href} as="li" delay={(i % 2) * 70} className={styles.item}>
              <Link href={entry.href} className={styles.itemLink}>
                <span className={styles.itemName}>
                  {entry.name}
                  {entry.name === tmBrand.primarySector && (
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

        <Reveal delay={80}>
          <p className={`lead ${styles.statement}`}>
            Tablemakers is where many of the ideas behind 5LA can be discussed,
            challenged, practiced, and carried into the larger professional
            community.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
