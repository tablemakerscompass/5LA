import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/config/site";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero} data-surface="dark" aria-labelledby="about-hero-heading">
      <div className={styles.inner}>
        <Breadcrumbs items={[{ label: "About" }]} className={styles.crumbs} />
        <Reveal>
          <p className="eyebrow">About The 5 Loaves Agency</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 id="about-hero-heading" className={`page-title ${styles.headline}`}>
            We Build What People Experience—and What Makes the{" "}
            <em className={styles.accent}>Experience</em> Possible.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className={`lead ${styles.lead}`}>
            The 5 Loaves Agency is a multidisciplinary parent company helping
            organizations and communities build stronger systems, better-equipped
            people, practical technology, and stories that create meaningful
            connection.
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
    </section>
  );
}
