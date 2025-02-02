import { ApiProjetProjet } from "@/types/generated/contentTypes";
import type { MetadataRoute } from "next";

const BASE_URL = "https://cecile-lochus.fr";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let dynamicUrls: MetadataRoute.Sitemap = [];

  try {
    const data = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/projets", {
      cache: "no-store",
    });
    if (data.ok) {
      const projects = (await data.json()).data;

      dynamicUrls = projects.map((project: ApiProjetProjet["attributes"]) => ({
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
      }));
    }
  } catch (error) {
    console.error("Failed to fetch projects for sitemap:", error);
  }

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
