import Hero from "@/components/layout/home/hero";
import About from "@/components/layout/home/about";
import Formations from "@/components/layout/home/formations";
import Skills from "@/components/layout/home/skills";
import BigText from "@/components/layout/home/bigText";
import Projects from "@/components/layout/home/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Formations />
      <Skills />
      <BigText />
      <Projects />
    </>
  );
}
