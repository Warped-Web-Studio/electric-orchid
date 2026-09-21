"use client";

import Image from "next/image";
import { useId, useRef, useState, type DragEvent } from "react";
import type { ReferenceImage } from "./request";
import { errorCls, labelCls } from "./ui";

const MAX_BYTES = 10 * 1024 * 1024;

type Props = {
  images: ReferenceImage[];
  max: number;
  onAdd: (added: ReferenceImage[]) => void;
  onRemove: (id: string) => void;
};

/**
 * Reference photos, previewed straight from memory with object URLs.
 * Nothing is uploaded: the files never leave the browser tab, and the URLs
 * are revoked when an image is removed or the request is reset.
 */
export default function ReferenceImages({ images, max, onAdd, onRemove }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);
  const hintId = useId();
  const errorId = useId();
  const room = max - images.length;

  function add(list: FileList | null) {
    if (!list || list.length === 0) return;
    const files = Array.from(list);
    const problems: string[] = [];

    const pictures = files.filter((f) => f.type.startsWith("image/"));
    if (pictures.length < files.length) problems.push("Only image files work here.");

    const small = pictures.filter((f) => f.size <= MAX_BYTES);
    if (small.length < pictures.length) problems.push("Keep each image under 10 MB.");

    const fits = small.slice(0, Math.max(room, 0));
    if (fits.length < small.length)
      problems.push(`That's the limit — ${max} images at most.`);

    setError(problems.join(" "));
    if (fits.length === 0) return;

    onAdd(
      fits.map((file) => ({
        id: `${file.name}-${file.lastModified}-${Math.random().toString(36).slice(2, 8)}`,
        file,
        url: URL.createObjectURL(file),
      })),
    );
  }

  function remove(id: string) {
    onRemove(id);
    setError("");
    // the button that had focus is gone — hand it back to the picker
    inputRef.current?.focus();
  }

  function onDrop(e: DragEvent) {
    e.preventDefault();
    setDragging(false);
    add(e.dataTransfer.files);
  }

  return (
    <div>
      <span className={labelCls} id={`${hintId}-label`}>
        Reference images <span className="normal-case tracking-normal">(optional)</span>
      </span>

      <input
        ref={inputRef}
        id="bk-references"
        type="file"
        accept="image/*"
        multiple
        onChange={(e) => {
          add(e.target.files);
          // let the same file be picked again after removing it
          e.target.value = "";
        }}
        aria-labelledby={`${hintId}-label ${hintId}-cta`}
        aria-describedby={error ? `${hintId} ${errorId}` : hintId}
        aria-invalid={error ? true : undefined}
        className="peer sr-only"
      />
      <label
        htmlFor="bk-references"
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        className={`flex min-h-24 flex-col items-center justify-center gap-1 rounded-sm border border-dashed px-4 py-5 text-center transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-cyan ${
          dragging
            ? "border-magenta bg-magenta/10"
            : "cursor-pointer border-bone/20 bg-ink/40 hover:border-bone/40"
        }`}
      >
        <span id={`${hintId}-cta`} className="text-sm text-bone/85">
          {room > 0 ? "Add photos" : `That's ${max} — remove one to swap it`}
        </span>
        <span id={hintId} className="font-mono text-[10px] uppercase tracking-[0.16em] text-ash">
          Up to {max} images · 10 MB each · stays on your device
        </span>
      </label>

      {error && (
        <p id={errorId} className={errorCls} role="alert">
          {error}
        </p>
      )}

      {images.length > 0 && (
        <ul className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-5">
          {images.map((img, i) => (
            <li key={img.id} className="relative">
              <div className="relative aspect-square overflow-hidden rounded-sm border border-bone/15 bg-ink">
                <Image
                  src={img.url}
                  alt={`Reference ${i + 1}: ${img.file.name}`}
                  fill
                  sizes="(max-width: 640px) 30vw, 120px"
                  className="object-cover"
                />
              </div>
              <button
                type="button"
                onClick={() => remove(img.id)}
                aria-label={`Remove reference ${i + 1}, ${img.file.name}`}
                className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border border-bone/25 bg-void text-base leading-none transition-colors hover:border-magenta hover:text-magenta"
              >
                <span aria-hidden>×</span>
              </button>
            </li>
          ))}
        </ul>
      )}

      <p className="sr-only" aria-live="polite">
        {images.length} of {max} reference images added
      </p>
    </div>
  );
}
