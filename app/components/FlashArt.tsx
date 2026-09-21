import type { Flash } from "../data/studio";

/**
 * Hand-drawn flash designs as inline SVG line art — no stock imagery, so the
 * sheet reads as this studio's own work. All strokes use currentColor.
 */

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const drawings: Record<Flash["art"], React.ReactNode> = {
  dagger: (
    <g {...common}>
      <path d="M50 7 L59 36 L50 61 L41 36 Z" />
      <path d="M50 18 V52" strokeWidth="1" opacity="0.5" />
      <path d="M27 62 H73" />
      <path d="M27 62 l-5 5 M73 62 l5 5" />
      <path d="M45 65 V83 M55 65 V83" />
      <path d="M45 71 H55 M45 77 H55" strokeWidth="1" opacity="0.6" />
      <circle cx="50" cy="88" r="5" />
    </g>
  ),
  moth: (
    <g {...common}>
      <path d="M50 40 C31 17 13 25 17 44 C20 59 38 57 50 47" />
      <path d="M50 40 C69 17 87 25 83 44 C80 59 62 57 50 47" />
      <path d="M50 48 C37 55 31 73 43 79 C49 82 51 70 50 60" />
      <path d="M50 48 C63 55 69 73 57 79 C51 82 49 70 50 60" />
      <path d="M50 37 V72" />
      <circle cx="30" cy="38" r="4" opacity="0.7" />
      <circle cx="70" cy="38" r="4" opacity="0.7" />
      <path d="M47 36 C41 26 35 23 30 21 M53 36 C59 26 65 23 70 21" />
    </g>
  ),
  snake: (
    <g {...common}>
      {/* coiled body, reared up on the right */}
      <path d="M52 90 C28 90 14 76 17 60 C20 45 36 37 50 41 C61 44 66 55 61 62 C56 69 45 68 43 60" strokeWidth="3" />
      {/* neck */}
      <path d="M43 60 C40 48 45 33 55 27" strokeWidth="3" />
      {/* head */}
      <path d="M55 27 C50 19 54 10 63 10 C72 10 77 17 74 24 C71 30 61 33 55 27 Z" />
      <circle cx="65" cy="18" r="1.9" fill="currentColor" stroke="none" />
      {/* tongue */}
      <path d="M74 23 l10 4 m0 0 l-5 3 m5 -3 l-5 -3" strokeWidth="1.5" />
      {/* belly bands */}
      <path
        d="M24 82 h11 M18 70 h10 M21 56 h9 M32 45 h9"
        strokeWidth="1.2"
        opacity="0.5"
      />
    </g>
  ),
  rose: (
    <g {...common}>
      {/* outer ring of petals */}
      <path d="M50 11 C63 11 72 21 71 31 C81 35 85 47 78 56 C72 64 60 66 52 61 C45 68 33 68 27 60 C21 52 23 41 31 36 C28 25 37 11 50 11 Z" />
      {/* second ring */}
      <path d="M50 27 C59 27 65 34 64 42 C63 51 56 57 48 56 C40 54 35 47 38 39 C40 32 44 27 50 27 Z" />
      {/* the curled heart */}
      <path d="M44 45 C44 40 50 36 54 40 C59 45 56 51 51 51 C48 51 46 49 46 46" />
      {/* petal seams */}
      <path
        d="M50 11 V27 M71 31 L64 41 M52 61 L49 56 M27 60 L38 47 M31 36 L38 40"
        strokeWidth="1.2"
        opacity="0.5"
      />
      {/* stem and leaves */}
      <path d="M50 66 V95" />
      <path d="M49 78 C39 74 29 77 26 84 C35 88 46 85 49 78" />
      <path d="M52 86 C60 82 69 84 72 90 C64 94 55 92 52 86" opacity="0.7" />
    </g>
  ),
  eye: (
    <g {...common}>
      <path d="M10 52 C27 29 73 29 90 52 C73 75 27 75 10 52 Z" />
      <circle cx="50" cy="52" r="14" />
      <circle cx="50" cy="52" r="5.5" fill="currentColor" stroke="none" />
      <path d="M50 24 V13 M24 32 l-6 -8 M76 32 l6 -8" opacity="0.65" />
      <path d="M32 72 l-6 8 M50 78 v9 M68 72 l6 8" opacity="0.65" />
    </g>
  ),
  swallow: (
    <g {...common}>
      <path d="M50 46 C39 31 23 26 11 33 C24 35 32 42 37 52" />
      <path d="M37 52 C27 57 19 66 17 77 C28 66 40 62 50 64" />
      <path d="M50 46 C56 40 64 39 70 43 L86 38 L74 50 L88 55 L69 56" />
      <path d="M50 64 L64 80 L61 62 L78 72 L67 54" />
      <circle cx="53" cy="46" r="1.6" fill="currentColor" stroke="none" />
    </g>
  ),
  hand: (
    <g {...common}>
      <path d="M36 90 V58 C36 52 31 46 31 40 C31 35 36 34 38 39 L42 49 V23 C42 18 49 18 49 23 V47" />
      <path d="M49 23 V16 C49 11 56 11 56 16 V47" />
      <path d="M56 21 C56 16 63 16 63 21 V49" />
      <path d="M63 32 C63 27 70 27 70 32 V60 C70 77 63 90 56 90 H42" />
      <path d="M40 62 C48 57 57 59 62 64" strokeWidth="1.2" opacity="0.65" />
      <path d="M40 70 C49 66 57 68 61 73" strokeWidth="1.2" opacity="0.65" />
      <path d="M44 58 C48 68 49 78 47 88" strokeWidth="1.2" opacity="0.65" />
    </g>
  ),
  orchid: (
    <g {...common}>
      {[0, 72, 144, 216, 288].map((deg) => (
        <path
          key={deg}
          d="M50 50 C50 33 43 19 34 23 C25 27 28 45 50 50 Z"
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="6" />
      <path d="M50 56 V88" />
      <path d="M50 76 C42 72 36 76 34 82 C41 84 47 82 50 76" opacity="0.7" />
    </g>
  ),
};

export default function FlashArt({
  art,
  className = "",
}: {
  art: Flash["art"];
  className?: string;
}) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className}>
      {drawings[art]}
    </svg>
  );
}
