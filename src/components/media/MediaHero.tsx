import Image from "next/image";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import { getSector } from "@/config/sectors";
import styles from "./MediaHero.module.css";

const sector = getSector("media");

export default function MediaHero() {
  return (
    <section
      className={styles.hero}
      data-surface="dark"
      aria-labelledby="media-hero-heading"
    >
      <div className={styles.inner}>
        <Breadcrumbs
          items={[
            { label: "Experience Sectors", href: "/experience-sectors" },
            { label: "Media" },
          ]}
          className={styles.crumbs}
        />

        <div className={styles.grid}>
          <div className={styles.content}>
            <Reveal>
              <p className="eyebrow">Experience Sector · 04</p>
            </Reveal>
            <Reveal delay={80}>
              <h1
                id="media-hero-heading"
                className={`page-title ${styles.headline}`}
              >
                Media Experience
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className={styles.statement}>
                We create stories and experiences that live beyond the moment.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className={`lead ${styles.lead}`}>
                5LA develops publications, productions, digital content, live
                experiences, original properties, and community-centered
                storytelling designed to create connection, meaning, and lasting
                audience impact.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className={styles.actions}>
                <Button
                  href="#capabilities"
                  variant="gold"
                  size="lg"
                  className={styles.cta}
                >
                  Explore Media Capabilities
                </Button>
                <Button href="/work-with-us" variant="outline" size="lg">
                  Work With 5LA
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160} className={styles.figure}>
            <div className={styles.imageFrame}>
              <Image
                src={sector?.image ?? "/brand/sectors/media.jpg"}
                alt={sector?.imageAlt ?? ""}
                fill
                priority
                sizes="(min-width: 960px) 46vw, 100vw"
                className={styles.image}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
