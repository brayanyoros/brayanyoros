import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

// A prévia publicada no GitHub Pages não deve ser indexada — apenas o
// domínio definitivo (SITE_URL) deve aparecer no Google.
const isGithubPages = process.env.GITHUB_PAGES === "true";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: isGithubPages ? [] : "/",
      disallow: isGithubPages ? "/" : [],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
