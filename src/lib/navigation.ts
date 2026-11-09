import { achievements } from "@/config/achievements";
import { books } from "@/config/books";
import { experience } from "@/config/experience";
import { favouriteMovies, favouriteSeries } from "@/config/favourites";
import { socialLinks } from "@/config/hero";
import { maps } from "@/config/maps";
import { resumeConfig } from "@/config/resume";
import { getBlogPosts } from "@/lib/mdx";
import type { CommandItem, NavItem } from "@/lib/navigation-types";

export const headerNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
];

/** Optional pages appear in navigation only once they have content. */
export async function getOptionalPages(): Promise<NavItem[]> {
  const posts = await getBlogPosts();
  return [
    { label: "Work", href: "/work", visible: experience.length > 0 },
    { label: "Maps", href: "/maps", visible: maps.length > 0 },
    { label: "Blog", href: "/blog", visible: posts.length > 0 },
    { label: "CV", href: "/resume", visible: resumeConfig.variants.length > 0 },
    { label: "Achievements", href: "/achievements", visible: achievements.length > 0 },
    { label: "Books", href: "/books", visible: books.length > 0 },
    {
      label: "Favourites",
      href: "/favourites",
      visible: favouriteMovies.length + favouriteSeries.length > 0,
    },
  ]
    .filter((page) => page.visible)
    .map(({ label, href }) => ({ label, href }));
}

export async function getNavigation() {
  const moreNav = await getOptionalPages();
  const commandItems: CommandItem[] = [
    ...headerNav,
    ...moreNav,
    ...socialLinks
      .filter((link) => link.href.startsWith("http") || link.href.startsWith("mailto:"))
      .map((link) => ({ label: link.name, href: link.href, external: true })),
    { label: "Admin", href: "/keystatic" },
  ];
  return { headerNav, moreNav, commandItems };
}
