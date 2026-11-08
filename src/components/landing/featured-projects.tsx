import { ProjectsGrid } from "@/components/projects-grid";

export function FeaturedProjects({ limit = 4 }: { limit?: number }) {
  return <ProjectsGrid limit={limit} showViewAll />;
}
