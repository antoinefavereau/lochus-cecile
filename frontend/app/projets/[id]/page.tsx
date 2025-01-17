import { Metadata } from "next";
import MoreProjects from "@/components/layout/moreProjects";
import ProjectContent from "./ProjectContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const data = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/api/projets/?filters[titre][$eq]=${id}`
  );
  const project = (await data.json()).data;

  return {
    title: project.titre,
  };
}

export default async function Page({
  params,
}: {
  readonly params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      `/api/projets/?filters[titre][$eq]=${id}&populate=*`
  );
  const project = (await data.json()).data[0];

  return (
    <div className="flex flex-col items-center gap-24 pt-48">
      <ProjectContent project={project} />
      <MoreProjects />
    </div>
  );
}
