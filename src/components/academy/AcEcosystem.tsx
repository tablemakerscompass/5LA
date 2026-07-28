import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { acBrand, acEcosystem } from "@/config/academy";
import styles from "./AcEcosystem.module.css";

/** Section 16 — The Academy and the 5LA ecosystem. */
export default function AcEcosystem() {
  return (
    <section
      id="the-ecosystem"
      className={`section ${styles.wrap}`}
      aria-labelledby="ac-ecosystem-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="Part of a Complete Experience Company"
          title={
            <span id="ac-ecosystem-heading">
              The Academy Connects Learning to Operations, Technology, Culture,
              and Service.
            </span>
          }
          divider
        />

        <ul className={styles.list}>
          {acEcosystem.map((entry, i) => (
            <Reveal key={entry.href} as="li" delay={(i % 2) * 70} className={styles.item}>
              <Link href={entry.href} className={styles.itemLink}>
                <span className={styles.itemName}>
                  {entry.name}
                  {entry.name === acBrand.primarySector && (
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
            Training works best when the systems, leaders, tools, and culture
            around the learner support what is being taught.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
