import Image from "next/image";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import { getSector } from "@/config/sectors";
import styles from "./TechnologyHero.module.css";

const sector = getSector("technology");

export default function TechnologyHero() {
  return (
    <section
      className={styles.hero}
      data-surface="dark"
      aria-labelledby="technology-hero-heading"
    >
      <div className={styles.inner}>
        <Breadcrumbs
          items={[
            { label: "Experience Sectors", href: "/experience-sectors" },
            { label: "Technology" },
          ]}
          className={styles.crumbs}
        />

        <div className={styles.grid}>
          <div className={styles.content}>
            <Reveal>
              <p className="eyebrow">Experience Sector · 02</p>
            </Reveal>
            <Reveal delay={80}>
              <h1
                id="technology-hero-heading"
                className={`page-title ${styles.headline}`}
              >
                Technology Experience
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className={styles.statement}>
                We make technology useful, intelligent, and human.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className={`lead ${styles.lead}`}>
                5LA helps organizations adopt AI, automation, digital systems,
                and executive technology that improve how people work,
                communicate, make decisions, and manage performance.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className={styles.actions}>
                <Button href="#capabilities" variant="gold" size="lg">
                  Explore Technology Capabilities
                </Button>
                <Button href="/work-with-us?interest=technology" variant="outline" size="lg">
                  Work With 5LA
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160} className={styles.figure}>
            <div className={styles.imageFrame}>
              <Image
                src={sector?.image ?? "/brand/sectors/technology.jpg"}
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
