import Image from "next/image";
import Container from "@/components/layout/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { sectors } from "@/config/sectors";
import styles from "./SectorsHero.module.css";

/**
 * Art-directed crops so each subject stays in frame when the hero panels
 * become tall and narrow. Purely presentational — kept out of the config.
 */
const crop: Record<string, string> = {
  business: "62% center",
  technology: "50% center",
  training: "52% center",
  media: "38% center",
};

/**
 * Page hero — an editorial four-panel composition blended into a single
 * cinematic band, sequenced planning → technology → training → storytelling.
 */
export default function SectorsHero() {
  return (
    <header
      className={styles.hero}
      data-surface="dark"
      aria-labelledby="sectors-hero-heading"
    >
      <Container>
        <Breadcrumbs
          items={[{ label: "Experience Sectors" }]}
          className={styles.crumbs}
        />

        <div className={styles.inner}>
          <div className={styles.content}>
            <Reveal>
              <p className="eyebrow">The 5LA Experience Sectors</p>
              <hr className={`rule ${styles.rule}`} />
            </Reveal>
            <Reveal delay={80}>
              <h1
                id="sectors-hero-heading"
                className={`page-title ${styles.title}`}
              >
                Four Sectors. One Complete Experience.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className={`lead ${styles.lead}`}>
                The experience people see is shaped by what happens behind it.
                Operations create the foundation. Technology supports the work.
                Training prepares the people. Media gives the experience
                meaning, visibility, and lasting connection.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className={styles.actions}>
                <Button href="#four-sectors" variant="gold" size="lg">
                  Explore the Four Sectors
                </Button>
                <Button href="/work-with-us" variant="outline" size="lg">
                  Work With 5LA
                </Button>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <p className={styles.descriptor}>
                Business · Technology · Training · Media
              </p>
            </Reveal>
          </div>

          {/* Decorative composition — every sector is named in the copy and
              again, with full alt text, in the four-sector overview below. */}
          <Reveal delay={160} className={styles.figure}>
            <div className={styles.composition} aria-hidden="true">
              {sectors.map((sector) => (
                <div key={sector.slug} className={styles.panel}>
                  {sector.image && (
                    <Image
                      src={sector.image}
                      alt=""
                      fill
                      priority
                      quality={72}
                      /* These panels are tall crops of a landscape source, so
                         the resolution needed is set by their HEIGHT, not their
                         width. Requesting a panel-width candidate here loads a
                         far-too-small file and the crop renders soft. */
                      sizes="(min-width: 900px) 700px, 95vw"
                      style={{ objectPosition: crop[sector.slug] ?? "center" }}
                      className={styles.image}
                    />
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </header>
  );
}
