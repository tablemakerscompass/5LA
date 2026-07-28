import { tmStatusLabel, type TmStatus } from "@/config/tablemakers";
import styles from "./tm-ui.module.css";

const classFor: Record<TmStatus, string> = {
  available: styles.available,
  "in-development": styles.inDevelopment,
  planned: styles.planned,
  future: styles.future,
};

/**
 * Availability label. The written label always carries the meaning — colour is
 * reinforcement only — so status is never communicated by colour alone.
 */
export default function TmStatusPill({
  status,
  className = "",
}: {
  status: TmStatus;
  className?: string;
}) {
  return (
    <span className={`${styles.pill} ${classFor[status]} ${className}`}>
      <span className={styles.dot} aria-hidden="true" />
      {tmStatusLabel[status]}
    </span>
  );
}
