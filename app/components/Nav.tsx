"use client";

import { useEffect, useState } from "react";
import NeonMark from "./NeonMark";
import { nav, studio } from "../data/studio";

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock the page behind the mobile sheet, and let Escape out of it
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          solid
            ? "border-b border-bone/10 bg-void/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-10">
          <a
            href="#top"
            className="group -my-2 flex min-h-11 items-center gap-2.5 py-2 sm:gap-3"
            aria-label={`${studio.name} — back to top`}
          >
            <NeonMark className="h-7 w-7 text-magenta sm:h-8 sm:w-8" />
            <span className="display text-base leading-none sm:text-lg">
              Electric
              <span className="text-magenta">·</span>
              Orchid
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="label flex min-h-11 items-center text-bone/70 transition-colors hover:text-bone"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#book"
              className="sweep hidden min-h-11 items-center rounded-full border border-magenta/60 px-5 font-mono text-[11px] uppercase tracking-[0.2em] text-bone transition-colors hover:bg-magenta/10 sm:inline-flex"
              style={{ boxShadow: "0 0 18px rgba(255,45,149,.25)" }}
            >
              Book a session
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/20 lg:hidden"
            >
              <span className="sr-only">Menu</span>
              <span aria-hidden className="flex flex-col gap-[5px]">
                <span className="block h-px w-5 bg-bone" />
                <span className="block h-px w-5 bg-bone" />
                <span className="block h-px w-3 bg-magenta" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* mobile sheet */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-void/97 backdrop-blur-2xl transition-all duration-400 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:h-20 sm:px-6">
          <NeonMark className="h-7 w-7 text-magenta" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/20 text-xl leading-none"
            tabIndex={open ? 0 : -1}
          >
            <span aria-hidden>×</span>
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center gap-1 px-6 pb-24">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="display display-lg border-b border-bone/10 py-4 transition-colors hover:text-magenta"
            >
              <span className="mr-4 font-mono text-xs tracking-widest text-ash">
                0{i + 1}
              </span>
              {item.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="mt-8 rounded-full border border-magenta/60 bg-magenta/10 px-6 py-4 text-center font-mono text-xs uppercase tracking-[0.22em]"
          >
            Book a session
          </a>
        </nav>
      </div>
    </>
  );
}
