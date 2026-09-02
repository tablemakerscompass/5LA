import Image from "next/image";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero} data-surface="dark" aria-labelledby="about-hero-heading">
      <div className={styles.inner}>
        <Breadcrumbs items={[{ label: "About" }]} className={styles.crumbs} />

        <div className={styles.grid}>
          <div className={styles.content}>
            <Reveal>
              <p className="eyebrow">About The 5 Loaves Agency</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 id="about-hero-heading" className={`page-title ${styles.headline}`}>
                We Build What Guests Experience—and What Makes the{" "}
                <em className={styles.accent}>Experience</em> Possible.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className={`lead ${styles.lead}`}>
                The 5 Loaves Agency helps hospitality-driven organizations
                strengthen their operations, develop their people, and produce
                events and experiences guests remember. It is also the parent
                company of a growing family of ventures in technology, training,
                and media.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className={styles.actions}>
                <Button href="/what-we-do" variant="gold" size="lg">
                  Explore What We Do
                </Button>
                <Button href="/work-with-us" variant="outline" size="lg">
                  Work With 5LA
                </Button>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <p className={styles.stat}>
                20+ years in hospitality operations and events.
              </p>
            </Reveal>
          </div>

          <Reveal delay={160} className={styles.figure}>
            <div className={styles.imageFrame}>
              <Image
                src="/brand/5la-about-hero.jpg"
                alt="Scenes across the 5LA ecosystem: hospitality leadership, a strategy meeting, a training session, and a live production"
                width={1400}
                height={932}
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
