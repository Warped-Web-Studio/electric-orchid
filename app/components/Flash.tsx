import FlashCard from "./FlashCard";
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
              <FlashCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
