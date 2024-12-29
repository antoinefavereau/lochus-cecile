"use client"

import { usePathname } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const leftLinks = [
    { href: "/", label: "Accueil" },
    { href: "/#about", label: "À propos" },
    { href: "/#formations", label: "Formations" },
  ];

  const rightLinks = [
    { href: "/#skills", label: "Compétences" },
    { href: "/projets", label: "Projets" },
    { href: "/#contact", label: "Contact" },
  ];

  const pathname = usePathname()

  const getNavItem = (href: string, label: string) => (
    <li key={href}>
      <Link className="group block p-2" href={href}>
        <span className="relative block overflow-hidden">
          <span className="block group-hover:-translate-y-full transition-transform duration-300 ease-in-out">{label}</span>
          <span className="absolute group-hover:-translate-y-full transition-transform duration-300 ease-in-out">{label}</span>
        </span>
      </Link>
    </li>
  );

  return (
    <header className={`${pathname === "/" ? "absolute" : "relative"} z-10 start-0 top-0 end-0 p-10`}>
      <nav>
        <ul className="flex items-center justify-evenly">
          {leftLinks.map(({ href, label }) => getNavItem(href, label))}
          <li>
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
          {rightLinks.map(({ href, label }) => getNavItem(href, label))}
        </ul>
      </nav>
    </header>
  );
}
