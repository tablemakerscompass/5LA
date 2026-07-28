import styles from "./tm-ui.module.css";

/**
 * An action named in the brand plan whose destination does not exist yet —
 * joining the Collective, reading the Compass, attending a gathering.
 *
 * FOR EDITORS: when a real destination exists (a community URL, a publication,
 * a connected signup), replace this with a <Button href="…"> carrying the same
 * label. Until then it renders as inert text — never a link, and never a button
 * that does nothing.
 */
export default function TmPendingAction({
  label,
  note,
  className = "",
}: {
  label: string;
  note: string;
  className?: string;
}) {
  return (
    <span className={`${styles.pending} ${className}`}>
      <span className={styles.pendingLabel}>{label}</span>
      <span className={styles.pendingNote}>{note}</span>
    </span>
  );
}
