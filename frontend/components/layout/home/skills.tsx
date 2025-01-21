"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AccueilCompetence } from "@/types/generated/components";
import { useIsMobile } from "@/context/IsMobileProvider";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  data: {
    texte_competences: string;
    competences: AccueilCompetence["attributes"][];
  };
}

export default function Skills({ data }: Readonly<Props>) {
  const isMobile = useIsMobile();

  const containerRef = useRef(null);
  const boxRef = useRef(null);

  const numElements = data.competences.length * 2;
  const duration = numElements * 2; // 2 seconds per element

  useGSAP(() => {
    if (!containerRef.current) return;
    if (!boxRef.current) return;

    gsap.from(containerRef.current, {
      scale: 0.8,
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top bottom",
        end: "top 50%",
        scrub: true,
      },
    });
  });

  return (
    <section
      ref={containerRef}
      id="skills"
      className="md:h-screen py-16 px-4 xs:px-8 md:px-16 lg:px-24"
    >
      <div
        ref={boxRef}
        className="md:h-full bg-white text-black flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 py-16 md:py-0 md:px-12 rounded-[3rem]"
      >
        <div className="flex flex-col gap-8 md:gap-12 py-0 md:py-16 px-8 md:px-0 md:max-w-xl">
          <h2 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-extrabold">
            Compétences
          </h2>
          <p>{data.texte_competences}</p>
        </div>
        <div className="shrink-0 flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-20 w-full md:w-auto md:h-full overflow-hidden">
          {["normal", "reverse"].map((direction) => (
            <div
              key={direction}
              className="w-max md:w-fit h-fit flex flex-row md:flex-col gap-16 md:gap-20 px-10 md:px-0 md:py-10"
              style={{
                animationName: isMobile
                  ? "horizontalMarquee"
                  : "verticalMarquee",
                animationDuration: `${duration}s`,
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
                animationDirection: direction,
              }}
            >
              {[...data.competences, ...data.competences].map(
                (competence, index) => (
                  <Image
                    key={competence.titre + index}
                    className="w-16 md:w-20 lg:w-24 h-auto"
                    src={process.env.NEXT_PUBLIC_API_URL + competence.logo.url}
                    alt={competence.titre}
                    width={100}
                    height={100}
                  />
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
