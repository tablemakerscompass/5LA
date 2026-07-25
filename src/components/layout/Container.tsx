import type { ElementType, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  /** Narrower measure for text-heavy content. */
  narrow?: boolean;
  as?: ElementType;
  className?: string;
};

/** Centered, max-width content container with responsive gutters. */
export default function Container({
  children,
  narrow = false,
  as: Tag = "div",
  className = "",
}: ContainerProps) {
  const classes = [
    "container",
    narrow ? "container-narrow" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <Tag className={classes}>{children}</Tag>;
}
