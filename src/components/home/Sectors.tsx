import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import { sectors } from "@/config/sectors";
import styles from "./Sectors.module.css";

export default function Sectors() {
  return (
    <section className={`section ${styles.wrap}`} aria-labelledby="sectors-heading">
      <Container>
        <SectionIntro
          eyebrow="The 5LA Experience Sectors"
          title={<span id="sectors-heading">Four Sectors. One Complete Experience.</span>}
          lead="Exceptional experiences do not begin at the moment of delivery. They are shaped by the operations behind the business, the technology supporting the work, the people carrying the standard, and the story connecting it all."
          divider
        />

        <div className={styles.rows}>
          {sectors.map((sector) => (
            <Reveal key={sector.slug} className={styles.row}>
              <article className={styles.rowInner} data-accent={sector.accent}>
                <div className={styles.visual}>
                  {sector.image ? (
                    <Image
                      src={sector.image}
                      alt=""
                      fill
                      sizes="(min-width: 900px) 42vw, 90vw"
                      className={styles.image}
                    />
                  ) : (
                    <span className={styles.placeholderNote}>Editorial imagery</span>
                  )}
                  <span className={`numeral ${styles.number}`} aria-hidden="true">
                    {sector.number}
                  </span>
                </div>

                <div className={styles.text}>
                  <p className={styles.kicker}>Experience Sector {sector.number}</p>
                  <h3 className={`section-heading ${styles.name}`}>{sector.name}</h3>
                  <p className={`${styles.statement}`}>{sector.statement}</p>
                  <p className={`body ${styles.summary}`}>{sector.summary}</p>
                  <Link
                    href={`/experience-sectors/${sector.slug}`}
                    className={styles.cta}
                  >
                    Explore {sector.name}
                    <span className={styles.arrow} aria-hidden="true">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
