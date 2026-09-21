import DemoTag from "./DemoTag";
import Reveal from "./Reveal";
import { faq } from "../data/studio";

/**
 * Policies as native <details> — keyboard and screen-reader friendly with
 * no client JavaScript, and every answer is in the HTML for find-in-page.
 */
export default function Faq() {
  return (
    <section id="faq" className="relative py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-4">
            <span className="label">{faq.label}</span>
            <p className="script mt-3 text-4xl text-cyan neon-text-cyan sm:text-5xl">
              {faq.script}
            </p>
            <h2 className="display display-col mt-3">
              {faq.heading.map((line, i) => (
                <span key={line} className={`block ${i === 1 ? "text-magenta" : ""}`}>
                  {line}
                </span>
              ))}
            </h2>
            <div className="neon-rule my-8 w-24" />
            <p className="max-w-sm text-sm leading-relaxed text-bone/65">
              {faq.blurb}
            </p>
            <DemoTag className="mt-4">Sample policies</DemoTag>
          </Reveal>

          <div className="lg:col-span-8">
            <Reveal delay={80}>
              <div className="space-y-3">
                {faq.items.map((item, i) => (
                  <details
                    key={item.q}
                    className="panel sweep group rounded-sm"
                    open={i === 0}
                  >
                    <summary className="flex min-h-16 cursor-pointer list-none items-center gap-4 px-5 py-4 sm:px-7 [&::-webkit-details-marker]:hidden">
                      <span className="font-mono text-[10px] tracking-widest text-ash">
                        0{i + 1}
                      </span>
                      <span className="display flex-1 text-xl sm:text-2xl">
                        {item.q}
                      </span>
                      <span
                        aria-hidden
                        className="relative h-3.5 w-3.5 shrink-0 text-magenta"
                      >
                        <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-current" />
                        <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-current transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                      </span>
                    </summary>
                    <div className="space-y-3 border-t border-bone/10 px-5 py-5 sm:px-7 sm:pl-[3.9rem]">
                      {item.a.map((p) => (
                        <p
                          key={p.slice(0, 18)}
                          className="max-w-prose text-[15px] leading-relaxed text-bone/75"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
