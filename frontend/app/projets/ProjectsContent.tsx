"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectType } from "@/types/project";
import Project from "@/components/layout/project";
import SliceInText from "@/components/ui/sliceInText";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsContent({
  projects,
  categories,
}: Readonly<{
  projects: ProjectType[];
  categories: string[];
}>) {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const [filteredList, setFilteredList] = useState<ProjectType[]>([]);

  const triggerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!triggerRef.current) return;
    if (!titleRef.current) return;
    if (!descriptionRef.current) return;

    gsap
      .timeline({
        defaults: { duration: 1, ease: "power2.out" },
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      })
      .from(titleRef.current, { y: "100%" })
      .from(descriptionRef.current, { y: 100, opacity: 0 }, "-=0.7")
      .from(filtersRef.current, { y: 100, opacity: 0 }, "-=0.7");
  });

  useEffect(() => {
    setFilteredList(
      projects.filter(
        (project) =>
          activeCategory === "Tous" || activeCategory === project.category
      )
    );
  }, [activeCategory, projects]);

  return (
    <div
      ref={triggerRef}
      className="relative flex flex-col items-center gap-24 md:gap-32 p-8 pt-48 overflow-hidden"
    >
      <Image
        className="absolute max-w-none w-[240vw] xs:w-[200vw] md:w-[140vw] lg:w-[120vw] top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/4 select-none pointer-events-none"
        src="/ellipses.svg"
        alt="ellipses"
        width={1920}
        height={1080}
      />
      <div className="relative flex flex-col items-center gap-12 text-center">
        <SliceInText animationRef={titleRef}>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-thin text-primary">
            Projets
          </h1>
        </SliceInText>
        <p
          ref={descriptionRef}
          className="max-w-3xl text-base sm:text-lg md:text-xl"
        >
          Voici quelques projets sur lesquels j&apos;ai eu la chance de
          travailler. Chaque expérience m&apos;a permis d&apos;apprendre,
          d&apos;explorer de nouvelles idées et de relever de passionnants
          défis.
        </p>
        <div
          ref={filtersRef}
          className="hidden md:flex gap-4 px-8 bg-veryLight rounded-2xl"
        >
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
          <Project key={project.id} project={project} hasMarginTop />
        ))}
      </div>
    </div>
  );
}
