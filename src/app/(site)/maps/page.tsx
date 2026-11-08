import Image from "next/image";
import Link from "next/link";
import { ArrowSquareOut, DownloadSimple, MapPin } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/container";
import { maps, mapsIntro } from "@/config/maps";
import { heroConfig } from "@/config/hero";
import { createPageMetadata, pageTitle } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: pageTitle("Maps"),
  description: `Geological, topographic, drainage, DEM and satellite imagery maps by ${heroConfig.fullName}.`,
  path: "/maps",
});

export default function MapsPage() {
  return (
    <div className="space-y-10 pb-16 pt-8">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight">Maps</h1>
        <p className="mt-3 max-w-xl text-secondary">{mapsIntro}</p>
      </Container>

      <Container>
        {maps.length === 0 ? (
          <p className="text-secondary">No maps published yet.</p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2">
            {maps.map((map) => (
              <li
                key={map.slug}
                id={map.slug}
                className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm"
              >
                <Link
                  href={map.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-[4/3] overflow-hidden bg-muted"
                  aria-label={`Open ${map.title} full size`}
                >
                  <Image
                    src={map.image}
                    alt={map.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 360px"
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-secondary">
                    <span className="rounded-full border border-border bg-muted px-2 py-0.5 font-medium">
                      {map.type}
                    </span>
                    {map.date && <span>{map.date}</span>}
                  </div>
                  <h2 className="mt-3 text-lg font-bold tracking-tight">{map.title}</h2>
                  {map.area && (
                    <p className="mt-1 flex items-center gap-1 text-sm text-secondary">
                      <MapPin className="size-4 shrink-0" />
                      {map.area}
                    </p>
                  )}
                  {map.description && (
                    <p className="mt-3 text-sm leading-relaxed text-secondary">{map.description}</p>
                  )}
                  {map.software.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {map.software.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[11px] text-secondary"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="mt-5 flex flex-wrap gap-2 pt-1 sm:mt-auto">
                    <Link
                      href={map.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium transition-colors hover:bg-muted"
                    >
                      View full size
                      <ArrowSquareOut className="size-3.5" />
                    </Link>
                    {map.file && (
                      <a
                        href={map.file}
                        download
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium transition-colors hover:bg-muted"
                      >
                        Download file
                        <DownloadSimple className="size-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </div>
  );
}
