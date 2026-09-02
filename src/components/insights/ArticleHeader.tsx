import Image from "next/image";
import Container from "@/components/layout/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ArticleMeta from "./ArticleMeta";
import type { Article } from "@/config/articles";
import styles from "./ArticleHeader.module.css";

/** Breadcrumb, category, title, standfirst, byline, and hero image. */
export default function ArticleHeader({ article }: { article: Article }) {
  return (
    <header className={styles.wrap}>
      <Container>
        <Breadcrumbs
          items={[
            { label: "The Tablemakers Compass", href: "/insights" },
            { label: article.category },
          ]}
          className={styles.crumbs}
        />

        <div className={styles.head}>
          <p className={styles.category}>{article.category}</p>
          <hr className={`rule ${styles.rule}`} />
          <h1 className={`page-title ${styles.title}`}>{article.title}</h1>
          <p className={`lead ${styles.dek}`}>{article.dek}</p>
          <ArticleMeta article={article} linkAuthor className={styles.meta} />
        </div>
      </Container>

      <Container>
        <figure className={styles.figure}>
          <div className={styles.imageFrame}>
            <Image
              src={article.image}
              alt={article.imageAlt}
              width={1600}
              height={900}
              priority
              sizes="(min-width: 1360px) 1320px, 100vw"
              className={styles.image}
            />
          </div>
        </figure>
      </Container>
    </header>
  );
}
