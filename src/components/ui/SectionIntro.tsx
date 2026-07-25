import type { ReactNode } from "react";
import styles from "./SectionIntro.module.css";

type SectionIntroProps = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  /** Show the thin gold divider under the eyebrow. */
  divider?: boolean;
  /** Heading level for correct document outline (default h2). */
  as?: "h1" | "h2" | "h3";
  className?: string;
};

/** Reusable section header: eyebrow label, heading, optional lead + divider. */
export default function SectionIntro({
  eyebrow,
  title,
  lead,
  align = "left",
  divider = false,
  as: Heading = "h2",
  className = "",
}: SectionIntroProps) {
  const headingClass = Heading === "h1" ? "page-title" : "section-heading";

  return (
    <div
      className={`${styles.intro} ${align === "center" ? styles.center : ""} ${className}`}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {divider && (
        <hr className={`rule ${align === "center" ? "rule-center" : ""} ${styles.rule}`} />
      )}
      <Heading className={`${headingClass} ${styles.title}`}>{title}</Heading>
      {lead && <p className={`lead ${styles.lead}`}>{lead}</p>}
    </div>
  );
}
