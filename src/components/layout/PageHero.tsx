import type { ReactNode } from "react";
import Container from "./Container";
import Breadcrumbs, { type Crumb } from "@/components/ui/Breadcrumbs";
import styles from "./PageHero.module.css";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  crumbs?: Crumb[];
  dark?: boolean;
  align?: "left" | "center";
};

/** Consistent internal-page header with breadcrumbs, eyebrow, and title. */
export default function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  dark = false,
  align = "left",
}: PageHeroProps) {
  return (
    <header
      className={`${styles.hero} ${align === "center" ? styles.center : ""}`}
      data-surface={dark ? "dark" : undefined}
    >
      <Container>
        {crumbs && <Breadcrumbs items={crumbs} className={styles.crumbs} />}
        <div className={styles.body}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <hr className={`rule ${align === "center" ? "rule-center" : ""}`} />
          <h1 className={`page-title ${styles.title}`}>{title}</h1>
          {lead && <p className={`lead ${styles.lead}`}>{lead}</p>}
        </div>
      </Container>
    </header>
  );
}
