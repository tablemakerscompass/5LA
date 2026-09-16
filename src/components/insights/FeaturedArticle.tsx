import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import ArticleMeta from "./ArticleMeta";
import type { Article } from "@/config/articles";
import styles from "./FeaturedArticle.module.css";

/** Large editorial treatment for the lead Insights article. */
export default function FeaturedArticle({ article }: { article: Article }) {
  const href = `/insights/${article.slug}`;

  return (
    <section className={`section ${styles.wrap}`} aria-labelledby="featured-heading">
      <Container>
        <p className={`eyebrow ${styles.label}`}>Featured Insight</p>
        <hr className={`rule ${styles.rule}`} />

        <div className={styles.grid}>
          <Reveal className={styles.figureCol}>
            <Link href={href} className={styles.imageLink} tabIndex={-1} aria-hidden="true">
              <div className={styles.imageFrame}>
                {/*
                 * `fill` rather than fixed dimensions: this frame shows
                 * whichever article leads, and their source files are not one
                 * shape. The hardcoded 1000x1500 here described none of them.
                 *
                 * `sizes` is deliberately larger than the frame. The frame is
                 * 4:5 and crops with object-fit: cover, so a landscape source
                 * is drawn far wider than the frame and then clipped — a 16:9
                 * photo in a 582px frame is painted at ~1294px. Sizing the
                 * hint to the frame fetched a 750px variant and upscaled it.
                 */}
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  priority
                  sizes="100vw"
                  className={styles.image}
                />
              </div>
            </Link>
          </Reveal>

          <Reveal delay={120} className={styles.text}>
            <p className={styles.category}>{article.category}</p>
            <h2 id="featured-heading" className={`section-heading ${styles.title}`}>
              <Link href={href} className={styles.titleLink}>
                {article.title}
              </Link>
            </h2>
            <p className={`lead ${styles.dek}`}>{article.dek}</p>
            <p className={`body ${styles.excerpt}`}>{article.excerpt}</p>
            <ArticleMeta article={article} className={styles.meta} />
            <div className={styles.action}>
              <Button href={href} variant="primary" size="lg">
                Read Article
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
