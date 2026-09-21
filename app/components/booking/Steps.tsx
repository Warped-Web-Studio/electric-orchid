"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import DemoTag from "../DemoTag";
import { booking } from "../../data/studio";
import { depositFor, type BookingRequest, type ReferenceImage } from "./request";
import {
  demoNoteCls,
  errorCls,
  primaryBtn,
  primaryGlow,
  secondaryBtn,
  stepHeading,
} from "./ui";

const money = (n: number) => `$${n.toLocaleString("en-US")}`;

/** the heading each step opens on — focused on arrival so the change is announced */
function StepHeading({ kicker, children }: { kicker: string; children: ReactNode }) {
  return (
    <div>
      <p className="label">{kicker}</p>
      <h3 data-step-heading tabIndex={-1} className={`${stepHeading} mt-3`}>
        {children}
      </h3>
    </div>
  );
}

function Actions({ children }: { children: ReactNode }) {
  return (
    <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-end">
      {children}
    </div>
  );
}

/* ── 1 · summary ───────────────────────────────────────────────────────── */

export function Summary({
  request: req,
  images,
  onEdit,
  onContinue,
}: {
  request: BookingRequest;
  images: ReferenceImage[];
  onEdit: () => void;
  onContinue: () => void;
}) {
  const rows: [string, ReactNode][] = [
    ["Name", req.name],
    ["Email", req.email],
    ["Instagram", req.instagram || "—"],
    ["Artist", req.artist || "No preference"],
    req.flash
      ? ["Flash", `${req.flash.name} · ${req.flash.size} · ${req.flash.price}`]
      : ["Style", req.style],
    ["Placement", req.placement],
    ["Size", req.size],
    ["Budget", req.budget],
    ["Availability", req.availability.join(", ")],
  ];

  return (
    <div>
      <StepHeading kicker="Check it over">
        Your <span className="text-cyan">request</span>
      </StepHeading>

      <dl className="mt-8 divide-y divide-bone/10 border-y border-bone/10">
        {rows.map(([term, value]) => (
          <div key={term} className="grid gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ash">
              {term}
            </dt>
            <dd className="break-words text-sm text-bone/85 sm:col-span-2">{value}</dd>
          </div>
        ))}
        {req.idea.trim() && (
          <div className="grid gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ash">
              {req.flash ? "Changes" : "The idea"}
            </dt>
            <dd className="whitespace-pre-line break-words text-sm leading-relaxed text-bone/85 sm:col-span-2">
              {req.idea}
            </dd>
          </div>
        )}
        {images.length > 0 && (
          <div className="grid gap-2 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ash">
              References
            </dt>
            <dd className="sm:col-span-2">
              <ul className="flex flex-wrap gap-2">
                {images.map((img, i) => (
                  <li
                    key={img.id}
                    className="relative h-16 w-16 overflow-hidden rounded-sm border border-bone/15"
                  >
                    <Image
                      src={img.url}
                      alt={`Reference ${i + 1}: ${img.file.name}`}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        )}
      </dl>

      <Actions>
        <button type="button" onClick={onEdit} className={secondaryBtn}>
          Edit request
        </button>
        <button type="button" onClick={onContinue} className={primaryBtn} style={primaryGlow}>
          Looks right
        </button>
      </Actions>
    </div>
  );
}

/* ── 2 · deposit ───────────────────────────────────────────────────────── */

export function Deposit({
  request: req,
  onBack,
  onPaid,
}: {
  request: BookingRequest;
  onBack: () => void;
  onPaid: () => void;
}) {
  const amount = depositFor(req.size);
  const [paying, setPaying] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  return (
    <div>
      <StepHeading kicker="Deposit">
        Hold the <span className="text-magenta">chair</span>
      </StepHeading>

      <p
        className="mt-6 rounded-sm border border-gold/60 bg-gold/5 px-4 py-3 font-mono text-[11px] uppercase leading-relaxed tracking-[0.16em] text-gold"
      >
        Demo — no payment is taken
      </p>

      <div className="mt-6 grid gap-5 lg:grid-cols-5">
        {/* order */}
        <div className="rounded-sm border border-bone/12 p-5 lg:col-span-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ash">
            Order
          </p>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-bone/70">
                {req.flash ? `Flash — ${req.flash.name}` : `${req.size} piece`}
              </dt>
              <dd className="text-bone/85">{req.artist || "Artist on consult"}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-bone/70">Deposit · {req.size}</dt>
              <dd className="font-mono">{money(amount)}</dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-bone/10 pt-3">
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em]">
                Due today
              </dt>
              <dd className="display text-2xl text-gold">{money(amount)}</dd>
            </div>
          </dl>
          <p className="mt-4 text-xs leading-relaxed text-ash">
            Comes off the final price. Moves with you on 48 hours&rsquo; notice.
          </p>
        </div>

        {/* a picture of a card, not a card form — there is nothing to type */}
        <div className="flex flex-col rounded-sm border border-bone/12 p-5 lg:col-span-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ash">
            Pay with
          </p>
          <div
            aria-label="Demo card, nothing to enter"
            role="img"
            className="mt-4 flex aspect-[1.586] w-full max-w-xs flex-col justify-between rounded-md p-4"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,45,149,.55), rgba(122,43,214,.55) 50%, rgba(36,224,255,.45))",
            }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/90">
              Demo card
            </span>
            <span className="font-mono text-sm tracking-[0.2em] text-bone">
              •••• •••• •••• 0000
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/80">
              Nothing to enter
            </span>
          </div>
        </div>
      </div>

      <Actions>
        <button type="button" onClick={onBack} disabled={paying} className={secondaryBtn}>
          Back
        </button>
        <button
          type="button"
          disabled={paying}
          aria-busy={paying}
          onClick={() => {
            setPaying(true);
            // a beat of "processing" so it reads like a checkout — nothing is sent
            timer.current = window.setTimeout(onPaid, 900);
          }}
          className={primaryBtn}
          style={primaryGlow}
        >
          {paying ? "Processing…" : `Pay ${money(amount)}`}
        </button>
      </Actions>
      <p className="sr-only" aria-live="polite">
        {paying ? "Processing demo payment" : ""}
      </p>
    </div>
  );
}

