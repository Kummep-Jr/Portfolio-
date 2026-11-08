import { socialLinks } from "@/config/hero";

export const aboutConfig = {
  headline: ["From reading rocks", "to writing code."],
  intro:
    "I'm Kummep Ringpon Timyil — Kummep Jnr — a **full-stack developer**, **IT technician** and **geology graduate** of the University of Jos. I build web apps for clients, make maps for people who need to understand the ground, and fix the computers in between.",
  quote:
    "The present is the key to the past — and good software, like good geology, is about reading the layers carefully.",
  traits: ["Curious", "Builder", "Analytical", "Persistent"] as const,
  traitStyles: {
    Curious:
      "border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-800/80 dark:bg-sky-950/40 dark:text-sky-300",
    Builder:
      "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800/80 dark:bg-emerald-950/40 dark:text-emerald-300",
    Analytical:
      "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800/80 dark:bg-amber-950/40 dark:text-amber-300",
    Persistent:
      "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-800/80 dark:bg-violet-950/40 dark:text-violet-300",
  },
  meta: [
    { label: "Location", value: "Girei, Adamawa, Nigeria" },
    { label: "Status", value: "NYSC · Open to opportunities" },
    { label: "Focus", value: "Full-stack · GIS · Geology" },
  ],
  story: {
    title: "How it started",
    paragraphs: [
      "I studied **geology** at the University of Jos, graduating in 2025. Field mapping exercises took me across the Jos Plateau — Kanam, Wase, Mazah, Miango, Barkin Ladi — and my industrial training with the **Nigerian Geological Survey Agency (NGSA)** put me on real field teams collecting stream sediment samples and writing reports.",
      "For my final-year project I independently mapped **14 km²** of Basement Complex terrain around Wulmi, Pankshin, at 1:12,500 scale, combining structural analysis with thin-section petrography — and identified pegmatites as targets for **lithium, beryl and gemstones**, and fractured zones as potential aquifers.",
      "Alongside geology, I've been freelancing in **software** since 2023: building web apps with Django, Flask, FastAPI, React and Next.js, deploying them with Docker, and working as an **IT technician** — installing systems, repairing hardware, setting up networks and recovering data.",
      "Today I'm serving my NYSC year with the Department of Geology at **Modibbo Adama University, Yola**, supporting final-year research students and training my host community in digital skills — while taking on development and **GIS mapping** work on the side.",
    ],
  },
  principles: {
    title: "How I work",
    items: [
      {
        title: "Observe first",
        description:
          "Like logging an outcrop, I start by understanding the problem and the data before writing code or drawing a map.",
      },
      {
        title: "Ship, then refine",
        description:
          "A working version beats a perfect plan. I iterate quickly based on real feedback from clients.",
      },
      {
        title: "Sweat the details",
        description:
          "Clear map layouts, loading states and edge cases matter as much as the logic behind them.",
      },
      {
        title: "Teach what I know",
        description:
          "Whether it's final-year students or a digital literacy class, sharing skills is part of the job.",
      },
    ],
  },
  beyond: {
    title: "Beyond the code",
    paragraphs: [
      "I'm a student member of the **Nigerian Mining and Geosciences Society (NMGS)** and the **Nigerian Association of Petroleum Explorationists (NAPE)**. My research interests are igneous and metamorphic petrology, structural geology, pegmatite mineralization, and **GIS and remote sensing** in geological mapping.",
      "I speak English, Hausa and Taroh, and I'm always open to projects that bring **software** and **earth science** together.",
    ],
  },
  connectLinks: socialLinks,
};
