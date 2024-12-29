import {
  DesignProject,
  BrandingProject,
  SoacialMediasProject,
  AudiovisualProject,
} from "@/types/project";

export const fetchProjects = async () => {
  const projects: (
    | DesignProject
    | BrandingProject
    | SoacialMediasProject
    | AudiovisualProject
  )[] = [
    {
      id: 1,
      title: "Audio-to-text",
      homepage_image: "/projects/audio-to-text.png",
      projectspage_image: "/projects/audio-to-text.png",
      category: "Ui/Ux Design",
      year: "2024",
      image_main: "/projects/audio-to-text.png",
      description:
        "Un projet personnel réalisé en duo, visant à simplifier la conversion d'audios en texte et à offrir une solution accessible et gratuite à un problème souvent payant.",
      paragraph_title: "Mon rôle",
      paragraph_content: [
        "J'ai pris en charge l'UI/UX design du projet. Mon travail consistait à concevoir une interface intuitive et agréable, tout en garantissant une navigation fluide pour l'utilisateur.",
        "J'ai commencé par analyser les solutions existantes pour identifier leurs points faibles et leurs forces. Cette recherche m'a permis d'imaginer une interface simple qui répond mieux aux besoins des utilisateurs.",
      ],
      link: "https://audio-to-text.antoinefavereau.fr/",
      images: [
        "/projects/audio-to-text.png",
        "/projects/audio-to-text.png",
        "/projects/audio-to-text.png",
        "/projects/audio-to-text.png",
      ],
      what_comes_form_it:
        "L'analyse des sites concurrents m'a appris à identifier les attentes des utilisateurs tout en trouvant des solutions innovantes. Travailler en duo m'a permis de mieux collaborer, communiquer mes idées et intégrer des retours constructifs.",
    },
    {
      id: 2,
      title: "Utopia",
      homepage_image: "/projects/utopia.png",
      projectspage_image: "/projects/utopia.png",
      category: "Branding",
      year: "2024",
      image_main: "/projects/utopia.png",
      description: "Description",
      paragraph_title: "Titre",
      paragraph_content: ["Contenu"],
      link: "#",
      images: [
        "/projects/audio-to-text.png",
        "/projects/audio-to-text.png",
        "/projects/audio-to-text.png",
        "/projects/audio-to-text.png",
      ],
      what_comes_form_it:
        "L'analyse des sites concurrents m'a appris à identifier les attentes des utilisateurs tout en trouvant des solutions innovantes. Travailler en duo m'a permis de mieux collaborer, communiquer mes idées et intégrer des retours constructifs.",
    },
    {
      id: 3,
      title: "MMITV3",
      homepage_image: "/projects/mmitv.png",
      projectspage_image: "/projects/mmitv.png",
      category: "Audiovisuel",
      year: "2024",
      image_main: "/projects/mmitv.png",
      description: "Description",
      paragraph_title: "Titre",
      paragraph_content: ["Contenu"],
      link: "#",
      images: [
        "/projects/audio-to-text.png",
        "/projects/audio-to-text.png",
        "/projects/audio-to-text.png",
        "/projects/audio-to-text.png",
      ],
      what_comes_form_it:
        "L'analyse des sites concurrents m'a appris à identifier les attentes des utilisateurs tout en trouvant des solutions innovantes. Travailler en duo m'a permis de mieux collaborer, communiquer mes idées et intégrer des retours constructifs.",
    },
    {
      id: 4,
      title: "FIFO",
      homepage_image: "/projects/fifo.png",
      projectspage_image: "/projects/fifo.png",
      category: "Réseaux sociaux",
      year: "2024",
      image_main: "/projects/fifo.png",
      description: "Description",
      paragraph_title: "Titre",
      paragraph_content: ["Contenu"],
      link: "#",
      images: [
        "/projects/audio-to-text.png",
        "/projects/audio-to-text.png",
        "/projects/audio-to-text.png",
        "/projects/audio-to-text.png",
      ],
      what_comes_form_it:
        "L'analyse des sites concurrents m'a appris à identifier les attentes des utilisateurs tout en trouvant des solutions innovantes. Travailler en duo m'a permis de mieux collaborer, communiquer mes idées et intégrer des retours constructifs.",
    },
  ];
  return projects;
};

export const fetchProject = async (title: string) => {
  if (!title) {
    throw new Error("Project title is required");
  }
  const projects = await fetchProjects();
  const project = projects.find(
    (project) => project.title.toLowerCase() === title.toLowerCase()
  );

  if (!project) {
    throw new Error("Project not found");
  }
  return project;
};
