import { acStatusLabel, type AcStatus } from "@/config/academy";
import styles from "./ac-ui.module.css";

const classFor: Record<AcStatus, string> = {
  available: styles.available,
  "in-development": styles.inDevelopment,
  planned: styles.planned,
  future: styles.future,
};

/**
 * Availability label. The written label always carries the meaning — colour is
 * reinforcement only — so status is never communicated by colour alone.
 */
export default function AcStatusPill({
  status,
  className = "",
}: {
  status: AcStatus;
  className?: string;
}) {
  return (
    <span className={`${styles.pill} ${classFor[status]} ${className}`}>
      <span className={styles.dot} aria-hidden="true" />
      {acStatusLabel[status]}
    </span>
  );
}
