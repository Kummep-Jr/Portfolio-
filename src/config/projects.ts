import data from "../../content/settings/projects.json";
import { bool, list, obj, str, strList } from "@/lib/content";
import { slugify } from "@/lib/slugify";

export type Project = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tech: string[];
  /** Source repository (optional) */
  href?: string;
  website?: string;
  featured?: boolean;
  cover?: string;
  gradient: string;
};

export const projects: Project[] = list(obj(data).items)
  .map(obj)
  .filter((item) => str(item.title))
  .map((item) => ({
    slug: slugify(str(item.title)),
    title: str(item.title),
    date: str(item.date),
    description: str(item.description),
    tech: strList(item.tech),
    href: str(item.repo) || undefined,
    website: str(item.website) || undefined,
    featured: bool(item.featured),
    cover: str(item.cover) || undefined,
    gradient: str(item.gradient) || "from-amber-500/25 via-orange-500/15 to-stone-500/25",
  }));
