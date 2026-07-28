import styles from "./asg-ui.module.css";

/**
 * A call to action that has been specified but has no approved destination
 * yet (purchase, preorder, tickets, casting, and similar).
 *
 * FOR EDITORS: when an approved URL is supplied, replace the <AsgPendingAction>
 * with a <Button href="…"> using the same label. Until then this renders as
 * inert text — never a link, and never a button that does nothing.
 */
export default function AsgPendingAction({
  label,
  note = "Link pending approval",
  className = "",
}: {
  label: string;
  note?: string;
  className?: string;
}) {
  return (
    <span className={`${styles.pending} ${className}`}>
      <span className={styles.pendingLabel}>{label}</span>
      <span className={styles.pendingNote}>{note}</span>
    </span>
  );
}
