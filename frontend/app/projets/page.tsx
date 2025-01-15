import { fetchProjects } from "@/lib/data";
import { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";

const categories: string[] = [
  "Tous",
  "Ui/Ux Design",
  "Audiovisuel",
  "Design Graphique",
  "Communication",
];

export const metadata: Metadata = {
  title: "Projets",
};

export default async function Page() {
  const projects = await fetchProjects();

  return (
    <ProjectsContent
      projects={projects}
      categories={categories}
    ></ProjectsContent>
  );
}
