import Image from "next/image";
import NeonMark from "./NeonMark";
import DemoTag from "./DemoTag";
import { hero, studio } from "../data/studio";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-24"
    >
      {/* backdrop */}
      <div className="duo absolute inset-0">
        <Image
          src="/img/hero-back.jpg"
          alt=""
          fill
          // above the fold on every viewport — the only preloaded image on the
          // page. (LCP is the headline text; Next 16 renamed `priority` to `preload`.)
          preload
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* bloom fields */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[3]"
        style={{
          background:
            "radial-gradient(70% 55% at 18% 25%, rgba(255,45,149,.30), transparent 60%), radial-gradient(60% 50% at 88% 15%, rgba(36,224,255,.22), transparent 62%), linear-gradient(to top, #07050e 4%, rgba(7,5,14,.72) 45%, rgba(7,5,14,.25) 100%)",
        }}
      />

      {/* content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 pb-10 sm:px-6 sm:pb-14 lg:px-10 lg:pb-20">
        <div className="mb-6 flex items-center gap-3 sm:mb-8">
          <NeonMark className="h-9 w-9 shrink-0 text-magenta sm:h-11 sm:w-11" flicker />
          <span className="label text-bone/70">{hero.kicker}</span>
        </div>

        <p className="script mb-1 text-4xl text-magenta neon-text sm:mb-2 sm:text-5xl lg:text-6xl">
          {hero.script}
        </p>

        <h1 className="display display-hero max-w-[15ch]">
          <span className="block">{hero.line1}</span>
          <span className="chroma block">{hero.line2}</span>
          <span className="block">
            {hero.line3}
            <span className="ml-2 inline-block h-[0.14em] w-[0.5em] translate-y-[-0.18em] bg-magenta align-middle animate-pulse-glow" />
          </span>
        </h1>

        <div className="mt-8 flex flex-col gap-8 border-t border-bone/12 pt-8 sm:mt-10 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-lg text-[15px] leading-relaxed text-bone/75 sm:text-base">
            {hero.blurb}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#book"
              className="sweep rounded-full bg-magenta px-7 py-4 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-void transition-transform duration-300 hover:-translate-y-0.5"
              style={{ boxShadow: "0 0 28px rgba(255,45,149,.5)" }}
            >
              {hero.primaryCta}
            </a>
            <a
              href="#work"
              className="rounded-full border border-bone/25 px-7 py-4 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-bone/85 transition-colors hover:border-cyan/70 hover:text-bone"
            >
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="mt-8 hidden items-center justify-between sm:flex">
          <span className="label flex items-center gap-3">
            {studio.address[0]} · {studio.city}
            <DemoTag>Demo address</DemoTag>
          </span>
          <span className="flex items-center gap-3 label">
            Scroll
            <span
              aria-hidden
              className="relative block h-10 w-px overflow-hidden bg-bone/20"
            >
              <span className="absolute inset-x-0 top-0 block h-4 bg-magenta animate-scroll-hint" />
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
