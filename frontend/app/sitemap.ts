import type { MetadataRoute } from "next";
import { fetchProjects } from "../lib/data";

const BASE_URL = "https://cecile-lochus.fr";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await fetchProjects();

  const dynamicUrls = projects.map((project) => ({
    url: `${BASE_URL}/projets/${project.title.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "monthly"
      | "yearly"
      | "never"
      | undefined,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/projets`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...dynamicUrls,
  ];
}
