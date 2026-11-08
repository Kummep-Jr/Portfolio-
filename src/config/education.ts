import data from "../../content/settings/education.json";
import { list, obj, str, strList } from "@/lib/content";

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  location?: string;
  details?: string[];
};

const content = obj(data);

export const education: EducationItem[] = list(content.education)
  .map(obj)
  .map((item) => ({
    school: str(item.school),
    degree: str(item.degree),
    period: str(item.period),
    location: str(item.location),
    details: strList(item.details),
  }))
  .filter((item) => item.school);

export const skillGroups: { title: string; items: string[] }[] = list(content.skillGroups)
  .map(obj)
  .map((group) => ({ title: str(group.title), items: strList(group.items) }))
  .filter((group) => group.title || group.items.length);

export const memberships: string[] = strList(content.memberships);
export const skills = skillGroups.flatMap((group) => group.items);
