import Image from "next/image";
import Container from "@/components/layout/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SmImageFrame from "./SmImageFrame";
import { smAssets, smBrand } from "@/config/the-sarah-method";
import styles from "./SmHero.module.css";

/**
 * Section 1 — Page hero.
 *
 * The primary CTA points at the live application, verified reachable. It opens
 * in a new tab and is marked as leaving the site, since it is a separate
 * product rather than another page of this website.
 */
export default function SmHero() {
  return (
    <header
      className={styles.hero}
      aria-labelledby="sm-hero-heading"
    >
      <Container className={styles.container}>
        <Breadcrumbs
          items={[
            { label: "Our Companies", href: "/our-companies" },
            { label: smBrand.name },
          ]}
          className={styles.crumbs}
        />

        <div className={styles.inner}>
          <div className={styles.content}>
            <Reveal className={styles.logoWrap}>
              <Image
                src={smAssets.logo}
                alt="The Sarah Method — a crowned S monogram holding a woman’s profile, finished with a pen nib, above the words Truth, Healing, Purpose, Legacy."
                width={1254}
                height={1254}
                priority
                sizes="(min-width: 980px) 240px, 180px"
                className={styles.logo}
              />
            </Reveal>

            <Reveal delay={60}>
              <p className={`eyebrow ${styles.eyebrow}`}>
                A Digital Reflection Experience From the World of Aunt Sarah’s
                Girls
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 id="sm-hero-heading" className={`hero-headline ${styles.headline}`}>
                Come On In. <em className={styles.accent}>What Has Been Sitting
                Heavy on Your Heart?</em>
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <p className={`lead ${styles.lead}`}>
                The Sarah Method is a guided reflection and journaling experience
                helping women pause, communicate honestly, examine personal
                truths, and move toward healing, clarity, identity, and purpose.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className={styles.actions}>
                <Button
                  href={smBrand.appUrl}
                  external
                  variant="primary"
                  size="lg"
                >
                  Enter The Sarah Method
                </Button>
                <Button href="#inside-the-experience" variant="outline" size="lg">
                  Explore How It Works
                </Button>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <p className={styles.meta}>
                <span className={styles.external}>
                  Opens thesarahmethod.com in a new tab
                </span>
                <span aria-hidden="true" className={styles.metaDot} />
                <span>{smBrand.ageNote}</span>
              </p>
            </Reveal>
            <Reveal delay={340}>
              <p className={styles.tertiary}>
                <Button href="/our-companies/aunt-sarahs-girls" variant="text">
                  Discover Aunt Sarah’s Girls
                </Button>
              </p>
            </Reveal>
          </div>

          <Reveal delay={160} className={styles.figure}>
            <SmImageFrame
              src={smAssets.hero}
              alt="A quiet sitting room in Aunt Sarah’s home — a warm lamp, a comfortable chair, and an open journal waiting on the table."
              placeholderLabel="A quiet room, a warm lamp, an open journal"
              placeholderNote="Asset required: warm sitting-room photography, or a real screenshot of the application with personal data removed"
              aspect="4/3"
              priority
            />
          </Reveal>
        </div>
      </Container>
    </header>
  );
}
