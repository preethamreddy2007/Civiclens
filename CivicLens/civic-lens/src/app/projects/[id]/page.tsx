import { demoProjects } from "@/lib/demo-projects";
import ProjectDetail from "./project-detail";

export function generateStaticParams() {
  return demoProjects.map(project => ({ id: String(project.id) }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ProjectDetail id={id} />;
}
