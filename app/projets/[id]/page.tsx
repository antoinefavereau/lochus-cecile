"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  AudiovisualProject,
  BrandingProject,
  DesignProject,
  SoacialMediasProject,
} from "@/types/project";
import { fetchProject } from "@/lib/data";
import Image from "next/image";

export default function Page() {
  const { id } = useParams();
  const name = id as string;
  const [project, setProject] = useState<
    | DesignProject
    | BrandingProject
    | SoacialMediasProject
    | AudiovisualProject
    | null
  >(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProject = await fetchProject(name);
        setProject(fetchedProject);
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };
    fetchData();
  }, [name]);
  return (
    <div className="flex flex-col items-center gap-16 pt-16">
      {project === null && <p>Chargement...</p>}
      {project !== null && (
        <>
          <div className="w-full flex flex-col gap-8 px-16">
            <div className="flex justify-between items-center gap-4">
              <h1 className="text-7xl font-extralight">{project?.title}</h1>
              <div className="flex align-center gap-16 text-light">
                {[project.year, project.category].map((info) => (
                  <p key={info} className="relative pb-6">
                    <span>{info}</span>
                    <div className="absolute bottom-0 start-0 w-full max-w-12 h-0.5 bg-primary"></div>
                  </p>
                ))}
              </div>
            </div>
            <Image
              className="w-full h-auto rounded-lg"
              src={project.image_main}
              alt={project.title}
              width={1920}
              height={1080}
            />
            <p className="pt-8 self-end max-w-4xl text-3xl text-justify">
              {project.description}
            </p>
          </div>
          <div className="w-full flex flex-col gap-8 pt-32 px-16">
            <h2 className="text-4xl font-thin">{project.paragraph_title}</h2>
            <div
              className={`grid grid-cols-${project.paragraph_content.length}`}
            >
              {project.paragraph_content.map((content, index) => (
                <p key={index} className="text-2xl">
                  {content}
                </p>
              ))}
            </div>
          </div>
          {"images" in project && (
            <div className="w-full grid grid-cols-2 gap-8 px-16">
              <div className="flex flex-col gap-8">
                <Image
                  src={project.images[0]}
                  alt={"Image 1"}
                  width={1920}
                  height={1080}
                />
                <Image
                  src={project.images[1]}
                  alt={"Image 2"}
                  width={1920}
                  height={1080}
                />
              </div>
              <Image
                className="row-span-2 self-center"
                src={project.images[2]}
                alt={"Image 3"}
                width={1920}
                height={1080}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
