import styles from "./StatBlock.module.css";

export type Stat = {
  /**
   * Metric value. Use a placeholder token (e.g. "—") until a real, verified
   * number is provided. Do not invent statistics.
   */
  value: string;
  label: string;
  /** Optional prefix/suffix such as "+" or "yrs". */
  suffix?: string;
};

type StatBlockProps = {
  stats: Stat[];
  className?: string;
};

/**
 * Impact / statistics row. Values are passed in as props — this component never
 * fabricates numbers. Pass "—" as a value to render a labeled placeholder.
 */
export default function StatBlock({ stats, className = "" }: StatBlockProps) {
  return (
    <dl className={`${styles.grid} ${className}`}>
      {stats.map((stat) => (
        <div key={stat.label} className={styles.item}>
          <dt className={`numeral ${styles.value}`}>
            {stat.value}
            {stat.suffix && <span className={styles.suffix}>{stat.suffix}</span>}
          </dt>
          <dd className={styles.label}>{stat.label}</dd>
        </div>
      ))}
    </dl>
  );
}
