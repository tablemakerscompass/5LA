import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import styles from "./WhatWeDo.module.css";

/**
 * The three core offerings, in the order the work actually happens: the
 * operation is built, the people are developed, the experience is delivered.
 *
 * This replaces both the four-sector grid and the old "What We Help Build"
 * pillars. Those framed 5LA by sector; this frames it by what a hospitality
 * client is buying. The sector pages still hold the full detail — each card
 * links into the one that carries its work.
 */
const offerings = [
  {
    n: "01",
    title: "Business Operations & Strategy",
    body: "We build the operational foundation behind hospitality-driven organizations — SOPs, service standards, HR systems, and the structure that lets a team deliver consistently, not just on a good night.",
    cta: "Explore Business Experience",
    href: "/experience-sectors/business",
  },
  {
    n: "02",
    title: "Hospitality & Culture Training",
    body: "We develop the people responsible for the guest experience — leadership development, staff training, and the standards that turn a job into a culture worth staying for.",
    cta: "Explore Training Experience",
    href: "/experience-sectors/training",
  },
  {
    n: "03",
    title: "Events & Experience Design",
    body: "We design and produce events and live experiences that hold together end to end — from concept to execution to the moment a guest walks away talking about it.",
    cta: "Explore Events & Experience",
    /* No standalone events route exists; event work lives inside Business. */
    href: "/experience-sectors/business",
  },
];

export default function WhatWeDo() {
  return (
    <section className={`section ${styles.wrap}`} aria-labelledby="what-we-do-heading">
      <Container>
        <SectionIntro
          eyebrow="What We Do"
          title={
            <span id="what-we-do-heading">
              Built on Operations. Delivered With Heart.
            </span>
          }
          divider
        />

        <div className={styles.grid}>
          {offerings.map((offering, i) => (
            <Reveal key={offering.n} delay={i * 80}>
              <article className={styles.card}>
                <span className={`numeral ${styles.n}`} aria-hidden="true">
                  {offering.n}
                </span>
                <h3 className={`subheading ${styles.title}`}>{offering.title}</h3>
                <p className={`body ${styles.body}`}>{offering.body}</p>
                <Link href={offering.href} className={styles.cta}>
                  {offering.cta}
                  <span className={styles.arrow} aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
