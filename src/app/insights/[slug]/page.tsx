import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import ArticleHeader from "@/components/insights/ArticleHeader";
import ArticleBody from "@/components/insights/ArticleBody";
import AuthorLine from "@/components/insights/AuthorLine";
import ArticleNav from "@/components/insights/ArticleNav";
import CTABanner from "@/components/ui/CTABanner";
import {
  articles,
  author,
  getArticle,
  getAdjacentArticles,
} from "@/config/articles";
import { site } from "@/config/site";
import { articleSchema, breadcrumbSchema } from "@/lib/seo";

type Params = { slug: string };

/** Pre-render one static page per published article. */
export function generateStaticParams(): Params[] {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const url = `${site.url}/insights/${article.slug}`;

  return {
    title: article.title,
    description: article.dek,
    alternates: { canonical: url },
    openGraph: {
      title: `${article.title} — ${site.name}`,
      description: article.dek,
      url,
      siteName: site.name,
      type: "article",
      publishedTime: article.date,
      authors: [author.byline],
      images: [{ url: article.image, alt: article.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} — ${site.name}`,
      description: article.dek,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const { previous, next } = getAdjacentArticles(article.slug);
  const path = `/insights/${article.slug}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { label: "Insights", path: "/insights" },
              { label: article.title, path },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: article.title,
              description: article.dek,
              path,
              datePublished: article.date,
              image: article.image,
              authorName: author.byline,
            })
          ),
        }}
      />

      <ArticleHeader article={article} />

      <article className="section">
        <Container>
          <ArticleBody blocks={article.body} />
        </Container>
      </article>

      <section className="section-tight">
        <Container>
          <AuthorLine />
        </Container>
      </section>

      <section className="section-tight">
        <Container>
          <ArticleNav previous={previous} next={next} />
        </Container>
      </section>

      <CTABanner
        eyebrow="Work With 5LA"
        title="Insight Should Change the Experience."
        body="Explore how 5LA can help strengthen the systems, technology, people, and stories behind your organization."
        primary={{ label: "Work With 5LA", href: "/work-with-us" }}
        secondary={{ label: "Explore Our Experience Sectors", href: "/what-we-do" }}
      />
    </>
  );
}
