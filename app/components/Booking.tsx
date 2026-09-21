import Image from "next/image";
import BookingPanel from "./booking/BookingPanel";
import DemoTag from "./DemoTag";
import Reveal from "./Reveal";
import { booking, studio } from "../data/studio";

export default function Booking() {
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

              <DemoTag className="mt-8">Demo contact details</DemoTag>
              <dl className="mt-4 space-y-3 font-mono text-xs">
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
                  // desktop only (lg:block): 5 of 12 columns, 1400px container
                  sizes="(min-width: 1400px) 515px, 36vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* form */}
          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <BookingPanel />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
