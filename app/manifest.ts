import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Olorunwa Marvelous — Frontend Developer",
    short_name: "Marvelous.dev",
    description:
      "Frontend Developer specialising in React, Next.js & TypeScript from Lagos, Nigeria.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0b0d",
    theme_color: "#0a0b0d",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: ["developer", "portfolio"],
    lang: "en-NG",
  };
}

