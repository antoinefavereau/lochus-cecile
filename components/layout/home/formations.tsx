"use client";

import Image from "next/image";
import { useState } from "react";
import { useIsMobile } from "@/context/IsMobileProvider";

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
      title: "Animatrice en centre de loisir",
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
      <div className="flex flex-col gap-8">
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
                        openItemId === title + "-" + item.title && "rotate-180"
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
    );
  };

  return (
    <section
      id="formations"
      className="grid md:grid-cols-2 gap-40 md:gap-16 py-16 px-8 xs:px-16 lg:px-24"
    >
      {list("Expériences", experiences)}
      {list("Formations", formations)}
    </section>
  );
}
