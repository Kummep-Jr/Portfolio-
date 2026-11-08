export type Project = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tech: string[];
  /** Source repository (optional — omit for private repos) */
  href?: string;
  website?: string;
  featured?: boolean;
  /** Optional cover image for project cards */
  cover?: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    slug: "de-saint",
    title: "de Saint",
    date: "11.2026",
    description:
      "E-commerce store for a Nigerian perfume, supplements and cosmetics brand — product collections, cart, wishlist, accounts, and a referral store-credit program.",
    tech: ["Python", "Django", "Flask", "Alpine.js"],
    website: "https://de-saint.onrender.com/",
    featured: true,
    cover: "/assets/projects/de-saint.jpg",
    gradient: "from-amber-500/25 via-yellow-500/15 to-stone-500/25",
  },
  {
    slug: "gds-prime-logistics",
    title: "GDS Prime Logistics",
    date: "11.2026",
    description:
      "Local delivery platform for a logistics company in Jos, Nigeria — book pickups on a map, get distance-based price estimates, and track parcels with live driver location.",
    tech: ["Python", "Django", "Flask", "JavaScript"],
    website: "https://gds-prime-logistics-2z1e.onrender.com/",
    featured: true,
    cover: "/assets/projects/gds-prime-logistics.jpg",
    gradient: "from-red-500/25 via-rose-500/15 to-orange-500/25",
  },
  {
    slug: "wulmi-geological-mapping",
    title: "Geological Mapping of Wulmi",
    date: "2025",
    description:
      "B.Sc. project: independent 1:12,500 geological map of 14 km² of Basement Complex terrain near Pankshin, Plateau State, with structural analysis, thin-section petrography, and pegmatite (lithium, beryl, gemstone) targets.",
    tech: ["QGIS", "ArcGIS Pro", "Surfer", "Field mapping"],
    featured: true,
    cover: "/assets/projects/wulmi-geological-mapping.jpg",
    gradient: "from-stone-500/25 via-amber-500/15 to-emerald-500/25",
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    date: "11.2026",
    description:
      "This site — my portfolio with a CV hub of six tailored CVs, built with Next.js, TypeScript, Tailwind CSS and MDX.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS"],
    href: "https://github.com/Kummep-jnr/Portfolio-",
    cover: "/assets/projects/portfolio.jpg",
    gradient: "from-amber-500/25 via-orange-500/15 to-stone-500/25",
  },
  {
    slug: "gblock",
    title: "Gblock",
    date: "2026",
    description: "A TypeScript web app deployed on Vercel.",
    tech: ["TypeScript", "React"],
    href: "https://github.com/Kummep-jnr/Gblock",
    website: "https://gblock.vercel.app",
    gradient: "from-emerald-500/25 via-teal-500/15 to-cyan-500/25",
  },
  {
    slug: "bfilebot",
    title: "BfileBot",
    date: "2026",
    description: "A Telegram bot written in Python.",
    tech: ["Python", "Telegram API"],
    href: "https://github.com/Kummep-jnr/BfileBot",
    gradient: "from-sky-500/25 via-blue-500/15 to-indigo-500/25",
  },
];
