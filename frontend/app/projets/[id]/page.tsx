import { fetchProject } from "@/lib/data";
import { Metadata } from "next";
import MoreProjects from "@/components/layout/moreProjects";
import ProjectContent from "./ProjectContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = await fetchProject(id);
  return {
    title: project.title,
  };
}

export default async function Page({
  params,
}: {
  readonly params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await fetchProject(id);

  return (
    <div className="flex flex-col items-center gap-24 pt-48">
      {project === null && <p>Chargement...</p>}
      {project !== null && (
        <>
          <ProjectContent project={project} />
          <MoreProjects />
        </>
      )}
    </div>
  );
}
