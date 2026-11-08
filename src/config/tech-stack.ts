export type TechItem = {
  name: string;
  /** simpleicons.org slug, or a path under /public */
  icon: string;
};

// TODO: adjust to the tools you actually use
export const techStack: TechItem[] = [
  { name: "TypeScript", icon: "typescript" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Python", icon: "python" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextdotjs" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "HTML5", icon: "html5" },
  { name: "CSS", icon: "css" },
  { name: "Telegram", icon: "telegram" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "Vercel", icon: "vercel" },
  { name: "QGIS", icon: "qgis" },
];
