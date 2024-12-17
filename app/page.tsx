import Button from "../components/ui/button";
import Image from "next/image";

export default function Home() {
  const experiences = [
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

  const formations = [
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

  const logos = [
    {
      id: 1,
      src: "/logos/Figma.png",
      alt: "Figma",
    },
    {
      id: 2,
      src: "/logos/Lightroom.png",
      alt: "Lightroom",
    },
    {
      id: 3,
      src: "/logos/PS.png",
      alt: "Photoshop",
    },
    {
      id: 4,
      src: "/logos/AI.png",
      alt: "Adobe Illustrator",
    },
    {
      id: 5,
      src: "/logos/XD.png",
      alt: "Adobe XD",
    },
    {
      id: 6,
      src: "/logos/premiere pro.png",
      alt: "Premiere Pro",
    },
    {
      id: 7,
      src: "/logos/AE.png",
      alt: "After Effects",
    },
    {
      id: 8,
      src: "/logos/A.png",
      alt: "Adobe",
    },
  ];

  return (
    <>
      <section className="flex flex-col items-center justify-center h-screen">
        <h1 className="flex flex-col items-center gap-5 text-7xl font-extrabold text-center">
          <span className="text-6xl font-medium text-primary">Portfolio</span>
          <span>LOCHUS Cécile</span>
        </h1>
      </section>
      <section
        id="about"
        className="relative flex items-end justify-between flex-wrap gap-16 p-40"
      >
        <Image
          className="absolute top-40 right-24"
          src="/Stars.svg"
          alt=""
          width={200}
          height={200}
        />
        <Image
          className="absolute bottom-0 right-1/4"
          src="/Star.svg"
          alt=""
          width={150}
          height={150}
        />
        <div className="relative flex flex-col gap-32 shrink-0">
          <h2 className="relative pb-12 text-6xl font-extrabold">
            Je suis <span className="text-primary">Cécile Lochus</span>
            <span className="absolute start-0 bottom-0 w-[7ch] h-[2px] bg-primary"></span>
          </h2>
          <p className="text-lg max-w-2xl">
            {
              "J'ai 21 ans et je suis étudiante en première année de BUT MMI. Je suis passionnée par le multimédia, j'aime explorer et approfondir différents domaines créatifs, comme l'UI design, l'audiovisuel, le graphisme et la photographie. J'ai un désir constant de découvrir et d'apprendre pour nourrir ma créativité et me pousser à relever de nouveaux défis."
            }
          </p>
        </div>
        <Button variant="outlined">CV</Button>
      </section>
      <section className="grid grid-cols-2 gap-16 p-32">
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold">Expériences</h2>
          <div>
            {experiences.map((experience) => (
              <div
                className="group py-8 flex flex-col gap-8 border-t-2 border-light last:border-b-2"
                key={experience.id}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-col">
                    <h3 className="font-bold">{experience.title}</h3>
                    <p>{experience.company}</p>
                  </div>
                  <p>{experience.date}</p>
                </div>
                <ul className="hidden group-hover:block">
                  {experience.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold">Formations</h2>
          <div>
            {formations.map((formation) => (
              <div
                className="group py-8 flex flex-col gap-8 border-t-2 border-light last:border-b-2"
                key={formation.id}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-col">
                    <h3 className="font-bold">{formation.title}</h3>
                    <p>{formation.company}</p>
                  </div>
                  <p>{formation.date}</p>
                </div>
                <ul className="hidden group-hover:block">
                  {formation.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="h-screen px-24 py-16">
        <div className="h-full bg-white text-black flex items-center justify-between gap-4 px-10 rounded-3xl">
          <div className="flex flex-col gap-12 py-8 max-w-xl">
            <h2 className="text-6xl font-extrabold">Compétences</h2>
            <p>
              {
                "Voici les outils que j'utilise régulièrement : des logiciels de conception et prototypage, des outils de création graphique, de montage vidéo, de retouche photo, ainsi que des technologies pour l'intégration front-end."
              }
            </p>
          </div>
          <div className="flex gap-20 h-full overflow-y-hidden">
            <div className="relative flex flex-col">
              <div className="flex flex-col gap-20 py-10 animate-[marquee_20s_linear_infinite_reverse]">
                {logos.map((logo) => (
                  <div key={logo.id}>
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={100}
                      height={100}
                    />
                  </div>
                ))}
              </div>
              <div className="absolute flex flex-col gap-20 py-10 animate-[marquee2_20s_linear_infinite_reverse]">
                {logos.map((logo) => (
                  <div key={logo.id}>
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={100}
                      height={100}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex flex-col">
              <div className="flex flex-col gap-20 py-10 animate-[marquee_20s_linear_infinite]">
                {logos.map((logo) => (
                  <div key={logo.id}>
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={100}
                      height={100}
                    />
                  </div>
                ))}
              </div>
              <div className="absolute flex flex-col gap-20 py-10 animate-[marquee2_20s_linear_infinite]">
                {logos.map((logo) => (
                  <div key={logo.id}>
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={100}
                      height={100}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen"></section>
    </>
  );
}
