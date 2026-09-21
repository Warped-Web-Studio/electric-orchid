/**
 * Every word and image path on the page lives here, so the mockup can be
 * re-skinned for a different studio without touching a component.
 */

export const studio = {
  name: "Electric Orchid",
  nameLines: ["Electric", "Orchid"],
  kind: "Tattoo & Fine Line Studio",
  est: 2014,
  city: "Portland, OR",
  address: ["1142 SE Belmont St", "Portland, OR 97214"],
  phone: "(503) 555-0148",
  email: "ink@electricorchid.studio",
  instagram: "@electricorchid",
};

export const hero = {
  kicker: "Est. 2014 · Southeast Portland",
  script: "Hold still.",
  line1: "Ink that",
  line2: "outlives",
  line3: "you.",
  blurb:
    "Four artists. One room. No flash-off-the-wall compromises — every piece is drawn for the body it's going on.",
  primaryCta: "Book a session",
  secondaryCta: "See the work",
};

export const marqueeItems = [
  "Custom work",
  "Cover-ups",
  "Fine line",
  "Neo-traditional",
  "Blackwork",
  "Walk-ins Thu–Sun",
  "18+ with ID",
  "Single-use needles",
];

export const about = {
  label: "The room",
  script: "No two the same.",
  heading: ["Drawn for", "one body", "only"],
  body: [
    "We don't keep a binder of designs waiting for a customer. You come in, we talk it through, and someone here draws the thing that only works on you — the curve of a shoulder, the way a forearm turns, the scar you want covered or kept.",
    "That takes longer. It costs more. It also means nobody else is walking around wearing your tattoo.",
  ],
  stats: [
    { value: "11", label: "Years open" },
    { value: "4", label: "Resident artists" },
    { value: "6.2k", label: "Pieces finished" },
    { value: "100%", label: "Single-use tooling" },
  ],
};

export type Artist = {
  name: string;
  handle: string;
  specialty: string;
  bio: string;
  tags: string[];
  image: string;
  width: number;
  height: number;
  booking: "Open" | "Waitlist" | "Closed";
};

export const artists: Artist[] = [
  {
    name: "Mara Voss",
    handle: "@voss.needle",
    specialty: "Fine line & botanical",
    bio: "Single-needle work so light it reads like a pencil study. Books out six weeks ahead, every time.",
    tags: ["Fine line", "Botanical", "Micro"],
    image: "/img/artist-mara.jpg",
    width: 1200,
    height: 1805,
    booking: "Waitlist",
  },
  {
    name: "Silas Kane",
    handle: "@kaneelectric",
    specialty: "Neo-traditional & colour",
    bio: "Heavy black, saturated colour, and a bold line that will still read across a room in thirty years.",
    tags: ["Neo-trad", "Colour", "Large scale"],
    image: "/img/artist-silas.jpg",
    width: 1200,
    height: 1500,
    booking: "Open",
  },
  {
    name: "June Halloran",
    handle: "@hallowmark",
    specialty: "Blackwork & ornamental",
    bio: "Geometry, dotwork and things with teeth. Brings a sketchbook to every consult and fills it.",
    tags: ["Blackwork", "Ornamental", "Dotwork"],
    image: "/img/artist-june.jpg",
    width: 1200,
    height: 1800,
    booking: "Open",
  },
  {
    name: "Koa Reyes",
    handle: "@reyesblackgrey",
    specialty: "Black & grey realism",
    bio: "Portraits and back pieces built over multiple sittings. Will talk you out of it if it won't age well.",
    tags: ["Realism", "Black & grey", "Cover-up"],
    image: "/img/artist-koa.jpg",
    width: 1200,
    height: 1800,
    booking: "Waitlist",
  },
];

export const galleryStyles = [
  "All",
  "Fine line",
  "Neo-trad",
  "Blackwork",
  "Black & grey",
] as const;

export type GalleryStyle = (typeof galleryStyles)[number];

export type Work = {
  title: string;
  artist: string;
  style: Exclude<GalleryStyle, "All">;
  image: string;
  width: number;
  height: number;
};

