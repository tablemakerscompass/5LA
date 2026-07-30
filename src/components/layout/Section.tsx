import type { ElementType, ReactNode } from "react";
import Container from "./Container";

type SectionProps = {
  children: ReactNode;
  /** Flip to the dark surface palette (cream text on near-black). */
  dark?: boolean;
  /** Apply a subtle raised surface tint on light backgrounds. */
  muted?: boolean;
  /** Tighter vertical padding. */
  tight?: boolean;
  /** Wrap children in a Container automatically. */
  contained?: boolean;
  narrow?: boolean;
  as?: ElementType;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  /** Names the region, for sections whose heading is visually hidden. */
  "aria-labelledby"?: string;
};

/**
 * A vertical page section with consistent rhythm and optional dark/muted
 * surface. Dark sections set `data-surface="dark"` so nested components adapt.
 */
export default function Section({
  children,
  dark = false,
  muted = false,
  tight = false,
  contained = true,
  narrow = false,
  as: Tag = "section",
  id,
  className = "",
  style,
  "aria-labelledby": ariaLabelledBy,
}: SectionProps) {
  const classes = [tight ? "section-tight" : "section", className]
    .filter(Boolean)
    .join(" ");

  const surfaceStyle: React.CSSProperties = {
    ...(muted && !dark ? { background: "var(--surface)" } : {}),
    ...style,
  };

  return (
    <Tag
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={classes}
      data-surface={dark ? "dark" : undefined}
      style={surfaceStyle}
    >
      {contained ? <Container narrow={narrow}>{children}</Container> : children}
    </Tag>
  );
}
