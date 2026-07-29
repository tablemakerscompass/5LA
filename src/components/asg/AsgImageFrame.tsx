import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./AsgImageFrame.module.css";

type AsgImageFrameProps = {
  /** Approved ASG asset path. Omit to render the labelled placeholder. */
  src?: string;
  /** Required whenever `src` is set. */
  alt?: string;
  /** Names the asset that needs to be supplied. */
  placeholderLabel: string;
  /** Art-direction note for whoever supplies the asset. */
  placeholderNote?: string;
  aspect?: "4/3" | "3/2" | "3/4" | "1/1" | "16/9";
  /** Credit or caption line shown directly beneath the image. */
  caption?: ReactNode;
  priority?: boolean;
  className?: string;
};

/**
 * ASG image slot. The shared <EditorialImage> placeholder is hard-coded to the
 * cream 5LA palette, which reads as a bright panel on the ASG dark sections —
 * this frame carries the same idea in the ASG palette and works on both
 * surfaces, so the shared component is left untouched for the approved pages.
 */
export default function AsgImageFrame({
  src,
  alt = "",
  placeholderLabel,
  placeholderNote,
  aspect = "3/2",
  caption,
  priority = false,
  className = "",
}: AsgImageFrameProps) {
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
              {placeholderNote ?? "Approved ASG asset required"}
            </span>
          </div>
        )}
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
