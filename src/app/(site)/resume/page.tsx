import Link from "next/link";
import {
  ArrowSquareOut,
  DownloadSimple,
  FileDoc,
  FilePdf,
} from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { education, memberships, skillGroups } from "@/config/education";
import { heroConfig } from "@/config/hero";
import { resumeConfig } from "@/config/resume";
import { createPageMetadata, pageTitle } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: pageTitle("CV"),
  description: `CVs of ${heroConfig.fullName} — software & IT, geology, GIS & cartography, mining & exploration, hydrogeology, and academic research.`,
  path: "/resume",
});

const [primary] = resumeConfig.variants;

export default function ResumePage() {
  return (
    <div className="space-y-14 pb-16 pt-8">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight">{resumeConfig.title}</h1>
        <p className="mt-3 max-w-xl text-secondary">{resumeConfig.description}</p>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {resumeConfig.variants.map((cv) => (
            <li
              key={cv.slug}
              className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-secondary">
                  <FilePdf className="size-5" />
                </span>
                <div className="min-w-0">
                  <h2 className="font-semibold tracking-tight">{cv.title}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-secondary">{cv.focus}</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2 pt-1 sm:mt-auto">
                <Link
                  href={cv.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium transition-colors hover:bg-muted"
                >
                  View PDF
                  <ArrowSquareOut className="size-3.5" />
                </Link>
                <a
                  href={cv.pdf}
                  download
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium transition-colors hover:bg-muted"
                >
                  PDF
                  <DownloadSimple className="size-3.5" />
                </a>
                {cv.docx && (
                  <a
                    href={cv.docx}
                    download
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium transition-colors hover:bg-muted"
                  >
                    Word
                    <FileDoc className="size-3.5" />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Container>

      {primary && (
        <Container className="hidden sm:block">
          <SectionHeading title={`Preview — ${primary.title}`} uppercase />
          <iframe
            src={`${primary.pdf}#view=FitH`}
            title={`${heroConfig.fullName} CV — ${primary.title}`}
            className="mt-4 h-[80vh] w-full rounded-xl border border-border bg-muted"
          />
        </Container>
      )}

      <Container>
        <SectionHeading title="Education" uppercase />
        <ul className="mt-4 space-y-6">
          {education.map((item) => (
            <li key={item.school} className="border-b border-border pb-6 last:border-b-0">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-bold tracking-tight">{item.school}</h3>
                <p className="text-sm text-secondary">{item.period}</p>
              </div>
              <p className="mt-1 text-secondary">
                {item.degree}
                {item.location && <span className="text-secondary/70"> · {item.location}</span>}
              </p>
              {item.details && (
                <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-secondary">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span className="mt-[0.6em] size-1.5 shrink-0 bg-secondary/60" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </Container>

      <Container>
        <SectionHeading title="Skills" uppercase />
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold tracking-tight">{group.title}</h3>
              <ul className="mt-2 space-y-1 text-sm leading-relaxed text-secondary">
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <Container>
        <SectionHeading title="Memberships" uppercase />
        <ul className="mt-4 space-y-1.5 text-sm text-secondary">
          {memberships.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
