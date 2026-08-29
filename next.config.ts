import type { NextConfig } from "next";

// Exportação estática, usada para publicar no GitHub Pages via
// .github/workflows/deploy-pages.yml. O site não usa API routes,
// middleware nem otimização de imagem via next/image, então funciona
// integralmente como HTML estático.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "brayanyoros";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
