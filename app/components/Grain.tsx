/**
 * Fixed film-grain + scanline + vignette veil over the whole page.
 * Purely decorative, never interactive.
 */
export default function Grain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
    >
      {/* grain */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.16] mix-blend-overlay">
        <filter id="orchid-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#orchid-grain)" />
      </svg>

      {/* scanlines */}
      <div
        className="absolute inset-0 opacity-[0.22] mix-blend-soft-light"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,0.10) 0px, rgba(255,255,255,0.10) 1px, transparent 1px, transparent 3px)",
        }}
      />

      {/* vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 85% at 50% 45%, transparent 40%, rgba(7,5,14,0.55) 85%, rgba(7,5,14,0.9) 100%)",
        }}
      />
    </div>
  );
}
