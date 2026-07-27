import { vxStatusLabel, type VxStatus } from "@/config/velaxity";
import styles from "./vx-ui.module.css";

const classFor: Record<VxStatus, string> = {
  available: styles.available,
  "in-development": styles.inDevelopment,
  planned: styles.planned,
  future: styles.future,
};

/**
 * Availability label. The written label always carries the meaning — colour is
 * reinforcement only — so status is never communicated by colour alone.
 */
export default function VxStatusPill({
  status,
  className = "",
}: {
  status: VxStatus;
  className?: string;
}) {
  return (
    <span className={`${styles.pill} ${classFor[status]} ${className}`}>
      <span className={styles.dot} aria-hidden="true" />
      {vxStatusLabel[status]}
    </span>
  );
}
