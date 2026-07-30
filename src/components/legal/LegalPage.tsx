import Link from "next/link";
import Container from "@/components/layout/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { legal, formatLegalDate } from "@/config/legal";
import styles from "./LegalPage.module.css";

/** A block of legal copy. */
export type LegalBlock =
  | string
  | { h3: string }
  | { list: string[] }
  | { note: string };

export type LegalSection = {
  /** Anchor id — also the table-of-contents target. */
  id: string;
  title: string;
  blocks: LegalBlock[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
  /** Show the "not legal advice" notice. Off for the accessibility statement. */
  showReviewNotice?: boolean;
  /** Crumb label for the current page. */
  crumb: string;
};

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Accessibility Statement", href: "/accessibility" },
];

function Blocks({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (typeof block === "string") return <p key={i} className={styles.p}>{block}</p>;
        if ("h3" in block) return <h3 key={i} className={styles.h3}>{block.h3}</h3>;
        if ("note" in block)
          return (
            <p key={i} className={styles.note}>
              {block.note}
            </p>
          );
        return (
          <ul key={i} className={styles.list}>
            {block.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        );
      })}
    </>
  );
}

/**
 * Shared layout for the Privacy Policy, Terms of Service, and Accessibility
 * Statement: a restrained document page with a table of contents, numbered
 * sections, a contact block, and print-friendly styles.
 */
export default function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
  showReviewNotice = true,
  crumb,
}: LegalPageProps) {
  return (
    <div className={styles.page}>
      <Container>
        <Breadcrumbs items={[{ label: crumb }]} className={styles.crumbs} />

        <header className={styles.header}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <hr className={`rule ${styles.rule}`} />
          <h1 className={`page-title ${styles.title}`}>{title}</h1>

          <dl className={styles.dates}>
            <div className={styles.dateItem}>
              <dt className={styles.dateTerm}>Effective date</dt>
              <dd className={styles.dateValue}>
                <time dateTime={legal.effectiveDate}>
                  {formatLegalDate(legal.effectiveDate)}
                </time>
              </dd>
            </div>
            <div className={styles.dateItem}>
              <dt className={styles.dateTerm}>Last updated</dt>
              <dd className={styles.dateValue}>
                <time dateTime={legal.lastUpdated}>
                  {formatLegalDate(legal.lastUpdated)}
                </time>
              </dd>
            </div>
          </dl>

          <p className={styles.intro}>{intro}</p>

          {showReviewNotice && (
            <p className={styles.reviewNotice}>{legal.reviewNotice}</p>
          )}
        </header>

        <nav className={styles.toc} aria-labelledby="toc-heading">
          <h2 id="toc-heading" className={styles.tocHeading}>
            Contents
          </h2>
          <ol className={styles.tocList}>
            {sections.map((section, i) => (
              <li key={section.id} className={styles.tocItem}>
                <a href={`#${section.id}`} className={styles.tocLink}>
                  <span className={styles.tocNumber} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className={styles.body}>
          {sections.map((section, i) => (
            <section key={section.id} id={section.id} className={styles.section}>
              <h2 className={styles.h2}>
                <span className={styles.sectionNumber} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {section.title}
              </h2>
              <Blocks blocks={section.blocks} />
            </section>
          ))}
        </div>

        {/* A div, not a <footer> — the page's contentinfo landmark is the
            site footer, and a second one here would only add noise. */}
        <div className={styles.pageFooter}>
          <ul className={styles.legalLinks}>
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.legalLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className={styles.updated}>
            This page was last updated on{" "}
            <time dateTime={legal.lastUpdated}>
              {formatLegalDate(legal.lastUpdated)}
            </time>
            .
          </p>
        </div>
      </Container>
    </div>
  );
}
