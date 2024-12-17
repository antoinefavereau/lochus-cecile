import Button from "./components/ui/button";
import Image from "next/image";

export default function Home() {
  const experiences = [
    {
      title: "Cadreuse",
      company: "Web tv, IUT de Troyes",
      date: "2024 - Présent",
      list: [
        "Cadrage pour le live de la remise des diplômes",
        "Cadrage lors du festival 1ere marche (mai 2025)",
      ],
    },
    {
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
      title: "BUT MMI",
      company: "IUT Troyes",
      date: "2024 - Présent",
      list: ["Actuellement en 1e année"],
    },
    {
      title: "Licence Informatique",
      company: "Université d'Orléans",
      date: "2021 - 2024",
      list: ["Obtention 2e année"],
    },
    {
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
      title: "Baccalauréat",
      company: "Lycée Jehan de Beauce",
      date: "2020 - 2021",
      list: ["Spécialités Mathématiques et NSI"],
    },
    {
      title: "Brevet Initiation Aéronautique",
      company: "Lycée Emile Zola",
      date: "2018 - 2019",
      list: ["Apprentissage des bases de l'aéronautique"],
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
          <h2 className="text-2xl font-bold">Expérience</h2>
          <div>
            {experiences.map((experience, index) => (
              <div
                className="group py-8 flex flex-col gap-8 border-t-2 border-light last:border-b-2"
                key={index}
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
          <h2 className="text-2xl font-bold">Formation</h2>
          <div>
            {formations.map((formation, index) => (
              <div
                className="group py-8 flex flex-col gap-8 border-t-2 border-light last:border-b-2"
                key={index}
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
      <section className="h-screen">
        <div></div>
      </section>
    </>
  );
}
