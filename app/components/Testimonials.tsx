import Image from "next/image";
import Reveal from "./Reveal";
import { testimonials } from "../data/studio";

export default function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-4">
            <span className="label">Word of mouth</span>
            <h2 className="display display-lg mt-3">
              What people say <span className="text-cyan">after</span>
            </h2>

            <div className="duo duo-hover mt-8 hidden aspect-4/5 rounded-sm border border-bone/10 lg:block">
              <Image
                src="/img/process-artist.jpg"
                alt="An artist part-way through a session"
                fill
                sizes="30vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="grid gap-4 lg:col-span-8 lg:content-start">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 110}>
                <figure
                  className={`panel relative rounded-sm p-6 sm:p-8 ${
                    i === 1 ? "lg:ml-12" : ""
                  } ${i === 2 ? "lg:ml-24" : ""}`}
                >
                  <span
                    aria-hidden
                    className="script absolute -top-3 left-5 text-6xl leading-none text-magenta/45 sm:text-7xl"
                  >
                    &ldquo;
                  </span>
                  <blockquote className="relative text-[15px] leading-relaxed text-bone/85 sm:text-lg">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="display text-base">{t.name}</span>
                    <span className="h-1 w-1 rotate-45 bg-cyan" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ash">
                      {t.piece}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
