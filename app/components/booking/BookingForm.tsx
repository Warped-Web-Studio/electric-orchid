"use client";

import { useRef, useState, type ReactNode } from "react";
import FlashArt from "../FlashArt";
import { artists, booking, flash as flashSheet } from "../../data/studio";
import ReferenceImages from "./ReferenceImages";
import {
  fieldId,
  fieldOrder,
  validate,
  type BookingRequest,
  type Field,
  type ReferenceImage,
} from "./request";
import {
  demoNoteCls,
  errorCls,
  field,
  labelCls,
  primaryBtn,
  primaryGlow,
} from "./ui";

type Props = {
  request: BookingRequest;
  onChange: (patch: Partial<BookingRequest>) => void;
  images: ReferenceImage[];
  onAddImages: (added: ReferenceImage[]) => void;
  onRemoveImage: (id: string) => void;
  onReview: () => void;
};

const errId = (f: Field) => `bk-${f}-error`;

function Optional() {
  return <span className="normal-case tracking-normal"> (optional)</span>;
}

export default function BookingForm({
  request: req,
  onChange,
  images,
  onAddImages,
  onRemoveImage,
  onReview,
}: Props) {
  // errors stay quiet until the first submit, then update as you fix them
  const [attempted, setAttempted] = useState(false);
  const summaryRef = useRef<HTMLHeadingElement>(null);

  const errors = attempted ? validate(req) : {};
  const problems = fieldOrder.filter((f) => errors[f]);

  const a11y = (f: Field) =>
    errors[f]
      ? { "aria-invalid": true as const, "aria-describedby": errId(f) }
      : {};

  const err = (f: Field) =>
    errors[f] ? (
      <p id={errId(f)} className={errorCls}>
        {errors[f]}
      </p>
    ) : null;

  const flashItem = req.flash
    ? flashSheet.find((f) => f.name === req.flash?.name)
    : undefined;

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        setAttempted(true);
        if (Object.keys(validate(req)).length === 0) {
          onReview();
        } else {
          // let the summary render, then land on it so every problem is read out
          requestAnimationFrame(() => summaryRef.current?.focus());
        }
      }}
      className="grid gap-5 sm:grid-cols-2"
    >
      {problems.length > 0 && (
        <div className="rounded-sm border border-magenta/60 bg-magenta/5 p-4 sm:col-span-2 sm:p-5">
          <h3
            ref={summaryRef}
            tabIndex={-1}
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone"
          >
            {problems.length === 1
              ? "One thing to fix"
              : `${problems.length} things to fix`}
          </h3>
          <ul className="mt-3 space-y-1.5 text-sm">
            {problems.map((f) => (
              <li key={f}>
                <a
                  href={`#${fieldId(f)}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(fieldId(f));
                    el?.focus();
                    el?.scrollIntoView({ block: "center" });
                  }}
                  className="text-magenta underline decoration-magenta/40 underline-offset-4 hover:decoration-magenta"
                >
                  {errors[f]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {req.flash && (
        <div
          id="bk-flash"
          tabIndex={-1}
          className="flex items-center gap-4 rounded-sm border border-magenta/50 bg-magenta/5 p-4 sm:col-span-2"
        >
          {flashItem && (
            <FlashArt art={flashItem.art} className="h-14 w-14 shrink-0 text-magenta" />
          )}
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ash">
              Flash piece
            </p>
            <p className="display mt-1 text-xl">{req.flash.name}</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ash">
              {req.flash.size} · {req.flash.artist.split(" ")[0]} ·{" "}
              <span className="text-gold">{req.flash.price}</span>
            </p>
          </div>
          <button
            type="button"
            onClick={() => onChange({ flash: null })}
            className="min-h-11 shrink-0 rounded-full border border-bone/25 px-4 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors hover:border-magenta"
          >
            Remove<span className="sr-only"> {req.flash.name}</span>
          </button>
        </div>
      )}

      <div>
        <label className={labelCls} htmlFor="bk-name">
          Name
        </label>
        <input
          id="bk-name"
          name="name"
          autoComplete="name"
          placeholder="Who are we drawing for?"
          value={req.name}
          onChange={(e) => onChange({ name: e.target.value })}
          aria-required
          className={field}
          {...a11y("name")}
        />
        {err("name")}
      </div>

      <div>
        <label className={labelCls} htmlFor="bk-email">
          Email
        </label>
        <input
          id="bk-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="you@somewhere.com"
          value={req.email}
          onChange={(e) => onChange({ email: e.target.value })}
          aria-required
          className={field}
          {...a11y("email")}
        />
        {err("email")}
      </div>

      <div>
        <label className={labelCls} htmlFor="bk-instagram">
          Instagram
          <Optional />
        </label>
        <input
          id="bk-instagram"
          name="instagram"
          autoComplete="off"
          autoCapitalize="none"
          spellCheck={false}
          placeholder="@yourhandle"
          value={req.instagram}
          onChange={(e) => onChange({ instagram: e.target.value })}
          className={field}
          {...a11y("instagram")}
        />
        {err("instagram")}
      </div>

      <div>
        <label className={labelCls} htmlFor="bk-artist">
          Artist
        </label>
        <select
          id="bk-artist"
          name="artist"
          className={field}
          value={req.artist}
          onChange={(e) => onChange({ artist: e.target.value })}
        >
          <option value="">No preference</option>
          {artists.map((a) => (
            <option key={a.name} value={a.name}>
              {a.name} — {a.specialty}
            </option>
          ))}
        </select>
      </div>

      {!req.flash && (
        <Select
          f="style"
          label="Style"
          placeholder="Pick one"
          options={booking.styles}
          value={req.style}
          onChange={(style) => onChange({ style })}
          a11y={a11y("style")}
          error={err("style")}
        />
      )}

      <Select
        f="placement"
        label="Placement"
        placeholder="Where on you?"
        options={booking.placements}
        value={req.placement}
        onChange={(placement) => onChange({ placement })}
        a11y={a11y("placement")}
        error={err("placement")}
      />

      <Select
        f="size"
        label="Rough size"
        placeholder="Pick one"
        options={booking.sizes}
        value={req.size}
        onChange={(size) => onChange({ size })}
        a11y={a11y("size")}
        error={err("size")}
      />

      <Select
        f="budget"
        label="Budget"
        placeholder="Roughly"
        options={booking.budgets}
        value={req.budget}
        onChange={(budget) => onChange({ budget })}
        a11y={a11y("budget")}
        error={err("budget")}
      />

      <fieldset
        className="sm:col-span-2"
        aria-describedby={errors.availability ? errId("availability") : undefined}
      >
        <legend className={labelCls}>When could you come in?</legend>
        <div className="grid gap-x-5 sm:grid-cols-2">
          {booking.availability.map((slot, i) => {
            const on = req.availability.includes(slot);
            return (
              <label
                key={slot}
                className="flex min-h-11 cursor-pointer items-center gap-3 text-sm text-bone/75"
              >
                <input
                  id={`bk-availability-${i}`}
                  type="checkbox"
                  name="availability"
                  value={slot}
                  checked={on}
                  onChange={() =>
                    onChange({
                      availability: on
                        ? req.availability.filter((s) => s !== slot)
                        : [...req.availability, slot],
                    })
                  }
                  aria-invalid={errors.availability ? true : undefined}
                  className="check shrink-0"
                />
                {slot}
              </label>
            );
          })}
        </div>
        {err("availability")}
      </fieldset>

      <div className="sm:col-span-2">
        <ReferenceImages
          images={images}
          max={booking.maxReferences}
          onAdd={onAddImages}
          onRemove={onRemoveImage}
        />
      </div>

      <div className="sm:col-span-2">
        <label className={labelCls} htmlFor="bk-idea">
          {req.flash ? (
            <>
              Anything to change?
              <Optional />
            </>
          ) : (
            "The idea"
          )}
        </label>
        <textarea
          id="bk-idea"
          name="idea"
          rows={5}
          placeholder={
            req.flash
              ? "Flash goes on as drawn, but tell us if you want it mirrored, recoloured or scaled."
              : "What it's of, what it's for, anything you've already got nearby."
          }
          value={req.idea}
          onChange={(e) => onChange({ idea: e.target.value })}
          aria-required={!req.flash}
          className={`${field} resize-y`}
          {...a11y("idea")}
        />
        {err("idea")}
      </div>

      <div className="sm:col-span-2">
        <label className="flex cursor-pointer items-start gap-3 py-1 text-sm text-bone/70">
          <input
            id="bk-adult"
            type="checkbox"
            name="age"
            checked={req.adult}
            onChange={(e) => onChange({ adult: e.target.checked })}
            aria-required
            className="check mt-0.5 shrink-0"
            {...a11y("adult")}
          />
          <span>
            I&rsquo;m 18 or older and I&rsquo;ll bring photo ID to the
            appointment.
          </span>
        </label>
        {err("adult")}
      </div>

      <div className="sm:col-span-2 sm:flex sm:items-center sm:justify-between sm:gap-6">
        <p className={`${demoNoteCls} mb-4 sm:mb-0`}>{booking.demoNote}</p>
        <button type="submit" className={primaryBtn} style={primaryGlow}>
          Review request
        </button>
      </div>
    </form>
  );
}

type SelectProps = {
  f: Field;
  label: string;
  placeholder: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  a11y: object;
  error: ReactNode;
};

function Select({
  f,
  label,
  placeholder,
  options,
  value,
  onChange,
  a11y,
  error,
}: SelectProps) {
  return (
    <div>
      <label className={labelCls} htmlFor={`bk-${f}`}>
        {label}
      </label>
      <select
        id={`bk-${f}`}
        name={f}
        className={field}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-required
        {...a11y}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error}
    </div>
  );
}
