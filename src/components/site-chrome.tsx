import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CommandMenu } from "@/components/command-menu";
import { CursorPet } from "@/components/cursor-pet";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PersonJsonLd } from "@/components/person-json-ld";
import { getNavigation } from "@/lib/navigation";

/** Header, footer and page furniture shared by every public page. */
export async function SiteChrome({ children }: { children: React.ReactNode }) {
  const nav = await getNavigation();

  return (
    <div className="relative flex min-h-screen flex-col bg-green-grid">
      <PersonJsonLd />
      <SiteHeader headerNav={nav.headerNav} moreNav={nav.moreNav} />
      <main className="page-content flex-1">{children}</main>
      <ScrollReveal />
      <SiteFooter />
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-10 h-[60px] bg-gradient-to-t from-background/80 to-transparent [mask-image:linear-gradient(to_top,black_50%,transparent)]" />
      <CommandMenu items={nav.commandItems} />
      <CursorPet />
    </div>
  );
}
