"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import SliceInText from "@/components/ui/sliceInText";
import { ApiProjetProjet } from "@/types/generated/contentTypes";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectContent({
  project,
}: Readonly<{
  project: ApiProjetProjet["attributes"];
}>) {
  const titleRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);
  const dateLineRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);
  const categoryLineRef = useRef<HTMLDivElement>(null);
  const image_mainRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const fadeUp = { y: 100, opacity: 0 };

    gsap
      .timeline({
        defaults: { duration: 1, ease: "power2.out" },
      })
      .from(titleRef.current, { y: "100%" })
      .from(
        image_mainRef.current,
        {
          scale: 0.8,
          opacity: 0,
        },
        "-=0.5"
      )
      .from(dateRef.current, { y: "100%" }, "-=0.7")
      .from(dateLineRef.current, { width: 0 }, "-=1")
      .from(categoryRef.current, { y: "100%" }, "-=0.7")
      .from(categoryLineRef.current, { width: 0 }, "-=1");

    gsap.utils.toArray(".fade-up").forEach((element) => {
      gsap.from(element as gsap.TweenTarget, {
        ...fadeUp,
        scrollTrigger: {
          trigger: element as Element,
          start: () => `top ${window.innerHeight * 0.8 + 200}`,
          toggleActions: "play none none reverse",
        },
      });
    });
  });

  return (
    <>
      <div className="w-full flex flex-col gap-4 md:gap-8 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <SliceInText animationRef={titleRef}>
            <h1 className="text-4xl md:text-7xl font-extralight">
              {project.titre}
            </h1>
          </SliceInText>
          <p className="md:hidden text-lg text-light pb-8">
            {project.categorie.titre}
          </p>
          <div className="hidden md:flex align-center gap-16 text-light">
            {[
              new Date(project.annee).getFullYear(),
              project.categorie.titre,
            ].map((info) => (
              <div key={info} className="relative pb-6">
                <SliceInText
                  animationRef={
                    info === new Date(project.annee).getFullYear()
                      ? dateRef
                      : categoryRef
                  }
                >
                  {info}
                </SliceInText>
                <span
                  ref={
                    info === new Date(project.annee).getFullYear()
                      ? dateLineRef
                      : categoryLineRef
                  }
                  className="absolute bottom-0 start-0 w-full max-w-12 h-0.5 bg-primary"
                ></span>
              </div>
            ))}
          </div>
        </div>
        <Image
          ref={image_mainRef}
          className="w-full h-auto md:rounded-lg"
          src={process.env.NEXT_PUBLIC_API_URL + project.image_principale.url}
          alt={project.image_principale.name}
          width={1920}
          height={1080}
        />
        <p className="md:hidden text-light self-end pe-10">
          {new Date(project.annee).getFullYear()}
        </p>
      </div>
      <p className="self-start max-w-none md:max-w-4xl text-base md:text-3xl px-8 md:px-16 pb-16 fade-up">
        {project.description}
      </p>
      {!!project.champs_categorie[0]?.images_mockup && (
        <div className="w-full grid grid-cols-1 md:grid-cols-5 md:grid-rows-5 gap-4 px-4 md:px-16 pt-32">
          <Image
            className="md:col-span-2 md:row-span-3 rounded-lg w-full h-auto md:h-0 md:min-h-full object-cover object-center fade-up"
            src={
              process.env.NEXT_PUBLIC_API_URL +
              project.champs_categorie[0]?.images_mockup.image_1.url
            }
            alt={"Mockup 1"}
            width={1920}
            height={1080}
          />
          <Image
            className="md:col-span-3 md:row-span-2 rounded-lg w-full h-auto md:h-0 md:min-h-full object-cover object-center fade-up"
            src={
              process.env.NEXT_PUBLIC_API_URL +
              project.champs_categorie[0]?.images_mockup.image_2.url
            }
            alt={"Mockup 3"}
            width={1920}
            height={1080}
          />
          <Image
            className="md:col-span-3 md:row-span-3 rounded-lg w-full h-auto object-cover object-center md:aspect-square fade-up"
            src={
              process.env.NEXT_PUBLIC_API_URL +
              project.champs_categorie[0]?.images_mockup.image_3.url
            }
            alt={"Mockup 4"}
            width={1920}
            height={1080}
          />
          <Image
            className="md:col-span-2 md:row-span-2 rounded-lg w-full h-auto object-cover object-center md:aspect-square fade-up"
            src={
              process.env.NEXT_PUBLIC_API_URL +
              project.champs_categorie[0]?.images_mockup.image_4.url
            }
            alt={"Mockup 2"}
            width={1920}
            height={1080}
          />
        </div>
      )}
      {!!project.champs_categorie[0]?.image_sans_fond && (
        <div className="w-full flex justify-center gap-8 px-4 md:px-16">
          <Image
            className="w-[80%] max-w-3xl h-auto fade-up"
            src={
              process.env.NEXT_PUBLIC_API_URL +
              project.champs_categorie[0]?.image_sans_fond.url
            }
            alt={"Image"}
            width={1920}
            height={1080}
          />
        </div>
      )}
      <div className="w-full flex flex-col gap-6 md:gap-8 px-8 md:px-16">
        <h2 className="text-3xl md:text-4xl font-thin fade-up">
          {project.paragraphe.titre}
        </h2>
        <div
          className={`grid md:grid-cols-${
            project.paragraphe.texte_2 ? 2 : 1
          } gap-6`}
        >
          {[project.paragraphe.texte_1, project.paragraphe.texte_2].map(
            (content, index) => (
              <p
                key={index}
                className="max-w-4xl text-base md:text-2xl fade-up"
              >
                {content}
              </p>
            )
          )}
        </div>
      </div>
      {!!project.champs_categorie[0]?.images && (
        <div className="w-full grid md:grid-cols-2 gap-6 px-4 md:px-16">
          {project.champs_categorie[0]?.images.image_4 === null && (
            <>
              <div className="flex flex-col gap-6">
                <Image
                  className="rounded-lg w-full h-auto fade-up"
                  src={
                    process.env.NEXT_PUBLIC_API_URL +
                    project.champs_categorie[0]?.images.image_1.url
                  }
                  alt={"Image 1"}
                  width={1920}
                  height={1080}
                />
                <Image
                  className="rounded-lg w-full h-auto fade-up"
                  src={
                    process.env.NEXT_PUBLIC_API_URL +
                    project.champs_categorie[0]?.images.image_2.url
                  }
                  alt={"Image 2"}
                  width={1920}
                  height={1080}
                />
              </div>
              <Image
                className="rounded-lg w-full h-auto md:row-span-2 self-center fade-up"
                src={
                  process.env.NEXT_PUBLIC_API_URL +
                  project.champs_categorie[0]?.images.image_3.url
                }
                alt={"Image 3"}
                width={1920}
                height={1080}
              />
            </>
          )}
          {project.champs_categorie[0]?.images.image_4 !== null &&
            [
              project.champs_categorie[0]?.images.image_1,
              project.champs_categorie[0]?.images.image_2,
              project.champs_categorie[0]?.images.image_3,
              project.champs_categorie[0]?.images.image_4,
            ].map((image: { url: string }, index: number) => (
              <Image
                key={index}
                className="rounded-lg w-full h-auto aspect-[4/3] object-cover object-center fade-up"
                src={process.env.NEXT_PUBLIC_API_URL + image.url}
                alt={"Image " + index}
                width={1920}
                height={1080}
              />
            ))}
        </div>
      )}
      {!!project.champs_categorie[0]?.ce_qui_en_decoule && (
        <div className="w-full flex flex-col items-center gap-8 px-8 md:px-16">
          <p className="max-w-4xl text-base md:text-3xl text-center fade-up">
            {project.champs_categorie[0]?.ce_qui_en_decoule}
          </p>
        </div>
      )}
      {!!project.champs_categorie[0]?.images_branding && (
        <div className="w-full flex flex-col gap-4 px-4 md:px-16">
          <Image
            className="rounded-lg w-full h-auto fade-up"
            src={
              process.env.NEXT_PUBLIC_API_URL +
              project.champs_categorie[0]?.images_branding.image_1.url
            }
            alt={"Branding 1"}
            width={1920}
            height={1080}
          />
          <div className="grid grid-cols-6 gap-4">
            <Image
              className="col-span-6 md:col-span-3 rounded-lg w-full h-auto object-cover object-center fade-up"
              src={
                process.env.NEXT_PUBLIC_API_URL +
                project.champs_categorie[0]?.images_branding.image_2.url
              }
              alt={"Branding 2"}
              width={1920}
              height={1080}
            />
            <div className="grid gap-4 col-span-4 md:col-span-2 md:h-full">
              <Image
                className="rounded-lg w-full h-auto md:h-0 md:min-h-full object-cover object-center fade-up"
                src={
                  process.env.NEXT_PUBLIC_API_URL +
                  project.champs_categorie[0]?.images_branding.image_3.url
                }
                alt={"Branding 3"}
                width={1920}
                height={1080}
              />
              <Image
                className="rounded-lg w-full h-auto md:h-0 md:min-h-full object-cover object-center fade-up"
                src={
                  process.env.NEXT_PUBLIC_API_URL +
                  project.champs_categorie[0]?.images_branding.image_4.url
                }
                alt={"Branding 4"}
                width={1920}
                height={1080}
              />
            </div>
            <Image
              className="col-span-2 md:col-span-1 rounded-lg w-full h-0 min-h-full object-cover object-center fade-up"
              src={
                process.env.NEXT_PUBLIC_API_URL +
                project.champs_categorie[0]?.images_branding.image_5.url
              }
              alt={"Branding 5"}
              width={1920}
              height={1080}
            />
          </div>
          {!!project.champs_categorie[0]?.images_branding.image_6 && (
            <Image
              className="rounded-lg w-full h-auto fade-up"
              src={
                process.env.NEXT_PUBLIC_API_URL +
                project.champs_categorie[0]?.images_branding.image_6.url
              }
              alt={"Branding 6"}
              width={1920}
              height={1080}
            />
          )}
        </div>
      )}
      {!!project.champs_categorie[0]?.video && (
        <video className="fade-up" controls>
          <source
            src={
              process.env.NEXT_PUBLIC_API_URL +
              project.champs_categorie[0]?.video.url
            }
            type="video/mp4"
          />
          Votre navigateur ne supporte pas la vidéo.
        </video>
      )}
      {!!project.champs_categorie[0]?.image_large && (
        <Image
          className="w-full h-auto fade-up"
          src={
            process.env.NEXT_PUBLIC_API_URL +
            project.champs_categorie[0]?.image_large.url
          }
          alt={"Full width image"}
          width={1920}
          height={1080}
        />
      )}
      {!!project.lien && (
        <div className="w-full flex justify-center gap-8 px-8">
          <a
            className="group flex items-center gap-4 text-primary text-base md:text-xl font-semibold p-4 fade-up"
            href={project.lien.lien}
            target="_blank"
          >
            <span>{project.lien.titre ?? "Voir le projet"}</span>
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
  );
}
