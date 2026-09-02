import Image from "next/image";
import Container from "@/components/layout/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import { asgAssets, asgBrand } from "@/config/aunt-sarahs-girls";
import styles from "./AsgHero.module.css";

/**
 * Section 1 — Page hero.
 *
 * The hero image slot holds the approved ASG house artwork (black front door,
 * green trees, warm amber haze, a path leading toward the home). Until that
 * asset is supplied the frame renders a labelled placeholder over the ASG
 * colour field — no stock photography, no invented artwork.
 */
export default function AsgHero() {
  return (
    <header
      className={styles.hero}
      data-surface="dark"
      aria-labelledby="asg-hero-heading"
    >
      <div className={styles.haze} aria-hidden="true" />
      <Container className={styles.container}>
        <Breadcrumbs
          items={[
            { label: asgBrand.name },
          ]}
          className={styles.crumbs}
        />

        <div className={styles.inner}>
          <div className={styles.content}>
            <Reveal>
              <p className={`eyebrow ${styles.eyebrow}`}>
                An Original Property of The Georgia B. Media Group
              </p>
            </Reveal>
            <Reveal delay={70}>
              <hr className={`rule ${styles.rule}`} />
            </Reveal>
            <Reveal delay={100}>
              <h1 id="asg-hero-heading" className={`hero-headline ${styles.headline}`}>
                Every Woman Carries a Story.{" "}
                <em className={styles.accent}>
                  Some Were Buried to Keep the Family Standing.
                </em>
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className={`lead ${styles.lead}`}>
                Aunt Sarah’s Girls is a literary, theatrical, and healing-centered
                property exploring truth, womanhood, family, survival, identity,
                secrets, and legacy.
              </p>
            </Reveal>
          </div>

          <Reveal delay={160} className={styles.figure}>
            <div className={styles.frame}>
              {asgAssets.hero ? (
                <Image
                  src={asgAssets.hero}
                  alt="Aunt Sarah’s Girls key art: the family home at golden hour beneath the silhouettes of the women of the story. Titled “Aunt Sarah’s Girls: Legacy & Secrets”, coming 2027, written by L.J."
                  fill
                  priority
                  sizes="(min-width: 980px) 46vw, 100vw"
                  className={styles.image}
                />
              ) : (
                <div className={styles.placeholder}>
                  <span className={styles.placeholderMark} aria-hidden="true" />
                  <span className={styles.placeholderLabel}>
                    Aunt Sarah’s house — approved ASG hero artwork
                  </span>
                  <span className={styles.placeholderNote}>
                    Asset required: black front door, green trees, warm amber
                    light, a path leading home
                  </span>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </header>
  );
}
