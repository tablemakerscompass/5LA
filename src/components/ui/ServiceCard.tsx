import Link from "next/link";
import Image from "next/image";
import type { ServicePackage } from "@/config/services";
import styles from "./ServiceCard.module.css";

type ServiceCardProps = {
  service: ServicePackage;
  className?: string;
};

/**
 * Editorial card for one of the six services.
 * When `service.image` is absent, an accent-toned editorial panel with a large
 * serif number stands in for final photography.
 */
export default function ServiceCard({ service, className = "" }: ServiceCardProps) {
  const href = service.href;

  return (
    <Link
      href={href}
      className={`${styles.card} ${className}`}
      data-accent={service.accent}
    >
      <div className={styles.visual}>
        {service.image ? (
          <Image
            src={service.image}
            alt=""
            fill
            sizes="(min-width: 900px) 30vw, 90vw"
            className={styles.image}
          />
        ) : (
          <span className={styles.placeholderNote}>Editorial imagery</span>
        )}
        <span className={`numeral ${styles.number}`} aria-hidden="true">
          {service.number}
        </span>
      </div>

      <div className={styles.body}>
        <h3 className={`subheading ${styles.name}`}>{service.name}</h3>
        <p className={`body-sm ${styles.statement}`}>{service.statement}</p>
        <span className={styles.cue} aria-hidden="true">
          Explore <span className={styles.arrow}>&rarr;</span>
        </span>
      </div>
    </Link>
  );
}
