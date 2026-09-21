import { artists, booking, type Flash } from "../../data/studio";

/**
 * Everything the simulated booking flow knows about a request. Nothing here
 * is ever sent anywhere — it lives in React state and is dropped on reset.
 */

export type FlashChoice = {
  name: string;
  /** the flash sheet's own size, e.g. 4" */
  size: string;
  price: string;
  /** artist's full name, matching the select's option values */
  artist: string;
};

export type BookingRequest = {
  name: string;
  email: string;
  instagram: string;
  artist: string;
  style: string;
  placement: string;
  size: string;
  budget: string;
  availability: string[];
  idea: string;
  adult: boolean;
  flash: FlashChoice | null;
};

/** a reference image previewed from memory — the File never leaves the tab */
export type ReferenceImage = {
  id: string;
  file: File;
  url: string;
};

export const emptyRequest: BookingRequest = {
  name: "",
  email: "",
  instagram: "",
  artist: "",
  style: "",
  placement: "",
  size: "",
  budget: "",
  availability: [],
  idea: "",
  adult: false,
  flash: null,
};

export type Field =
  | "name"
  | "email"
  | "instagram"
  | "style"
  | "placement"
  | "size"
  | "budget"
  | "availability"
  | "idea"
  | "adult";

export type Errors = Partial<Record<Field, string>>;

/** form order — the error summary lists problems top to bottom */
export const fieldOrder: Field[] = [
  "name",
  "email",
  "instagram",
  "style",
  "placement",
  "size",
  "budget",
  "availability",
  "idea",
  "adult",
];

/** the element to focus when a field's error link is followed */
export const fieldId = (field: Field) =>
  field === "availability" ? "bk-availability-0" : `bk-${field}`;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const handlePattern = /^@?[A-Za-z0-9._]{1,30}$/;

export function validate(req: BookingRequest): Errors {
  const errors: Errors = {};

  if (!req.name.trim()) errors.name = "We need something to call you.";

  if (!req.email.trim()) errors.email = "Add an email so we can write back.";
  else if (!emailPattern.test(req.email.trim()))
    errors.email = "That email doesn't look right — check for typos.";

  if (req.instagram.trim() && !handlePattern.test(req.instagram.trim()))
    errors.instagram =
      "Handles are letters, numbers, dots and underscores — 30 at most.";

  // a flash piece already is a style
  if (!req.flash && !req.style) errors.style = "Pick a style, or “Not sure yet”.";
  if (!req.placement) errors.placement = "Tell us roughly where it's going.";
  if (!req.size) errors.size = "Pick a rough size — it sets the deposit.";
  if (!req.budget) errors.budget = "Pick a range — “Not sure yet” is fine.";
  if (req.availability.length === 0)
    errors.availability = "Tick at least one time that could work.";

  // flash is already drawn, so the idea is optional there
  if (!req.flash && req.idea.trim().length < 10)
    errors.idea = req.idea.trim()
      ? "Give us a little more than that to draw from."
      : "Give us a sentence or two to start from.";

  if (!req.adult) errors.adult = "You need to be 18 or older to book.";

  return errors;
}

export function depositFor(size: string): number {
  return booking.deposits[size] ?? 0;
}

/** 2" → Under 3", 3"–5" → 3"–6" … so a flash pick lands in the size select */
export function sizeBucket(flashSize: string): string {
  const inches = parseFloat(flashSize);
  if (Number.isNaN(inches)) return "";
  if (inches < 3) return booking.sizes[0];
  if (inches <= 6) return booking.sizes[1];
  if (inches <= 10) return booking.sizes[2];
  return booking.sizes[3];
}

export function flashChoice(item: Flash): FlashChoice {
  const artist =
    artists.find((a) => a.name.split(" ")[0] === item.artist)?.name ?? "";
  return { name: item.name, size: item.size, price: item.price, artist };
}

/* ── flash → booking hand-off ──────────────────────────────────────────── */

/**
 * The flash sheet and the booking panel sit in different parts of the page;
 * a window event lets the flash cards stay tiny client islands instead of
 * pulling the whole page under one client provider.
 */
export const FLASH_PICK_EVENT = "eo:flash-pick";

export function pickFlash(item: Flash) {
  window.dispatchEvent(
    new CustomEvent<FlashChoice>(FLASH_PICK_EVENT, { detail: flashChoice(item) }),
  );
}
