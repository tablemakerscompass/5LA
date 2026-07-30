import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { site } from "@/config/site";
import styles from "./ContactMethods.module.css";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Accessibility Statement", href: "/accessibility" },
];

/**
 * The direct ways to reach 5LA. Deliberately has no form of its own — project
 * inquiries belong on Work With Us, and a second form here would only split
 * the same conversation across two places.
 */
export default function ContactMethods() {
  return (
    <>
      <section className="section" aria-labelledby="reach-heading">
        <Container>
          <div className={styles.grid}>
            <div className={styles.text}>
              <p className={styles.eyebrow}>Direct Contact</p>
              <hr className="rule" />
              <h2 id="reach-heading" className="section-heading">
                Ways to Reach Us.
              </h2>
              <p className="body">
                For general questions, existing-project communication, media
                requests, speaking enquiries, or anything about this website,
                email or call us directly.
              </p>
              <p className="body">
                We read everything that comes in. Response times vary with the
                nature of the request and what is already underway, so we would
                rather not promise a specific window we cannot always meet.
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
                <div className={styles.item}>
                  <dt className={styles.term}>Company</dt>
                  <dd className={styles.plain}>
                    {site.legalName}
                    <br />
                    Georgia, United States
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <section className={`section ${styles.inquirySection}`} aria-labelledby="inquiry-heading">
        <Container>
          <div className={styles.inquiry}>
            <div className={styles.text}>
              <p className={styles.eyebrow}>Project Inquiries</p>
              <hr className="rule" />
              <h2 id="inquiry-heading" className="section-heading">
                Starting Something? Use the Inquiry Form.
              </h2>
              <p className="body">
                If you are exploring a project, engagement, or partnership, the
                Work With Us form asks the few things we need to understand the
                work and point the conversation in the right direction. It is a
                faster route than an open-ended email.
              </p>
            </div>
            <div className={styles.action}>
              <Button href="/work-with-us" variant="primary" size="lg">
                Work With 5LA
              </Button>
            </div>
          </div>

          <ul className={styles.legal}>
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.legalLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
