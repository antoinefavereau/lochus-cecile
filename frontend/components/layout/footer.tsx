"use client";

import { RefObject, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import SliceInText from "../ui/sliceInText";

gsap.registerPlugin(ScrollTrigger);

interface Social {
  name: string;
  url: string;
}

export default function Footer() {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const isFirst = useRef(true);

  const socials: Social[] = [
    {
      name: "Email",
      url: "mailto:cecile.lochus@laposte.net",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/cécile-lochus/",
    },
    {
      name: "Behance",
      url: "https://www.behance.net/ccilelochus/moodboards",
    },
  ];

  useGSAP(() => {
    if (!triggerRef.current) return;

    timeline.current = gsap.timeline({
      defaults: { duration: 1, ease: "power2.out" },
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });
  });

  const addElementToTimeline = (boxRef: RefObject<HTMLDivElement | null>) => {
    if (!boxRef.current || !timeline.current) return;

    timeline.current.from(
      boxRef.current,
      {
        y: 100,
      },
      isFirst.current ? undefined : "-=0.7"
    );
    isFirst.current = false;
  };

  return (
    <footer
      id="contact"
      className="relative px-8 md:px-16 pt-56 md:pt-64 pb-8 overflow-hidden"
    >
      <Image
        className="absolute max-w-none w-[240vw] xs:w-[200vw] md:w-[140vw] lg:w-[120vw] top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none"
        src="/ellipses.svg"
        alt="ellipses"
        width={1920}
        height={1080}
      />
      <Image
        className="absolute top-64 xs:top-56 md:top-64 -translate-y-[30%] right-4 md:right-0 lg:-right-12 w-[calc(6rem+40%)] h-auto select-none pointer-events-none"
        src="/etoile.svg"
        alt="étoile"
        width={600}
        height={600}
      />
      <div
        ref={triggerRef}
        className="relative flex flex-col items-start gap-24"
      >
        <Image
          className="w-10 sm:w-12 h-auto md:mx-4"
          src="/logoPortfolio_1.svg"
          alt="Logo"
          width={48}
          height={48}
        />
        <div className="flex flex-col gap-2">
          {socials.map((social) => (
            <a
              key={social.name}
              className="group block p-2 text-lg xs:text-xl md:text-2xl font-light"
              href={social.url}
              target="_blank"
            >
              <span className="relative block leading-normal overflow-hidden">
                <SliceInText addRef={(ref) => addElementToTimeline(ref)}>
                  <span className="block group-hover:-translate-y-full translate-y-0 transition-transform duration-500 ease-in-out">
                    {social.name}
                  </span>
                </SliceInText>
                <span className="absolute group-hover:-translate-y-full transition-transform duration-500 ease-in-out">
                  {social.name}
                </span>
              </span>
            </a>
          ))}
        </div>
        <div className="flex items-baseline gap-4 xs:gap-8 md:gap-16 lg:gap-20">
          <SliceInText addRef={(ref) => addElementToTimeline(ref)}>
            <h2 className="text-4xl xs:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-thin tracking-[0.2rem] xs:tracking-[0.25em]">
              Contact
            </h2>
          </SliceInText>
          <SliceInText addRef={(ref) => addElementToTimeline(ref)}>
            <p className="text-xs xs:text-sm font-light">
              Développé par{" "}
              <a
                className="underline"
                href="https://antoinefavereau.fr"
                target="_blank"
                rel="noopener"
              >
                Antoine Favereau
              </a>
            </p>
          </SliceInText>
        </div>
      </div>
      <Link
        className="group absolute bottom-52 right-4 md:right-8 flex flex-col items-center gap-2"
        href="#top"
      >
        <div className="relative w-12 xs:w-16 md:w-20 aspect-square rounded-full border-[1px] border-current overflow-hidden">
          <svg
            className="absolute w-full h-full top-0 left-0 group-hover:animate-[arrowUp_0.5s_ease-in-out]"
            width="78"
            height="78"
            viewBox="0 0 78 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39 52V26M39 26L27.625 37.375M39 26L50.375 37.375"
              stroke="currentcolor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="text-xs xs:text-base md:text-lg font-extralight">
          Retour en haut
        </span>
      </Link>
    </footer>
  );
}