export const gallery: Work[] = [
  {
    title: "Saturday Morning",
    artist: "Silas Kane",
    style: "Neo-trad",
    image: "/img/work-color-sleeve.jpg",
    width: 1200,
    height: 2133,
  },
  {
    title: "Own Terms",
    artist: "Mara Voss",
    style: "Fine line",
    image: "/img/work-script-neck.jpg",
    width: 1200,
    height: 1800,
  },
  {
    title: "Hard to Kill",
    artist: "Mara Voss",
    style: "Fine line",
    image: "/img/work-fineline-arm.jpg",
    width: 1200,
    height: 1800,
  },
  {
    title: "Peony, Unfinished",
    artist: "Mara Voss",
    style: "Fine line",
    image: "/img/work-floral-hand.jpg",
    width: 1200,
    height: 800,
  },
  {
    title: "Widow's Chest",
    artist: "June Halloran",
    style: "Blackwork",
    image: "/img/work-web-chest.jpg",
    width: 1200,
    height: 1800,
  },
  {
    title: "First Pass",
    artist: "June Halloran",
    style: "Blackwork",
    image: "/img/work-linework.jpg",
    width: 1200,
    height: 800,
  },
  {
    title: "Throat Work",
    artist: "Koa Reyes",
    style: "Black & grey",
    image: "/img/work-neck-blue.jpg",
    width: 1200,
    height: 800,
  },
  {
    title: "Cathedral",
    artist: "Koa Reyes",
    style: "Black & grey",
    image: "/img/artist-koa.jpg",
    width: 1200,
    height: 1800,
  },
  {
    title: "Session Three",
    artist: "Silas Kane",
    style: "Neo-trad",
    image: "/img/process-leg.jpg",
    width: 1400,
    height: 933,
  },
];

export type Flash = {
  name: string;
  price: string;
  size: string;
  artist: string;
  /** key into the SVG drawings in components/FlashArt.tsx */
  art:
    | "dagger"
    | "moth"
    | "snake"
    | "rose"
    | "eye"
    | "swallow"
    | "hand"
    | "orchid";
  claimed?: boolean;
};

export const flash: Flash[] = [
  { name: "Bitter Pill", price: "$180", size: '3"', artist: "June", art: "dagger" },
  { name: "Night Moth", price: "$240", size: '4"', artist: "Mara", art: "moth" },
  { name: "Second Coil", price: "$220", size: '5"', artist: "Silas", art: "snake" },
  { name: "Old Rose", price: "$200", size: '4"', artist: "Silas", art: "rose", claimed: true },
  { name: "Keeping Watch", price: "$160", size: '2"', artist: "June", art: "eye" },
  { name: "Homeward", price: "$140", size: '3"', artist: "Koa", art: "swallow" },
  { name: "Palmistry", price: "$190", size: '4"', artist: "Mara", art: "hand", claimed: true },
  { name: "House Orchid", price: "$260", size: '5"', artist: "Koa", art: "orchid" },
];

export const flashNote =
  "Drawn this month, one of each, first to book takes it. Claimed designs stay claimed — we don't repeat flash.";

export const testimonials = [
  {
    quote:
      "I brought in a bad idea and a worse reference photo. Koa spent an hour turning it into something I'd actually want on me for the next forty years.",
    name: "Devon R.",
    piece: "Half sleeve, 4 sittings",
  },
  {
    quote:
      "Cleanest shop I've been in, and I've been in a lot of them. Mara's line work healed dead even — not one blowout.",
    name: "Priya S.",
    piece: "Fine line ribcage",
  },
  {
    quote:
      "They told me no twice before they told me yes. That's the reason I trusted them with a cover-up.",
    name: "Alex M.",
    piece: "Forearm cover-up",
  },
];

export const booking = {
  label: "Book",
  script: "Let's talk it through.",
  heading: ["Start a", "piece"],
  blurb:
    "Consults are free and take about twenty minutes. Tell us what you're after — we'll match you with the right artist and come back within two business days.",
  placements: [
    "Forearm",
    "Upper arm / sleeve",
    "Back",
    "Chest / sternum",
    "Leg",
    "Hand / neck",
    "Somewhere else",
  ],
  styles: [
    "Fine line",
    "Neo-traditional",
    "Blackwork",
    "Black & grey realism",
    "Cover-up",
    "Not sure yet",
  ],
  sizes: ['Under 3"', '3"–6"', '6"–10"', "Sleeve / back piece"],
};

export const hours = [
  { day: "Mon", time: "Closed" },
  { day: "Tue", time: "By appointment" },
  { day: "Wed", time: "By appointment" },
  { day: "Thu", time: "12 – 20" },
  { day: "Fri", time: "12 – 22" },
  { day: "Sat", time: "11 – 22" },
  { day: "Sun", time: "11 – 18" },
];

export const nav = [
  { label: "Studio", href: "#studio" },
  { label: "Artists", href: "#artists" },
  { label: "Work", href: "#work" },
  { label: "Flash", href: "#flash" },
  { label: "Book", href: "#book" },
];

export const footerNote =
  "Electric Orchid is a fictional studio built as a portfolio mockup. Nothing here is a real business, and no booking is actually sent.";
