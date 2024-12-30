import Image from "next/image";

export default function Skills() {
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

  return (
    <section id="skills" className="h-screen px-28 py-16">
      <div className="h-full bg-white text-black flex items-center justify-between gap-4 px-12 rounded-[3rem]">
        <div className="flex flex-col gap-12 py-16 max-w-xl">
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
  );
}
