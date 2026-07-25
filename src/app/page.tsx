import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { site } from "@/config/site";
import styles from "./holding.module.css";

/**
 * ROOT / — restrained holding state.
 *
 * The full homepage is intentionally NOT built in this phase. The hero visual
 * (5LA-branded, with the primary statement designed into it) stands in while
 * the homepage is designed and approved separately. A visually-hidden heading
 * keeps the message available to screen readers and search engines.
 */
export default function HomeHolding() {
  return (
    <section className={styles.holding} data-surface="dark">
      <div className={styles.inner}>
        <h1 className="visually-hidden">
          {site.name} — {site.brand.primaryStatement} {site.brand.supportingStatement}
        </h1>

        <Image
          src="/brand/5la-hero.jpg"
          alt={`${site.name}. ${site.brand.primaryStatement} ${site.brand.supportingStatement}`}
          width={1024}
          height={756}
          priority
          sizes="(min-width: 1100px) 1040px, 100vw"
          className={styles.hero}
        />

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
