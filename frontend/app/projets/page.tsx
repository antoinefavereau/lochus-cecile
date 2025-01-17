import { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";
import { ApiProjetProjet } from "@/types/generated/contentTypes";

export const metadata: Metadata = {
  title: "Projets",
};

export default async function Page() {
  let projects = [];
  let categories: string[] = ["Tous"];
  try {
    const data = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/projets?populate=*"
    );
    projects = (await data.json()).data;
    const projectCategories: string[] = Array.from(
      new Set(
        projects.map(
          (project: ApiProjetProjet["attributes"]) => project.categorie.titre
        )
      )
    );
    categories = ["Tous", ...projectCategories];
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  return (
    <ProjectsContent
      projects={projects}
      categories={categories}
    ></ProjectsContent>
  );
}
