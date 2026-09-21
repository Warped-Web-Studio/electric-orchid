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
  // demo contact details: 555-01xx numbers and the .example TLD are reserved
  // for fiction, so none of these reach a real person
  email: "ink@electricorchid.example",
  instagram: "@electricorchid.demo",
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
    handle: "@mara.electricorchid.demo",
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
    handle: "@silas.electricorchid.demo",
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
    handle: "@june.electricorchid.demo",
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
    handle: "@koa.electricorchid.demo",
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

/**
 * Gallery photos are stock images of real people's tattoos, so they carry a
 * style tag only — never a title or one of our (fictional) artists' names.
 * Photographer credits live in data/credits.ts.
 */
export type Work = {
  style: Exclude<GalleryStyle, "All">;
  /** describes what's in the photo, since there's no caption to lean on */
  alt: string;
  image: string;
  width: number;
  height: number;
};

export const gallery: Work[] = [
  {
    style: "Fine line",
    alt: "Fine script lettering across the upper back, just below the hairline",
    image: "/img/work-script-neck.jpg",
    width: 1200,
    height: 1800,
  },
  {
    style: "Fine line",
    alt: "Fine line heart wreath with hand-lettered text on the back of an upper arm",
    image: "/img/work-fineline-arm.jpg",
    width: 1200,
    height: 1800,
  },
  {
    style: "Fine line",
    alt: "Fine line peony on the back of a hand",
    image: "/img/work-floral-hand.jpg",
    width: 1200,
    height: 800,
  },
  {
    style: "Neo-trad",
    alt: "Spiderweb on the chest being tattooed with a coil machine",
    image: "/img/work-web-chest.jpg",
    width: 1200,
    height: 1800,
  },
  {
    style: "Blackwork",
    alt: "A single line being pulled along a forearm",
    image: "/img/work-linework.jpg",
    width: 1200,
    height: 800,
  },
  {
    style: "Black & grey",
    alt: "An arm piece mid-session, gloved hands and a blue-wrapped grip",
    image: "/img/work-neck-blue.jpg",
    width: 1200,
    height: 800,
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
  budgets: [
    "Under $250",
    "$250 – $500",
    "$500 – $1,000",
    "$1,000 – $2,500",
    "$2,500+",
    "Not sure yet",
  ],
  availability: [
    "Tue – Wed, by appointment",
    "Thu – Fri afternoons",
    "Thu – Fri evenings",
    "Weekends",
    "Anytime — I'm flexible",
  ],
  maxReferences: 5,
  /** demo deposit per size bucket, in dollars — comes off the final price */
  deposits: {
    'Under 3"': 50,
    '3"–6"': 100,
    '6"–10"': 150,
    "Sleeve / back piece": 300,
  } as Record<string, number>,
  demoNote: "Demo booking — no real appointment is made",
  waiver: {
    label: "Sample consent form",
    intro:
      "The real one gets signed at the studio, on paper, with your ID on the counter. This is what it covers.",
    points: [
      "I'm 18 or older, and I'll bring photo ID to the appointment.",
      "I won't turn up drunk or high. If I do, the session doesn't happen and the deposit goes with it.",
      "I've told my artist about anything that affects healing — medication, allergies, skin conditions, pregnancy.",
      "I understand a tattoo is permanent, and that how it heals depends on the aftercare I do at home.",
      "I'll sign off on the final design and placement before the needle starts, and not after.",
      "My deposit comes off the final price. With 48 hours' notice it moves to a new date; inside that, it's gone.",
    ],
  },
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

/** footer-only links, so the top bar stays five items wide */
export const moreLinks = [
  { label: "FAQ", href: "#faq" },
  { label: "Aftercare", href: "#aftercare" },
];

export const faq = {
  label: "Before you book",
  script: "No surprises.",
  heading: ["House", "rules"],
  blurb:
    "The things people ask at the counter, answered before you get to the counter.",
  items: [
    {
      q: "Deposits",
      a: [
        "Every booking takes one — $50 for something under three inches, up to $300 for a sleeve or back piece. Flash too.",
        "It comes off the final price. It's also how we know you're actually coming.",
      ],
    },
    {
      q: "Cancelling or moving a date",
      a: [
        "Give us 48 hours and your deposit moves to the new date, once. Inside 48 hours, or a no-show, and it's gone — someone else could have had that chair.",
        "Running late? Text us. Past thirty minutes we may have to reschedule.",
      ],
    },
    {
      q: "Shop minimum",
      a: [
        "$120, however small. That covers a fresh setup — needles, ink caps, barrier film — all of it thrown out when you leave.",
        "A single initial costs what a small flash piece costs. We won't pretend otherwise.",
      ],
    },
    {
      q: "ID and age",
      a: [
        "18 and up, no exceptions. Not with a parent, not with a note.",
        "Bring government photo ID that matches the name on the booking. No ID, no tattoo, and the deposit stays with us.",
      ],
    },
    {
      q: "Touch-ups",
      a: [
        "Our work gets one free touch-up inside three months, once it's fully healed.",
        "Hands, fingers and feet fade faster than anywhere else, so those are charged at cost. Skipping aftercare voids it — we can tell.",
      ],
    },
    {
      q: "Walk-ins",
      a: [
        "Thursday to Sunday, first come, first served, while there's an artist free.",
        "Walk-ins are for flash and small pieces we can draw on the spot. Anything bigger starts with a consult. Come early on Saturdays.",
      ],
    },
  ],
};

export const aftercare = {
  label: "After",
  script: "Heal it right.",
  heading: ["Aftercare"],
  blurb:
    "The artist does half the work. The next four weeks are yours — and they decide what it looks like in ten years.",
  stages: [
    {
      when: "Day 0",
      title: "Leave the wrap on",
      body: "Keep the film on as long as your artist said — usually 3 to 24 hours. Peel it off in the shower, wash with lukewarm water and unscented soap, pat dry with a clean paper towel.",
    },
    {
      when: "Days 1 – 3",
      title: "Wash, dry, go thin",
      body: "Wash twice a day with clean hands. Let it air dry, then a rice grain of unscented balm, rubbed in until it barely shines. Some weeping and redness is normal.",
    },
    {
      when: "Days 4 – 14",
      title: "Let it peel",
      body: "It will flake and it will itch. Don't pick, don't scratch, don't help it along. Swap the balm for plain unscented lotion once it starts to flake.",
    },
    {
      when: "Weeks 2 – 4",
      title: "Wait it out",
      body: "The surface looks healed before the skin underneath is. Keep it moisturised, keep it covered in the sun, and keep going.",
    },
  ],
  avoid: [
    "Swimming, baths and hot tubs for two weeks",
    "Direct sun and sunbeds until it's healed — SPF 50 for life after",
    "Tight clothes or straps rubbing on it",
    "Petroleum jelly, and anything scented",
  ],
  warning:
    "Redness that spreads, heat, swelling that gets worse after day three, or a fever — see a doctor first, then tell us.",
  disclaimer: "General guidance, not medical advice",
};

export const footerNote =
  "Electric Orchid is a fictional studio built as a portfolio mockup. Nothing here is a real business, and no booking is actually sent.";
