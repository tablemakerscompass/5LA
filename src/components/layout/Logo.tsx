import Image from "next/image";
import { site } from "@/config/site";

/**
 * Official 5LA logo.
 *
 * The source artwork (burgundy + gold monogram, wordmark, gold divider, and
 * "BUSINESS · HOSPITALITY · EVENTS" descriptor) must NOT be redrawn,
 * recolored, cropped, or distorted. This component only scales the approved
 * transparent-PNG assets.
 *
 * Variants:
 * - "horizontal": monogram + wordmark side by side (use in the header).
 * - "stacked":    full stacked lockup (use in hero / brand moments).
 * - "monogram":   circular 5LA mark only (use in compact nav, favicon, dark).
 */

type LogoVariant = "horizontal" | "stacked" | "monogram";

/**
 * The descriptor rendered INSIDE the logo artwork.
 *
 * Kept separate from `site.descriptor` so alt text always describes the image
 * as it actually is, rather than whatever the brand line happens to say. The
 * two agree today; if the artwork is replaced again, update this constant to
 * match the new PNGs.
 */
const ARTWORK_DESCRIPTOR = "Business · Hospitality · Events";

const ASSETS: Record<
  LogoVariant,
  { src: string; width: number; height: number; alt: string }
> = {
  horizontal: {
    src: "/brand/5la-logo-horizontal.png",
    width: 794,
    height: 214,
    alt: `${site.name} — ${ARTWORK_DESCRIPTOR}`,
  },
  stacked: {
    src: "/brand/5la-logo-stacked.png",
    width: 1024,
    height: 1024,
    alt: `${site.name} — ${ARTWORK_DESCRIPTOR}`,
  },
  monogram: {
    src: "/brand/5la-monogram.png",
    width: 625,
    height: 625,
    alt: site.name,
  },
};

type LogoProps = {
  variant?: LogoVariant;
  /** Rendered height in px; width scales to preserve aspect ratio. */
  height?: number;
  priority?: boolean;
  className?: string;
  /** Override alt text (e.g. empty string when adjacent text repeats it). */
  alt?: string;
};

export default function Logo({
  variant = "horizontal",
  height = 48,
  priority = false,
  className,
  alt,
}: LogoProps) {
  const asset = ASSETS[variant];
  const width = Math.round((asset.width / asset.height) * height);

  return (
    <Image
      src={asset.src}
      width={width}
      height={height}
      alt={alt ?? asset.alt}
      priority={priority}
      className={className}
      style={{ height, width: "auto" }}
      sizes={`${width}px`}
    />
  );
}
