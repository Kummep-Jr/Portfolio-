import data from "../../content/settings/books.json";
import { list, obj, str } from "@/lib/content";

export type Book = {
  title: string;
  author: string;
  cover: string;
};

export const books: Book[] = list(obj(data).items)
  .map(obj)
  .filter((book) => str(book.title))
  .map((book) => ({
    title: str(book.title),
    author: str(book.author),
    cover: str(book.cover) || "/icon.png",
  }));
