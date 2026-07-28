import Image from "next/image";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import { getCompany } from "@/config/companies";
import styles from "./GbHero.module.css";

const brand = getCompany("georgia-b-media-group");

/**
 * Hero. The Media Group has no approved logo yet, so the name is set as a
 * text wordmark in the page title. Add `logo` to this brand in
 * `config/companies.ts` when a final mark is approved — never invent one.
 */
export default function GbHero() {
  return (
    <section
      className={styles.hero}
      data-surface="dark"
      aria-labelledby="gb-hero-heading"
    >
      <div className={styles.inner}>
        <Breadcrumbs
          items={[
            { label: "Our Companies", href: "/our-companies" },
            { label: brand?.name ?? "The Georgia B. Media Group" },
          ]}
          className={styles.crumbs}
        />

        <div className={styles.grid}>
          <div className={styles.content}>
            <Reveal>
              <p className="eyebrow">A 5LA Media &amp; Production Division</p>
            </Reveal>
            <Reveal delay={70}>
              <p className={styles.wordmark}>The Georgia B. Media Group</p>
            </Reveal>
            <Reveal delay={110}>
              <h1 id="gb-hero-heading" className={`page-title ${styles.headline}`}>
                Stories, Productions, and Original Properties Created With
                Purpose, Culture, and Legacy.
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className={`lead ${styles.lead}`}>
                The Georgia B. Media Group develops literary works, theatrical
                productions, media properties, live experiences, and original
                stories designed to move audiences and create lasting
                connection.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className={styles.actions}>
                <Button href="#creative-areas" variant="gold" size="lg">
                  Explore What We Create
                </Button>
                <Button href="/work-with-us" variant="outline" size="lg">
                  Discuss a Creative Partnership
                </Button>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <p className={styles.descriptor}>
                Publishing · Theater · Productions · Original IP
              </p>
            </Reveal>
          </div>

          <Reveal delay={160} className={styles.figure}>
            <div className={styles.imageFrame}>
              <Image
                src="/brand/sectors/media.jpg"
                alt="A producer reviewing a script at a production desk while a performance is lit on the theater stage behind her."
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
