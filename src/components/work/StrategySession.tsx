import Link from "next/link";
import Section from "@/components/layout/Section";
import { strategySession } from "@/config/services";
import styles from "./StrategySession.module.css";

/**
 * The entry offer, for visitors who need clarity before they need a package.
 * Sits on a raised surface so it reads as an offer rather than another
 * service in the list above.
 */
export default function StrategySession() {
  return (
    <Section muted aria-labelledby="strategy-heading">
      <div className={styles.box}>
        <div className={styles.aside}>
          <h2 id="strategy-heading" className={`subheading ${styles.title}`}>
            {strategySession.name}
          </h2>
          <span className={styles.amount}>{strategySession.investment}</span>
        </div>

        <div className={styles.body}>
          <p className="body">{strategySession.summary}</p>
          <p className={`body ${styles.note}`}>{strategySession.note}</p>
          <Link
            href={`/work-with-us?interest=${strategySession.slug}#start`}
            className={styles.cta}
          >
            <span>{strategySession.cta}</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
