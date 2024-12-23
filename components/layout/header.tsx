import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute z-10 start-0 top-0 end-0 p-10">
      <nav>
        <ul className="flex items-center justify-evenly">
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/#about">À propos</Link>
          </li>
          <li>
            <Link href="/#formations">Formations</Link>
          </li>
          <li>
            <Link href="/" title="Cécile Lochus">
              <Image
                className="h-12 w-auto"
                src="/logo_cecile_lochus.svg"
                alt="Logo"
                width={100}
                height={100}
              />
            </Link>
          </li>
          <li>
            <Link href="/#skills">Compétences</Link>
          </li>
          <li>
            <Link href="/projets">Projets</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
