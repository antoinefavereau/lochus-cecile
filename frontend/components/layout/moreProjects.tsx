"use client";

import { fetchProjects } from "@/lib/data";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import {
  AudiovisualProject,
  DesignProject,
  GraphicDesignProject,
  SoacialMediasProject,
} from "@/types/project";
import Project from "./project";
import Link from "next/link";

export default function MoreProjects() {
  const paginationRef = useRef(null);

  const [projects, setProjects] = useState<
    (
      | DesignProject
      | GraphicDesignProject
      | SoacialMediasProject
      | AudiovisualProject
    )[]
  >([]);

  useEffect(() => {
    async function fetchData() {
      const projects = await fetchProjects();
      setProjects(projects);
    }
    fetchData();
  }, []);

  return (
    <div className="w-full flex flex-col gap-16">
      <div className="px-16 md:px-32">
        <h2 className="relative text-3xl pb-4">
          <span>Plus de projets</span>
          <span className="absolute bottom-0 start-0 w-full max-w-28 h-0.5 bg-primary"></span>
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
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="px-4 md:px-8">
              <Project project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="relative flex justify-end px-8 md:px-16">
          <div ref={paginationRef}></div>
          <Link
            className="group relative flex items-center gap-4 text-lg"
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
        </div>
      </div>
    </div>
  );
}
