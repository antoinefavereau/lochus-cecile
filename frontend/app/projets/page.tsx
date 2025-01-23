import { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";
import { ApiProjetProjet } from "@/types/generated/contentTypes";

export const metadata: Metadata = {
  title: "Projets",
};

export default async function Page() {
  let texte_description = "";
  try {
    const data = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/page-projet"
    );
    texte_description = (await data.json()).data.texte_description;
  } catch (error) {
    console.error("Error fetching projects page description:", error);
  }

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
      texte_description={texte_description}
      projects={projects}
      categories={categories}
    ></ProjectsContent>
  );
}
