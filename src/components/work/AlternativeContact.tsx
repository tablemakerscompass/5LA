import Link from "next/link";
import Container from "@/components/layout/Container";
import { site } from "@/config/site";
import styles from "./AlternativeContact.module.css";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Accessibility Statement", href: "/accessibility" },
];

/**
 * A single, simple alternative to the inquiry form — no second form. Contact
 * details come from the approved values in config/site.ts and are only
 * rendered when they are actually set.
 */
export default function AlternativeContact() {
  return (
    <section className={`section ${styles.wrap}`} aria-labelledby="alternative-heading">
      <Container>
        <div className={styles.grid}>
          <div className={styles.text}>
            <p className="eyebrow">Other Requests</p>
            <hr className="rule" />
            <h2 id="alternative-heading" className="section-heading">
              Need to Reach 5LA About Something Else?
            </h2>
            <p className="body">
              For general questions, existing-project communication, media
              requests, or website concerns, use the contact information below.
            </p>
          </div>

          <div className={styles.details}>
            <dl className={styles.list}>
              {site.contact.email && (
                <div className={styles.item}>
                  <dt className={styles.term}>Email</dt>
                  <dd>
                    <a href={`mailto:${site.contact.email}`} className={styles.link}>
                      {site.contact.email}
                    </a>
                  </dd>
                </div>
              )}
              {site.contact.phone && (
                <div className={styles.item}>
                  <dt className={styles.term}>Phone</dt>
                  <dd>
                    <a
                      href={`tel:${site.contact.phoneHref || site.contact.phone}`}
                      className={styles.link}
                    >
                      {site.contact.phone}
                    </a>
                  </dd>
                </div>
              )}
            </dl>

            <ul className={styles.legal}>
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.legalLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
