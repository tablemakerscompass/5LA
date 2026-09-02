import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import ArticleMeta from "./ArticleMeta";
import type { Article } from "@/config/articles";
import styles from "./ArticleGrid.module.css";

/**
 * The supporting Insights articles. The first entry receives a wide,
 * image-left editorial treatment; the rest fall into a two-column grid so the
 * section reads as a publication rather than a row of identical cards.
 */
export default function ArticleGrid({ articles }: { articles: Article[] }) {
  const [lead, ...rest] = articles;

  return (
    <section className={`section ${styles.wrap}`} aria-labelledby="more-insights-heading">
      <Container>
        <div className={styles.head}>
          <p className="eyebrow">More from the Compass</p>
          <hr className="rule" />
          <h2 id="more-insights-heading" className="section-heading">
            Perspective From Across the Work.
          </h2>
        </div>

        <div className={styles.grid}>
          {lead && (
            <Reveal className={styles.wideItem}>
              <article className={`${styles.card} ${styles.wide}`}>
                <Link
                  href={`/insights/${lead.slug}`}
                  className={styles.imageLink}
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <div className={`${styles.imageFrame} ${styles.wideFrame}`}>
                    <Image
                      src={lead.image}
                      alt={lead.imageAlt}
                      width={1200}
                      height={900}
                      sizes="(min-width: 900px) 50vw, 100vw"
                      className={styles.image}
                    />
                  </div>
                </Link>
                <div className={styles.body}>
                  <p className={styles.category}>{lead.category}</p>
                  <h3 className={`subheading ${styles.title}`}>
                    <Link href={`/insights/${lead.slug}`} className={styles.titleLink}>
                      {lead.title}
                    </Link>
                  </h3>
                  <p className={`body ${styles.excerpt}`}>{lead.excerpt}</p>
                  <ArticleMeta article={lead} />
                  <span className={styles.readMore} aria-hidden="true">
                    Read Article <span className={styles.arrow}>&rarr;</span>
                  </span>
                </div>
              </article>
            </Reveal>
          )}

          {rest.map((article, i) => (
            <Reveal key={article.slug} delay={i * 80}>
              <article className={styles.card}>
                <Link
                  href={`/insights/${article.slug}`}
                  className={styles.imageLink}
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <div className={styles.imageFrame}>
                    <Image
                      src={article.image}
                      alt={article.imageAlt}
                      width={1200}
                      height={900}
                      sizes="(min-width: 900px) 45vw, 100vw"
                      className={styles.image}
                    />
                  </div>
                </Link>
                <div className={styles.body}>
                  <p className={styles.category}>{article.category}</p>
                  <h3 className={`subheading ${styles.title}`}>
                    <Link href={`/insights/${article.slug}`} className={styles.titleLink}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className={`body ${styles.excerpt}`}>{article.excerpt}</p>
                  <ArticleMeta article={article} />
                  <span className={styles.readMore} aria-hidden="true">
                    Read Article <span className={styles.arrow}>&rarr;</span>
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
