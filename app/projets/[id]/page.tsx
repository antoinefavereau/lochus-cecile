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
    <div className="flex flex-col items-center gap-24 pt-16">
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
                    <span className="absolute bottom-0 start-0 w-full max-w-12 h-0.5 bg-primary"></span>
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
            <p className="self-end pt-16 max-w-4xl text-3xl">
              {project.description}
            </p>
          </div>
          {"mockup_images" in project && (
            <div className="w-full grid grid-cols-2 gap-6 px-16 pt-32">
              {project.mockup_images.map((image, index) => (
                <Image
                  key={index}
                  className="rounded-lg w-full h-auto aspect-[4/3] object-cover object-center"
                  src={image as string}
                  alt={"Mockup " + index}
                  width={1920}
                  height={1080}
                />
              ))}
            </div>
          )}
          {"without_background_image" in project && (
            <div className="w-full flex flex-col gap-8 px-16">
              <Image
                className="w-full h-auto"
                src={project.without_background_image}
                alt={"Image"}
                width={1920}
                height={1080}
              />
            </div>
          )}
          <div className="w-full flex flex-col gap-8 pt-32 px-16">
            <h2 className="text-4xl font-thin">{project.paragraph_title}</h2>
            <div
              className={`grid grid-cols-${project.paragraph_content.length}`}
            >
              {project.paragraph_content.map((content, index) => (
                <p key={index} className="max-w-4xl text-2xl">
                  {content}
                </p>
              ))}
            </div>
          </div>
          {"images" in project && (
            <div className="w-full grid grid-cols-2 gap-6 px-16">
              {project.images.length === 3 && (
                <>
                  <div className="flex flex-col gap-6">
                    <Image
                      className="rounded-lg w-full h-auto"
                      src={project.images[0]}
                      alt={"Image 1"}
                      width={1920}
                      height={1080}
                    />
                    <Image
                      className="rounded-lg w-full h-auto"
                      src={project.images[1]}
                      alt={"Image 2"}
                      width={1920}
                      height={1080}
                    />
                  </div>
                  <Image
                    className="rounded-lg w-full h-auto row-span-2 self-center"
                    src={project.images[2]}
                    alt={"Image 3"}
                    width={1920}
                    height={1080}
                  />
                </>
              )}
              {project.images.length === 4 &&
                project.images.map((image, index) => (
                  <Image
                    key={index}
                    className="rounded-lg w-full h-auto aspect-[4/3] object-cover object-center"
                    src={image as string}
                    alt={"Image " + index}
                    width={1920}
                    height={1080}
                  />
                ))}
            </div>
          )}
          {"what_comes_form_it" in project && (
            <div className="w-full flex flex-col items-center gap-8 px-16">
              <p className="max-w-4xl text-3xl text-center">
                {project.what_comes_form_it}
              </p>
            </div>
          )}
          {"branding_images" in project && (
            <div className="w-full flex flex-col gap-4 px-16 pt-32">
              <Image
                className="rounded-lg w-full h-auto"
                src={project.branding_images[0]}
                alt={"Branding 1"}
                width={1920}
                height={1080}
              />
              <div className="grid grid-cols-6 gap-4">
                <Image
                  className="col-span-3 rounded-lg w-full h-auto object-cover object-center"
                  src={project.branding_images[1]}
                  alt={"Branding 2"}
                  width={1920}
                  height={1080}
                />
                <div className="grid gap-4 col-span-2 h-full">
                  <Image
                    className="rounded-lg w-full h-0 min-h-full object-cover object-center"
                    src={project.branding_images[2]}
                    alt={"Branding 3"}
                    width={1920}
                    height={1080}
                  />
                  <Image
                    className="rounded-lg w-full h-0 min-h-full object-cover object-center"
                    src={project.branding_images[3]}
                    alt={"Branding 4"}
                    width={1920}
                    height={1080}
                  />
                </div>
                <Image
                  className="col-span-1 rounded-lg w-full h-0 min-h-full object-cover object-center"
                  src={project.branding_images[4]}
                  alt={"Branding 5"}
                  width={1920}
                  height={1080}
                />
              </div>
              {project.branding_images.length > 5 && (
                <Image
                  className="rounded-lg w-full h-auto"
                  src={project.branding_images[5] as string}
                  alt={"Branding 6"}
                  width={1920}
                  height={1080}
                />
              )}
            </div>
          )}
          {"video" in project && (
            <video controls>
              <source src={project.video} type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
          )}
          {"full_width_image" in project && (
            <Image
              className="w-full h-auto mt-16"
              src={project.full_width_image}
              alt={"Full width image"}
              width={1920}
              height={1080}
            />
          )}
          {project.link && (
            <div className="w-full flex justify-center gap-8 px-16">
              <a
                className="group flex items-center gap-4 text-primary font-semibold p-4"
                href={project.link}
                target="_blank"
              >
                <span>{project.link_text ?? "Voir le projet"}</span>
                <svg
                  className="rotate-[-30deg] group-hover:rotate-0 transition-rotate duration-300 ease-in-out"
                  width="20"
                  height="20"
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
              </a>
            </div>
          )}
          <div className="w-full flex flex-col gap-8 px-16"></div>
        </>
      )}
    </div>
  );
}
