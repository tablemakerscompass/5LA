import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/config/site";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} data-surface="dark" aria-labelledby="hero-heading">
      <div className={styles.inner}>
        <div className={styles.content}>
          <Reveal>
            <p className={`eyebrow ${styles.eyebrow}`}>The 5 Loaves Agency</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 id="hero-heading" className={`hero-headline ${styles.headline}`}>
              We Build the <em className={styles.accent}>Experience</em> Behind the
              Brand.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className={`lead ${styles.lead}`}>
              The 5 Loaves Agency helps organizations strengthen operations,
              develop people, implement technology, and create stories and
              experiences that leave a lasting impact.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className={styles.actions}>
              <Button href="/experience-sectors" variant="gold" size="lg">
                Explore Our Experience Sectors
              </Button>
              <Button href="/work-with-us" variant="outline" size="lg">
                Work With 5LA
              </Button>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <p className={styles.descriptor}>{site.descriptor}</p>
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
