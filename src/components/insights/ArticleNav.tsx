import Link from "next/link";
import type { Article } from "@/config/articles";
import styles from "./ArticleNav.module.css";

type ArticleNavProps = {
  previous?: Article;
  next?: Article;
};

/** Back to Insights plus previous / next article navigation. */
export default function ArticleNav({ previous, next }: ArticleNavProps) {
  return (
    <nav className={styles.wrap} aria-label="Article navigation">
      <Link href="/insights" className={styles.back}>
        <span aria-hidden="true">&larr;</span> Back to Insights
      </Link>

      {(previous || next) && (
        <div className={styles.pair}>
          {previous ? (
            <Link href={`/insights/${previous.slug}`} className={styles.item}>
              <span className={styles.direction}>Previous Article</span>
              <span className={styles.title}>{previous.title}</span>
            </Link>
          ) : (
            <span className={styles.spacer} aria-hidden="true" />
          )}
          {next && (
            <Link href={`/insights/${next.slug}`} className={`${styles.item} ${styles.nextItem}`}>
              <span className={styles.direction}>Next Article</span>
              <span className={styles.title}>{next.title}</span>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
