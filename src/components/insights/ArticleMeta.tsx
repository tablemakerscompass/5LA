import Link from "next/link";
import { author, formatDate, readingMinutes, type Article } from "@/config/articles";
import styles from "./ArticleMeta.module.css";

type ArticleMetaProps = {
  article: Article;
  /** Link the author name to the founder section on the About page. */
  linkAuthor?: boolean;
  className?: string;
};

/** Author · publication date · reading time, as a single fine editorial line. */
export default function ArticleMeta({
  article,
  linkAuthor = false,
  className = "",
}: ArticleMetaProps) {
  return (
    <p className={`${styles.meta} ${className}`}>
      <span className={styles.author}>
        {linkAuthor ? (
          <Link href={author.href} className={styles.authorLink}>
            {author.name}
          </Link>
        ) : (
          author.name
        )}
        , {author.title}
      </span>
      <span className={styles.dot} aria-hidden="true" />
      <time dateTime={article.date}>{formatDate(article.date)}</time>
      <span className={styles.dot} aria-hidden="true" />
      <span>{readingMinutes(article)} min read</span>
    </p>
  );
}
