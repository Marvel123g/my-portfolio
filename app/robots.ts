import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://marvelousdev.netlify.app/sitemap.xml",
    host: "https://marvelousdev.netlify.app",
  };
}

