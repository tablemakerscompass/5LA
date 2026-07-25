import Link from "next/link";
import styles from "./Breadcrumbs.module.css";

export type Crumb = { label: string; href?: string };

type BreadcrumbsProps = {
  items: Crumb[];
  className?: string;
};

/** Discreet breadcrumb trail for internal pages. Home is prepended automatically. */
export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const trail: Crumb[] = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className={`${styles.wrap} ${className}`}>
      <ol className={styles.list}>
        {trail.map((crumb, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={`${crumb.label}-${i}`} className={styles.item}>
              {crumb.href && !last ? (
                <Link href={crumb.href} className={styles.link}>
                  {crumb.label}
                </Link>
              ) : (
                <span className={styles.current} aria-current={last ? "page" : undefined}>
                  {crumb.label}
                </span>
              )}
              {!last && (
                <span className={styles.sep} aria-hidden="true">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
