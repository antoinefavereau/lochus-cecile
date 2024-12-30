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
      homepage_image: "/projects/Audio-to-text-acceuil.jpg",
      homepage_image_color: "#232137",
      projectspage_image: "/projects/Audio-to-text-acceuil.jpg",
      category: "Ui/Ux Design",
      year: "2024",
      image_main: "/projects/Audio-to-text-acceuil.jpg",
      description:
        "Un projet personnel réalisé en duo, visant à simplifier la conversion d'audios en texte et à offrir une solution accessible et gratuite à un problème souvent payant.",
      paragraph_title: "Mon rôle",
      paragraph_content: [
        "J'ai pris en charge l'UI/UX design du projet. Mon travail consistait à concevoir une interface intuitive et agréable, tout en garantissant une navigation fluide pour l'utilisateur.",
        "J'ai commencé par analyser les solutions existantes pour identifier leurs points faibles et leurs forces. Cette recherche m'a permis d'imaginer une interface simple qui répond mieux aux besoins des utilisateurs.",
      ],
      link: "https://audio-to-text.antoinefavereau.fr/",
      link_text: "Voir le site",
      images: [
        "/projects/audio-to-text-projet1.png",
        "/projects/audio-to-text-projet2.jpg",
        "/projects/audio-to-text-projet3.jpg",
      ],
      what_comes_form_it:
        "L'analyse des sites concurrents m'a appris à identifier les attentes des utilisateurs tout en trouvant des solutions innovantes. Travailler en duo m'a permis de mieux collaborer, communiquer mes idées et intégrer des retours constructifs.",
    },
    {
      id: 2,
      title: "Utopia",
      homepage_image: "/projects/mockup3.png",
      homepage_image_color: "#E8E9EA",
      projectspage_image: "/projects/mockup3.png",
      category: "Branding",
      year: "2024",
      image_main: "/projects/utopia_projet_haut.png",
      description:
        "Refonte complète de la charte graphique du cinéma Utopia à Troyes, dans le cadre d'un projet scolaire, avec pour objectif d'apporter un renouveau créatif tout en préservant l'authenticité de son identité.",
      paragraph_title: "Idée",
      paragraph_content: [
        "Le logo s'inspire d'une bobine de film pour représenter l'univers du cinéma. Pour garder l'authenticité et l'histoire du cinéma Utopia, j'ai repris les ailes d'anges de son ancienne identité. Le style du logo mélange tradition et modernité, avec une typographie harmonieuse qui apporte une touche contemporaine. Il est adapté à l'esthétique du journal officiel du cinéma tout en restant texturé et vintage, et s'intègre parfaitement aux supports actuels comme un site web.",
      ],
      link: "https://audio-to-text.antoinefavereau.fr/",
      mockup_images: [
        "/projects/mockup1.png",
        "/projects/mockup2.png",
        "/projects/mockup3.png",
        "/projects/mockup4.png",
      ],
      branding_images: [
        "/projects/utopia_projet_2.png",
        "/projects/utopia_projet_typo.png",
        "/projects/utopia_projet_couleur1.png",
        "/projects/utopia_projet_couleur2.png",
        "/projects/utopia_projet_picto.png",
        "/projects/utopia_projet5.png",
      ],
    },
    {
      id: 3,
      title: "MMITV3",
      homepage_image: "/projects/logo mmitv.png",
      homepage_image_color: "#ED4C44",
      projectspage_image: "/projects/logo mmitv.png",
      category: "Audiovisuel",
      year: "2024",
      image_main: "/projects/logo mmitv.png",
      description:
        "Projet scolaire réalisé en groupe de 4, consistant à interviewer une personne sur sa passion. Nous avons travaillé ensemble pour préparer les questions, conduire l'entretien et produire un contenu final mettant en valeur l'histoire et l'engagement de la personne interviewée.",
      paragraph_title: "Mon rôle",
      paragraph_content: [
        "Dans ce projet, j'ai pris en charge le cadrage avec la caméra, le repérage des lieux, les demandes d'autorisations nécessaires, ainsi que le montage final de l'interview.",
      ],
      video:
        "/projects/SAE104_2024_GroupeTPE_André_Lochus_Mahéo_InterviewSAE104.mp4",
    },
    {
      id: 4,
      title: "FIFO",
      homepage_image: "/projects/fifo_accueil_projet.png",
      homepage_image_color: "#D1CECB",
      projectspage_image: "/projects/fifo_accueil_projet.png",
      category: "Communication",
      year: "2022",
      image_main: "/projects/fifo_accueil_projet.png",
      description:
        "Chargé de communication au sein de l'association FIFO, qui rassemble les étudiants en informatique de l'Université d'Orléans, je m'occupe de la création de contenus visuels et de la gestion de la communication sur les réseaux sociaux pour promouvoir nos événements et projets.",
      paragraph_title: "Mon rôle",
      paragraph_content: [
        "J'ai eu pour mission de valoriser les actions et événements de l'association. J'ai géré la création de contenus visuels, la diffusion d'informations sur nos différents supports (réseaux sociaux, affiches) et veillé à maintenir une communication claire et dynamique pour engager les étudiants. Cette expérience m'a permis de développer des compétences en création graphique, en gestion de projet et en stratégie de communication tout en contribuant à la vie étudiante de mon ancienne université.",
      ],
      link: "https://www.instagram.com/mmitv3/",
      link_text: "Voir le compte Instagram",
      without_background_image: "/projects/Fifo_projet.png",
      full_width_image: "/projects/fifo_accueil_projet.png",
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
