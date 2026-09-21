import type { ElementType, ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** stagger, in ms, applied as a transition-delay */
  delay?: number;
  className?: string;
  as?: ElementType;
};

/**
 * Fades + lifts its children the first time they scroll into view.
 * This is just markup — one RevealObserver in the layout watches every
 * `.reveal` on the page, so there's nothing here to hydrate.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: Props) {
  return (
    <Tag
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
