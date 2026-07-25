import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { sectors } from "@/config/sectors";
import styles from "./WhatIs.module.css";

/** About-page framing for each sector (distinct from the homepage summaries). */
const aboutBlurbs: Record<string, string> = {
  business:
    "Strengthening the systems, leadership, operations, culture, hospitality standards, and organizational structure behind the business.",
  technology:
    "Helping organizations use AI, automation, digital systems, and practical technology to improve how people work and make decisions.",
  training:
    "Developing leaders, employees, and teams who understand the standard and are equipped to deliver it consistently.",
  media:
    "Creating stories, publications, productions, content, and experiences that connect with audiences and leave a lasting impact.",
};

export default function WhatIs() {
  return (
    <section className={`section ${styles.wrap}`} aria-labelledby="whatis-heading">
      <Container>
        <SectionIntro
          eyebrow="A Multidisciplinary Experience Company"
          title={<span id="whatis-heading">One Company. Four Connected Experience Sectors.</span>}
          lead="5LA brings together strategic, operational, technological, educational, and creative capabilities under one parent company. Each sector serves a distinct purpose, but all four are connected by one standard: creating experiences that are intentional, aligned, and built to last."
          divider
        />

        <div className={styles.grid}>
          {sectors.map((sector) => (
            <Reveal key={sector.slug} as="article" className={styles.item}>
              <span className={`numeral ${styles.number}`} aria-hidden="true">
                {sector.number}
              </span>
              <div className={styles.body}>
                <h3 className={`subheading ${styles.name}`}>{sector.name}</h3>
                <p className={`body ${styles.blurb}`}>{aboutBlurbs[sector.slug]}</p>
                <Link
                  href={`/experience-sectors/${sector.slug}`}
                  className={styles.link}
                >
                  Explore {sector.shortName}
                  <span className={styles.arrow} aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
