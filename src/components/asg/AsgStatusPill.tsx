import { statusLabel, type AsgStatus } from "@/config/aunt-sarahs-girls";
import styles from "./asg-ui.module.css";

const classFor: Record<AsgStatus, string> = {
  available: styles.available,
  "in-development": styles.inDevelopment,
  planned: styles.planned,
  future: styles.future,
};

/**
 * Availability label. The written label always carries the meaning — colour is
 * reinforcement only — so status is never communicated by colour alone.
 */
export default function AsgStatusPill({
  status,
  className = "",
}: {
  status: AsgStatus;
  className?: string;
}) {
  return (
    <span className={`${styles.pill} ${classFor[status]} ${className}`}>
      <span className={styles.dot} aria-hidden="true" />
      {statusLabel[status]}
    </span>
  );
}
