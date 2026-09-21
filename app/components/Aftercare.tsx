import DemoTag from "./DemoTag";
import Reveal from "./Reveal";
import { aftercare } from "../data/studio";

export default function Aftercare() {
  return (
    <section id="aftercare" className="relative py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <Reveal className="mb-12 sm:mb-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="label">{aftercare.label}</span>
              <p className="script mt-3 text-4xl text-magenta neon-text sm:text-5xl">
                {aftercare.script}
              </p>
              <h2 className="display display-xl mt-3">{aftercare.heading}</h2>
            </div>
            <div className="max-w-sm">
              <p className="text-sm leading-relaxed text-bone/65">
                {aftercare.blurb}
              </p>
              <DemoTag className="mt-3">{aftercare.disclaimer}</DemoTag>
            </div>
          </div>
          <div className="neon-rule mt-8" />
        </Reveal>

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aftercare.stages.map((stage, i) => (
            <Reveal key={stage.when} as="li" delay={i * 90}>
              <div className="panel h-full rounded-sm p-6 sm:p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan">
                  {stage.when}
                </p>
                <h3 className="display mt-4 text-2xl sm:text-[1.75rem]">
                  {stage.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-bone/70">
                  {stage.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <div className="mt-4 grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="panel h-full rounded-sm p-6 sm:p-7">
              <h3 className="label">Stay away from</h3>
              <ul className="mt-5 space-y-3">
                {aftercare.avoid.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[15px] leading-relaxed text-bone/80"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.6em] block h-1.5 w-1.5 shrink-0 rotate-45 bg-magenta"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={80}>
            <div className="h-full rounded-sm border border-gold/40 bg-gold/5 p-6 sm:p-7">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.28em] text-gold">
                When to worry
              </h3>
              <p className="mt-5 text-[15px] leading-relaxed text-bone/85">
                {aftercare.warning}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
