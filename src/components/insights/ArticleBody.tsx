import type { Block } from "@/config/articles";
import styles from "./ArticleBody.module.css";

/**
 * Renders an article body from its block list. Strings become paragraphs,
 * `{ list }` becomes a bulleted list, and `{ quote }` becomes a pull quote.
 */
export default function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className={styles.body}>
      {blocks.map((block, i) => {
        if (typeof block === "string") {
          return <p key={i}>{block}</p>;
        }

        if ("list" in block) {
          return (
            <ul key={i} className={styles.list}>
              {block.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        return (
          <blockquote key={i} className={styles.pullquote}>
            <p>{block.quote}</p>
          </blockquote>
        );
      })}
    </div>
  );
}
