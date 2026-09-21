"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Reveal from "./Reveal";
import { gallery, galleryStyles, type GalleryStyle } from "../data/studio";

export default function Gallery() {
  const [filter, setFilter] = useState<GalleryStyle>("All");
  const [openAt, setOpenAt] = useState<number | null>(null);

  const shown =
    filter === "All" ? gallery : gallery.filter((w) => w.style === filter);

  const step = useCallback(
    (delta: number) => {
      setOpenAt((current) => {
        if (current === null) return current;
        return (current + delta + shown.length) % shown.length;
      });
    },
    [shown.length],
  );

  useEffect(() => {
    if (openAt === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenAt(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [openAt, step]);

  const active = openAt === null ? null : shown[openAt];

  return (
    <section id="work" className="relative py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <Reveal className="mb-10 sm:mb-14">
          <span className="label">Healed & fresh</span>
          <h2 className="display display-xl mt-3 max-w-[14ch]">
            Work off the <span className="text-cyan">floor</span>
          </h2>
        </Reveal>

        {/* filters */}
        <Reveal delay={60}>
          <div className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
            {galleryStyles.map((style) => {
              const on = style === filter;
              return (
                <button
                  key={style}
                  type="button"
                  onClick={() => {
                    setFilter(style);
                    setOpenAt(null);
                  }}
                  aria-pressed={on}
                  className={`inline-flex min-h-11 shrink-0 items-center rounded-full border px-4 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
                    on
                      ? "border-magenta bg-magenta/15 text-bone"
                      : "border-bone/15 text-bone/60 hover:border-bone/40 hover:text-bone"
                  }`}
                  style={on ? { boxShadow: "0 0 18px rgba(255,45,149,.3)" } : undefined}
                >
                  {style}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* masonry */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {shown.map((work, i) => (
            <button
              key={work.image + work.title}
              type="button"
              onClick={() => setOpenAt(i)}
              className="sweep group mb-4 block w-full break-inside-avoid overflow-hidden rounded-sm border border-bone/10 text-left"
              aria-label={`Open ${work.title} by ${work.artist}`}
            >
              <span className="duo duo-hover block">
                <Image
                  src={work.image}
                  alt={`${work.title} — ${work.style} by ${work.artist}`}
                  width={work.width}
                  height={work.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-auto w-full"
                />
              </span>
              <span className="flex items-baseline justify-between gap-3 px-4 py-3.5">
                <span className="display text-lg">{work.title}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ash">
                  {work.artist}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-void/95 p-4 backdrop-blur-xl sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} by ${active.artist}`}
          onClick={() => setOpenAt(null)}
        >
          <div
            className="relative flex max-h-full w-full max-w-4xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.image}
              alt={`${active.title} — ${active.style} by ${active.artist}`}
              width={active.width}
              height={active.height}
              sizes="(max-width: 1024px) 92vw, 60vw"
              className="max-h-[68svh] w-auto rounded-sm border border-bone/15 object-contain"
            />

            <div className="mt-5 flex w-full items-center justify-between gap-4">
              <div>
                <p className="display text-2xl">{active.title}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-ash">
                  {active.style} · {active.artist}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous piece"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/20 hover:border-cyan/70"
                >
                  <span aria-hidden>←</span>
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next piece"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/20 hover:border-cyan/70"
                >
                  <span aria-hidden>→</span>
                </button>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpenAt(null)}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-bone/20 bg-void/70 text-xl leading-none sm:right-8 sm:top-8"
          >
            <span aria-hidden>×</span>
          </button>
        </div>
      )}
    </section>
  );
}
