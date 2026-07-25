import Link from "next/link";
import Image from "next/image";
import type { Sector } from "@/config/sectors";
import styles from "./SectorCard.module.css";

type SectorCardProps = {
  sector: Sector;
  className?: string;
};

/**
 * Editorial card for one of the four Experience Sectors.
 * When `sector.image` is absent, an accent-toned editorial panel with a large
 * serif number stands in for final photography.
 */
export default function SectorCard({ sector, className = "" }: SectorCardProps) {
  const href = `/experience-sectors/${sector.slug}`;

  return (
    <Link
      href={href}
      className={`${styles.card} ${className}`}
      data-accent={sector.accent}
    >
      <div className={styles.visual}>
        {sector.image ? (
          <Image
            src={sector.image}
            alt=""
            fill
            sizes="(min-width: 900px) 30vw, 90vw"
            className={styles.image}
          />
        ) : (
          <span className={styles.placeholderNote}>Editorial imagery</span>
        )}
        <span className={`numeral ${styles.number}`} aria-hidden="true">
          {sector.number}
        </span>
      </div>

      <div className={styles.body}>
        <h3 className={`subheading ${styles.name}`}>{sector.name}</h3>
        <p className={`body-sm ${styles.statement}`}>{sector.statement}</p>
        <span className={styles.cue} aria-hidden="true">
          Explore <span className={styles.arrow}>&rarr;</span>
        </span>
      </div>
    </Link>
  );
}
