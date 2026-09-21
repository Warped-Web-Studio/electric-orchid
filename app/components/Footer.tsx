import Image from "next/image";
import Link from "next/link";
import NeonMark from "./NeonMark";
import DemoTag from "./DemoTag";
import Reveal from "./Reveal";
import { footerNote, hours, moreLinks, nav, studio } from "../data/studio";

export default function Footer() {
  return (
    <footer className="relative mt-8 border-t border-bone/10">
      {/* storefront band */}
      <div className="relative h-[42svh] min-h-[300px] w-full overflow-hidden">
        <Image
          src="/img/storefront.jpg"
          alt="The studio front at night"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* feather the photo into the page without burying it */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #07050e 0%, rgba(7,5,14,.15) 35%, rgba(7,5,14,.15) 60%, #07050e 100%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 flex justify-center px-4 pb-6 sm:pb-10">
          <p className="display text-center text-[clamp(1.85rem,9vw,5.5rem)] leading-none">
            <span className="text-bone">Electric</span>{" "}
            <span className="script text-magenta neon-text normal-case">
              Orchid
            </span>
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-16 lg:px-10">
        <Reveal>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* identity */}
            <div>
              <NeonMark className="h-8 w-8 text-magenta" />
              <p className="mt-4 text-sm leading-relaxed text-bone/65">
                {studio.kind}
                <br />
                Est. {studio.est} · {studio.city}
              </p>
            </div>

            {/* find us */}
            <div>
              <h3 className="label mb-4 flex items-center gap-3">
                Find us <DemoTag />
              </h3>
              <address className="space-y-1 text-sm not-italic text-bone/70">
                {studio.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <p className="pt-2 font-mono text-xs">{studio.phone}</p>
                <p className="font-mono text-xs break-all">{studio.email}</p>
              </address>
            </div>

            {/* hours */}
            <div>
              <h3 className="label mb-4 flex items-center gap-3">
                Hours <DemoTag />
              </h3>
              <dl className="space-y-1.5 font-mono text-xs">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-baseline justify-between gap-4 border-b border-bone/8 pb-1.5"
                  >
                    <dt className="text-ash">{h.day}</dt>
                    <dd
                      className={
                        h.time === "Closed" ? "text-ash/60" : "text-bone/85"
                      }
                    >
                      {h.time}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* links */}
            <div>
              <h3 className="label mb-4">Elsewhere</h3>
              <ul className="text-sm">
                {[...nav, ...moreLinks].map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="inline-flex min-h-11 items-center text-bone/70 transition-colors hover:text-magenta"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="flex min-h-11 items-center">
                  <span className="text-bone/70">{studio.instagram}</span>
                </li>
                <li>
                  <Link
                    href="/credits"
                    className="inline-flex min-h-11 items-center text-bone/70 transition-colors hover:text-magenta"
                  >
                    Photo credits
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="neon-rule my-10 opacity-60" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-xl text-xs leading-relaxed text-ash">
            {footerNote}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ash">
            © {studio.est}–2026 · Mockup
          </p>
        </div>
      </div>
    </footer>
  );
}
