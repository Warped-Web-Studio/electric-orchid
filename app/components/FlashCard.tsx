"use client";

import FlashArt from "./FlashArt";
import { pickFlash } from "./booking/request";
import type { Flash } from "../data/studio";

/**
 * One design on the flash sheet. Available pieces carry a full-card button
 * that drops the design into the booking form; claimed pieces have nothing
 * to press.
 */
export default function FlashCard({ item }: { item: Flash }) {
  return (
    <article
      className={`sweep panel group relative flex h-full flex-col items-center rounded-sm p-4 text-center transition-colors duration-500 sm:p-6 ${
        item.claimed ? "opacity-55" : "hover:bg-slab/70"
      }`}
    >
      {item.claimed && (
        <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 -rotate-12 whitespace-nowrap rounded-sm border border-magenta/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-magenta">
          Claimed
        </span>
      )}

      <FlashArt
        art={item.art}
        className={`h-20 w-20 text-bone/85 transition-all duration-500 sm:h-24 sm:w-24 ${
          item.claimed
            ? ""
            : "group-hover:text-magenta group-hover:drop-shadow-[0_0_14px_rgba(255,45,149,0.8)]"
        }`}
      />

      <h3 className="display mt-4 text-lg sm:text-xl">{item.name}</h3>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ash">
        {item.size} · {item.artist}
      </p>
      <p className="mt-3 font-mono text-sm text-gold">{item.price}</p>

      {!item.claimed && (
        <>
          <span
            aria-hidden
            className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-bone/45 transition-colors group-hover:text-magenta"
          >
            Book it →
          </span>
          <button
            type="button"
            onClick={() => pickFlash(item)}
            aria-label={`Book ${item.name}: ${item.size}, by ${item.artist}, ${item.price}`}
            className="absolute inset-0 z-20 rounded-sm"
          />
        </>
      )}
    </article>
  );
}
