"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

type Pill = { cls: "orange" | "cream" | "mint"; label: string };
type MenuItem = [name: string, desc: string, price: string];
type ReviewItem = [
  initials: string,
  name: string,
  date: string,
  stars: number,
  text: string,
];

type PersonInitials = "M" | "S" | "Ma" | "P";
type PersonFit = {
  initials: PersonInitials;
  status: "ok" | "warn";
  note: string;
};

type GroupView = {
  fit: "good" | "warn";
  summary: string;
  perPerson: PersonFit[];
  whyMatches: string;
  pills: Pill[];
};

type Spot = {
  id: string;
  name: string;
  cuisine: string;
  price: string;
  dist: string;
  walk: string;
  rating: string;
  grad: string;
  taste: string;
  review: string;
  why: string;
  hoursToday: string;
  menu: MenuItem[];
  reviews: ReviewItem[];
  pills: Pill[];
  group: GroupView;
};

const PERSON_NAMES: Record<PersonInitials, string> = {
  M: "Maya",
  S: "Sara",
  Ma: "Marcus",
  P: "Priya",
};

const SPOTS: Record<string, Spot> = {
  kabosu: {
    id: "kabosu",
    name: "Bar Kabosu",
    cuisine: "Japanese · listening bar",
    price: "$$$",
    dist: "0.4 mi",
    walk: "8 min walk",
    rating: "4.8",
    grad: "linear-gradient(135deg, rgba(247,141,81,0.32), rgba(162,88,62,0.18))",
    taste:
      "A vinyl-only listening bar pouring Japanese whisky and small plates — squarely in your speakeasy lane.",
    review:
      "“They dim the lights at nine and it becomes the most romantic room in Brooklyn.”",
    why: "A Japanese listening bar with a strictly-vinyl jazz program — it matches your saved speakeasies, your Japanese leaning, and reads as built for a quiet anniversary.",
    hoursToday: "5:00 PM – 1:00 AM",
    menu: [
      ["Hokkaido scallop crudo", "yuzu kosho, shiso oil", "18"],
      ["Binchotan-grilled hamachi collar", "ponzu", "26"],
      ["Wagyu & uni hand roll", "two pieces", "32"],
    ],
    reviews: [
      [
        "RT",
        "Rina T.",
        "2 weeks ago",
        5,
        "The vinyl program alone is worth the trip. Came for an anniversary and the staff quietly comped a dessert sake.",
      ],
      [
        "JM",
        "Julian M.",
        "1 month ago",
        5,
        "Tiny, dark, perfect. Book the corner two-top if you can — it feels like its own little world.",
      ],
    ],
    pills: [
      { cls: "mint", label: "vinyl program" },
      { cls: "cream", label: "Japanese whisky" },
      { cls: "orange", label: "taste match" },
    ],
    group: {
      fit: "warn",
      summary: "Limited vegan menu + built for two-tops",
      perPerson: [
        { initials: "M", status: "ok", note: "Matches your Japanese leaning" },
        { initials: "S", status: "warn", note: "Limited vegan options" },
        { initials: "Ma", status: "ok", note: "No peanut on the menu" },
        { initials: "P", status: "ok", note: "No dietary issues" },
      ],
      whyMatches:
        "Safe for Marcus’s peanut allergy and squarely on your Japanese leaning, but Sara would have to ask the kitchen for vegan options and the room is built for two-tops, not a four-top.",
      pills: [
        { cls: "orange", label: "Japanese fit" },
        { cls: "cream", label: "intimate (tight for 4)" },
        { cls: "mint", label: "no peanut" },
      ],
    },
  },
  longnote: {
    id: "longnote",
    name: "The Long Note",
    cuisine: "Small plates · live jazz",
    price: "$$$",
    dist: "0.6 mi",
    walk: "12 min walk",
    rating: "4.7",
    grad: "linear-gradient(135deg, rgba(247,141,81,0.26), rgba(110,231,183,0.12))",
    taste:
      "A live jazz trio most nights and a tight seasonal small-plates menu — close to the listening rooms you keep saving.",
    review:
      "“The trio starts at eight. Get there early, order everything, stay late.”",
    why: "Live jazz most nights plus a candlelit small-plates room — it lines up with the intimate listening rooms in your save history and tomorrow’s occasion.",
    hoursToday: "5:30 PM – 12:00 AM",
    menu: [
      ["Burrata, charred peach", "aged balsamic, basil", "17"],
      ["Duck-fat focaccia", "rosemary, sea salt", "9"],
      ["Braised short rib", "polenta, gremolata", "29"],
    ],
    reviews: [
      [
        "AD",
        "Aisha D.",
        "5 days ago",
        5,
        "Booked it for a date and the music made conversation feel effortless. Will absolutely return.",
      ],
      [
        "PK",
        "Peter K.",
        "3 weeks ago",
        4,
        "Wonderful room and players. A touch loud near the bar — ask for a table toward the back.",
      ],
    ],
    pills: [
      { cls: "mint", label: "live jazz nightly" },
      { cls: "cream", label: "small plates" },
      { cls: "orange", label: "save-history fit" },
    ],
    group: {
      fit: "good",
      summary: "Works for all 4",
      perPerson: [
        { initials: "M", status: "ok", note: "Listening-room save match" },
        { initials: "S", status: "ok", note: "Easy vegan small plates" },
        { initials: "Ma", status: "ok", note: "No peanut on the menu" },
        { initials: "P", status: "ok", note: "No dietary issues" },
      ],
      whyMatches:
        "Small-plates format lets everyone order what they want — Sara gets vegan focaccia and roasted vegetables, Marcus stays peanut-clear, the group gets live jazz. Most aligned with your save history.",
      pills: [
        { cls: "mint", label: "everyone-safe" },
        { cls: "cream", label: "easy vegan" },
        { cls: "orange", label: "group format" },
      ],
    },
  },
  nightjar: {
    id: "nightjar",
    name: "Nightjar & Vine",
    cuisine: "Natural wine · jazz vinyl",
    price: "$$$",
    dist: "0.9 mi",
    walk: "17 min walk",
    rating: "4.6",
    grad: "linear-gradient(135deg, rgba(110,231,183,0.20), rgba(247,141,81,0.14))",
    taste:
      "Low-lit natural wine bar with a rotating jazz vinyl selection and a snug back room.",
    review:
      "“Unhurried in the best way — nobody will rush you out of here.”",
    why: "Natural wine poured against rotating jazz vinyl, low-lit and unhurried — it sits right in your price range and your taste for quiet, characterful rooms.",
    hoursToday: "6:00 PM – 1:00 AM",
    menu: [
      ["Marinated olives & almonds", "—", "8"],
      ["Jamón & manchego board", "quince, marcona", "22"],
      ["Wood-oven flatbread", "taleggio, honey, thyme", "16"],
    ],
    reviews: [
      [
        "LM",
        "Lena M.",
        "1 week ago",
        5,
        "Found our new anniversary spot. The back room is dark and intimate and the vinyl is impeccable.",
      ],
      [
        "SD",
        "Sam D.",
        "2 months ago",
        4,
        "Great list, knowledgeable staff. Small — worth reserving on weekends.",
      ],
    ],
    pills: [
      { cls: "cream", label: "natural wine" },
      { cls: "mint", label: "jazz vinyl" },
      { cls: "orange", label: "quiet room" },
    ],
    group: {
      fit: "good",
      summary: "Works for all 4",
      perPerson: [
        { initials: "M", status: "ok", note: "Wine-bar save pattern" },
        { initials: "S", status: "ok", note: "Flatbread + olives are vegan" },
        { initials: "Ma", status: "ok", note: "No peanut on the menu" },
        { initials: "P", status: "ok", note: "No dietary issues" },
      ],
      whyMatches:
        "Flatbread + olive board format covers vegan trivially, no peanut anywhere on the menu, snug back room fits four. Reads as the most relaxed group fit at your usual price.",
      pills: [
        { cls: "cream", label: "easy vegan" },
        { cls: "mint", label: "peanut-safe" },
        { cls: "orange", label: "group-friendly" },
      ],
    },
  },
  camellia: {
    id: "camellia",
    name: "Camellia",
    cuisine: "Italian wine bar",
    price: "$$$",
    dist: "0.3 mi",
    walk: "6 min walk",
    rating: "4.7",
    grad: "linear-gradient(135deg, rgba(247,141,81,0.24), rgba(254,243,199,0.10))",
    taste:
      "A candlelit Italian wine bar with a speakeasy feel, hidden behind an unmarked door.",
    review:
      "“You’d walk past it twice. Inside, it’s all candlelight and Barolo.”",
    why: "A hidden, candlelit Italian wine bar — it hits your Italian leaning and your habit of saving speakeasy-style rooms, though it leans wine over live music.",
    hoursToday: "5:00 PM – 12:00 AM",
    menu: [
      ["Cacio e pepe", "hand-cut tonnarelli", "21"],
      ["Vitello tonnato", "caper, lemon", "19"],
      ["Tiramisù", "espresso, mascarpone", "12"],
    ],
    reviews: [
      [
        "GF",
        "Gianna F.",
        "6 days ago",
        5,
        "The unmarked door makes it feel like a secret. Perfect for a quiet celebration.",
      ],
      [
        "TM",
        "Theo M.",
        "1 month ago",
        4,
        "Lovely Italian list and warm service. Gets cozy-loud after 9.",
      ],
    ],
    pills: [
      { cls: "orange", label: "Italian leaning" },
      { cls: "cream", label: "speakeasy feel" },
      { cls: "mint", label: "candlelit" },
    ],
    group: {
      fit: "good",
      summary: "Works for all 4",
      perPerson: [
        { initials: "M", status: "ok", note: "Italian + speakeasy match" },
        { initials: "S", status: "ok", note: "Vegan cacio e pepe on request" },
        { initials: "Ma", status: "ok", note: "No peanut on the menu" },
        { initials: "P", status: "ok", note: "No dietary issues" },
      ],
      whyMatches:
        "Italian wine bar with easy vegan pasta swaps, no peanut concerns, and the candlelit room you and Priya keep saving — a tight fit for four people who actually want to hear each other.",
      pills: [
        { cls: "orange", label: "Italian fit" },
        { cls: "cream", label: "easy vegan" },
        { cls: "mint", label: "no peanut" },
      ],
    },
  },
  misora: {
    id: "misora",
    name: "Misora",
    cuisine: "Japanese · omakase",
    price: "$$$$",
    dist: "0.7 mi",
    walk: "14 min walk",
    rating: "4.9",
    grad: "linear-gradient(135deg, rgba(110,231,183,0.18), rgba(247,141,81,0.14))",
    taste:
      "An eight-seat omakase counter — pristine, quiet, and intensely personal.",
    review: "“Two hours, eight seats, not a wasted bite.”",
    why: "An eight-seat omakase counter — it satisfies your Japanese leaning beautifully, but it’s quiet-formal rather than the jazz-bar mood you searched for.",
    hoursToday: "Seatings 6:00 & 8:30 PM",
    menu: [
      ["Omakase chef’s selection", "~14 courses", "145"],
      ["Sake pairing", "four pours", "65"],
      ["Tea service", "—", "12"],
    ],
    reviews: [
      [
        "NR",
        "Naomi R.",
        "3 weeks ago",
        5,
        "Flawless. Booked the late seating for an anniversary and it was unforgettable.",
      ],
      [
        "DL",
        "David L.",
        "2 months ago",
        5,
        "The single best meal I’ve had this year. Reserve well ahead.",
      ],
    ],
    pills: [
      { cls: "orange", label: "Japanese leaning" },
      { cls: "cream", label: "omakase" },
      { cls: "mint", label: "quiet-formal" },
    ],
    group: {
      fit: "warn",
      summary: "Vegan omakase is hard",
      perPerson: [
        { initials: "M", status: "ok", note: "Japanese-leaning + $$$$" },
        { initials: "S", status: "warn", note: "Omakase rarely runs vegan" },
        { initials: "Ma", status: "ok", note: "Peanut-safe by default" },
        { initials: "P", status: "ok", note: "No dietary issues" },
      ],
      whyMatches:
        "Peanut-safe and hits your Japanese leaning, but an 8-seat omakase counter can’t really do a vegan menu for Sara, and the counter format is shoulder-to-shoulder — not a group hang.",
      pills: [
        { cls: "orange", label: "Japanese" },
        { cls: "cream", label: "tough vegan" },
        { cls: "mint", label: "no peanut" },
      ],
    },
  },
  lume: {
    id: "lume",
    name: "Osteria Lume",
    cuisine: "Northern Italian",
    price: "$$$",
    dist: "0.5 mi",
    walk: "10 min walk",
    rating: "4.5",
    grad: "linear-gradient(135deg, rgba(247,141,81,0.22), rgba(254,243,199,0.10))",
    taste:
      "A warm, candlelit osteria doing handmade pasta and a deep regional wine list.",
    review:
      "“Handmade pasta, low light, an easy place to lose three hours.”",
    why: "A candlelit osteria with handmade pasta — comfortably in your Italian-and-$$$ pattern, though it’s a classic dinner room without the live-music angle.",
    hoursToday: "5:00 PM – 11:00 PM",
    menu: [
      ["Tagliatelle al ragù", "48-month parmigiano", "23"],
      ["Agnolotti del plin", "sage butter", "25"],
      ["Branzino", "fennel, citrus", "31"],
    ],
    reviews: [
      [
        "FC",
        "Franca C.",
        "1 week ago",
        5,
        "Genuinely romantic, genuinely Italian. The plin are extraordinary.",
      ],
      [
        "MR",
        "Marco R.",
        "1 month ago",
        4,
        "Solid all round. Bright lighting up front — ask for the back room.",
      ],
    ],
    pills: [
      { cls: "orange", label: "Italian + $$$" },
      { cls: "cream", label: "handmade pasta" },
      { cls: "mint", label: "candlelit" },
    ],
    group: {
      fit: "good",
      summary: "Works for all 4",
      perPerson: [
        { initials: "M", status: "ok", note: "Italian + $$$ pattern fit" },
        { initials: "S", status: "ok", note: "Easy vegan pasta swap" },
        { initials: "Ma", status: "ok", note: "No peanut on the menu" },
        { initials: "P", status: "ok", note: "No dietary issues" },
      ],
      whyMatches:
        "Northern Italian with handmade pasta — easy vegan substitutions for Sara, classically peanut-safe, and a warm room that handles a four-top comfortably.",
      pills: [
        { cls: "orange", label: "Italian fit" },
        { cls: "cream", label: "easy vegan" },
        { cls: "mint", label: "group-warm" },
      ],
    },
  },
  kettil: {
    id: "kettil",
    name: "Kettil",
    cuisine: "Nordic–Japanese tasting",
    price: "$$$$",
    dist: "1.1 mi",
    walk: "21 min walk",
    rating: "4.6",
    grad: "linear-gradient(135deg, rgba(110,231,183,0.16), rgba(254,243,199,0.10))",
    taste:
      "A quiet tasting room blending Nordic restraint with Japanese technique.",
    review: "“Minimal, precise, and very, very calm.”",
    why: "A Nordic–Japanese tasting room — refined and calm, partially matching your Japanese leaning, but further afield and more formal than tonight’s brief.",
    hoursToday: "Seatings 6:30 PM",
    menu: [
      ["Tasting menu", "~10 courses", "120"],
      ["Juice pairing", "non-alcoholic", "45"],
      ["Wine pairing", "five pours", "75"],
    ],
    reviews: [
      [
        "EH",
        "Erik H.",
        "2 weeks ago",
        5,
        "Quietly brilliant. The pacing is meditative — great for a real conversation.",
      ],
      [
        "YK",
        "Yuki K.",
        "2 months ago",
        4,
        "Beautiful food. A bit of a trek, so plan the evening around it.",
      ],
    ],
    pills: [
      { cls: "mint", label: "minimal" },
      { cls: "cream", label: "tasting menu" },
      { cls: "orange", label: "partial fit" },
    ],
    group: {
      fit: "warn",
      summary: "Formal — call ahead for vegan",
      perPerson: [
        { initials: "M", status: "ok", note: "Partial Japanese match" },
        { initials: "S", status: "warn", note: "Vegan needs 48h notice" },
        { initials: "Ma", status: "ok", note: "Peanut-safe by default" },
        { initials: "P", status: "ok", note: "No dietary issues" },
      ],
      whyMatches:
        "Peanut-safe and partially matches your Japanese leaning, but tasting menus need vegan called in 48 hours ahead for Sara, and the pacing is meditative rather than friend-night.",
      pills: [
        { cls: "orange", label: "partial fit" },
        { cls: "cream", label: "advance vegan" },
        { cls: "mint", label: "no peanut" },
      ],
    },
  },
  faccia: {
    id: "faccia",
    name: "Faccia Gialla",
    cuisine: "Roman trattoria",
    price: "$$",
    dist: "0.2 mi",
    walk: "4 min walk",
    rating: "4.4",
    grad: "linear-gradient(135deg, rgba(247,141,81,0.20), rgba(254,243,199,0.08))",
    taste:
      "A bustling Roman trattoria — generous, loud, and a neighborhood favorite.",
    review:
      "“Loud, joyful, and the carbonara is the real thing.”",
    why: "A beloved Roman trattoria right nearby, but it’s lively and casual — a notch below your usual $$$ and not the intimate mood for an anniversary.",
    hoursToday: "4:30 PM – 11:30 PM",
    menu: [
      ["Carbonara", "guanciale, pecorino", "18"],
      ["Cacio e pepe", "—", "16"],
      ["Saltimbocca", "sage, prosciutto", "22"],
    ],
    reviews: [
      [
        "RP",
        "Rosa P.",
        "4 days ago",
        5,
        "The carbonara everyone raves about — it earns it. Boisterous and warm.",
      ],
      [
        "AL",
        "Andre L.",
        "3 weeks ago",
        4,
        "Great cheap-ish eats. Not the spot for a quiet date — it’s a party in there.",
      ],
    ],
    pills: [
      { cls: "cream", label: "neighborhood" },
      { cls: "mint", label: "Italian" },
      { cls: "orange", label: "mood mismatch" },
    ],
    group: {
      fit: "good",
      summary: "Works for all 4",
      perPerson: [
        { initials: "M", status: "ok", note: "A notch below your $$$ but fun" },
        { initials: "S", status: "ok", note: "Easy vegan pasta swap" },
        { initials: "Ma", status: "ok", note: "No peanut on the menu" },
        { initials: "P", status: "ok", note: "No dietary issues" },
      ],
      whyMatches:
        "Roman trattoria with easy vegan pasta, classically peanut-safe, and built for groups — boisterous in the best way. A notch below your usual price, but the energy fits Friday night.",
      pills: [
        { cls: "cream", label: "easy vegan" },
        { cls: "mint", label: "group energy" },
        { cls: "orange", label: "below usual $$$" },
      ],
    },
  },
  lulas: {
    id: "lulas",
    name: "Lula’s Speakeasy",
    cuisine: "Vintage cocktails · piano",
    price: "$$$$",
    dist: "1.2 mi",
    walk: "23 min walk",
    rating: "4.5",
    grad: "linear-gradient(135deg, rgba(247,141,81,0.26), rgba(162,88,62,0.20))",
    taste:
      "Hidden basement bar with a vintage cocktail program and a Steinway in the corner.",
    review:
      "“The pianist took requests. Felt like another era — perfect for a quiet date.”",
    why: "Mirrors your preference for sub-50-seat rooms; the Tuesday solo piano fits the listening-room vibe of spots you’ve rated highly.",
    hoursToday: "7:00 PM – 2:00 AM",
    menu: [
      ["Aviation", "violet liqueur, lemon", "17"],
      ["Boulevardier", "rye, vermouth, campari", "18"],
      ["Marrow on toast", "parsley, capers", "14"],
    ],
    reviews: [
      [
        "SK",
        "Sara K.",
        "1 week ago",
        5,
        "Found by accident through a back door — best part of our trip. The pianist played for hours.",
      ],
      [
        "BM",
        "Ben M.",
        "1 month ago",
        4,
        "Strong drinks, dark room, perfect mood. Reservations recommended on weekends.",
      ],
    ],
    pills: [
      { cls: "cream", label: "speakeasy" },
      { cls: "orange", label: "rated-highly fit" },
      { cls: "mint", label: "quiet enough to talk" },
    ],
    group: {
      fit: "warn",
      summary: "Cocktail bar — light food",
      perPerson: [
        { initials: "M", status: "ok", note: "Matches your save history" },
        { initials: "S", status: "warn", note: "Vegan food limited to bread" },
        { initials: "Ma", status: "ok", note: "No peanut on the menu" },
        { initials: "P", status: "ok", note: "No dietary issues" },
      ],
      whyMatches:
        "Cocktail-forward speakeasy on your save lane — safe for Marcus, but Sara’s vegan options are limited to bread and salads, and the food side is built for snacking, not feeding four people Friday dinner.",
      pills: [
        { cls: "cream", label: "drinks-first" },
        { cls: "mint", label: "no peanut" },
        { cls: "orange", label: "limited dinner" },
      ],
    },
  },
};

