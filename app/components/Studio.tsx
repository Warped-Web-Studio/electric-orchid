import Image from "next/image";
import Reveal from "./Reveal";
import { about } from "../data/studio";

export default function Studio() {
  return (
    <section id="studio" className="relative py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* copy */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="label">{about.label}</span>
              <p className="script mt-3 text-4xl text-cyan neon-text-cyan sm:text-5xl">
                {about.script}
              </p>
              <h2 className="display display-col mt-3">
                {about.heading.map((line, i) => (
                  <span
                    key={line}
                    className={`block ${i === 1 ? "text-magenta" : ""}`}
                  >
                    {line}
                  </span>
                ))}
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <div className="neon-rule my-8 w-24" />
              {about.body.map((p) => (
                <p
                  key={p.slice(0, 18)}
                  className="mb-5 max-w-prose text-[15px] leading-relaxed text-bone/72 sm:text-base"
                >
                  {p}
                </p>
              ))}
            </Reveal>
          </div>

          {/* collage */}
          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <div className="relative">
                <div className="duo duo-hover aspect-4/5 w-full sm:aspect-3/2 lg:aspect-4/5">
                  <Image
                    src="/img/studio-antlers.jpg"
                    alt="The front room at Electric Orchid, lit low"
                    fill
                    // 7 of 12 columns from lg, capped with the 1400px container
                    sizes="(min-width: 1400px) 750px, (min-width: 1024px) 54vw, calc(100vw - 32px)"
                    className="object-cover"
                  />
                </div>

                {/* the overlap only happens where there's room for it */}
                <div className="mt-4 grid grid-cols-2 gap-4 lg:absolute lg:-bottom-14 lg:-left-16 lg:mt-0 lg:w-[58%] lg:grid-cols-1">
                  <div className="duo duo-hover aspect-square border border-bone/10 lg:aspect-3/2">
                    <Image
                      src="/img/studio-room.jpg"
                      alt="Studio floor with the chandelier and the shop bike"
                      fill
                      // half-width tile on mobile; 58% of the main photo from lg
                      sizes="(min-width: 1400px) 435px, (min-width: 1024px) 31vw, calc(50vw - 24px)"
                      className="object-cover"
                    />
                  </div>
                  <div className="duo duo-hover aspect-square border border-bone/10 lg:hidden">
                    <Image
                      src="/img/process-mono.jpg"
                      alt="An artist mid-session"
                      fill
                      // mobile/tablet only (lg:hidden), so it's never fetched on desktop
                      sizes="calc(50vw - 24px)"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* stats */}
        <Reveal delay={60}>
          <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-bone/12 bg-bone/12 sm:grid-cols-4 lg:mt-28">
            {about.stats.map((stat) => (
              <div key={stat.label} className="bg-void px-5 py-7 sm:px-6 sm:py-9">
                {/* two-line floor keeps the numbers on a common baseline
                    whether or not the label wraps */}
                <dt className="label mb-2 flex min-h-9 items-start text-[10px]">
                  {stat.label}
                </dt>
                <dd className="display text-4xl sm:text-5xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* full-bleed neon band */}
      <Reveal className="mt-20 lg:mt-28">
        <div className="relative h-[55svh] min-h-[340px] w-full overflow-hidden sm:h-[65svh]">
          <Image
            src="/img/neon-devil.jpg"
            alt="Neon sign glowing in the studio window"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, #07050e 3%, rgba(7,5,14,.35) 45%, rgba(7,5,14,.55) 100%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1400px] px-4 pb-8 sm:px-6 sm:pb-12 lg:px-10">
            <p className="display display-lg max-w-[18ch]">
              The light stays on <span className="text-cyan">till ten</span>.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
