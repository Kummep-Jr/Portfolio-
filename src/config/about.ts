import { heroConfig, socialLinks } from "@/config/hero";

export const aboutConfig = {
  headline: ["From reading rocks", "to writing code."],
  intro:
    "I'm Kummep Jnr — a **full-stack developer** and **geologist**. I like building things that are useful, fast, and easy to use, from web apps to bots and small automation tools.",
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
    { label: "Location", value: heroConfig.location },
    { label: "Status", value: "Open to opportunities" },
    { label: "Focus", value: "Full-stack · Geology" },
  ],
  // TODO: personalise the story below with your own journey
  story: {
    title: "How it started",
    paragraphs: [
      "My background is in **geology** — the study of how the earth is built, layer by layer. It trained me to observe carefully, work with messy real-world data, and explain complex systems clearly.",
      "Along the way I got hooked on **software**. Writing code felt like the same kind of problem-solving: break a big system into parts, understand how they fit together, and build something that holds up.",
      "Today I work as a **full-stack developer**, building websites, web apps, and bots — from TypeScript front-ends to Python automation. I care about clean structure, fast pages, and interfaces people actually enjoy using.",
      "I'm especially interested in where the two worlds meet: tools for **earth-science data**, mapping, and field work that make scientists' lives easier.",
    ],
  },
  principles: {
    title: "How I work",
    items: [
      {
        title: "Observe first",
        description:
          "Like logging an outcrop, I start by understanding the problem and the data before writing code.",
      },
      {
        title: "Ship, then refine",
        description:
          "A working version beats a perfect plan. I iterate quickly based on real feedback.",
      },
      {
        title: "Sweat the details",
        description:
          "Loading states, edge cases, and clear UX matter as much as the logic behind them.",
      },
      {
        title: "Build for people",
        description:
          "Technology is a means to an end. If it doesn't solve a real problem, it doesn't count.",
      },
    ],
  },
  beyond: {
    title: "Beyond the code",
    paragraphs: [
      "When I'm not building software, I'm usually thinking about rocks, landscapes, and the processes that shaped them. Geology keeps me grounded — literally.",
      "I'm always open to collaborating on interesting projects, especially ones that bring **software** and **science** together.",
    ],
  },
  connectLinks: socialLinks,
};
