import { smStatusLabel, type SmStatus } from "@/config/the-sarah-method";
import styles from "./sm-ui.module.css";

const classFor: Record<SmStatus, string> = {
  available: styles.available,
  "in-development": styles.inDevelopment,
  planned: styles.planned,
  future: styles.future,
};

/**
 * Availability label. The written label always carries the meaning — colour is
 * reinforcement only — so status is never communicated by colour alone.
 */
export default function SmStatusPill({
  status,
  className = "",
}: {
  status: SmStatus;
  className?: string;
}) {
  return (
    <span className={`${styles.pill} ${classFor[status]} ${className}`}>
      <span className={styles.dot} aria-hidden="true" />
      {smStatusLabel[status]}
    </span>
  );
}
