"use client";

import Image from "next/image";
import Button from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  data: {
    texte_presentation: string;
    cv: string;
  };
}

export default function About({ data }: Readonly<Props>) {
  const [titles, setTitles] = useState([
    "créative",
    "empathique",
    "curieuse",
    "rigoureuse",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const cvRef = useRef(null);
  const lineRef = useRef(null);
  const rightStarRef = useRef(null);
  const leftStarRef = useRef(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    if (!titleRef.current) return;
    if (!paragraphRef.current) return;
    if (!cvRef.current) return;
    if (!lineRef.current) return;
    if (!rightStarRef.current) return;
    if (!leftStarRef.current) return;

    const fadeUp = { y: 100, opacity: 0 };

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
      .from(lineRef.current, {
        width: 0,
      })
      .from(titleRef.current, fadeUp, "-=0.7")
      .from(paragraphRef.current, fadeUp, "-=0.7")
      .from(cvRef.current, fadeUp, "-=0.7");

    gsap.fromTo(
      rightStarRef.current,
      { yPercent: -50 },
      {
        yPercent: 50,
        scrollTrigger: {
          trigger: containerRef.current,
          scroller: document.body,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      }
    );

    gsap.fromTo(
      leftStarRef.current,
      { yPercent: -50 },
      {
        yPercent: 50,
        scrollTrigger: {
          trigger: containerRef.current,
          scroller: document.body,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      }
    );

    ScrollTrigger.refresh();
  });

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
      ref={containerRef}
      id="about"
      className="relative flex flex-col gap-16 xs:gap-24 md:gap-32 pt-16 pb-32 px-8 xs:px-16 lg:px-24"
    >
      <Image
        ref={rightStarRef}
        className="absolute top-16 right-[calc(10vw-2rem)] w-[16vw] h-auto"
        src="/Stars.svg"
        alt=""
        width={200}
        height={200}
      />
      <Image
        ref={leftStarRef}
        className="absolute top-40 xs:top-60 md:top-72 lg:top-80 left-0 w-[20vw] h-auto"
        src="/Star.svg"
        alt=""
        width={250}
        height={250}
      />
      <h2 className="relative self-start pt-8 md:pt-12 text-xl xs:text-3xl md:text-4xl lg:text-5xl font-extrabold w-[calc(100vw-7.5rem)] xs:w-[calc(100vw-14rem)] md:w-[calc(100vw-20rem)] max-w-2xl">
        <span
          ref={lineRef}
          className="absolute start-0 top-0 w-[7ch] h-[2px] bg-primary"
        ></span>
        <div ref={titleRef}>
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
        </div>
      </h2>
      <div className="self-end flex flex-col items-start gap-10 md:gap-14 w-[calc(100vw-8rem)] xs:w-[calc(100vw-14rem)] md:w-[calc(100vw-20rem)] max-w-2xl">
        <p ref={paragraphRef} className="text-base md:text-lg text-light">
          {data.texte_presentation}
        </p>
        <a
          ref={cvRef}
          className="inline-block"
          href={process.env.NEXT_PUBLIC_API_URL + data.cv}
          target="_blank"
        >
          <Button variant="outlined">CV</Button>
        </a>
      </div>
    </section>
  );
}
