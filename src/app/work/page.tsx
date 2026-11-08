import { Container } from "@/components/container";
import { ExperienceSection } from "@/components/landing/experience-section";
import { createPageMetadata, pageTitle } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: pageTitle("Work"),
  description:
    "Work experience of Kummep Jnr — freelance full-stack development, GIS mapping, IT support, NYSC and NGSA industrial training.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <div className="space-y-10 pb-16 pt-8">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight">Work</h1>
        <p className="mt-3 text-muted-foreground">
          Freelance work, national service and industrial training — in software, IT and geology.
        </p>
      </Container>
      <ExperienceSection />
    </div>
  );
}
