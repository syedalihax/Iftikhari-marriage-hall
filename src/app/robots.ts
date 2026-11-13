import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "Google-Extended",
          "PerplexityBot",
          "ClaudeBot",
          "Applebot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://iftikharihall.pk/sitemap.xml",
  };
}
