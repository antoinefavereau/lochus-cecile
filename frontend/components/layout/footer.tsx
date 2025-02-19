"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SliceInText from "../ui/sliceInText";

gsap.registerPlugin(ScrollTrigger);

interface Social {
  titre: string;
  lien: string;
}

interface FooterProps {
  socials: Social[];
}

export default function Footer({ socials }: Readonly<FooterProps>) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const devByRef = useRef<HTMLDivElement>(null);

  const socialsRefs = socials.map(() => React.createRef<HTMLDivElement>());

  useGSAP(() => {
    if (!triggerRef.current) return;
    if (!socialsRefs.length || !socialsRefs[0].current) return;
    if (!contactRef.current) return;
    if (!devByRef.current) return;

    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.out" },
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: document.body,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    socialsRefs.forEach((ref, index) => {
      tl.from(
        ref.current,
        {
          y: "100%",
        },
        index === 0 ? undefined : "-=0.7"
      );
    });

    tl.from(
      contactRef.current,
      {
        y: "100%",
      },
      "-=0.7"
    ).from(
      devByRef.current,
      {
        y: "100%",
      },
      "-=0.7"
    );
  });

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
      <div className="relative flex flex-col items-start gap-24">
        <Link href="/#top" title="Cécile Lochus">
          <Image
            className="w-10 sm:w-12 h-auto md:mx-4"
            src="/logoPortfolio_1.svg"
            alt="Logo"
            width={48}
            height={48}
          />
        </Link>
        <div ref={triggerRef} className="relative flex flex-col gap-2">
          {socials.map((social, index) => (
            <a
              key={`${social.titre}-${index}`}
              className="group block p-2 text-lg xs:text-xl md:text-2xl font-light"
              href={social.lien}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${social.titre}`}
            >
              <span className="relative block leading-normal overflow-hidden">
                <SliceInText
                  key={`social-${index}`}
                  animationRef={socialsRefs[index]}
                >
                  <span className="block group-hover:-translate-y-full translate-y-0 transition-transform duration-500 ease-in-out">
                    {social.titre}
                  </span>
                </SliceInText>
                <span className="absolute group-hover:-translate-y-full transition-transform duration-500 ease-in-out">
                  {social.titre}
                </span>
              </span>
            </a>
          ))}
        </div>
        <div className="flex items-baseline gap-4 xs:gap-8 md:gap-16 lg:gap-20">
          <h2 className="text-4xl xs:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-thin tracking-[0.2rem] xs:tracking-[0.25em]">
            <SliceInText key={`contact`} animationRef={contactRef}>
              Contact
            </SliceInText>
          </h2>
          <SliceInText key={`devBy`} className="text-xs xs:text-sm font-light" animationRef={devByRef}>
            Développé par{" "}
            <a
              className="underline"
              href="https://antoinefavereau.fr"
              target="_blank"
              rel="noopener"
            >
              Antoine Favereau
            </a>
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
