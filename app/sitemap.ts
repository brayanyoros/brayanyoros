import type { MetadataRoute } from "next";
import { treatments } from "@/lib/clinic-data";
import { blogPosts } from "@/lib/blog-data";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/clinica",
    "/equipe",
    "/tratamentos",
    "/avaliacoes",
    "/blog",
    "/contato",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const treatmentRoutes = treatments.map((t) => ({
    url: `${SITE_URL}/tratamentos/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...treatmentRoutes, ...blogRoutes];
}
