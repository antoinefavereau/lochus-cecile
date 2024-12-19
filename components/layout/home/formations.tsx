export default function Formations() {
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

  return (
    <section id="formations" className="grid grid-cols-2 gap-16 p-32">
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl font-bold">Expériences</h2>
        <div>
          {experiences.map((experience) => (
            <div
              className="group py-8 flex flex-col border-t-2 border-light last:border-b-2"
              key={experience.id}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex flex-col">
                  <h3 className="font-bold">{experience.title}</h3>
                  <p>{experience.company}</p>
                </div>
                <p>{experience.date}</p>
              </div>
              <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-max-height duration-500">
                <ul className="pt-8">
                  {experience.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl font-bold">Formations</h2>
        <div>
          {formations.map((formation) => (
            <div
              className="group py-8 flex flex-col border-t-2 border-light last:border-b-2"
              key={formation.id}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex flex-col">
                  <h3 className="font-bold">{formation.title}</h3>
                  <p>{formation.company}</p>
                </div>
                <p>{formation.date}</p>
              </div>
              <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-max-height duration-500">
                <ul className="pt-8">
                  {formation.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
