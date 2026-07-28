import Image from "next/image";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import { getSector } from "@/config/sectors";
import styles from "./BusinessHero.module.css";

const sector = getSector("business");

export default function BusinessHero() {
  return (
    <section
      className={styles.hero}
      data-surface="dark"
      aria-labelledby="business-hero-heading"
    >
      <div className={styles.inner}>
        <Breadcrumbs
          items={[
            { label: "Experience Sectors", href: "/experience-sectors" },
            { label: "Business" },
          ]}
          className={styles.crumbs}
        />

        <div className={styles.grid}>
          <div className={styles.content}>
            <Reveal>
              <p className="eyebrow">Experience Sector · 01</p>
            </Reveal>
            <Reveal delay={80}>
              <h1
                id="business-hero-heading"
                className={`page-title ${styles.headline}`}
              >
                Business Experience
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className={styles.statement}>
                We build the operational foundation behind exceptional
                organizations.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className={`lead ${styles.lead}`}>
                5LA helps businesses and experience-driven organizations
                strengthen the systems, leadership, standards, culture, and
                processes required to deliver consistently.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className={styles.actions}>
                <Button href="#capabilities" variant="gold" size="lg">
                  Explore Business Capabilities
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
                src={sector?.image ?? "/brand/sectors/business.jpg"}
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
