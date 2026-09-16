import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import { services } from "@/config/services";
import styles from "./WhatWeDoServices.module.css";

/**
 * What each of the six services actually covers.
 *
 * This replaced a five-category capability accordion that had its own
 * taxonomy. The categories were real work, but they were a third way of naming
 * the same services — the content moved onto the services themselves, and each
 * block carries the service slug as an anchor so a card or link can land on it.
 */
export default function WhatWeDoServices() {
  return (
    <section
      id="capabilities"
      className={`section ${styles.wrap}`}
      data-surface="dark"
      aria-labelledby="capabilities-heading"
    >
      <Container>
        <SectionIntro
          eyebrow="What We Build"
          title={
            <span id="capabilities-heading">
              Structure, Standards, and Systems Designed Around the Experience.
            </span>
          }
          divider
        />

        {/*
         * Plain list items rather than Reveal wrappers: each one is an anchor
         * target, and a target that starts at opacity 0 is a poor place to
         * land.
         */}
        <ul className={styles.list}>
          {services.map((service) => (
            <li key={service.slug} id={service.slug} className={styles.item}>
              <div className={styles.aside}>
                <span className={`numeral ${styles.n}`} aria-hidden="true">
                  {service.number}
                </span>
                <h3 className={`subheading ${styles.name}`}>{service.name}</h3>
                <p className={styles.statement}>{service.statement}</p>
                <Link
                  href={`/work-with-us?interest=${service.slug}#start`}
                  className={styles.cta}
                >
                  <span>{service.startingAt}</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>

              <div className={styles.detail}>
                <p className={styles.overview}>{service.overview}</p>

                <ul className={styles.capabilities}>
                  {service.capabilities.map((capability) => (
                    <li key={capability} className={styles.capability}>
                      {capability}
                    </li>
                  ))}
                </ul>

                <p className={styles.outcome}>
                  <span className={styles.outcomeLabel}>The result:</span>{" "}
                  {service.outcome}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
