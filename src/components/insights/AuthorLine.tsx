import Link from "next/link";
import { author } from "@/config/articles";
import styles from "./AuthorLine.module.css";

/** Small end-of-article author credit. Intentionally brief — no full bio. */
export default function AuthorLine() {
  return (
    <aside className={styles.wrap}>
      <p className={styles.name}>
        <Link href={author.href} className={styles.link}>
          {author.name}
        </Link>
        , {author.title}
      </p>
      <p className={styles.bio}>{author.bio}</p>
    </aside>
  );
}
