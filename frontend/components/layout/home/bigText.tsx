"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ApiAccueilAccueil } from "@/types/generated/contentTypes";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  data: {
    texte_description: ApiAccueilAccueil["attributes"]["texte_description"];
  };
}

export default function BigText({ data }: Readonly<Props>) {
  const container = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const tlSplitText = gsap.timeline();

      tlSplitText.from(
        ".word",
        {
          duration: 0.5,
          opacity: 0.05,
          ease: "circ.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: container.current,
            scroller: document.body,
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
    return text.split("").map((word: string, index: number) => {
      return (
        <span key={word + index} className="word">
          {word}
        </span>
      );
    });
  };

  return (
    <section className="relative flex py-32 pb-48 px-8 md:px-16 lg:px-24 z-10 bg-background">
      <p
        className="text-2xl xs:text-3xl md:text-4xl max-w-lg xs:max-w-xl md:max-w-2xl lg:max-w-4xl !leading-[1.2em]"
        ref={container}
      >
        {data.texte_description.map(
          (line: { children: { text: string }[] }, index: number) => {
            return (
              <span key={line.children[0].text + index}>
                {line.children.map(
                  (text: { text: string; bold?: boolean }, index: number) => {
                    if (text.bold) {
                      return (
                        <strong
                          key={text.text + index}
                          className="text-primary font-normal"
                        >
                          {splitText(text.text)}
                        </strong>
                      );
                    } else {
                      return splitText(text.text);
                    }
                  }
                )}
                <br />
              </span>
            );
          }
        )}
      </p>
    </section>
  );
}
