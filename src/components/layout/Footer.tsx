import Link from "next/link";
import Logo from "./Logo";
import Container from "./Container";
import { site } from "@/config/site";
import { footerNav, legalNav } from "@/config/navigation";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  const columns = [footerNav.explore, footerNav.sectors];

  return (
    <footer className={styles.footer} data-surface="dark">
      <Container>
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" aria-label={`${site.name} — home`} className={styles.brandLink}>
              <Logo variant="monogram" height={64} />
            </Link>
            <p className={styles.brandStatement}>{site.brand.footerStatement}</p>
            <p className={styles.descriptor}>{site.descriptor}</p>
          </div>

          {/* Nav columns */}
          <div className={styles.columns}>
            {columns.map((col) => (
              <nav key={col.heading} className={styles.column} aria-label={col.heading}>
                <h2 className={styles.colHeading}>{col.heading}</h2>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={styles.colLink}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            {/* Connect column: internal links + social (placeholders marked) */}
            <nav className={styles.column} aria-label={footerNav.connect.heading}>
              <h2 className={styles.colHeading}>{footerNav.connect.heading}</h2>
              <ul>
                {footerNav.connect.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.colLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
                {site.social.map((s) => (
                  <li key={s.label}>
                    {/* PLACEHOLDER social link — replace href in config/site.ts */}
                    <a
                      href={s.href}
                      className={styles.colLink}
                      data-placeholder={s.placeholder ? "true" : undefined}
                      {...(s.href !== "#"
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : { "aria-disabled": true })}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
          <p className={styles.descriptorBottom}>{site.descriptor}</p>
          <ul className={styles.legal}>
            {legalNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.legalLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
