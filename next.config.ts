import type { NextConfig } from "next";

// Exportação estática, usada para publicar no GitHub Pages via
// .github/workflows/deploy-pages.yml. O site não usa API routes,
// middleware nem otimização de imagem via next/image, então funciona
// integralmente como HTML estático.
//
// NEXT_PUBLIC_BASE_PATH é a mesma variável lida em lib/site.ts (BASE_PATH)
// — precisa ter o prefixo NEXT_PUBLIC_ para ficar disponível também no
// bundle do cliente, já que next/image não prefixa sozinho o basePath em
// imagens locais referenciadas por caminho de string (diferente de
// next/link, que faz isso automaticamente).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
