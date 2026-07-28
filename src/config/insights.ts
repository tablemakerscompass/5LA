/**
 * Insights preview data used by the homepage section.
 *
 * Derived from the published article library (`./articles`) so the homepage
 * always links to real, live articles and there is no second list to keep
 * in sync.
 */

import { articles } from "./articles";

export type Insight = {
  category: string;
  title: string;
  href: string;
};

/** The three most recent articles, in publication order. */
export const insights: Insight[] = articles.slice(0, 3).map((article) => ({
  category: article.category,
  title: article.title,
  href: `/insights/${article.slug}`,
}));