/* ── 3 · sample waiver ─────────────────────────────────────────────────── */

export function Waiver({ onSigned }: { onSigned: () => void }) {
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState(false);
  const checkRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <StepHeading kicker={booking.waiver.label}>
        The <span className="text-cyan">small print</span>
      </StepHeading>
      <DemoTag className="mt-4">Sample — not a legal document</DemoTag>

      <p className="mt-6 max-w-prose text-sm leading-relaxed text-bone/70">
        {booking.waiver.intro}
      </p>

      <ol className="mt-6 space-y-3 border-l border-magenta/40 pl-5">
        {booking.waiver.points.map((point, i) => (
          <li key={point} className="flex gap-3 text-sm leading-relaxed text-bone/80">
            <span className="font-mono text-[10px] text-ash">0{i + 1}</span>
            <span>{point}</span>
          </li>
        ))}
      </ol>

      <label className="mt-8 flex cursor-pointer items-start gap-3 py-1 text-sm text-bone/75">
        <input
          ref={checkRef}
          id="bk-waiver"
          type="checkbox"
          checked={agreed}
          onChange={(e) => {
            setAgreed(e.target.checked);
            if (e.target.checked) setError(false);
          }}
          aria-invalid={error || undefined}
          aria-describedby={error ? "bk-waiver-error" : undefined}
          className="check mt-0.5 shrink-0"
        />
        <span>I&rsquo;ve read the sample form and I&rsquo;d sign it.</span>
      </label>
      {error && (
        <p id="bk-waiver-error" className={errorCls}>
          Tick the box to sign. Anything you&rsquo;re unsure of, bring it to the consult.
        </p>
      )}

      <Actions>
        <button
          type="button"
          onClick={() => {
            if (agreed) onSigned();
            else {
              setError(true);
              checkRef.current?.focus();
            }
          }}
          className={primaryBtn}
          style={primaryGlow}
        >
          Sign &amp; finish
        </button>
      </Actions>
    </div>
  );
}

/* ── 4 · booked ────────────────────────────────────────────────────────── */

export function Booked({
  request: req,
  onReset,
}: {
  request: BookingRequest;
  onReset: () => void;
}) {
  const first = req.name.trim().split(/\s+/)[0];
  return (
    <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
      <span className="script text-5xl text-cyan neon-text-cyan sm:text-6xl">
        See you soon{first ? `, ${first}` : ""}.
      </span>
      <h3 data-step-heading tabIndex={-1} className={`${stepHeading} mt-4`}>
        You&rsquo;re booked
      </h3>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-bone/65">
        {req.artist ? req.artist.split(" ")[0] : "Whoever's the best fit"} will
        pick a date from your availability and email you within two business
        days. Deposit of {money(depositFor(req.size))} held.
      </p>
      <p className={`${demoNoteCls} mt-6`}>{booking.demoNote}</p>
      <button type="button" onClick={onReset} className={`${secondaryBtn} mt-8`}>
        Start another
      </button>
    </div>
  );
}
