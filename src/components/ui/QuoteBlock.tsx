import Section from "@/components/layout/Section";
import styles from "./QuoteBlock.module.css";

type QuoteBlockProps = {
  quote: string;
  /** Optional small attribution / source line. */
  attribution?: string;
  eyebrow?: string;
  dark?: boolean;
};

/** Full-width editorial belief / quote statement. */
export default function QuoteBlock({
  quote,
  attribution,
  eyebrow,
  dark = true,
}: QuoteBlockProps) {
  return (
    <Section dark={dark} className={styles.wrap}>
      <div className={styles.inner}>
        <span className={styles.quoteMark} aria-hidden="true">
          &ldquo;
        </span>
        {eyebrow && <p className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</p>}
        <blockquote className={`quote ${styles.quote}`}>{quote}</blockquote>
        {attribution && <p className={`caption ${styles.attribution}`}>{attribution}</p>}
      </div>
    </Section>
  );
}
