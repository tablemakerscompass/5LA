import Image from "next/image";
import styles from "./tm-ui.module.css";

type TmImageFrameProps = {
  /** Approved asset path. Omit to render the labelled placeholder. */
  src?: string;
  /** Required whenever `src` is set. */
  alt?: string;
  placeholderLabel: string;
  placeholderNote?: string;
  aspect?: "16/9" | "4/3" | "3/2" | "3/4" | "1/1";
  priority?: boolean;
  className?: string;
};

/**
 * Tablemakers image slot. Renders a clearly-labelled placeholder until an
 * approved asset exists — never stock photography, and never an image implying
 * a larger or more active community than currently exists.
 */
export default function TmImageFrame({
  src,
  alt = "",
  placeholderLabel,
  placeholderNote,
  aspect = "3/2",
  priority = false,
  className = "",
}: TmImageFrameProps) {
  return (
    <figure className={`${styles.figure} ${className}`}>
      <div
        className={styles.frame}
        style={{ aspectRatio: aspect.replace("/", " / ") }}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            loading={priority ? undefined : "lazy"}
            sizes="(min-width: 900px) 640px, 100vw"
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholder}>
            <span className={styles.mark} aria-hidden="true" />
            <span className={styles.label}>{placeholderLabel}</span>
            <span className={styles.note}>
              {placeholderNote ?? "Approved asset required"}
            </span>
          </div>
        )}
      </div>
    </figure>
  );
}
