import data from "../../content/settings/favourites.json";
import { list, obj, str } from "@/lib/content";

export type Favourite = {
  title: string;
  cover: string;
};

const normalise = (value: unknown): Favourite[] =>
  list(value)
    .map(obj)
    .filter((item) => str(item.title))
    .map((item) => ({ title: str(item.title), cover: str(item.cover) || "/icon.png" }));

export const favouriteMovies = normalise(obj(data).movies);
export const favouriteSeries = normalise(obj(data).series);
