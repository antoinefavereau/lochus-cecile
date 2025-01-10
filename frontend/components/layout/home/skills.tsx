"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Skills() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef(null);

  const logos = [
    {
      id: 1,
      src: "/skills/Figma.svg",
      alt: "Figma",
    },
    {
      id: 2,
      src: "/skills/lightroom_1.svg",
      alt: "Lightroom",
    },
    {
      id: 3,
      src: "/skills/photoshop.svg",
      alt: "Photoshop",
    },
    {
      id: 4,
      src: "/skills/illustrator.svg",
      alt: "Illustrator",
    },
    {
      id: 5,
      src: "/skills/XD_1.svg",
      alt: "XD",
    },
    {
      id: 6,
      src: "/skills/premiere pro_1.svg",
      alt: "Premiere Pro",
    },
    {
      id: 7,
      src: "/skills/after effect.svg",
      alt: "After Effects",
    },
    {
      id: 8,
      src: "/skills/capcut.svg",
      alt: "CapCut",
    },
  ];

  useGSAP(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    gsap.from(container, {
      scale: 0.8,
      scrollTrigger: {
        trigger: container,
        markers: true,
        start: "top bottom",
        end: "top 50%",
        scrub: true,
      },
    });
  });

  return (
    <section
      id="skills"
      className="md:h-screen py-16 px-4 xs:px-8 md:px-16 lg:px-24"
    >
      <div
        ref={containerRef}
        className="md:h-full bg-white text-black flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 py-16 md:py-0 md:px-12 rounded-[3rem]"
      >
        <div className="flex flex-col gap-8 md:gap-12 py-0 md:py-16 px-8 md:px-0 md:max-w-xl">
          <h2 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-extrabold">
            Compétences
          </h2>
          <p>
            {
              "Voici les outils que j'utilise régulièrement : des logiciels de conception et prototypage, des outils de création graphique, de montage vidéo, de retouche photo, ainsi que des technologies pour l'intégration front-end."
            }
          </p>
        </div>
        <div className="shrink-0 flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-20 w-full md:w-auto md:h-full overflow-hidden">
          {["normal", "reverse"].map((direction) => (
            <div
              key={direction}
              className="w-max md:w-fit h-fit flex flex-row md:flex-col gap-16 md:gap-20 px-10 md:px-0 md:py-10 animate-[horizontalMarquee_20s_linear_infinite] md:animate-[verticalMarquee_20s_linear_infinite]"
              style={{ animationDirection: direction }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <Image
                  key={logo.id + "" + index}
                  className="w-16 md:w-20 lg:w-24 h-auto"
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={100}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
