import { ApiProjetProjet } from "@/types/generated/contentTypes";
import type { MetadataRoute } from "next";

const BASE_URL = "https://cecile-lochus.fr";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/projets");
  const projects = (await data.json()).data;

  const dynamicUrls = projects.map(
    (project: ApiProjetProjet["attributes"]) => ({
      url: `${BASE_URL}/projets/${project.titre}`,
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
    })
  );

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
