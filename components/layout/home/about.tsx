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
      className="relative flex flex-col gap-16 xs:gap-24 md:gap-32 p-8 xs:p-16 lg:p-24"
    >
      <Image
        className="absolute top-16 right-[calc(10vw-2rem)] w-[16vw] h-auto"
        src="/Stars.svg"
        alt=""
        width={200}
        height={200}
      />
      <Image
        className="absolute top-40 xs:top-60 md:top-72 lg:top-80 left-0 w-[20vw] h-auto"
        src="/Star.svg"
        alt=""
        width={250}
        height={250}
      />
      <h2 className="relative self-start pt-8 md:pt-12 text-xl xs:text-3xl md:text-4xl lg:text-5xl font-extrabold w-[calc(100vw-8rem)] xs:w-[calc(100vw-14rem)] md:w-[calc(100vw-20rem)] max-w-2xl">
        <span className="absolute start-0 top-0 w-[7ch] h-[2px] bg-primary"></span>
        {"Hello, étudiante en BUT MMI, je suis "}
        <span className="text-primary inline-block h-[2ch] translate-y-[6px] xs:translate-y-[11px] md:translate-y-[16px] lg:translate-y-[23px] overflow-hidden">
          <div
            className="transform transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateY(${-(currentIndex + 1) * 2}ch)`,
              paddingTop: `${currentIndex * 2}ch`,
            }}
          >
            {titles.map((title, index) => (
              <span key={title + index} className="block h-[2ch]">
                {title}
              </span>
            ))}
          </div>
        </span>
      </h2>
      <div className="self-end flex flex-col items-start gap-10 md:gap-14 w-[calc(100vw-8rem)] xs:w-[calc(100vw-14rem)] md:w-[calc(100vw-20rem)] max-w-2xl">
        <p className="text-sm xs:text-base md:text-lg text-light">
          {
            "Je suis passionnée par le multimédia, j'aime explorer et approfondir différents domaines créatifs. J'ai un désir constant de découvrir et d'apprendre pour nourrir ma créativité et me pousser à relever de nouveaux défis."
          }
        </p>
        <a href="/Cécile_Lochus_CV.pdf" download>
          <Button variant="outlined">CV</Button>
        </a>
      </div>
    </section>
  );
}
