import data from "../../content/settings/achievements.json";
import { bool, list, obj, str, strList } from "@/lib/content";
import { slugify } from "@/lib/slugify";

export type Achievement = {
  slug: string;
  title: string;
  organization: string;
  year: string;
  periodShort: string;
  periodLong: string;
  details?: string[];
  /** Cover image for cards and detail header */
  image?: string;
  /** Pinterest-style photo gallery on the detail page */
  gallery?: string[];
  featured?: boolean;
};

export const achievements: Achievement[] = list(obj(data).items)
  .map(obj)
  .filter((item) => str(item.title))
  .map((item) => ({
    slug: slugify([str(item.organization), str(item.title), str(item.year)].join(" ")),
    title: str(item.title),
    organization: str(item.organization),
    year: str(item.year),
    periodShort: str(item.periodShort) || str(item.year),
    periodLong: str(item.periodLong) || str(item.year),
    details: strList(item.details),
    image: str(item.image) || undefined,
    gallery: strList(item.gallery),
    featured: bool(item.featured),
  }));

export function getAchievement(slug: string) {
  return achievements.find((item) => item.slug === slug);
}
