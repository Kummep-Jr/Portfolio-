import { achievements } from "@/config/achievements";
import { books } from "@/config/books";
import { experience } from "@/config/experience";
import { favouriteMovies, favouriteSeries } from "@/config/favourites";
import { socialLinks } from "@/config/hero";
import { resumeConfig } from "@/config/resume";

/**
 * Optional pages only appear in navigation once they have content.
 * Blog has no config list, so toggle it here when you publish your first post.
 */
export const hasBlog = false;

const optionalPages = [
  { label: "Work", href: "/work", visible: experience.length > 0 },
  { label: "Blog", href: "/blog", visible: hasBlog },
  { label: "Resume", href: "/resume", visible: Boolean(resumeConfig.viewUrl) },
  { label: "Achievements", href: "/achievements", visible: achievements.length > 0 },
  { label: "Books", href: "/books", visible: books.length > 0 },
  {
    label: "Favourites",
    href: "/favourites",
    visible: favouriteMovies.length + favouriteSeries.length > 0,
  },
];

export const visibleOptionalPages = optionalPages
  .filter((page) => page.visible)
  .map(({ label, href }) => ({ label, href }));

export const headerNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
] as const;

export const moreNav = visibleOptionalPages;

export const footerNav = [...headerNav, ...visibleOptionalPages];

export const commandItems = [
  ...footerNav.map((item) => ({ label: item.label, href: item.href })),
  ...socialLinks
    .filter((link) => link.href.startsWith("http") || link.href.startsWith("mailto:"))
    .map((link) => ({ label: link.name, href: link.href, external: true })),
];
