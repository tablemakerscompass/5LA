import Image from "next/image";
import Container from "@/components/layout/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { vxAssets, vxBrand } from "@/config/velaxity";
import styles from "./VxHero.module.css";

/**
 * Section 1 — Page hero.
 *
 * Uses the approved VelaXity executive photography that the application itself
 * ships, and the approved VX monogram beside a serif wordmark — which is how
 * the product renders its own lockup. The monogram is not redrawn or altered.
 */
export default function VxHero() {
  return (
    <header
      className={styles.hero}
      data-surface="dark"
      aria-labelledby="vx-hero-heading"
    >
      <Container className={styles.container}>
        <Breadcrumbs
          items={[
            { label: vxBrand.name },
          ]}
          className={styles.crumbs}
        />

        <div className={styles.inner}>
          <div className={styles.content}>
            <Reveal className={styles.lockup}>
              <Image
                src={vxAssets.logo}
                alt=""
                width={256}
                height={256}
                priority
                sizes="72px"
                className={styles.monogram}
              />
              <span className={styles.wordmark}>VelaXity</span>
            </Reveal>

            <Reveal delay={60}>
              <p className={`eyebrow ${styles.eyebrow}`}>
                An AI-Powered Executive Platform by 5LA
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 id="vx-hero-heading" className={`hero-headline ${styles.headline}`}>
                One Connected Place to{" "}
                <em className={styles.accent}>Think, See, Decide, and Lead.</em>
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <p className={`lead ${styles.lead}`}>{vxBrand.supporting}</p>
            </Reveal>
            <Reveal delay={240}>
              <div className={styles.actions}>
                <Button href={vxBrand.demoPath} variant="gold" size="lg">
                  Request a VelaXity Demo
                </Button>
                <Button href="#the-platform" variant="outline" size="lg">
                  Explore the Platform
                </Button>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <p className={styles.tertiary}>
                <Button href="/our-companies/velaxity" variant="text">
                  Explore 5LA Technology Experience
                </Button>
              </p>
            </Reveal>
          </div>

          <Reveal delay={160} className={styles.figure}>
            <div className={styles.frame}>
              <Image
                src={vxAssets.hero}
                alt="A hospitality executive in a VelaXity-branded blazer standing at a concierge desk, holding a leather VelaXity portfolio."
                width={1000}
                height={1250}
                priority
                sizes="(min-width: 980px) 44vw, 100vw"
                className={styles.image}
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </header>
  );
}
