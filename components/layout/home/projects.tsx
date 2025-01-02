"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { fetchProjects } from "@/lib/data";
import { Project } from "@/types/project";
import { useIsMobile } from "@/context/IsMobileProvider";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projectRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProjects = await fetchProjects();
      setProjects(fetchedProjects);
      setSelectedProject(fetchedProjects[0]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const handleScroll = () => {
      const centerY = window.innerHeight / 2;
      let closest = { dist: Infinity, project: null as Project | null };
      projectRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top + rect.height / 2 - centerY);
        if (dist < closest.dist) {
          closest = { dist, project: projects[i] };
        }
      });
      if (closest.project) setSelectedProject(closest.project);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile, projects]);

  return (
    <section className="flex flex-col gap-8 py-16">
      <div className="relative flex flex-col items-center gap-32 px-8 py-56 min-h-screen">
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
        {projects.map((project, index) => (
          <Link
            href={`/projets/${project.title}`}
            key={project.id}
            className={`relative text-5xl xs:text-6xl md:text-7xl lg:text-8xl font-bold text-center ${
              project.id !== selectedProject?.id && "opacity-50"
            }`}
            ref={(el) => {
              projectRefs.current[index] = el;
            }}
            onMouseEnter={() => setSelectedProject(project)}
          >
            {project.title}
          </Link>
        ))}
      </div>
      <Link className="group py-4 overflow-hidden" href="/projets">
        <div className="w-max flex gap-16 px-8 animate-[horizontalMarquee_30s_linear_infinite]">
          {new Array(20).fill(0).map((_, index) => (
            <div key={index} className="flex items-center gap-4 text-2xl">
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
        </div>
      </Link>
    </section>
  );
}
