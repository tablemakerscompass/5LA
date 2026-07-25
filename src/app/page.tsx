import Link from "next/link";
import Logo from "@/components/layout/Logo";
import Button from "@/components/ui/Button";
import { site } from "@/config/site";
import styles from "./holding.module.css";

/**
 * ROOT / — restrained holding state.
 *
 * The full homepage is intentionally NOT built in this phase. This page shows
 * the brand foundation in context (header, footer, logo, buttons) while the
 * homepage is designed and approved separately.
 */
export default function HomeHolding() {
  return (
    <section className={styles.holding} data-surface="dark">
      <div className={styles.inner}>
        <Logo variant="stacked" height={150} priority className={styles.logo} />

        <p className={`eyebrow ${styles.eyebrow}`}>{site.descriptor}</p>
        <h1 className={`hero-headline ${styles.headline}`}>
          {site.brand.primaryStatement}
        </h1>
        <p className={`lead ${styles.lead}`}>{site.brand.supportingStatement}</p>

        <div className={styles.actions}>
          <Button href="/experience-sectors" variant="gold" size="lg">
            Explore the Experience Sectors
          </Button>
          <Button href="/work-with-us" variant="outline" size="lg">
            Work With Us
          </Button>
        </div>

        <p className={styles.note}>
          Our new homepage is in progress.{" "}
          <Link href="/about" className={styles.noteLink}>
            Learn about 5LA
          </Link>
        </p>
      </div>
    </section>
  );
}
