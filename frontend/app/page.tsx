import Hero from "@/components/layout/home/hero";
import About from "@/components/layout/home/about";
import Career from "@/components/layout/home/career";
import Skills from "@/components/layout/home/skills";
import BigText from "@/components/layout/home/bigText";
import Projects from "@/components/layout/home/projects";

export default async function Home() {
  const data = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      "/api/accueil?populate[experiences]=*&populate[formations]=*&populate[competences][populate]=*&populate=cv"
  );
  const homeData = (await data.json()).data;

  const aboutData = {
    texte_presentation: homeData.texte_presentation,
    cv: homeData.cv.url,
  };

  const formationsData = {
    experiences: homeData.experiences,
    formations: homeData.formations,
  };

  const skillsData = {
    texte_competences: homeData.texte_competences,
    competences: homeData.competences,
  };

  const bigTextData = {
    texte_description: homeData.texte_description,
  };

  return (
    <>
      <div className="overflow-hidden">
        <Hero />
        <About data={aboutData} />
      </div>
      <Career data={formationsData} />
      <Skills data={skillsData} />
      <BigText data={bigTextData} />
      <Projects />
    </>
  );
}
