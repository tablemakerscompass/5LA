import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { offerings } from "@/config/what-we-do";
import styles from "./WhatWeDoOfferings.module.css";

type Props = {
  /**
   * The homepage needs the section header; the /what-we-do page already says
   * the same thing in its page hero, so it renders the cards alone.
   */
  showIntro?: boolean;
};

/** The three core offerings, as cards. Shared by the homepage and /what-we-do. */
export default function WhatWeDoOfferings({ showIntro = true }: Props) {
  return (
    <section
      /*
       * Without the section header this sits directly under the page hero, so
       * the full section rhythm becomes a gap. Tighter padding closes it.
       */
      className={`${showIntro ? "section" : "section-tight"} ${styles.wrap}`}
      aria-labelledby={showIntro ? "what-we-do-heading" : undefined}
      aria-label={showIntro ? undefined : "What we do"}
    >
      <Container>
        {showIntro && (
          <SectionIntro
            eyebrow="What We Do"
            title={
              <span id="what-we-do-heading">
                Built on Operations. Delivered With Heart.
              </span>
            }
            divider
          />
        )}

        <div className={styles.grid}>
          {offerings.map((offering, i) => (
            <Reveal key={offering.n} delay={i * 80}>
              <article className={styles.card}>
                <span className={`numeral ${styles.n}`} aria-hidden="true">
                  {offering.n}
                </span>
                <h3 className={`subheading ${styles.title}`}>{offering.title}</h3>
                <p className={`body ${styles.body}`}>{offering.body}</p>
                <Link href={offering.href} className={styles.cta}>
                  {offering.cta}
                  <span className={styles.arrow} aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
