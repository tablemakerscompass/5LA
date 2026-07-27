import Image from "next/image";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import { getSector } from "@/config/sectors";
import styles from "./TrainingHero.module.css";

const sector = getSector("training");

export default function TrainingHero() {
  return (
    <section
      className={styles.hero}
      data-surface="dark"
      aria-labelledby="training-hero-heading"
    >
      <div className={styles.inner}>
        <Breadcrumbs
          items={[
            { label: "Experience Sectors", href: "/experience-sectors" },
            { label: "Training" },
          ]}
          className={styles.crumbs}
        />

        <div className={styles.grid}>
          <div className={styles.content}>
            <Reveal>
              <p className="eyebrow">Experience Sector · 03</p>
            </Reveal>
            <Reveal delay={80}>
              <h1
                id="training-hero-heading"
                className={`page-title ${styles.headline}`}
              >
                Training Experience
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className={styles.statement}>
                We develop the people responsible for delivering the promise.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className={`lead ${styles.lead}`}>
                5LA creates leadership, hospitality, workforce, and
                organizational learning experiences that equip people to
                understand the standard, perform with confidence, and serve with
                excellence.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className={styles.actions}>
                <Button href="#capabilities" variant="gold" size="lg">
                  Explore Training Capabilities
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
                src={sector?.image ?? "/brand/sectors/training.jpg"}
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
