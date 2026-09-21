"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";
import { artists, booking, studio } from "../data/studio";

const field =
  "w-full rounded-sm border border-bone/15 bg-ink/60 px-4 py-3.5 text-base text-bone placeholder:text-ash/70 transition-colors focus:border-magenta focus:bg-slab/60 focus:outline-none";

const labelCls =
  "mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-ash";

export default function Booking() {
  const [sent, setSent] = useState(false);

  return (
    <section id="book" className="relative py-20 sm:py-28 lg:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 15% 30%, rgba(255,45,149,.14), transparent 65%), radial-gradient(55% 45% at 90% 70%, rgba(36,224,255,.12), transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* pitch */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="label">{booking.label}</span>
              <p className="script mt-3 text-4xl text-magenta neon-text sm:text-5xl">
                {booking.script}
              </p>
              <h2 className="display display-col mt-3">
                {booking.heading.map((line, i) => (
                  <span key={line} className={`block ${i === 1 ? "text-cyan" : ""}`}>
                    {line}
                  </span>
                ))}
              </h2>
              <div className="neon-rule my-8 w-24" />
              <p className="max-w-prose text-[15px] leading-relaxed text-bone/72 sm:text-base">
                {booking.blurb}
              </p>

              <dl className="mt-8 space-y-3 font-mono text-xs">
                <div className="flex gap-3">
                  <dt className="w-20 shrink-0 text-ash">Call</dt>
                  <dd>{studio.phone}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-20 shrink-0 text-ash">Email</dt>
                  <dd className="break-all">{studio.email}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-20 shrink-0 text-ash">Walk-ins</dt>
                  <dd>Thu – Sun, first come</dd>
                </div>
              </dl>

              <div className="duo duo-hover mt-10 hidden aspect-3/2 rounded-sm border border-bone/10 lg:block">
                <Image
                  src="/img/process-hand.jpg"
                  alt="Overhead view of a session in progress"
                  fill
                  sizes="38vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* form */}
          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <div className="panel sweep rounded-sm p-5 sm:p-8 lg:p-10">
                {sent ? (
                  <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                    <span className="script text-5xl text-cyan neon-text-cyan sm:text-6xl">
                      Got it.
                    </span>
                    <h3 className="display display-lg mt-4">
                      We&rsquo;ll be in touch
                    </h3>
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-bone/65">
                      Two business days, usually less. Check your spam folder if
                      it&rsquo;s quiet — we reply from a studio address.
                    </p>
                    <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-ash">
                      Mockup only — nothing was sent
                    </p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="mt-8 rounded-full border border-bone/25 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors hover:border-magenta"
                    >
                      Start another
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                    className="grid gap-5 sm:grid-cols-2"
                  >
                    <div className="sm:col-span-1">
                      <label className={labelCls} htmlFor="bk-name">
                        Name
                      </label>
                      <input
                        id="bk-name"
                        name="name"
                        required
                        autoComplete="name"
                        placeholder="Who are we drawing for?"
                        className={field}
                      />
                    </div>

                    <div className="sm:col-span-1">
                      <label className={labelCls} htmlFor="bk-email">
                        Email
                      </label>
                      <input
                        id="bk-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@somewhere.com"
                        className={field}
                      />
                    </div>

                    <div className="sm:col-span-1">
                      <label className={labelCls} htmlFor="bk-artist">
                        Artist
                      </label>
                      <select id="bk-artist" name="artist" className={field} defaultValue="">
                        <option value="">No preference</option>
                        {artists.map((a) => (
                          <option key={a.name} value={a.name}>
                            {a.name} — {a.specialty}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-1">
                      <label className={labelCls} htmlFor="bk-style">
                        Style
                      </label>
                      <select id="bk-style" name="style" className={field} defaultValue="">
                        <option value="" disabled>
                          Pick one
                        </option>
                        {booking.styles.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-1">
                      <label className={labelCls} htmlFor="bk-placement">
                        Placement
                      </label>
                      <select
                        id="bk-placement"
                        name="placement"
                        className={field}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Where on you?
                        </option>
                        {booking.placements.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-1">
                      <label className={labelCls} htmlFor="bk-size">
                        Rough size
                      </label>
                      <select id="bk-size" name="size" className={field} defaultValue="">
                        <option value="" disabled>
                          Pick one
                        </option>
                        {booking.sizes.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className={labelCls} htmlFor="bk-idea">
                        The idea
                      </label>
                      <textarea
                        id="bk-idea"
                        name="idea"
                        rows={5}
                        required
                        placeholder="What it's of, what it's for, anything you've already got nearby."
                        className={`${field} resize-y`}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="flex cursor-pointer items-start gap-3 py-1 text-sm text-bone/70">
                        <input
                          type="checkbox"
                          required
                          name="age"
                          className="check mt-0.5 shrink-0"
                        />
                        <span>
                          I&rsquo;m 18 or older and I&rsquo;ll bring photo ID to
                          the appointment.
                        </span>
                      </label>
                    </div>

                    <div className="sm:col-span-2 sm:flex sm:items-center sm:justify-between sm:gap-6">
                      <p className="mb-4 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-ash sm:mb-0">
                        Portfolio mockup — this form doesn&rsquo;t send anywhere
                      </p>
                      <button
                        type="submit"
                        className="w-full rounded-full bg-magenta px-8 py-4 font-mono text-[11px] uppercase tracking-[0.22em] text-void transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
                        style={{ boxShadow: "0 0 28px rgba(255,45,149,.45)" }}
                      >
                        Send request
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
