import { Container } from "@/components/container";
import { ProjectsGrid } from "@/components/projects-grid";
import { projects } from "@/config/projects";
import { createPageMetadata, pageTitle } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: pageTitle("Projects"),
  description:
    "Web apps, bots and geological mapping projects by Kummep Jnr — including de Saint (e-commerce) and GDS Prime Logistics (parcel delivery).",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="space-y-10 pb-16 pt-8">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="mt-3 text-secondary">
          Web apps for clients, tools I&apos;ve built, and geological mapping work.
        </p>
      </Container>
      <ProjectsGrid items={projects} showHeading={false} />
    </div>
  );
}
