"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  AudiovisualProject,
  GraphicDesignProject,
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
    | GraphicDesignProject
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
    <div className="flex flex-col items-center gap-24 pt-48">
      {project === null && <p>Chargement...</p>}
      {project !== null && (
        <>
          <div className="w-full flex flex-col gap-4 md:gap-8 md:px-16">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <h1 className="text-4xl md:text-7xl font-extralight">
                {project?.title}
              </h1>
              <p className="md:hidden text-lg text-light pb-8">
                {project?.category}
              </p>
              <div className="hidden md:flex align-center gap-16 text-light">
                {[project.year, project.category].map((info) => (
                  <p key={info} className="relative pb-6">
                    <span>{info}</span>
                    <span className="absolute bottom-0 start-0 w-full max-w-12 h-0.5 bg-primary"></span>
                  </p>
                ))}
              </div>
            </div>
            <Image
              className="w-full h-auto md:rounded-lg"
              src={project.image_main}
              alt={project.title}
              width={1920}
              height={1080}
            />
            <p className="md:hidden text-light self-end pe-10">
              {project.year}
            </p>
          </div>
          <p className="self-end max-w-none md:max-w-4xl text-base md:text-3xl px-8 md:px-16">
            {project.description}
          </p>
          {"mockup_images" in project && (
            <div className="w-full grid grid-cols-1 md:grid-cols-5 md:grid-rows-5 gap-4 px-4 md:px-16 pt-32">
              <Image
                className="md:col-span-2 md:row-span-3 rounded-lg w-full h-auto md:h-0 md:min-h-full object-cover object-center"
                src={project.mockup_images[0]}
                alt={"Mockup 1"}
                width={1920}
                height={1080}
              />
              <Image
                className="md:col-span-3 md:row-span-2 rounded-lg w-full h-auto md:h-0 md:min-h-full object-cover object-center"
                src={project.mockup_images[2]}
                alt={"Mockup 3"}
                width={1920}
                height={1080}
              />
              <Image
                className="md:col-span-3 md:row-span-3 rounded-lg w-full h-auto object-cover object-center md:aspect-square"
                src={project.mockup_images[3]}
                alt={"Mockup 4"}
                width={1920}
                height={1080}
              />
              <Image
                className="md:col-span-2 md:row-span-2 rounded-lg w-full h-auto object-cover object-center md:aspect-square"
                src={project.mockup_images[1]}
                alt={"Mockup 2"}
                width={1920}
                height={1080}
              />
            </div>
          )}
          {"without_background_image" in project && (
            <div className="w-full flex justify-center gap-8 px-4 md:px-16">
              <Image
                className="w-[80%] max-w-3xl h-auto"
                src={project.without_background_image}
                alt={"Image"}
                width={1920}
                height={1080}
              />
            </div>
          )}
          <div className="w-full flex flex-col gap-6 md:gap-8 px-8 md:px-16">
            <h2 className="text-3xl md:text-4xl font-thin">
              {project.paragraph_title}
            </h2>
            <div
              className={`grid md:grid-cols-${project.paragraph_content.length} gap-6`}
            >
              {project.paragraph_content.map((content, index) => (
                <p key={index} className="max-w-4xl text-base md:text-2xl">
                  {content}
                </p>
              ))}
            </div>
          </div>
          {"images" in project && (
            <div className="w-full grid md:grid-cols-2 gap-6 px-4 md:px-16">
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
                    className="rounded-lg w-full h-auto md:row-span-2 self-center"
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
            <div className="w-full flex flex-col items-center gap-8 px-8 md:px-16">
              <p className="max-w-4xl text-base md:text-3xl text-center">
                {project.what_comes_form_it}
              </p>
            </div>
          )}
          {"branding_images" in project && (
            <div className="w-full flex flex-col gap-4 px-4 md:px-16">
              <Image
                className="rounded-lg w-full h-auto"
                src={project.branding_images[0]}
                alt={"Branding 1"}
                width={1920}
                height={1080}
              />
              <div className="grid grid-cols-6 gap-4">
                <Image
                  className="col-span-6 md:col-span-3 rounded-lg w-full h-auto object-cover object-center"
                  src={project.branding_images[1]}
                  alt={"Branding 2"}
                  width={1920}
                  height={1080}
                />
                <div className="grid gap-4 col-span-4 md:col-span-2 md:h-full">
                  <Image
                    className="rounded-lg w-full h-auto md:h-0 md:min-h-full object-cover object-center"
                    src={project.branding_images[2]}
                    alt={"Branding 3"}
                    width={1920}
                    height={1080}
                  />
                  <Image
                    className="rounded-lg w-full h-auto md:h-0 md:min-h-full object-cover object-center"
                    src={project.branding_images[3]}
                    alt={"Branding 4"}
                    width={1920}
                    height={1080}
                  />
                </div>
                <Image
                  className="col-span-2 md:col-span-1 rounded-lg w-full h-0 min-h-full object-cover object-center"
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
              className="w-full h-auto"
              src={project.full_width_image}
              alt={"Full width image"}
              width={1920}
              height={1080}
            />
          )}
          {project.link && (
            <div className="w-full flex justify-center gap-8 px-8">
              <a
                className="group flex items-center gap-4 text-primary text-base md:text-xl font-semibold p-4"
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
        </>
      )}
    </div>
  );
}
