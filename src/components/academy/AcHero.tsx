import Image from "next/image";
import Container from "@/components/layout/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { acAssets, acBrand } from "@/config/academy";
import styles from "./AcHero.module.css";

/**
 * Section 1 — Page hero.
 *
 * LOGO: the Academy has no separate approved mark. Per brand direction this
 * pairs the official 5LA monogram — unaltered, on the light tile it was drawn
 * for — with a serif Academy wordmark, and labels the pairing as a temporary
 * treatment so no one mistakes it for a finished logo.
 */
export default function AcHero() {
  return (
    <header className={styles.hero} aria-labelledby="ac-hero-heading">
      <Container className={styles.container}>
        <Breadcrumbs
          items={[
            { label: acBrand.name },
          ]}
          className={styles.crumbs}
        />

        <div className={styles.inner}>
          <div className={styles.content}>
            <Reveal className={styles.lockup}>
              <span className={styles.monogramTile}>
                <Image
                  src={acAssets.monogram}
                  alt=""
                  width={600}
                  height={600}
                  priority
                  sizes="64px"
                  className={styles.monogram}
                />
              </span>
              <span className={styles.wordmarkGroup}>
                <span className={styles.wordmark}>The 5LA Academy</span>
                <span className={styles.wordmarkNote}>
                  Temporary wordmark treatment — awaiting an approved Academy mark
                </span>
              </span>
            </Reveal>

            <Reveal delay={60}>
              <p className={`eyebrow ${styles.eyebrow}`}>
                The Training &amp; Workforce-Development Division of 5LA
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 id="ac-hero-heading" className={`hero-headline ${styles.headline}`}>
                We Develop the People Responsible for{" "}
                <em className={styles.accent}>Delivering the Promise.</em>
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <p className={`lead ${styles.lead}`}>
                The 5LA Academy creates practical hospitality, leadership,
                management, culture, and workforce-learning experiences that help
                people understand the standard, perform with confidence, and
                serve with excellence.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className={styles.actions}>
                <Button href="#learning-areas" variant="primary" size="lg">
                  Explore Academy Learning
                </Button>
                <Button href={acBrand.inquiryPath} variant="outline" size="lg">
                  Discuss Organizational Training
                </Button>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <p className={styles.descriptor}>
                Hospitality · Leadership · Workforce Development
              </p>
            </Reveal>
          </div>

          <Reveal delay={160} className={styles.figure}>
            <div className={styles.frame}>
              <Image
                src={acAssets.hero}
                alt={acAssets.heroAlt}
                width={1200}
                height={900}
                priority
                sizes="(min-width: 980px) 46vw, 100vw"
                className={styles.image}
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </header>
  );
}
