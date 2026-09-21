"use client";

import { useEffect, useRef } from "react";

/**
 * A magenta dot with a cyan ring trailing behind it.
 * Only switches on for precise pointers, and never for reduced-motion users —
 * on a phone or for anyone who asked for calm, the native cursor is left alone.
 * Visibility is toggled on the DOM node rather than in state, so nothing
 * re-renders while the pointer moves.
 */
export default function Cursor() {
  const wrap = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || calm.matches) return;

    wrap.current?.classList.add("is-on");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let frame = 0;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      const over = (e.target as Element | null)?.closest?.(
        "a, button, input, select, textarea, summary, [data-cursor]",
      );
      ring.current?.classList.toggle("is-hot", Boolean(over));
    };

    const loop = () => {
      // ease toward the pointer so the ring lags a beat behind the dot
      rx += (x - rx) * 0.14;
      ry += (y - ry) * 0.14;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    frame = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={wrap} aria-hidden className="orchid-cursor">
      <div
        ref={ring}
        className="orchid-ring pointer-events-none fixed left-0 top-0 z-60 h-9 w-9 rounded-full border border-cyan/70"
      />
      <div
        ref={dot}
        className="orchid-dot pointer-events-none fixed left-0 top-0 z-60 h-1.5 w-1.5 rounded-full bg-magenta"
      />
      <style>{`
        .orchid-cursor .orchid-ring,
        .orchid-cursor .orchid-dot { display: none; }
        .orchid-cursor.is-on .orchid-ring,
        .orchid-cursor.is-on .orchid-dot { display: block; }
        .orchid-dot { box-shadow: 0 0 10px #ff2d95, 0 0 24px #ff2d95; }
        .orchid-ring {
          transition: width .25s ease, height .25s ease, background-color .25s ease, border-color .25s ease;
          box-shadow: 0 0 12px rgba(36,224,255,.45);
        }
        .orchid-ring.is-hot {
          width: 3.25rem;
          height: 3.25rem;
          background-color: rgba(255,45,149,.12);
          border-color: rgba(255,45,149,.85);
          box-shadow: 0 0 18px rgba(255,45,149,.55);
        }
      `}</style>
    </div>
  );
}
