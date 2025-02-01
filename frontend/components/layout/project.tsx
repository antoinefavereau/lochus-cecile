import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ApiProjetProjet } from "@/types/generated/contentTypes";

gsap.registerPlugin(ScrollTrigger);

interface ProjectProps {
  animationRef?: React.RefObject<HTMLDivElement | null>;
  project: ApiProjetProjet["attributes"];
  hasMarginTop?: boolean;
}

export default function Project({
  animationRef,
  project,
  hasMarginTop,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & ProjectProps) {
  const triggerRef = useRef<HTMLAnchorElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!triggerRef.current) return;
    if (!boxRef.current) return;

    if (!animationRef) {
      gsap.from(boxRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: triggerRef.current,
          scroller: document.body,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }

    ScrollTrigger.refresh();
  });

  return (
    <Link
      ref={triggerRef}
      href={`/projets/${project.titre}`}
      key={project.titre}
      className={`group flex flex-col gap-1 pb-2 ${
        hasMarginTop && "md:odd:-mt-8"
      }`}
      {...props}
    >
      <div ref={animationRef || boxRef}>
        <div className="rounded-lg overflow-hidden">
          <Image
            className="w-full h-auto aspect-[4/3] object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-in-out"
            src={process.env.NEXT_PUBLIC_API_URL + project.image_projets.url}
            alt={project.image_projets.name}
            width={1920}
            height={1080}
          />
        </div>
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2 md:gap-4">
            <h2 className="text-xl md:text-3xl">{project.titre}</h2>
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
            {project.categorie.titre} | {new Date(project.annee).getFullYear()}
          </p>
        </div>
      </div>
    </Link>
  );
}
