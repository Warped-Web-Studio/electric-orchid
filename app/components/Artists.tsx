import Image from "next/image";
import Reveal from "./Reveal";
import DemoTag from "./DemoTag";
import { artists } from "../data/studio";

const bookingTone: Record<string, string> = {
  Open: "border-cyan/50 text-cyan",
  Waitlist: "border-gold/50 text-gold",
  Closed: "border-bone/25 text-ash",
};

export default function Artists() {
  return (
    <section id="artists" className="relative py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <Reveal className="mb-12 sm:mb-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="label">The bench</span>
              <h2 className="display display-xl mt-3">
                Four hands <span className="text-magenta">you can</span> trust
              </h2>
            </div>
            <div className="max-w-sm">
              <p className="text-sm leading-relaxed text-bone/65">
                Residents only — no rotating guest chairs. Pick the person whose
                work you keep coming back to.
              </p>
              <DemoTag className="mt-3">Fictional artists · stock photos</DemoTag>
            </div>
          </div>
          <div className="neon-rule mt-8" />
        </Reveal>

        <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {artists.map((artist, i) => (
            <Reveal key={artist.name} delay={i * 90}>
              <article
                className={`sweep group h-full rounded-sm ${
                  // gentle stagger, desktop only
                  i % 2 === 1 ? "lg:mt-14" : ""
                }`}
              >
                <div className="duo duo-hover aspect-3/4 w-full rounded-sm border border-bone/10">
                  <Image
                    src={artist.image}
                    alt={`${artist.name}, ${artist.specialty.toLowerCase()} artist`}
                    fill
                    // 1 → 2 → 4 columns, 20px gutters, 1400px container
                    sizes="(min-width: 1400px) 320px, (min-width: 1024px) calc(25vw - 35px), (min-width: 640px) calc(50vw - 34px), calc(100vw - 32px)"
                    className="object-cover"
                  />
                  <span
                    className={`absolute right-3 top-3 z-10 rounded-full border bg-void/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] backdrop-blur-sm ${
                      bookingTone[artist.booking]
                    }`}
                  >
                    {artist.booking}
                  </span>
                </div>

                <div className="pt-5">
                  <h3 className="display text-2xl sm:text-[1.75rem]">
                    {artist.name}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] tracking-[0.14em] text-magenta">
                    {artist.handle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-bone/65">
                    {artist.bio}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {artist.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-bone/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-bone/60"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
