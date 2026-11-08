import { books } from "@/config/books";
import { favouriteMovies, favouriteSeries } from "@/config/favourites";

export const personalLinks = [
  {
    title: "Books",
    description: "Books that have influenced my thinking and growth.",
    href: "/books",
    visible: books.length > 0,
  },
  {
    title: "Favourites",
    description: "Movies and series I've enjoyed and connected with.",
    href: "/favourites",
    visible: favouriteMovies.length + favouriteSeries.length > 0,
  },
].filter((link) => link.visible);
