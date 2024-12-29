import { Project } from "@/types/project";

export const fetchProjects = async () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Audio-to-text",
      homepage_image: "/projects/audio-to-text.png",
      projectspage_image: "/projects/audio-to-text.png",
      category: "Ui/Ux Design",
      year: "2024",
      image_main: "/projects/audio-to-text.png",
      description: "Description",
      paragraph_title: "Titre",
      paragraph_content: "Contenu",
      link: "#",
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
      paragraph_content: "Contenu",
      link: "#",
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
      paragraph_content: "Contenu",
      link: "#",
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
      paragraph_content: "Contenu",
      link: "#",
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
