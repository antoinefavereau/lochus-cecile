"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  image: string;
  category: string;
  year: string;
}

interface Category {
  id: number;
  title: string;
}

export default function Page() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Audio-to-text",
      image: "/projects/audio-to-text.png",
      category: "Ui/Ux Design",
      year: "2024",
    },
    {
      id: 2,
      title: "Utopia",
      image: "/projects/utopia.png",
      category: "Branding",
      year: "2024",
    },
    {
      id: 4,
      title: "MMITV3",
      image: "/projects/mmitv.png",
      category: "Audiovisuel",
      year: "2024",
    },
    {
      id: 3,
      title: "FIFO",
      image: "/projects/fifo.png",
      category: "Réseaux sociaux",
      year: "2024",
    },
  ];

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
      title: "Design Graphique",
    },
    {
      id: 4,
      title: "Réseaux sociaux",
    },
  ];

  const [activeCategory, setActiveCategory] = useState<Category>(categories[0]);

  return (
    <div className="flex flex-col items-center gap-24 pt-20">
      <div className="flex flex-col items-center gap-12 text-center">
        <h1 className="text-8xl font-thin text-primary">Projets</h1>
        <p className="max-w-3xl text-xl">
          Voici quelques projets sur lesquels j&apos;ai eu la chance de travailler.
          Chaque expérience m&apos;a permis d&apos;apprendre, d&apos;explorer de nouvelles
          idées et de relever de passionnants défis.
        </p>
        <div className="flex gap-4 px-8 bg-veryLight rounded-2xl">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`px-6 py-4 ${
                category.id === activeCategory.id
                  ? "text-primary"
                  : "text-white"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>
      <div className="columns-2 gap-6 w-full max-w-6xl mt-8">
        {projects.map((project) => (
          <Link
            href={`/projets/${project.title}`}
            key={project.title}
            className="group block pb-7 first:-mt-8"
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
                {project.category} | {project.year}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
