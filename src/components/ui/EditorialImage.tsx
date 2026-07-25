import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./EditorialImage.module.css";

type EditorialImageProps = {
  /**
   * Image path. When absent, a labeled placeholder panel is shown.
   * Replace placeholders with final, art-directed photography — see the
   * photography guidance in the project brief (no generic corporate stock).
   */
  src?: string;
  alt?: string;
  /** Descriptive note shown on the placeholder to guide asset selection. */
  placeholderLabel?: string;
  caption?: ReactNode;
  aspect?: "16/9" | "4/3" | "3/2" | "1/1" | "3/4" | "21/9";
  /** Darken with a gradient overlay so text can sit on top. */
  overlay?: boolean;
  /** Content rendered over the image (used with overlay). */
  children?: ReactNode;
  rounded?: boolean;
  priority?: boolean;
  className?: string;
};

/**
 * Reusable editorial image block. Composes into full-width, offset, layered,
 * captioned, and dark-overlay layouts. Renders a clearly-labeled placeholder
 * until final photography is supplied.
 */
export default function EditorialImage({
  src,
  alt = "",
  placeholderLabel = "Editorial photography",
  caption,
  aspect = "3/2",
  overlay = false,
  children,
  rounded = true,
  priority = false,
  className = "",
}: EditorialImageProps) {
  return (
    <figure className={`${styles.figure} ${className}`}>
      <div
        className={`${styles.frame} ${rounded ? styles.rounded : ""} ${
          overlay ? styles.hasOverlay : ""
        }`}
        style={{ aspectRatio: aspect.replace("/", " / ") }}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(min-width: 1100px) 900px, 100vw"
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholder}>
            <span className={styles.placeholderMark} aria-hidden="true" />
            <span className={styles.placeholderLabel}>{placeholderLabel}</span>
            <span className={styles.placeholderNote}>Replace with final asset</span>
          </div>
        )}
        {children && <div className={styles.overlayContent}>{children}</div>}
      </div>
      {caption && <figcaption className={`caption ${styles.caption}`}>{caption}</figcaption>}
    </figure>
  );
}
