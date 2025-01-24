"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import SliceInText from "../ui/sliceInText";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const leftLinks = [
    { href: "/", label: "Accueil" },
    { href: "/#about", label: "À propos" },
    { href: "/#formations", label: "Formations" },
  ];

  const rightLinks = [
    { href: "/#skills", label: "Compétences" },
    { href: "/projets", label: "Projets", important: true },
    { href: "#contact", label: "Contact" },
  ];

  const getNavItem = (link) => (
    <li key={link.href}>
      <Link
        className={`group block p-2 text-4xl md:text-base ${
          link.important ? "text-primary font-semibold" : ""
        }`}
        href={link.href}
        onClick={() => {
          setIsMenuOpen(false);
        }}
      >
        <span className="relative block leading-normal overflow-hidden">
          <SliceInText>
            <span
              className={`block leading-normal md:group-hover:-translate-y-full ${
                isMenuOpen
                  ? "delay-500 md:delay-0"
                  : "translate-y-full md:translate-y-0"
              } transition-all duration-500 ease-in-out`}
            >
              {link.label}
            </span>
          </SliceInText>
          <span className="absolute leading-normal md:group-hover:-translate-y-full transition-transform duration-500 ease-in-out">
            {link.label}
          </span>
        </span>
      </Link>
    </li>
  );

  return (
    <header className="absolute z-10 start-0 top-0 end-0 py-16 md:py-10 px-10 flex items-center justify-between">
      <Link
        className="md:hidden relative z-50"
        href="/"
        scroll={false}
        title="Cécile Lochus"
        onClick={() => {
          setIsMenuOpen(false);
        }}
      >
        <svg
          className={`h-10 w-auto ${
            isMenuOpen ? "text-black delay-300" : "text-white delay-0"
          } transition-all duration-500 ease-in-out`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 87.21 101.45"
        >
          <g>
            <path
              d="M43.33,98.77c-3.02-2.97-5.08-6.92-6.16-11.81-.86-3.91-4.36-6.68-8.37-6.68-2.15,0-3.62-.45-4.41-1.35-.79-.9-1.18-2.15-1.18-3.73v-27.39s-.07-.04-.11-.06c-1.33-.64-2.61-1.04-3.72-1.3-1.4-.33-2.53-.42-3.17-.45-.33-.01-.52-.01-.57,0l.54-.09c.82-.13,1.61-.29,2.35-.48,1.79-.47,3.34-1.11,4.68-1.86v-17.32c0-1.58.39-2.82,1.18-3.73.79-.9,2.26-1.35,4.41-1.35s3.94-.84,5.3-2.19c1.35-1.36,2.19-3.23,2.19-5.3V0h-13.59C7.57,0,0,7.73,0,23.2v55.05c0,15.47,7.57,23.2,22.7,23.2h19.54c1.4,0,2.09-1.7,1.09-2.68Z"
              fill="currentcolor"
            />
            <path
              d="M87.21,98.41c0,1.68-1.36,3.04-3.04,3.04h-21.18c-14.46,0-22.01-7.05-22.65-21.17-.03-.66-.05-1.34-.05-2.03v-28.71c2.86-2.09,6.66-3.66,11.65-3.67-.86-.02-3.21-.14-6.07-.98-1.74-.5-3.68-1.27-5.58-2.45V0h2.03c5.85,0,11.14,2.37,14.97,6.2,3.83,3.83,6.2,9.13,6.2,14.97h-.09c.06.67.09,1.35.09,2.03v52c0,1.58.4,2.83,1.19,3.73.79.9,2.26,1.35,4.4,1.35,5,0,9.54,2.03,12.82,5.31,3.28,3.28,5.31,7.82,5.31,12.82Z"
              fill="currentcolor"
            />
            <path
              d="M48.9,45.8c-3.55.01-6.38.97-8.61,2.34-5.51,3.35-7.39,9.16-7.39,9.16-1.45-4.9-4.14-7.69-6.8-9.29-.4-.24-.81-.46-1.21-.65-.58-.28-1.14-.5-1.68-.68-.5-.17-.97-.3-1.42-.4-1.16-.28-2.11-.35-2.64-.38-.27-.01-.43,0-.47,0,.15-.02.29-.05.44-.07.69-.11,1.34-.24,1.96-.4.76-.2,1.47-.43,2.13-.71,1.65-.65,2.99-1.51,4.09-2.45.4-.35.77-.7,1.11-1.07.04-.04.09-.09.13-.14.63-.69,1.15-1.4,1.58-2.09.17-.29.33-.57.48-.85.1-.2.2-.4.3-.6.93-1.97,1.13-3.52,1.14-3.61.48,1.34,1.06,2.53,1.71,3.59.13.2.25.39.38.59.22.33.46.65.69.95.27.35.55.67.83.98.9.98,1.86,1.79,2.85,2.47.59.4,1.19.76,1.79,1.07,1.22.64,2.44,1.1,3.56,1.42,2.38.7,4.34.8,5.05.82Z"
              fill="currentcolor"
            />
          </g>
        </svg>
      </Link>
      <svg
        className={`md:hidden fixed h-auto translate-x-1/2 -translate-y-1/2 ${
          isMenuOpen
            ? "w-[160vw] right-1/2 top-1/2 ease-out"
            : "w-0 right-[56px] top-[80px]"
        } transition-all duration-500 ease-in`}
        width="719"
        height="1135"
        viewBox="0 0 719 1135"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="359.5" cy="567.5" rx="359.5" ry="567.5" fill="white" />
      </svg>
      <button
        className={`md:hidden relative z-50 h-6 w-9`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        title="Menu"
      >
        <div
          className={`absolute left-0 right-0 h-[3px] ${
            isMenuOpen
              ? "top-1/2 -translate-y-1/2 rotate-45 bg-black delay-0"
              : "top-0 bg-white delay-300"
          } transition-all duration-500 ease-in-out`}
        ></div>
        <div
          className={`absolute left-0 right-0 h-[3px] top-1/2 -translate-y-1/2 ${
            isMenuOpen
              ? "opacity-0 bg-black delay-0"
              : "opacity-100 bg-white delay-300"
          } transition-all duration-300 ease-in-out`}
        ></div>
        <div
          className={`absolute left-0 right-0 h-[3px] ${
            isMenuOpen
              ? "bottom-1/2 translate-y-1/2 -rotate-45 bg-black delay-0"
              : "bottom-0 bg-white delay-300"
          } transition-all duration-500 ease-in-out`}
        ></div>
      </button>
      <nav
        className={`w-full fixed md:relative z-40 inset-x-0 top-0 h-screen md:h-auto flex items-center ${
          !isMenuOpen && "invisible md:visible delay-300"
        } transition-all`}
      >
        <ul className="w-full flex flex-col md:flex-row items-center justify-evenly text-black md:text-white">
          {leftLinks.map((link) => getNavItem(link))}
          <li className="hidden md:block">
            <Link href="/" title="Cécile Lochus">
              <Image
                className="h-12 w-auto"
                src="/logoPortfolio_1.svg"
                alt="Logo"
                width={100}
                height={100}
              />
            </Link>
          </li>
          {rightLinks.map((link) => getNavItem(link))}
        </ul>
      </nav>
    </header>
  );
}
