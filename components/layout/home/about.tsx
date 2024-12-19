import Image from "next/image";
import Button from "@/components/ui/button";


export default function About() {
  return (
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
  );
}
