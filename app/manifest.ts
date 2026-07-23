import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} — Portfolio`,
    short_name: profile.name.split(" ")[0],
    description: "Consultant SEO Freelance & Développeur Front-End",
    start_url: "/fr",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#0A5C46",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" }, // À AJOUTER dans /public/icons
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" }, // À AJOUTER dans /public/icons
    ],
  };
}
