"use client";

import Image from "next/image";
import Button from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function About() {
  const [titles, setTitles] = useState([
    "créative",
    "empathique",
    "curieuse",
    "rigoureuse",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // put the first title at the end of the array
      setTitles((prevTitles) => [
        ...prevTitles.slice(1, prevTitles.length),
        prevTitles[0],
      ]);
      setCurrentIndex(currentIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, titles.length]);

  return (
    <section
      id="about"
      className="relative flex flex-col gap-40 p-32"
    >
      <Image
        className="absolute top-16 right-32"
        src="/Stars.svg"
        alt=""
        width={200}
        height={200}
      />
      <Image
        className="absolute bottom-1/4 left-0"
        src="/Star.svg"
        alt=""
        width={250}
        height={250}
      />
      <h2 className="relative self-start pt-12 text-6xl font-extrabold max-w-3xl">
        <span className="absolute start-0 top-0 w-[7ch] h-[2px] bg-primary"></span>
        {"Hello, étudiante en BUT MMI, je suis "}
        <span className="text-primary inline-block h-[5rem] translate-y-[28px] overflow-hidden">
          <div
            className="transform transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateY(${-(currentIndex + 1) * 5}rem)`,
              paddingTop: `${currentIndex * 5}rem`,
            }}
          >
            {titles.map((title, index) => (
              <span key={title + index} className="block h-[5rem]">
                {title}
              </span>
            ))}
          </div>
        </span>
      </h2>
      <div className="self-end flex flex-col items-start gap-14 max-w-3xl">
        <p className="text-lg text-light">
          {
            "J'ai 21 ans et je suis étudiante en première année de BUT MMI. Je suis passionnée par le multimédia, j'aime explorer et approfondir différents domaines créatifs, comme l'UI design, l'audiovisuel, le graphisme et la photographie. J'ai un désir constant de découvrir et d'apprendre pour nourrir ma créativité et me pousser à relever de nouveaux défis."
          }
        </p>
        <Button variant="outlined">CV</Button>
      </div>
    </section>
  );
}
