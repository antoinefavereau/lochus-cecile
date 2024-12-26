"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Audio-to-text",
      image: "/projects/audio-to-text.png",
    },
    {
      id: 2,
      title: "Utopia",
      image: "/projects/utopia.png",
    },
    {
      id: 3,
      title: "MMITV3",
      image: "/projects/mmitv.png",
    },
    {
      id: 4,
      title: "FIFO",
      image: "/projects/fifo.png",
    },
  ];

  const [selectedProject, setSelectedProject] = useState<any>(projects[0]);

  return (
    <section className="relative flex flex-col items-center gap-32 px-8 py-40 min-h-screen">
      {projects.map((project) => (
        <div key={project.id} className="absolute inset-0">
          <Image className={`sticky top-0 w-full h-screen object-cover object-center brightness-90 transition-opacity duration-300 ${project.id !== selectedProject.id && "opacity-0"}`} src={project.image} width="1920" height="1080" alt={selectedProject.title} />
        </div>
      ))}
      {projects.map((project) => (
        <Link
          href={`/ projets / ${project.title}`}
          key={project.id}
          className={`relative text-8xl font-bold ${project.id !== selectedProject.id && "opacity-50"}`}
          onMouseEnter={() => setSelectedProject(project)}
        >
          {project.title}
        </Link>
      ))}
    </section >
  );
}
