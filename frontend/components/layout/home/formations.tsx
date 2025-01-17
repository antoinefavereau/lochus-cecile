"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useIsMobile } from "@/context/IsMobileProvider";

gsap.registerPlugin(ScrollTrigger);

interface List {
  id: number;
  title: string;
  company: string;
  date: string;
  list: string[];
}

export default function Formations() {
  const [openItemId, setOpenItemId] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const containerRef = useRef(null);
  const experiencesContainerRef = useRef(null);
  const experiencesRef = useRef(null);
  const formationsContainerRef = useRef(null);
  const formationsRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const fadeUp = { y: 100, opacity: 0 };

    if (isMobile) {
      gsap.from(experiencesRef.current, {
        ...fadeUp,
        scrollTrigger: {
          trigger: experiencesContainerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from(formationsRef.current, {
        ...fadeUp,
        scrollTrigger: {
          trigger: formationsContainerRef.current,
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

  const experiences: List[] = [
    {
      id: 1,
      title: "Cadreuse",
      company: "Web tv, IUT de Troyes",
      date: "2024 - Présent",
      list: [
        "Cadrage pour le live de la remise des diplômes",
        "Cadrage lors du festival 1ere marche (mai 2025)",
      ],
    },
    {
      id: 2,
      title: "Animatrice en centre de loisirs",
      company: "Brou et Cloyes",
      date: "2023 - Présent",
      list: [
        "Planification et organisation des activités",
        "Surveillance et sécurité des enfants",
        "Communication avec les parents et les collègues",
      ],
    },
    {
      id: 3,
      title: "Chargée de Communication",
      company: "Association FIFO, Université d'Orléans",
      date: "2022 - Présent",
      list: [
        "Gestion des activités de communication interne et externe.",
        "Création de contenu pour les réseaux sociaux et les supports imprimés.",
        "Organisation d'événements promotionnels",
      ],
    },
    {
      id: 4,
      title: "Equipière polyvalente McDonald",
      company: "Olivet",
      date: "2021 - 2022",
      list: [
        "Accueil et service client",
        "Gestion de la caisse et des transactions",
        "Réapprovisionnement et gestion des stocks",
      ],
    },
  ];

  const formations: List[] = [
    {
      id: 1,
      title: "BUT MMI",
      company: "IUT Troyes",
      date: "2024 - Présent",
      list: ["Actuellement en 1e année"],
    },
    {
      id: 2,
      title: "Licence Informatique",
      company: "Université d'Orléans",
      date: "2021 - 2024",
      list: ["Obtention 2e année"],
    },
    {
      id: 3,
      title: "BAFA",
      company: "UFCV, Orléans",
      date: "2020 - 2023",
      list: [
        "Animation - Pédagogie",
        "Sécurité - Adaptabilité",
        "Cohésion - Créativité",
      ],
    },
    {
      id: 4,
      title: "Baccalauréat",
      company: "Lycée Jehan de Beauce",
      date: "2020 - 2021",
      list: ["Spécialités Mathématiques et NSI"],
    },
    {
      id: 5,
      title: "Brevet Initiation Aéronautique",
      company: "Lycée Emile Zola",
      date: "2018 - 2019",
      list: ["Apprentissage des bases de l'aéronautique"],
    },
  ];

  const list = (title: string, items: List[]) => {
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
                key={item.id}
                className="group py-8 flex flex-col border-t-2 border-veryLight last:border-b-2"
                onClick={() => handleClick(title + "-" + item.title)}
              >
                <div className="flex flex-col gap-2">
                  <div className="w-full flex justify-between items-center gap-4">
                    <h3 className="font-bold">{item.title}</h3>
                    <div className="shrink-0 flex items-center gap-4">
                      <p className="text-sm md:text-base">{item.date}</p>
                      <Image
                        className={`block md:hidden transform md:group-hover:rotate-180 ${
                          openItemId === title + "-" + item.title &&
                          "rotate-180"
                        } transition-transform duration-300`}
                        src="/Chevron Down.svg"
                        alt="chevron"
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <p>{item.company}</p>
                </div>
                <div
                  className={`h-0 overflow-hidden md:group-hover:h-fit ${
                    openItemId === title + "-" + item.title && "!h-fit"
                  } transition-height duration-500 ease-in-out`}
                  style={{ interpolateSize: "allow-keywords" }}
                >
                  <ul className="pt-8">
                    {item.list.map((content, index) => (
                      <li key={index}>{content}</li>
                    ))}
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
      {list("Expériences", experiences)}
      {list("Formations", formations)}
    </section>
  );
}
