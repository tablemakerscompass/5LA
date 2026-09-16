import Link from "next/link";
import Container from "@/components/layout/Container";
import {
  additionalServices,
  featuredServices,
  investmentNote,
  type ServicePackage,
} from "@/config/services";
import styles from "./ServicePackages.module.css";

/**
 * Deep-links the inquiry form with this service preselected. The form reads
 * `?interest=` on the client, so the visitor lands on the right choice without
 * re-answering a question the card already answered.
 */
const inquiryHref = (slug: string) => `/work-with-us?interest=${slug}#start`;

function InvestmentBlock({ service }: { service: ServicePackage }) {
  return (
    <div className={styles.investment}>
      <span className={styles.amount}>{service.startingAt}</span>
      {service.investmentNote && (
        <span className={`caption ${styles.amountNote}`}>
          {service.investmentNote}
        </span>
      )}
    </div>
  );
}

/**
 * The six ways to work with 5LA: three given full editorial treatment, three
 * presented compactly underneath.
 */
export default function ServicePackages() {
  return (
    <section className="section" aria-labelledby="packages-heading">
      <Container>
        <div className={styles.head}>
          <p className="eyebrow">Services</p>
          <hr className="rule" />
          <h2 id="packages-heading" className="section-heading">
            Six Ways to Work With Us
          </h2>
          <p className="body">
            You may already know exactly what you need — or you may only know
            where you&rsquo;re stuck. Either way, start with the path that
            sounds most like your business.
          </p>
        </div>

        <ul className={styles.featured}>
          {featuredServices.map((service) => (
            <li key={service.slug} className={styles.package}>
              <div className={styles.packageName}>
                <h3 className={`subheading ${styles.name}`}>{service.name}</h3>
                <InvestmentBlock service={service} />
              </div>

              <div className={styles.packageDetail}>
                <p className="body">{service.summary}</p>

                {service.fitFor && (
                  <>
                    <p className={styles.fitHeading}>Good fit if you&rsquo;re:</p>
                    <ul className={styles.fitList}>
                      {service.fitFor.map((item) => (
                        <li key={item} className={styles.fitItem}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <Link href={inquiryHref(service.slug)} className={styles.cta}>
                  <span>{service.cta}</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <div className={styles.more} id="more-ways">
          <h3 className={`subheading ${styles.moreHeading}`}>
            More Ways We Help
          </h3>
          <p className={`body ${styles.moreLead}`}>
            The rest of what runs underneath — so the front of the business has
            something solid to stand on.
          </p>

          <ul className={styles.moreGrid}>
            {additionalServices.map((service) => (
              <li key={service.slug} className={styles.moreCard}>
                <h4 className={styles.moreName}>{service.name}</h4>
                <InvestmentBlock service={service} />
                <p className="body-sm">{service.summary}</p>
                <Link href={inquiryHref(service.slug)} className={styles.cta}>
                  <span>{service.cta}</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className={`caption ${styles.note}`}>{investmentNote}</p>
      </Container>
    </section>
  );
}
