import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import { acBrand } from "@/config/academy";
import styles from "./AcWhy.module.css";

/** Section 2 — Why the Academy exists. Spacious editorial, no feature cards. */
export default function AcWhy() {
  return (
    <section
      id="why-the-academy"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="ac-why-heading"
    >
      <Container>
        <div className={styles.grid}>
          <Reveal className={styles.head}>
            <p className="eyebrow">Why We Built It</p>
            <hr className={`rule ${styles.rule}`} />
            <h2 id="ac-why-heading" className={`section-heading ${styles.heading}`}>
              Organizations Cannot Deliver Excellence Through Expectations Alone.
            </h2>
          </Reveal>

          <Reveal delay={100} className={styles.copy}>
            <p className={`body ${styles.body}`}>
              Businesses often tell employees to lead better, communicate
              clearly, provide exceptional service, take ownership, and protect
              the culture without giving them a shared language, practical tools,
              or consistent development.
            </p>
            <p className={`body ${styles.body}`}>
              The 5LA Academy was created to close that gap.
            </p>
            <p className={`body ${styles.body}`}>
              It translates real operational, hospitality, leadership, culture,
              and workforce experience into learning people can understand,
              practice, and apply in the work.
            </p>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <figure className={styles.quoteWrap}>
            <blockquote className={`quote ${styles.quote}`}>
              People cannot consistently carry a standard they have never been
              taught, shown, supported, and equipped to deliver.
            </blockquote>
          </figure>
        </Reveal>

        <Reveal delay={120}>
          <p className={styles.coreMessage}>{acBrand.coreMessage}</p>
        </Reveal>
      </Container>
    </section>
  );
}
