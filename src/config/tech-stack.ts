import data from "../../content/settings/tech-stack.json";
import { list, obj, str } from "@/lib/content";

export type TechItem = {
  name: string;
  /** simpleicons.org slug, or a path under /public */
  icon: string;
};

export const techStack: TechItem[] = list(obj(data).items)
  .map(obj)
  .map((item) => ({ name: str(item.name), icon: str(item.icon) }))
  .filter((item) => item.name && item.icon);
