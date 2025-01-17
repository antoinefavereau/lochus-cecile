"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "@/context/IsMobileProvider";
import { ApiProjetProjet } from "@/types/generated/contentTypes";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [projects, setProjects] = useState<ApiProjetProjet["attributes"][]>([]);
  const [selectedProject, setSelectedProject] = useState<
    ApiProjetProjet["attributes"] | null
  >(null);
  const projectRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const isMobile = useIsMobile();

  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const marqueeRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
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
      setSelectedProject(projects[0]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      const centerY = window.innerHeight / 2;
      let closest = {
        dist: Infinity,
        project: null as ApiProjetProjet["attributes"] | null,
      };
      projectRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top + rect.height / 2 - centerY);
        if (dist < closest.dist) {
          closest = { dist, project: projects[i] };
        }
      });
      if (closest.project) setSelectedProject(closest.project);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile, projects]);

  useGSAP(() => {
    if (!containerRef.current) return;
    if (!contentRef.current) return;
    if (!marqueeRef.current) return;

    gsap.from(contentRef.current, {
      y: "-300",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });

    gsap.to(marqueeRef.current, {
      x: "-50%",
      ease: "none",
      scrollTrigger: {
        trigger: marqueeRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
      },
    });
  });

  return (
    <section className="pb-16">
      <div ref={containerRef} className="flex flex-col gap-8">
        <div
          ref={contentRef}
          className="relative flex flex-col items-center gap-32 md:gap-40 px-8 py-[50vh] min-h-screen"
        >
          {projects.map((project) => (
            <div key={project.titre} className="absolute inset-0">
              <Image
                className={`sticky top-0 w-full h-screen object-contain object-center brightness-90 transition-opacity duration-300 ${
                  project.titre !== selectedProject?.titre && "opacity-0"
                }`}
                src={"http://localhost:1337" + project.image_home.url}
                width="1920"
                height="1080"
                alt={selectedProject?.titre ?? ""}
                style={{ backgroundColor: project.couleur_image_home }}
              />
            </div>
          ))}
          {projects.map((project, index) => (
            <Link
              href={`/projets/${project.titre}`}
              key={project.titre}
              className={`relative text-5xl xs:text-6xl md:text-7xl lg:text-8xl font-bold text-center ${
                project.titre !== selectedProject?.titre && "opacity-50"
              }`}
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
              onMouseEnter={() => setSelectedProject(project)}
            >
              {project.titre}
            </Link>
          ))}
        </div>
        <Link className="group py-4 overflow-hidden" href="/projets">
          <div
            ref={marqueeRef}
            className="w-max max-w-[150%] flex gap-10 md:gap-16 px-5 md:px-8"
          >
            {new Array(20).fill(0).map((_, index) => (
              <div
                key={_ + index}
                className="shrink-0 flex items-center gap-4 text-lg md:text-2xl"
              >
                <span>Voir plus de projets</span>
                <svg
                  className="w-5 md:w-6 h-auto text-primary rotate-[-30deg] group-hover:rotate-0 transition-rotate duration-300 ease-in-out"
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
            ))}
          </div>
        </Link>
      </div>
    </section>
  );
}
