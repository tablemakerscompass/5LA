import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { isDesignedFor, isNot, smBrand } from "@/config/the-sarah-method";
import styles from "./SmCareBoundaries.module.css";

/**
 * Section 10 — Care boundaries.
 *
 * The two lists are semantic <ul>s with written headings, so the distinction
 * survives without colour, and the disclaimer is plain readable text — never
 * collapsed, never faded out, never smaller than the surrounding body copy.
 *
 * No emergency numbers are published here: the brief asks for none without
 * location-aware handling, and the application itself surfaces local crisis
 * resources at the point of need.
 */
export default function SmCareBoundaries() {
  return (
    <section
      id="care-boundaries"
      className={`section ${styles.wrap}`}
      aria-labelledby="sm-care-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="What The Sarah Method Is—and What It Is Not"
          title={
            <span id="sm-care-heading">
              Reflection Can Be Meaningful Without Pretending to Replace
              Professional Care.
            </span>
          }
          divider
        />

        <div className={styles.columns}>
          <Reveal className={`${styles.column} ${styles.isFor}`}>
            <h3 className={styles.columnHeading}>
              The Sarah Method is designed for
            </h3>
            <ul className={styles.list}>
              {isDesignedFor.map((item) => (
                <li key={item} className={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100} className={`${styles.column} ${styles.isNot}`}>
            <h3 className={styles.columnHeading}>The Sarah Method is not</h3>
            <ul className={styles.list}>
              {isNot.map((item) => (
                <li key={item} className={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <aside className={styles.disclaimer} aria-label="Important note">
            <h3 className={styles.disclaimerHeading}>Please read</h3>
            <p className={styles.disclaimerBody}>{smBrand.disclaimer}</p>
          </aside>
        </Reveal>
      </Container>
    </section>
  );
}
