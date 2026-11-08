import data from "../../content/settings/experience.json";
import { bool, list, obj, str, strList } from "@/lib/content";

export type ExperienceItem = {
  company: string;
  role: string;
  type: string;
  periodShort: string;
  periodLong: string;
  locationShort: string;
  locationLong: string;
  working?: boolean;
  details?: string[];
  tech?: string[];
  logo?: string;
};

export const experience: ExperienceItem[] = list(obj(data).items)
  .map(obj)
  .map((item) => ({
    role: str(item.role),
    company: str(item.company),
    type: str(item.type),
    periodShort: str(item.periodShort) || str(item.periodLong),
    periodLong: str(item.periodLong) || str(item.periodShort),
    locationShort: str(item.locationShort) || str(item.locationLong),
    locationLong: str(item.locationLong) || str(item.locationShort),
    working: bool(item.working),
    details: strList(item.details),
    tech: strList(item.tech),
    logo: str(item.logo) || undefined,
  }))
  .filter((item) => item.role || item.company);
