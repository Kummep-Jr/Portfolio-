import data from "../../content/settings/maps.json";
import { list, obj, str, strList } from "@/lib/content";
import { slugify } from "@/lib/slugify";

export type MapItem = {
  slug: string;
  title: string;
  type: string;
  area: string;
  date: string;
  description: string;
  software: string[];
  image: string;
  file?: string;
};

const content = obj(data);

export const mapsIntro = str(
  content.intro,
  "Geological, topographic, drainage, DEM and satellite imagery maps I've produced.",
);

export const maps: MapItem[] = list(content.items)
  .map(obj)
  .filter((item) => str(item.title) && str(item.image))
  .map((item) => ({
    slug: slugify(str(item.title)),
    title: str(item.title),
    type: str(item.type, "Map"),
    area: str(item.area),
    date: str(item.date),
    description: str(item.description),
    software: strList(item.software),
    image: str(item.image),
    file: str(item.file) || undefined,
  }));