const FIRST_PAINT = [
  "faccia",
  "camellia",
  "kabosu",
  "lume",
  "misora",
  "longnote",
  "kettil",
  "lulas",
  "nightjar",
];
const RERANKED = [
  "kabosu",
  "longnote",
  "lulas",
  "nightjar",
  "camellia",
  "misora",
  "lume",
  "faccia",
  "kettil",
];

const GROUP_FIRST_PAINT = [
  "faccia",
  "camellia",
  "lume",
  "kabosu",
  "longnote",
  "misora",
  "kettil",
  "lulas",
  "nightjar",
];
const GROUP_RERANKED = [
  "longnote",
  "camellia",
  "nightjar",
  "faccia",
  "lume",
  "kabosu",
  "misora",
  "kettil",
  "lulas",
];

const SPEED = 1.4;
const TYPE_SPEED_MS = 32;

const SINGLE_QUERY = "jazz music bar";
const GROUP_QUERY = "friday dinner with the crew";

type View = "search" | "results" | "detail";
type Scenario = "single" | "group";

export default function DemoFlow() {
  const [scenario, setScenario] = useState<Scenario>("single");
  const [view, setView] = useState<View>("search");
  const [running, setRunning] = useState(false);
  const [typed, setTyped] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [activeChip, setActiveChip] = useState<string | null>(null);
  const [ctaReady, setCtaReady] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [order, setOrder] = useState<string[]>([]);
  const [whyShown, setWhyShown] = useState<Set<string>>(new Set());
  const [bumped, setBumped] = useState<Set<string>>(new Set());
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const cardRefs = useRef<Map<string, HTMLElement>>(new Map());
  const prevOrderRef = useRef<string[]>([]);
  const autoplayRanRef = useRef(false);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  }, []);

  const schedule = useCallback((fn: () => void, ms: number) => {
    const t = setTimeout(fn, ms * SPEED);
    timersRef.current.push(t);
  }, []);

  const resetState = useCallback(() => {
    clearTimers();
    setRunning(false);
    setTyped("");
    setSearchFocused(false);
    setActiveChip(null);
    setCtaReady(false);
    setShowSkeleton(false);
    setOrder([]);
    setWhyShown(new Set());
    setBumped(new Set());
    prevOrderRef.current = [];
  }, [clearTimers]);

  const runFlow = useCallback(
    (which: Scenario) => {
      if (running) return;
      resetState();
      setScenario(which);
      setRunning(true);

      const QUERY = which === "single" ? SINGLE_QUERY : GROUP_QUERY;
      const FIRST = which === "single" ? FIRST_PAINT : GROUP_FIRST_PAINT;
      const RERANK = which === "single" ? RERANKED : GROUP_RERANKED;

      setView("search");
      setSearchFocused(true);
      setActiveChip(which === "single" ? "date night" : "friends night");

      for (let i = 1; i <= QUERY.length; i++) {
        schedule(() => setTyped(QUERY.slice(0, i)), i * TYPE_SPEED_MS);
      }

      const typingDoneAt = QUERY.length * TYPE_SPEED_MS + 180;
      schedule(() => setCtaReady(true), typingDoneAt - 80);

      schedule(() => {
        setView("results");
        setShowSkeleton(true);
      }, typingDoneAt);

      schedule(() => {
        setShowSkeleton(false);
        setOrder(FIRST);
      }, typingDoneAt + 450);

      schedule(() => {
        setOrder(RERANK);
        RERANK.slice(0, 3).forEach((id, i) => {
          setTimeout(
            () => {
              setWhyShown((prev) => new Set(prev).add(id));
              setBumped((prev) => new Set(prev).add(id));
              setTimeout(() => {
                setBumped((prev) => {
                  const s = new Set(prev);
                  s.delete(id);
                  return s;
                });
              }, 1400);
            },
            i * 140 * SPEED,
          );
        });
      }, typingDoneAt + 1500);

      schedule(() => {
        RERANK.slice(3, 5).forEach((id, i) => {
          setTimeout(
            () => setWhyShown((prev) => new Set(prev).add(id)),
            i * 160 * SPEED,
          );
        });
      }, typingDoneAt + 2000);

      RERANK.slice(5).forEach((id, i) => {
        schedule(
          () => setWhyShown((prev) => new Set(prev).add(id)),
          typingDoneAt + 2600 + i * 620,
        );
      });

      schedule(() => {
        setRunning(false);
      }, typingDoneAt + 4500);
    },
    [running, resetState, schedule],
  );

  useEffect(() => {
    if (autoplayRanRef.current) return;
    autoplayRanRef.current = true;
    const t = setTimeout(() => runFlow("single"), 1100);
    return () => {
      clearTimeout(t);
      clearTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    const prev = prevOrderRef.current;
    const same =
      prev.length === order.length && prev.every((id, i) => id === order[i]);
    if (same) {
      prevOrderRef.current = order;
      return;
    }

    if (prev.length > 0 && order.length > 0) {
      const oldPositions = new Map<string, number>();
      prev.forEach((id) => {
        const el = cardRefs.current.get(id);
        if (el) oldPositions.set(id, el.getBoundingClientRect().top);
      });

      order.forEach((id) => {
        const el = cardRefs.current.get(id);
        if (!el) return;
        const oldTop = oldPositions.get(id);
        if (oldTop === undefined) return;
        const newTop = el.getBoundingClientRect().top;
        const dy = oldTop - newTop;
        if (dy !== 0) {
          el.style.transition = "none";
          el.style.transform = `translateY(${dy}px)`;
          requestAnimationFrame(() => {
            el.style.transition =
              "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)";
            el.style.transform = "";
          });
        }
      });
    }

    prevOrderRef.current = order;
  }, [order]);

  const openDetail = useCallback((id: string) => {
    setSelectedId(id);
    setSaved(false);
    setView("detail");
  }, []);

  const closeDetail = useCallback(() => {
    setView("results");
    setSelectedId(null);
  }, []);

  const closeResults = useCallback(() => {
    resetState();
    setView("search");
  }, [resetState]);

  const doSave = useCallback(() => {
    if (saved) return;
    setSaved(true);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 1900);
  }, [saved]);

  const onChipClick = useCallback(
    (vibe: string) => {
      if (running) return;
      if (vibe === "date night") runFlow("single");
      else if (vibe === "friends night") runFlow("group");
    },
    [running, runFlow],
  );

  const onCtaClick = useCallback(() => {
    if (ctaReady && !running) runFlow(scenario);
  }, [ctaReady, running, runFlow, scenario]);

  const selectedSpot = selectedId ? SPOTS[selectedId] : null;
  const isGroup = scenario === "group";

  const cardPills = (spot: Spot) => (isGroup ? spot.group.pills : spot.pills);
  const cardWhy = (spot: Spot) => (isGroup ? spot.group.whyMatches : spot.why);
  const detailWhy = (spot: Spot) => (isGroup ? spot.group.whyMatches : spot.why);

  return (
    <div className="demo-phone">
      <div className="demo-screen">
        <div className="demo-notch" aria-hidden />
        <div className="demo-statusbar">
          <span>6:47</span>
          <span className="demo-statusbar-icons" aria-hidden>
            <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
              <rect x="0" y="7" width="3" height="4" rx="1" />
              <rect x="4.5" y="5" width="3" height="6" rx="1" />
              <rect x="9" y="2.5" width="3" height="8.5" rx="1" />
              <rect x="13.5" y="0" width="3" height="11" rx="1" />
            </svg>
            <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor">
              <path d="M8 2.2c2.3 0 4.4.9 6 2.3l1.5-1.6C13.5 1 10.9 0 8 0S2.5 1 .5 2.9L2 4.5C3.6 3.1 5.7 2.2 8 2.2zM8 6c1.1 0 2.2.4 3 1.2l1.5-1.6C11.3 4.6 9.7 4 8 4s-3.3.6-4.5 1.6L5 7.2C5.8 6.4 6.9 6 8 6zm0 3.8 1.8-1.9C9.3 7.3 8.7 7 8 7s-1.3.3-1.8.9L8 9.8z" />
            </svg>
            <svg width="26" height="12" viewBox="0 0 26 12">
              <rect x="0.5" y="0.5" width="21" height="11" rx="3" fill="none" stroke="currentColor" strokeOpacity="0.4" />
              <rect x="2.5" y="2.5" width="15" height="7" rx="1.5" fill="currentColor" />
              <rect x="23" y="3.5" width="2" height="5" rx="1" fill="currentColor" fillOpacity="0.5" />
            </svg>
          </span>
        </div>

        {/* SEARCH VIEW */}
        <div className={`demo-view demo-view--search ${view !== "search" ? "demo-view--hidden" : ""}`}>
          <div className="demo-brandrow">
            <span className="demo-logo">
              SRVN<span className="demo-logo-dot" aria-hidden />
            </span>
            <span className="demo-loc">
              <svg width="9" height="11" viewBox="0 0 9 11" fill="none" aria-hidden>
                <path d="M4.5.5C2.3.5.5 2.3.5 4.5c0 3 4 6 4 6s4-3 4-6c0-2.2-1.8-4-4-4Z" stroke="currentColor" />
                <circle cx="4.5" cy="4.5" r="1.3" fill="currentColor" />
              </svg>
              Brooklyn
            </span>
          </div>

          {isGroup ? (
            <>
              <div className="demo-greeting">
                <em>Friends night</em>,
                <br />
                tonight?
              </div>
              <div className="demo-subgreet">
                Three friends, two dietary needs — let’s find the one.
              </div>
            </>
          ) : (
            <>
              <div className="demo-greeting">
                Where to,
                <br />
                <em>tonight?</em>
              </div>
              <div className="demo-subgreet">
                Tomorrow’s the anniversary — let’s find the one.
              </div>
            </>
          )}

          <div className={`demo-searchbar ${searchFocused ? "is-focused" : ""}`}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.4" />
              <path d="m11.5 11.5 3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            <span className={`demo-searchbar-text ${typed ? "" : "is-placeholder"}`}>
              {typed || "Search restaurants, vibes, dishes…"}
            </span>
            {searchFocused && <span className="demo-searchbar-caret" aria-hidden />}
          </div>

          {isGroup && (
            <div className="demo-participants">
              <div className="demo-participants-avatars">
                <span className="demo-participant-avatar is-host">M</span>
                <span className="demo-participant-avatar">S</span>
                <span className="demo-participant-avatar">Ma</span>
                <span className="demo-participant-avatar">P</span>
              </div>
              <div className="demo-participants-caption">
                with Sara (vegan), Marcus (no peanut), Priya
              </div>
            </div>
          )}

          <div className="demo-section-label">SUGGESTED VIBES</div>
          <div className="demo-chips">
            {["Brunch", "Happy hour", "Date night", "Friends night", "Birthday", "Late night"].map(
              (vibe) => {
                const v = vibe.toLowerCase();
                const isActive = activeChip === v;
                const isInteractive = v === "date night" || v === "friends night";
                return (
                  <button
                    key={vibe}
                    type="button"
                    className={`demo-chip ${isActive ? "is-active" : ""}`}
                    onClick={() => onChipClick(v)}
                    disabled={running || !isInteractive}
                  >
                    {vibe}
                  </button>
                );
              },
            )}
          </div>

          <div className="demo-section-label">RECENT</div>
          <div className="demo-recent-item">
            <span className="demo-recent-icon">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1.1" />
                <path d="M6.5 3.5v3l2 1.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
              </svg>
            </span>
            <div>
              <div className="demo-recent-q">omakase counter seats</div>
              <div className="demo-recent-sub">Searched 4 days ago</div>
            </div>
          </div>
          <div className="demo-recent-item">
            <span className="demo-recent-icon">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1.1" />
                <path d="M6.5 3.5v3l2 1.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
              </svg>
            </span>
            <div>
              <div className="demo-recent-q">natural wine bars near me</div>
              <div className="demo-recent-sub">Searched last week</div>
            </div>
          </div>

          <button
            type="button"
            className={`demo-search-cta ${ctaReady ? "is-ready" : ""}`}
            onClick={onCtaClick}
            disabled={!ctaReady}
          >
            Search
          </button>
        </div>

        {/* RESULTS VIEW */}
        <div className={`demo-view demo-view--results ${view !== "results" ? "demo-view--hidden" : ""}`}>
          <div className="demo-results-top">
            <button type="button" className="demo-iconbtn" onClick={closeResults} aria-label="Back to search">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="demo-results-q">
              <div className="demo-results-qline">
                “{isGroup ? GROUP_QUERY : SINGLE_QUERY}”
              </div>
              <div className="demo-results-qmeta">
                {isGroup ? (
                  <>
                    <b>Friends night</b> · 9 spots · merged for the group of 4
                  </>
                ) : (
                  <>
                    <b>Date night</b> · 9 spots · ranked for your taste
                  </>
                )}
              </div>
            </div>
            <button type="button" className="demo-iconbtn" aria-label="Filter">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M2 4h12M4.5 8h7M6.5 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="demo-results-scroll">
            {showSkeleton &&
              [0, 1, 2, 3, 4, 5].map((i) => (
                <div key={`skel-${i}`} className="demo-card-skel">
                  <div className="demo-card-skel-image" />
                  <div className="demo-card-skel-lines">
                    <div className="demo-card-skel-line is-long" />
                    <div className="demo-card-skel-line is-short" />
                    <div className="demo-card-skel-line is-medium" />
                  </div>
                </div>
              ))}

            {!showSkeleton &&
              order.map((id) => {
                const spot = SPOTS[id];
                const isWhyShown = whyShown.has(id);
                const isBumped = bumped.has(id);
                const groupFit = spot.group.fit;
                return (
                  <article
                    key={id}
                    ref={(el) => {
                      if (el) cardRefs.current.set(id, el);
                      else cardRefs.current.delete(id);
                    }}
                    className={`demo-card ${isBumped ? "is-bumped" : ""}`}
                    onClick={() => openDetail(id)}
                  >
                    <div className="demo-card-image" aria-hidden>
                      <span className="demo-card-image-glyph">{spot.name[0]}</span>
                    </div>
                    <div className="demo-card-body">
                      <div className="demo-card-header">
                        <h3 className="demo-card-name">{spot.name}</h3>
                        <div className="demo-card-meta">
                          <span>★ {spot.rating}</span>
                          <span aria-hidden>·</span>
                          <span>{spot.price}</span>
                          <span aria-hidden>·</span>
                          <span>{spot.dist}</span>
                        </div>
                      </div>
                      <div className="demo-card-cuisine">{spot.cuisine}</div>
                      <p className="demo-card-summary">{spot.taste}</p>
                      <blockquote className="demo-card-review">{spot.review}</blockquote>

                      {isGroup && (
                        <div className={`demo-card-fit is-${groupFit}`}>
                          <div className="demo-card-fit-row">
                            {spot.group.perPerson.map((p, j) => (
                              <span
                                key={j}
                                className={`demo-card-fit-person is-${p.status}`}
                              >
                                <span className="demo-card-fit-mark" aria-hidden>
                                  {p.status === "ok" ? "✓" : "⚠"}
                                </span>
                                {p.initials}
                              </span>
                            ))}
                          </div>
                          <div className="demo-card-fit-summary">
                            {spot.group.summary}
                          </div>
                        </div>
                      )}

                      <div className="demo-card-pills">
                        {cardPills(spot).map((p, j) => (
                          <span key={j} className={`pill ${p.cls}`}>
                            {p.label}
                          </span>
                        ))}
                      </div>
                      <div className={`demo-card-why ${isWhyShown ? "is-visible" : ""}`}>
                        <div className="demo-why-label">
                          <span aria-hidden>✦</span>
                          Why this matches
                        </div>
                        {isWhyShown ? (
                          <p className="demo-why-text">{cardWhy(spot)}</p>
                        ) : (
                          <div className="demo-why-shimmer" aria-hidden>
                            <span />
                            <span />
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
          </div>
        </div>

        {/* DETAIL VIEW */}
        <div className={`demo-view demo-view--detail ${view !== "detail" ? "demo-view--hidden" : ""}`}>
          {selectedSpot && (
            <>
              <div className="demo-detail-scroll">
                <div className="demo-detail-hero" style={{ background: selectedSpot.grad }}>
                  <button type="button" className="demo-detail-back" onClick={closeDetail} aria-label="Back to results">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                      <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div className="demo-detail-herotext">
                    <div className="demo-detail-name">{selectedSpot.name}</div>
                    <div className="demo-detail-meta">
                      <span>{selectedSpot.cuisine}</span>
                      <span className="demo-detail-meta-dot" aria-hidden />
                      <span className="demo-detail-meta-price">{selectedSpot.price}</span>
                      <span className="demo-detail-meta-dot" aria-hidden />
                      <span>
                        {selectedSpot.dist} · {selectedSpot.walk}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="demo-detail-actions">
                  <div className="demo-action">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden>
                      <path d="M8.5 1 11 6l5.5.8-4 3.9 1 5.3-5-2.6-5 2.6 1-5.3-4-3.9L6 6z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                    </svg>
                    <span>{selectedSpot.rating} rating</span>
                  </div>
                  <div className="demo-action">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden>
                      <circle cx="8.5" cy="8.5" r="7" stroke="currentColor" strokeWidth="1.2" />
                      <path d="M8.5 4.5v4l2.5 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    <span>Open now</span>
                  </div>
                  <div className="demo-action">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden>
                      <path d="M8.5 1C5.5 1 3 3.4 3 6.4c0 4 5.5 9.6 5.5 9.6S14 10.4 14 6.4C14 3.4 11.5 1 8.5 1Z" stroke="currentColor" strokeWidth="1.2" />
                      <circle cx="8.5" cy="6.4" r="1.9" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                    <span>Directions</span>
                  </div>
                </div>

                <div className="demo-detail-sec">
                  <h3>WHY THIS MATCHES {isGroup ? "THE GROUP" : "YOU"}</h3>
                  <div className="demo-detail-why">
                    <p>{detailWhy(selectedSpot)}</p>
                  </div>
                </div>

                {isGroup && (
                  <div className="demo-detail-sec">
                    <h3>WHO IT WORKS FOR</h3>
                    <div className="demo-who-list">
                      {selectedSpot.group.perPerson.map((p, i) => (
                        <div key={i} className={`demo-who-row is-${p.status}`}>
                          <div
                            className={`demo-who-avatar ${p.initials === "M" ? "is-host" : ""}`}
                          >
                            {p.initials}
                          </div>
                          <div className="demo-who-info">
                            <div className="demo-who-name">
                              {PERSON_NAMES[p.initials]}
                            </div>
                            <div className="demo-who-note">{p.note}</div>
                          </div>
                          <div className="demo-who-badge" aria-hidden>
                            {p.status === "ok" ? "✓" : "⚠"}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="demo-detail-sec">
                  <h3>HOURS</h3>
                  <div className="demo-hours-row demo-hours-today">
                    <span>Today · Tuesday</span>
                    <b>{selectedSpot.hoursToday}</b>
                  </div>
                  <div className="demo-hours-row">
                    <span>Wednesday</span>
                    <b>{selectedSpot.hoursToday}</b>
                  </div>
                  <div className="demo-hours-row">
                    <span>Thursday – Saturday</span>
                    <b>Extended hours</b>
                  </div>
                </div>

                <div className="demo-detail-sec">
                  <h3>MENU HIGHLIGHTS</h3>
                  {selectedSpot.menu.map(([name, desc, price], i) => (
                    <div key={i} className="demo-menu-item">
                      <div>
                        <div className="demo-menu-name">{name}</div>
                        <div className="demo-menu-desc">{desc}</div>
                      </div>
                      <div className="demo-menu-price">${price}</div>
                    </div>
                  ))}
                </div>

                <div className="demo-detail-sec demo-detail-sec--last">
                  <h3>RECENT REVIEWS</h3>
                  {selectedSpot.reviews.map(
                    ([initials, name, date, stars, text], i) => (
                      <div key={i} className="demo-review-card">
                        <div className="demo-review-top">
                          <div className="demo-review-av">{initials}</div>
                          <div>
                            <div className="demo-review-name">{name}</div>
                            <div className="demo-review-date">{date}</div>
                          </div>
                          <div className="demo-review-stars">
                            {Array.from({ length: stars }).map((_, j) => (
                              <svg key={j} width="9" height="9" viewBox="0 0 9 9" fill="currentColor">
                                <path d="M4.5 0 5.7 3h3.3L6.3 5 7.4 8 4.5 6.1 1.6 8 2.7 5 0 3z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <div className="demo-review-text">{text}</div>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="demo-bookbar">
                <button
                  type="button"
                  className={`demo-btn-save ${saved ? "is-saved" : ""}`}
                  onClick={doSave}
                  aria-label={
                    isGroup
                      ? saved
                        ? "Voted"
                        : "Vote yes"
                      : saved
                        ? "Saved"
                        : "Save spot"
                  }
                >
                  {isGroup ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill={saved ? "currentColor" : "none"}
                      aria-hidden
                    >
                      <path
                        d="M7 9V17H4V9H7Zm0 0 4-7c1.4 0 2 .9 2 2v3h4.2c.9 0 1.5.9 1.2 1.7l-2 7c-.2.7-.8 1.3-1.6 1.3H7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill={saved ? "currentColor" : "none"}
                      aria-hidden
                    >
                      <path
                        d="M5 3h10v14l-5-3.4L5 17V3Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
                <button type="button" className="demo-btn-book">
                  {isGroup ? "Send to the group" : "Reserve a table"}
                </button>
              </div>

              <div
                className={`demo-toast ${toastVisible ? "is-visible" : ""}`}
                role="status"
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                  <path
                    d="m2.5 7 3 3 5-7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {isGroup ? "Voted! 1 of 4" : "Saved to your places"}
              </div>
            </>
          )}
        </div>

        <div className="demo-home-indicator" aria-hidden />
      </div>
    </div>
  );
}
