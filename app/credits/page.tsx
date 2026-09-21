import type { Metadata } from "next";
import Link from "next/link";
import NeonMark from "../components/NeonMark";
import { credits } from "../data/credits";
import { studio } from "../data/studio";

export const metadata: Metadata = {
  title: `Photo credits — ${studio.name}`,
  description: "Credits for the stock photography used in this portfolio mockup.",
};

export default function Credits() {
  return (
    <>
      <header className="border-b border-bone/10">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-10">
          <Link
            href="/"
            className="-my-2 flex min-h-11 items-center gap-2.5 py-2 sm:gap-3"
          >
            <NeonMark className="h-7 w-7 text-magenta sm:h-8 sm:w-8" />
            <span className="display text-base leading-none sm:text-lg">
              Electric
              <span className="text-magenta">·</span>
              Orchid
            </span>
          </Link>
          <Link
            href="/"
            className="label flex min-h-11 items-center text-bone/70 transition-colors hover:text-bone"
          >
            <span aria-hidden className="mr-2">
              ←
            </span>
            Back
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          <span className="label">Credit where it&rsquo;s due</span>
          <h1 className="display display-xl mt-3">
            Photo <span className="text-cyan">credits</span>
          </h1>
          <div className="neon-rule my-8 w-24" />
          <p className="max-w-prose text-[15px] leading-relaxed text-bone/72 sm:text-base">
            {studio.name} is made up. The photographs aren&rsquo;t — they&rsquo;re
            stock images of real people and real tattoos, and none of them have
            anything to do with this mockup or the artists named on it.
          </p>

          <ul className="mt-12 border-t border-bone/12">
            {credits.map((c) => (
              <li
                key={c.file}
                className="grid gap-2 border-b border-bone/12 py-5 sm:grid-cols-12 sm:items-baseline sm:gap-6"
              >
                <div className="sm:col-span-4">
                  <p className="break-all font-mono text-xs text-bone/85">
                    {c.file}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ash">
                    {c.usedFor}
                  </p>
                </div>

                <p className="text-sm text-bone/75 sm:col-span-5">
                  <span className="text-ash">Photo by </span>
                  <a
                    href={c.photographerUrl}
                    rel="noreferrer"
                    className="underline decoration-bone/30 underline-offset-4 transition-colors hover:text-magenta"
                  >
                    {c.photographer}
                  </a>
                </p>

                <p className="sm:col-span-3 sm:text-right">
                  <a
                    href={c.sourceUrl}
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center font-mono text-[11px] uppercase tracking-[0.16em] text-bone/70 transition-colors hover:text-magenta"
                  >
                    View on {c.source}
                    <span className="sr-only"> ({c.file})</span>
                  </a>
                </p>
              </li>
            ))}
          </ul>

          <Link
            href="/"
            className="mt-12 inline-flex min-h-11 items-center rounded-full border border-bone/25 px-6 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors hover:border-magenta"
          >
            Back to the studio
          </Link>
        </div>
      </main>
    </>
  );
}
