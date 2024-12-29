"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

interface Category {
  id: number;
  title: string;
}

interface Project {
  id: number;
  title: string;
  image: string;
  category: number;
  year: string;
}

export default function Page() {
  const categories: Category[] = [
    {
      id: 0,
      title: "Tous",
    },
    {
      id: 1,
      title: "Ui/Ux Design",
    },
    {
      id: 2,
      title: "Audiovisuel",
    },
    {
      id: 3,
      title: "Branding",
    },
    {
      id: 4,
      title: "Réseaux sociaux",
    },
  ];

  const projects: Project[] = useMemo(
    () => [
      {
        id: 1,
        title: "Audio-to-text",
        image: "/projects/audio-to-text.png",
        category: 1,
        year: "2024",
      },
      {
        id: 2,
        title: "Utopia",
        image: "/projects/utopia.png",
        category: 3,
        year: "2024",
      },
      {
        id: 4,
        title: "MMITV3",
        image: "/projects/mmitv.png",
        category: 2,
        year: "2024",
      },
      {
        id: 3,
        title: "FIFO",
        image: "/projects/fifo.png",
        category: 4,
        year: "2024",
      },
    ],
    []
  );

  const [activeCategory, setActiveCategory] = useState<number>(
    categories[0].id
  );

  const [filteredList, setFilteredList] = useState<Project[]>([]);

  const getCategoryFromId = (id: number) => {
    return categories.find((category) => category.id === id);
  };

  useEffect(() => {
    setFilteredList(
      projects.filter(
        (project) => activeCategory === 0 || activeCategory === project.category
      )
    );
  }, [activeCategory, projects]);

  return (
    <div className="flex flex-col items-center gap-32 p-8 pt-16">
      <div className="flex flex-col items-center gap-12 text-center">
        <h1 className="text-8xl font-thin text-primary">Projets</h1>
        <p className="max-w-3xl text-xl">
          Voici quelques projets sur lesquels j&apos;ai eu la chance de
          travailler. Chaque expérience m&apos;a permis d&apos;apprendre,
          d&apos;explorer de nouvelles idées et de relever de passionnants
          défis.
        </p>
        <div className="flex gap-4 px-8 bg-veryLight rounded-2xl">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`px-6 py-4 ${
                category.id === activeCategory ? "text-primary" : "text-white"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-5xl mt-8">
        {filteredList.map((project) => (
          <Link
            href={`/projets/${project.title}`}
            key={project.title}
            className="group flex flex-col gap-1 odd:-mt-8"
          >
            <div className="rounded-lg overflow-hidden">
              <Image
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300 ease-in-out"
                src={project.image}
                alt={project.title}
                width={1920}
                height={1080}
              />
            </div>
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center gap-4">
                <h2 className="text-3xl">{project.title}</h2>
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
              <p className="text-light">
                {getCategoryFromId(project.category)?.title} | {project.year}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
