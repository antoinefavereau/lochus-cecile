"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchProjects } from "@/lib/data";
import { Project } from "@/types/project";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProjects = await fetchProjects();
      setProjects(fetchedProjects);
      setSelectedProject(fetchedProjects[0]);
    };
    fetchData();
  }, []);

  return (
    <section className="flex flex-col gap-8">
      <div className="relative flex flex-col items-center gap-32 px-8 py-40 min-h-screen">
        {projects.map((project) => (
          <div key={project.id} className="absolute inset-0">
            <Image
              className={`sticky top-0 w-full h-screen object-contain object-center brightness-90 transition-opacity duration-300 ${
                project.id !== selectedProject?.id && "opacity-0"
              }`}
              src={project.homepage_image}
              width="1920"
              height="1080"
              alt={selectedProject?.title ?? ""}
              style={{ backgroundColor: project.homepage_image_color }}
            />
          </div>
        ))}
        {projects.map((project) => (
          <Link
            href={`/projets/${project.title}`}
            key={project.id}
            className={`relative text-8xl font-bold ${
              project.id !== selectedProject?.id && "opacity-50"
            }`}
            onMouseEnter={() => setSelectedProject(project)}
          >
            {project.title}
          </Link>
        ))}
      </div>
      <Link className="group flex py-4 overflow-hidden" href="/projets">
        {new Array(20).fill(0).map((_, index) => (
          <div
            key={index}
            className="shrink-0 flex items-center gap-4 pe-16 text-2xl animate-[horizontalMarquee_3s_linear_infinite]"
          >
            <span>Voir plus de projets</span>
            <svg
              className="text-primary rotate-[-30deg] group-hover:rotate-0 transition-rotate duration-300 ease-in-out"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.70898 12.0693L22.709 12.0693M22.709 12.0693L12.629 1.98926M22.709 12.0693L12.629 22.1493"
                stroke="currentcolor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ))}
      </Link>
    </section>
  );
}
