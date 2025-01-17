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
  const data = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/projets?populate=*");
  const projects = (await data.json()).data;

  return (
    <ProjectsContent
      projects={projects}
      categories={categories}
    ></ProjectsContent>
  );
}
