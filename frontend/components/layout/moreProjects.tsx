"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Project from "./project";
import Link from "next/link";
import SliceInText from "../ui/sliceInText";
import { ApiProjetProjet } from "@/types/generated/contentTypes";

gsap.registerPlugin(ScrollTrigger);

export default function MoreProjects() {
  const paginationRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const seeAllRef = useRef<HTMLDivElement>(null);
  const [projects, setProjects] = useState<ApiProjetProjet["attributes"][]>([]);

  const projectsRefs = useMemo(
    () => projects.map(() => React.createRef<HTMLDivElement>()),
    [projects]
  );

  useEffect(() => {
    async function fetchData() {
      let projects = [];
      try {
        const data = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/api/projets?populate=*"
        );
        projects = (await data.json()).data;
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
      setProjects(projects);
    }
    fetchData();
  }, []);

  useGSAP(() => {
    if (!containerRef.current) return;
    if (!titleRef.current) return;
    if (!lineRef.current) return;
    if (!seeAllRef.current) return;

    const tl = gsap
      .timeline({
        defaults: { duration: 1, ease: "power2.out" },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })
      .from(titleRef.current, { y: "100%" })
      .from(lineRef.current, { width: 0 }, "-=1");

    projectsRefs.forEach((ref, index) => {
      tl.from(
        ref.current,
        {
          x: "100",
          opacity: 0,
        },
        index === 0 ? undefined : "-=0.7"
      );
    });

    tl.from(seeAllRef.current, { y: "100%" }, "-=0.7");
  }, [projectsRefs]);

  return (
    <div ref={containerRef} className="w-full flex flex-col gap-12 md:gap-16">
      <div className="px-8 md:px-16 lg:px-24">
        <h2 className="relative text-xl md:text-2xl lg:text-3xl pb-4">
          <SliceInText animationRef={titleRef}>
            <span>Plus de projets</span>
          </SliceInText>
          <span
            ref={lineRef}
            className="absolute bottom-0 start-0 w-full max-w-16 md:max-w-28 h-0.5 bg-primary"
          ></span>
        </h2>
      </div>
      <div className="flex flex-col gap-8">
        <Swiper
          className="w-full"
          slidesPerView={1.15}
          breakpoints={{
            768: {
              slidesPerView: 2.15,
            },
          }}
          pagination={{
            clickable: true,
            el: paginationRef.current,
          }}
          modules={[Pagination]}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.titre} className="px-4 md:px-8">
              <Project animationRef={projectsRefs[index]} project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="relative flex justify-end px-8 md:px-16">
          <div ref={paginationRef}></div>
          <SliceInText animationRef={seeAllRef}>
            <Link
              className="group relative flex items-center gap-4 text-base md:text-lg"
              href="/projets"
            >
              <span>Voir tous les projets</span>
              <svg
                className="w-5 h-auto text-primary rotate-[-30deg] group-hover:rotate-0 transition-rotate duration-300 ease-in-out"
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
            </Link>
          </SliceInText>
        </div>
      </div>
    </div>
  );
}
