import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./vx-ui.module.css";

type VxScreenFrameProps = {
  /**
   * A real screenshot captured from the current application. Omit to render
   * the labelled placeholder — never substitute a mockup, and never present a
   * prototype as a live screen.
   */
  src?: string;
  /** Required whenever `src` is set. Describe what the screen shows. */
  alt?: string;
  placeholderLabel: string;
  placeholderNote?: string;
  caption?: ReactNode;
  aspect?: "16/9" | "16/10" | "4/3" | "3/2";
  priority?: boolean;
  className?: string;
};

/** Interface preview slot for the VelaXity page. */
export default function VxScreenFrame({
  src,
  alt = "",
  placeholderLabel,
  placeholderNote,
  caption,
  aspect = "16/10",
  priority = false,
  className = "",
}: VxScreenFrameProps) {
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
            sizes="(min-width: 1100px) 900px, 100vw"
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholder}>
            <span className={styles.mark} aria-hidden="true" />
            <span className={styles.label}>{placeholderLabel}</span>
            <span className={styles.note}>
              {placeholderNote ??
                "Screenshot required — captured from the current application, with client and personal data removed"}
            </span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className={`caption ${styles.caption}`}>{caption}</figcaption>
      )}
    </figure>
  );
}
