import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} data-surface="dark" aria-labelledby="hero-heading">
      <div className={styles.inner}>
        <div className={styles.content}>
          <Reveal>
            <p className={`eyebrow ${styles.eyebrow}`}>
              Business &middot; Hospitality &middot; Events
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 id="hero-heading" className={`hero-headline ${styles.headline}`}>
              The business behind the{" "}
              <em className={styles.accent}>business</em>.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className={`lead ${styles.lead}`}>
              The 5 Loaves Agency helps hospitality-driven organizations
              strengthen their operations, develop their people, and produce
              events and experiences guests actually remember.
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
            {/*
             * Credibility carried inside the hero rather than as its own strip:
             * one line of proof next to the ask, so the page can move straight
             * from the promise to what we actually do.
             */}
            <p className={styles.stat}>
              20+ years in hospitality operations and events.
            </p>
          </Reveal>
        </div>

        <Reveal delay={160} className={styles.figure}>
          <div className={styles.imageFrame}>
            <Image
              src="/brand/5la-hero-photo.jpg"
              alt="A leader at work in a 5 Loaves Agency–branded environment"
              width={430}
              height={756}
              priority
              sizes="(min-width: 900px) 40vw, 100vw"
              className={styles.image}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
