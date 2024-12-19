import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "audio-to-text",
      image: "/projects/audio-to-text.png",
    },
    {
      id: 2,
      name: "utopia",
      image: "/projects/utopia.png",
    },
    {
      id: 3,
      name: "fifo",
      image: "/projects/fifo.png",
    },
    {
      id: 4,
      name: "mmitv",
      image: "/projects/mmitv.png",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-20 p-20">
      <h2 className="text-8xl font-extrabold text-primary">Projets</h2>
      <div className="columns-2 gap-7 max-w-5xl">
        {projects.map((project) => (
          <Link
            href={`/projets/${project.name}`}
            key={project.name}
            className="block rounded-2xl overflow-hidden pb-7 [&:nth-child(3)]:pt-14"
          >
            <Image
              className="w-full h-auto"
              src={project.image}
              alt={project.name}
              width={500}
              height={300}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
