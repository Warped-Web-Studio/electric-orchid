"use client";

import { useEffect, useRef, useState } from "react";
import BookingForm from "./BookingForm";
import { Booked, Deposit, Summary, Waiver } from "./Steps";
import {
  emptyRequest,
  FLASH_PICK_EVENT,
  sizeBucket,
  type BookingRequest,
  type FlashChoice,
  type ReferenceImage,
} from "./request";

type Step = "form" | "summary" | "deposit" | "waiver" | "booked";

const progress = [
  { label: "Request", steps: ["form", "summary"] },
  { label: "Deposit", steps: ["deposit"] },
  { label: "Consent", steps: ["waiver"] },
  { label: "Booked", steps: ["booked"] },
] as const;

/**
 * The whole booking flow, simulated in the browser: request → summary →
 * demo deposit → sample waiver → booked. Nothing is sent or stored.
 */
export default function BookingPanel() {
  const [step, setStep] = useState<Step>("form");
  const [request, setRequest] = useState<BookingRequest>(emptyRequest);
  const [images, setImages] = useState<ReferenceImage[]>([]);
  // bumped on every flash pick so the scroll + focus effect runs even for a repeat pick
  const [picked, setPicked] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const moved = useRef(false);

  const patch = (p: Partial<BookingRequest>) =>
    setRequest((r) => ({ ...r, ...p }));

  const go = (next: Step) => {
    moved.current = true;
    setStep(next);
  };

  // on each step change, bring the panel into view and land on its heading
  useEffect(() => {
    if (!moved.current) return;
    moved.current = false;
    const panel = panelRef.current;
    if (!panel) return;
    const rect = panel.getBoundingClientRect();
    if (rect.top < 0 || rect.top > window.innerHeight * 0.5) {
      panel.scrollIntoView({ block: "start" });
    }
    const heading = panel.querySelector<HTMLElement>("[data-step-heading]");
    (heading ?? panel.querySelector<HTMLElement>("#bk-name"))?.focus({
      preventScroll: true,
    });
  }, [step]);

  // flash cards anywhere on the page hand their design over here
  useEffect(() => {
    const onPick = (e: Event) => {
      const choice = (e as CustomEvent<FlashChoice>).detail;
      setRequest((r) => ({
        ...r,
        flash: choice,
        artist: choice.artist,
        size: sizeBucket(choice.size),
      }));
      setStep("form");
      setPicked((n) => n + 1);
    };
    window.addEventListener(FLASH_PICK_EVENT, onPick);
    return () => window.removeEventListener(FLASH_PICK_EVENT, onPick);
  }, []);

  useEffect(() => {
    if (!picked) return;
    panelRef.current?.scrollIntoView({ block: "start" });
    document.getElementById("bk-flash")?.focus({ preventScroll: true });
  }, [picked]);

  // object URLs hold the file in memory until revoked
  const imagesRef = useRef(images);
  useEffect(() => {
    imagesRef.current = images;
  }, [images]);
  useEffect(
    () => () => imagesRef.current.forEach((img) => URL.revokeObjectURL(img.url)),
    [],
  );

  const addImages = (added: ReferenceImage[]) =>
    setImages((list) => [...list, ...added]);

  const removeImage = (id: string) => {
    const gone = images.find((img) => img.id === id);
    if (gone) URL.revokeObjectURL(gone.url);
    setImages((list) => list.filter((img) => img.id !== id));
  };

  const reset = () => {
    images.forEach((img) => URL.revokeObjectURL(img.url));
    setImages([]);
    setRequest(emptyRequest);
    go("form");
  };

  const current = progress.findIndex((p) =>
    (p.steps as readonly Step[]).includes(step),
  );

  return (
    <div ref={panelRef} className="panel sweep rounded-sm p-5 sm:p-8 lg:p-10">
      <ol className="mb-8 grid grid-cols-4 gap-2" aria-label="Booking steps">
        {progress.map((p, i) => (
          <li
            key={p.label}
            aria-current={i === current ? "step" : undefined}
            className="flex flex-col gap-2"
          >
            <span
              aria-hidden
              className={`h-px w-full ${
                i <= current ? "bg-magenta shadow-[0_0_8px_rgba(255,45,149,.7)]" : "bg-bone/15"
              }`}
            />
            <span
              className={`font-mono text-[9px] uppercase tracking-[0.18em] sm:text-[10px] ${
                i === current ? "text-bone" : "text-ash/70"
              }`}
            >
              <span className="sr-only">
                Step {i + 1} of {progress.length}:{" "}
              </span>
              {p.label}
              {i < current && <span className="sr-only"> (done)</span>}
            </span>
          </li>
        ))}
      </ol>

      {step === "form" && (
        <BookingForm
          request={request}
          onChange={patch}
          images={images}
          onAddImages={addImages}
          onRemoveImage={removeImage}
          onReview={() => go("summary")}
        />
      )}
      {step === "summary" && (
        <Summary
          request={request}
          images={images}
          onEdit={() => go("form")}
          onContinue={() => go("deposit")}
        />
      )}
      {step === "deposit" && (
        <Deposit
          request={request}
          onBack={() => go("summary")}
          onPaid={() => go("waiver")}
        />
      )}
      {step === "waiver" && (
        <Waiver onSigned={() => go("booked")} />
      )}
      {step === "booked" && <Booked request={request} onReset={reset} />}
    </div>
  );
}
