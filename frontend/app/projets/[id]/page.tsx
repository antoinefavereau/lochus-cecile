import { Metadata } from "next";
import MoreProjects from "@/components/layout/moreProjects";
import ProjectContent from "./ProjectContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  let project = null;
  try {
    const data = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
        `/api/projets/?filters[titre][$eq]=${id}&populate=*`,
      {
        cache: "no-store",
      }
    );
    project = (await data.json()).data[0];
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  return {
    title: project.titre || "Projet",
  };
}

export default async function Page({
  params,
}: {
  readonly params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let project = null;
  const populateProjetUIUXDesign =
    "populate[champs_categorie][on][projet.projet-ui-ux-design][populate][images][populate]=*";
  const populateProjetDesignGraphique =
    "populate[champs_categorie][on][projet.projet-design-graphique][populate][images_mockup][populate]=*&populate[champs_categorie][on][projet.projet-design-graphique][populate][images_branding][populate]=*";
  const populateProjetAudiovisuel =
    "populate[champs_categorie][on][projet.projet-audiovisuel][populate]=*";
  const populateProjetCommunication =
    "populate[champs_categorie][on][projet.projet-communication][populate]=*";
  const populateProjetDeveloppementWeb =
    "populate[champs_categorie][on][projet.projet-developpement-web][populate]=*";

  try {
    const data = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
        `/api/projets/?filters[titre][$eq]=${id}&populate[0]=*&populate[categorie][populate]=*&populate[image_principale][populate]=*&populate[paragraphe][populate]=*&populate[lien][populate]=*&populate[champs_categorie][populate]=*&${populateProjetUIUXDesign}&${populateProjetDesignGraphique}&${populateProjetAudiovisuel}&${populateProjetCommunication}&${populateProjetDeveloppementWeb}`,
      {
        cache: "no-store",
      }
    );
    project = (await data.json()).data[0];
    console.log("project", project);
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  return (
    <div className="flex flex-col items-center gap-24 pt-48">
      <ProjectContent project={project} />
      <MoreProjects />
    </div>
  );
}
