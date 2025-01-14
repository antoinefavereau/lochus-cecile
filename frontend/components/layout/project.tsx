import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectType } from "@/types/project";

gsap.registerPlugin(ScrollTrigger);

export default function Project({
  project,
  hasMarginTop,
}: Readonly<{ project: ProjectType; hasMarginTop?: boolean }>) {
  const triggerRef = useRef<HTMLAnchorElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!triggerRef.current) return;
    if (!boxRef.current) return;

    gsap.from(boxRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <Link
      ref={triggerRef}
      href={`/projets/${project.title}`}
      key={project.title}
      className={`group flex flex-col gap-1 pb-2 ${
        hasMarginTop && "md:odd:-mt-8"
      }`}
    >
      <div ref={boxRef}>
        <div className="rounded-lg overflow-hidden">
          <Image
            className="w-full h-auto aspect-[4/3] object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-in-out"
            src={project.projectspage_image}
            alt={project.title}
            width={1920}
            height={1080}
          />
        </div>
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2 md:gap-4">
            <h2 className="text-xl md:text-3xl">{project.title}</h2>
            <svg
              className="w-4 md:w-6 h-auto text-primary rotate-[-30deg] group-hover:rotate-0 transition-rotate duration-300 ease-in-out"
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
          <p className="text-sm md:text-base text-light">
            {project.category} | {project.year}
          </p>
        </div>
      </div>
    </Link>
  );
}
