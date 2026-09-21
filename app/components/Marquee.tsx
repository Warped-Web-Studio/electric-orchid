import { marqueeItems } from "../data/studio";

type Props = {
  /** second copy scrolls the other way for the lower band */
  reverse?: boolean;
};

/**
 * Infinite ticker. The list is rendered twice inside a 200%-wide track so the
 * -50% translate loops seamlessly; with reduced motion it just sits still.
 */
export default function Marquee({ reverse = false }: Props) {
  const row = [...marqueeItems, ...marqueeItems];

  return (
    <div
      aria-hidden
      className="relative flex overflow-hidden border-y border-bone/10 bg-ink/60 py-3.5 sm:py-4"
    >
      <div
        className="flex w-max shrink-0 animate-marquee items-center gap-8 pr-8 sm:gap-10 sm:pr-10"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-8 sm:gap-10">
            <span
              className={`display whitespace-nowrap text-lg sm:text-2xl ${
                i % 2 === 0 ? "text-bone/85" : "text-bone/35"
              }`}
            >
              {item}
            </span>
            <span
              className={`block h-1.5 w-1.5 shrink-0 rotate-45 ${
                i % 2 === 0 ? "bg-magenta" : "bg-cyan"
              }`}
            />
          </span>
        ))}
      </div>

      {/* fade the ends into the page rather than cutting words in half */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28"
        style={{ background: "linear-gradient(to right, #07050e, transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28"
        style={{ background: "linear-gradient(to left, #07050e, transparent)" }}
      />
    </div>
  );
}
