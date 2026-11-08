import aboutJson from "../../content/settings/about.json";
import { socialLinks } from "@/config/hero";
import { list, obj, str, strList } from "@/lib/content";

const about = obj(aboutJson);

const colorClasses: Record<string, string> = {
  sky: "border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-800/80 dark:bg-sky-950/40 dark:text-sky-300",
  emerald:
    "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800/80 dark:bg-emerald-950/40 dark:text-emerald-300",
  amber:
    "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800/80 dark:bg-amber-950/40 dark:text-amber-300",
  violet:
    "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-800/80 dark:bg-violet-950/40 dark:text-violet-300",
  rose: "border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-800/80 dark:bg-rose-950/40 dark:text-rose-300",
  slate:
    "border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-800/80 dark:bg-slate-950/40 dark:text-slate-300",
};

const traits = list(about.traits)
  .map(obj)
  .map((trait) => ({ label: str(trait.label), color: str(trait.color, "slate") }))
  .filter((trait) => trait.label);

export const aboutConfig = {
  headline: [str(about.headline1), str(about.headline2)],
  intro: str(about.intro),
  quote: str(about.quote),
  traits: traits.map((trait) => trait.label),
  traitStyles: Object.fromEntries(
    traits.map((trait) => [trait.label, colorClasses[trait.color] ?? colorClasses.slate]),
  ) as Record<string, string>,
  meta: list(about.meta)
    .map(obj)
    .map((item) => ({ label: str(item.label), value: str(item.value) }))
    .filter((item) => item.label || item.value),
  story: { title: str(about.storyTitle), paragraphs: strList(about.story) },
  principles: {
    title: str(about.principlesTitle),
    items: list(about.principles)
      .map(obj)
      .map((item) => ({ title: str(item.title), description: str(item.description) }))
      .filter((item) => item.title || item.description),
  },
  beyond: { title: str(about.beyondTitle), paragraphs: strList(about.beyond) },
  connect: { title: str(about.connectTitle, "Let's connect"), text: str(about.connectText) },
  connectLinks: socialLinks,
};
