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

// TODO: refine descriptions/dates and add screenshots under public/assets/projects/
export const projects: Project[] = [
  {
    slug: "de-saint",
    title: "de Saint",
    date: "11.2026",
    description:
      "E-commerce store for a Nigerian perfume, supplements and cosmetics brand — product collections, cart, wishlist, accounts, and a referral store-credit program.",
    tech: ["HTML", "CSS", "Alpine.js", "Render"],
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
    tech: ["JavaScript", "PWA", "Maps", "Render"],
    website: "https://gds-prime-logistics-2z1e.onrender.com/",
    featured: true,
    cover: "/assets/projects/gds-prime-logistics.jpg",
    gradient: "from-red-500/25 via-rose-500/15 to-orange-500/25",
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    date: "11.2026",
    description:
      "This site — a personal portfolio built with Next.js, TypeScript, Tailwind CSS, and MDX.",
    tech: ["TypeScript", "Next.js", "Tailwind CSS"],
    href: "https://github.com/Kummep-jnr/Portfolio-",
    featured: true,
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
    featured: true,
    gradient: "from-emerald-500/25 via-teal-500/15 to-cyan-500/25",
  },
  {
    slug: "bfilebot",
    title: "BfileBot",
    date: "2026",
    description: "A Telegram bot written in Python.",
    tech: ["Python", "Telegram API"],
    href: "https://github.com/Kummep-jnr/BfileBot",
    featured: true,
    gradient: "from-sky-500/25 via-blue-500/15 to-indigo-500/25",
  },
];
