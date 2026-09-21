import FlashArt from "./FlashArt";
import Reveal from "./Reveal";
import { flash, flashNote } from "../data/studio";

export default function Flash() {
  return (
    <section
      id="flash"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-36"
    >
      {/* faint grid, like a drawing board */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ede9f5 1px, transparent 1px), linear-gradient(to bottom, #ede9f5 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(90% 70% at 50% 40%, #000 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(90% 70% at 50% 40%, #000 30%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <Reveal className="mb-10 sm:mb-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="label">September sheet</span>
              <h2 className="display display-xl mt-3">
                Flash, <span className="script text-magenta normal-case">once only</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-bone/65">
              {flashNote}
            </p>
          </div>
          <div className="neon-rule mt-8" />
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {flash.map((item, i) => (
            <Reveal key={item.name} delay={i * 60}>
              <article
                className={`sweep panel group relative flex h-full flex-col items-center rounded-sm p-4 text-center transition-colors duration-500 sm:p-6 ${
                  item.claimed ? "opacity-55" : "hover:bg-slab/70"
                }`}
              >
                {item.claimed && (
                  <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 -rotate-12 whitespace-nowrap rounded-sm border border-magenta/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-magenta">
                    Claimed
                  </span>
                )}

                <FlashArt
                  art={item.art}
                  className={`h-20 w-20 text-bone/85 transition-all duration-500 sm:h-24 sm:w-24 ${
                    item.claimed
                      ? ""
                      : "group-hover:text-magenta group-hover:drop-shadow-[0_0_14px_rgba(255,45,149,0.8)]"
                  }`}
                />

                <h3 className="display mt-4 text-lg sm:text-xl">{item.name}</h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ash">
                  {item.size} · {item.artist}
                </p>
                <p className="mt-3 font-mono text-sm text-gold">{item.price}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
