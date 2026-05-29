import { tools } from "@/data/tools";

export default function sitemap() {

  const baseUrl = "https://helpintech.cloud";

  const toolPages = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: new Date(),
  }));

  return [

    {
      url: baseUrl,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/developer-tools`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/security-tools`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/networking-tools`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/linux-devops-tools`,
      lastModified: new Date(),
    },

    ...toolPages,
  ];
}