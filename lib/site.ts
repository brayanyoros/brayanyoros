// Domínio real e já utilizado pela clínica (site anterior, indicado pelo
// cliente). Usado em metadados, sitemap, robots.txt e dados estruturados.
// Confirmar com o cliente se o novo site substituirá o mesmo domínio ou se
// um novo domínio será registrado antes da publicação.
//
// NOTA: "vieiraodontologia.com.br" (sem "odonto") pertence a uma clínica
// homônima e não relacionada em Jundiaí - SP — não usar esse domínio.
export const SITE_URL = "https://www.odontovieira.com.br";

// Prefixo de rota usado quando o site está publicado como "project page"
// no GitHub Pages (ex.: "/brayanyoros"). Definido pelo workflow de deploy
// via NEXT_PUBLIC_BASE_PATH — vazio em desenvolvimento local e em qualquer
// hospedagem servida na raiz do domínio.
//
// Usado para montar o caminho de imagens públicas referenciadas como
// string (next/image não prefixa `src` local automaticamente com o
// basePath, ao contrário do next/link, que já faz isso sozinho).
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function assetPath(path: string) {
  return `${BASE_PATH}${path}`;
}
