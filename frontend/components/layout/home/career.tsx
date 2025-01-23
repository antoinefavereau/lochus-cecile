"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useIsMobile } from "@/context/IsMobileProvider";
import { AccueilParcours } from "@/types/generated/components";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  data: {
    experiences: AccueilParcours["attributes"][];
    formations: AccueilParcours["attributes"][];
  };
}

export default function Career({ data }: Readonly<Props>) {
  const isMobile = useIsMobile();

  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const containerRef = useRef(null);
  const experiencesContainerRef = useRef(null);
  const experiencesRef = useRef(null);
  const formationsContainerRef = useRef(null);
  const formationsRef = useRef(null);

  useGSAP(() => {
    const fadeUp = { y: 100, opacity: 0 };

    if (isMobile) {
      gsap.from(experiencesRef.current, {
        ...fadeUp,
        scrollTrigger: {
          trigger: experiencesContainerRef.current,
          scroller: document.body,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from(formationsRef.current, {
        ...fadeUp,
        scrollTrigger: {
          trigger: formationsContainerRef.current,
          scroller: document.body,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    } else {
      gsap
        .timeline({
          defaults: { duration: 1, ease: "power2.out" },
          scrollTrigger: {
            trigger: containerRef.current,
            scroller: document.body,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })
        .from(experiencesRef.current, fadeUp)
        .from(formationsRef.current, fadeUp, "-=0.6");
    }
  }, [isMobile]);

  const handleClick = (id: string) => {
    if (!isMobile) return;
    if (openItemId === id) {
      setOpenItemId(null);
    } else {
      setOpenItemId(id);
    }
  };

  const CareerList = (
    title: string,
    items: AccueilParcours["attributes"][]
  ) => {
    return (
      <div
        ref={
          title === "Expériences"
            ? experiencesContainerRef
            : formationsContainerRef
        }
      >
        <div
          ref={title === "Expériences" ? experiencesRef : formationsRef}
          className="flex flex-col gap-8"
        >
          <h2 className="text-2xl font-bold">{title}</h2>
          <div>
            {items.map((item) => (
              <div
                key={item.titre}
                className="group py-8 flex flex-col border-t-2 border-veryLight last:border-b-2"
                onClick={() => handleClick(title + "-" + item.titre)}
              >
                <div className="flex flex-col gap-2">
                  <div className="w-full flex justify-between items-center gap-4">
                    <h3 className="font-bold">{item.titre}</h3>
                    <div className="shrink-0 flex items-center gap-4">
                      <p className="text-sm md:text-base">{item.date}</p>
                      <Image
                        className={`block md:hidden transform md:group-hover:rotate-180 ${
                          openItemId === title + "-" + item.titre &&
                          "rotate-180"
                        } transition-transform duration-300`}
                        src="/Chevron Down.svg"
                        alt="chevron"
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <p>{item.lieu}</p>
                </div>
                <div
                  className={`h-0 overflow-hidden md:group-hover:h-fit ${
                    openItemId === title + "-" + item.titre && "!h-fit"
                  } transition-height duration-500 ease-in-out`}
                  style={{ interpolateSize: "allow-keywords" }}
                >
                  <ul className="pt-8">
                    {item.description.map(
                      (
                        line: { children: { text: string }[] },
                        index: number
                      ) => (
                        <li key={"texte" + index}>{line.children[0].text}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={containerRef}
      id="formations"
      className="relative grid md:grid-cols-2 gap-40 md:gap-16 py-16 px-8 xs:px-16 lg:px-24 overflow-hidden"
    >
      <Image
        className="absolute max-w-none w-[240vw] xs:w-[200vw] md:w-[140vw] lg:w-[120vw] top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[120deg] select-none pointer-events-none"
        src="/ellipses.svg"
        alt="ellipses"
        width={1920}
        height={1080}
      />
      {CareerList("Expériences", data.experiences)}
      {CareerList("Formations", data.formations)}
    </section>
  );
}
