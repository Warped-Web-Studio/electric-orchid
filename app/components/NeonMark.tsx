type Props = {
  className?: string;
  /** adds the warm-up flicker — used once, in the hero */
  flicker?: boolean;
};

/**
 * The studio mark: a bent neon tube ring with a bolt struck through it.
 * Drawn as strokes with round caps so it reads as glass tubing at any size.
 */
export default function NeonMark({ className = "", flicker = false }: Props) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-label="Electric Orchid mark"
      className={`${className} ${flicker ? "animate-flicker" : ""}`}
      style={{
        filter: flicker
          ? undefined
          : "drop-shadow(0 0 4px currentColor) drop-shadow(0 0 12px currentColor)",
      }}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* tube ring, broken at the top where the lead runs in */}
        <path d="M30.5 4.6a20.4 20.4 0 1 1-13 0" />
        {/* petals */}
        <path d="M24 33c-4.6 0-8-3.2-8-7.3 0-3.1 2.2-5.6 5-5.6" opacity="0.55" />
        <path d="M24 33c4.6 0 8-3.2 8-7.3 0-3.1-2.2-5.6-5-5.6" opacity="0.55" />
        {/* bolt */}
        <path d="M26.6 12.4 18.8 25h5.4l-2.8 10.6L29.2 23h-5.4z" />
      </g>
    </svg>
  );
}
