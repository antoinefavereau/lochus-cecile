"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function BigText() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const container = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const tlSplitText = gsap.timeline();

      tlSplitText.from(
        ".word",
        {
          duration: 0.5,
          opacity: 0,
          y: 10,
          ease: "circ.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: container.current,
            // markers: true,
            start: "top 75%",
            end: "bottom 75%",
            scrub: 1,
          },
        },
        "+=0"
      );
    },
    { scope: container }
  );

  const splitText = (text: string) => {
    return text.split("").map((word, index) => {
      return (
        <span key={index} className="word">
          {word}
        </span>
      );
    });
  };

  return (
    <section className="flex px-36 py-32">
      <p className="text-5xl max-w-4xl leading-[4rem]" ref={container}>
        {splitText("Je déborde de ")}
        <strong className="text-primary font-normal">
          {splitText("passion pour le design")}
        </strong>
        {splitText(" et j'ai ")}
        <strong className="text-primary font-normal">
          {splitText("envie d'apprendre et de grandir")}
        </strong>
        {splitText(" dans ce domaine. Je n'ai pas peur d'apporter des ")}
        <strong className="text-primary font-normal">
          {splitText("perspectives nouvelles et de la créativité")}
        </strong>
        {splitText(", et je m'engage à constamment améliorer mes compétences.")}
        <br />
        {splitText("Je crois qu'avec ")}
        <strong className="text-primary font-normal">
          {splitText("mon potentiel et ma détermination")}
        </strong>
        {splitText(
          ", je peux devenir la meilleure designer junior que vous pourriez recruter."
        )}
      </p>
    </section>
  );
}
