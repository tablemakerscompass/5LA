import Link from "next/link";
import Image from "next/image";
import type { Company } from "@/config/companies";
import styles from "./CompanyCard.module.css";

type CompanyCardProps = {
  company: Company;
  className?: string;
};

/** Initials fallback when a brand logo asset isn't yet available. */
function initials(name: string) {
  const cleaned = name.replace(/^The\s+/i, "").trim();
  const words = cleaned.split(/\s+/).filter(Boolean);
  const letters = words.slice(0, 2).map((w) => w[0]);
  return letters.join("").toUpperCase();
}

/**
 * Card for a company / platform / IP brand within the 5LA ecosystem.
 * Supports a logo (or initials fallback), category, description, and an
 * optional dark presentation.
 */
export default function CompanyCard({ company, className = "" }: CompanyCardProps) {
  const href = `/our-companies/${company.slug}`;

  return (
    <Link
      href={href}
      className={`${styles.card} ${className}`}
      data-dark={company.dark ? "true" : undefined}
    >
      <div className={styles.head}>
        <div className={styles.mark} aria-hidden="true">
          {company.logo ? (
            <Image
              src={company.logo}
              alt=""
              width={120}
              height={48}
              className={styles.logo}
            />
          ) : (
            <span className={styles.initials}>{initials(company.name)}</span>
          )}
        </div>
        <span className={styles.category}>{company.category}</span>
      </div>

      <div className={styles.body}>
        <h3 className={`subheading ${styles.name}`}>{company.name}</h3>
        {/* PLACEHOLDER description — replace in config/companies.ts */}
        <p className={`body-sm ${styles.desc}`}>{company.description}</p>
      </div>

      <span className={styles.cue} aria-hidden="true">
        View <span className={styles.arrow}>&rarr;</span>
      </span>
    </Link>
  );
}
