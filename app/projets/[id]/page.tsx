"use client";

import { fetchProject } from "@/lib/data";
import { Project } from "@/types/project";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const { id } = useParams();
  const name = id as string;
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProject = await fetchProject(name);
        setProject(fetchedProject);
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };
    fetchData();
  }, [name]);
  return <h1>{project?.title}</h1>;
}
