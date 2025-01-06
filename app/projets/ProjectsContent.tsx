"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Project } from "@/types/project";

export default function ProjectsContent({
  projects,
  categories,
}: Readonly<{
  projects: Project[];
  categories: string[];
}>) {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const [filteredList, setFilteredList] = useState<Project[]>([]);

  useEffect(() => {
    setFilteredList(
      projects.filter(
        (project) =>
          activeCategory === "Tous" || activeCategory === project.category
      )
    );
  }, [activeCategory, projects]);

  return (
    <div className="relative flex flex-col items-center gap-24 md:gap-32 p-8 pt-48 overflow-hidden">
      <Image
        className="absolute max-w-none w-[240vw] xs:w-[200vw] md:w-[140vw] lg:w-[120vw] top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/4 select-none pointer-events-none"
        src="/ellipses.svg"
        alt="ellipses"
        width={1920}
        height={1080}
      />
      <div className="flex flex-col items-center gap-12 text-center">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-thin text-primary">
          Projets
        </h1>
        <p className="max-w-3xl text-base sm:text-lg md:text-xl">
          Voici quelques projets sur lesquels j&apos;ai eu la chance de
          travailler. Chaque expérience m&apos;a permis d&apos;apprendre,
          d&apos;explorer de nouvelles idées et de relever de passionnants
          défis.
        </p>
        <div className="hidden md:flex gap-4 px-8 bg-veryLight rounded-2xl">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`text-sm lg:text-base px-4 lg:px-6 py-4 ${
                category === activeCategory ? "text-primary" : "text-white"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-6xl mt-8">
        {filteredList.map((project) => (
          <Link
            href={`/projets/${project.title}`}
            key={project.title}
            className="group flex flex-col gap-1 pb-2 md:odd:-mt-8"
          >
            <div className="rounded-lg overflow-hidden">
              <Image
                className="w-full h-auto aspect-[4/3] object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-in-out"
                src={project.projectspage_image}
                alt={project.title}
                width={1920}
                height={1080}
              />
            </div>
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center gap-2 md:gap-4">
                <h2 className="text-xl md:text-3xl">{project.title}</h2>
                <svg
                  className="w-4 md:w-6 h-auto text-primary rotate-[-30deg] group-hover:rotate-0 transition-rotate duration-300 ease-in-out"
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
              <p className="text-sm md:text-base text-light">
                {project.category} | {project.year}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
