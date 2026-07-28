import Image from "next/image";
import styles from "./sm-ui.module.css";

type SmImageFrameProps = {
  /** Approved asset path. Omit to render the labelled placeholder. */
  src?: string;
  /** Required whenever `src` is set. */
  alt?: string;
  /** Names the asset that still needs to be supplied. */
  placeholderLabel: string;
  /** Art-direction note for whoever supplies the asset. */
  placeholderNote?: string;
  aspect?: "4/3" | "3/2" | "3/4" | "1/1" | "16/9";
  priority?: boolean;
  className?: string;
};

/**
 * Sarah Method image slot. Renders a clearly-labelled placeholder until an
 * approved asset exists — never a stock photograph, and never a fabricated
 * screenshot of the application.
 */
export default function SmImageFrame({
  src,
  alt = "",
  placeholderLabel,
  placeholderNote,
  aspect = "3/2",
  priority = false,
  className = "",
}: SmImageFrameProps) {
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
