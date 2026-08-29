# Vieira Odontologia — Site institucional

Site institucional e comercial da Vieira Odontologia (Teresópolis - RJ),
construído em Next.js 16 (App Router) + TypeScript + Tailwind CSS v4.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

Build de produção:

```bash
npm run build
npm run start
```

## Estrutura

- `lib/clinic-data.ts` — fonte única de verdade para nome, endereço,
  telefone/WhatsApp, tratamentos, equipe e FAQs. **Editar aqui** quando
  qualquer informação da clínica mudar (é usado em todas as páginas e no
  schema.org).
- `lib/blog-data.ts` — posts do blog e clusters de conteúdo planejados.
- `lib/site.ts` — domínio final do site (`SITE_URL`), usado em metadados,
  sitemap e dados estruturados.
- `app/` — rotas (App Router). Cada tratamento tem sua própria URL em
  `/tratamentos/[slug]`, gerada a partir de `lib/clinic-data.ts`.
- `components/` — componentes de UI reutilizáveis.

## Sobre o site anterior (odontovieira.com.br)

O cliente indicou `https://odontovieira.com.br/` como site atual/anterior
da clínica, para consulta de avaliações, textos e imagens. O ambiente
desta sessão de desenvolvimento **bloqueia acesso HTTP geral** (apenas
GitHub e registries de pacotes são permitidos), então não foi possível
abrir esse site diretamente. Uma busca web confirmou que:

- O nome oficial da marca é de fato **"Vieira Odontologia"** (título do
  site) — consistente com a ficha do Google Maps e com a logomarca
  enviada pelo cliente.
- **Atenção:** o domínio parecido `vieiraodontologia.com.br` (sem
  "odonto") pertence a uma clínica homônima **não relacionada**, em
  Jundiaí - SP. Não usar esse domínio por engano.
- O CEP do endereço é `25953-001` (já incluído em `lib/clinic-data.ts`).

**Próximo passo recomendado:** alguém com acesso normal à internet deve
abrir `odontovieira.com.br` e copiar para `lib/clinic-data.ts` os campos
ainda em `[PREENCHER]` abaixo (horário, tecnologias, formas de pagamento,
convênios) e, se houver, depoimentos de pacientes já publicados com
autorização e fotos reais da clínica/equipe.

### Logomarca

O cliente enviou a logomarca oficial (símbolo "VA" + wordmark "VIEIRA")
durante esta sessão, mas o arquivo de imagem não pôde ser salvo no
repositório (chegou apenas como anexo visual do chat, sem arquivo
acessível em disco). O header atualmente usa um wordmark em texto/CSS
("VIEIRA" + "Odontologia") como aproximação. Assim que o arquivo vetorial
(SVG/PNG) da logomarca real estiver disponível, salve-o em
`public/logo.svg` e substitua o bloco de texto em `components/Header.tsx`
por um `<Image src="/logo.svg" .../>`.

## Pendências para publicação (marcadas como `[PREENCHER]` no código)

Estas informações não foram fornecidas e precisam ser confirmadas com o
Dr. Luis Vieira antes do lançamento:

- Horário de funcionamento (`lib/clinic-data.ts` → `openingHours`).
- Tecnologias/equipamentos do consultório (`technologies`).
- Formas de pagamento aceitas (`paymentMethods`).
- Convênios atendidos, se houver (`insurancePartners`) — remover a menção
  em `objections` caso a clínica seja exclusivamente particular.
- Informações sobre estacionamento (`parking`).
- Tipos específicos de prótese oferecidos (página
  `/tratamentos/protese-dentaria-teresopolis`).
- CNPJ/razão social, se aplicável (política de privacidade).
- E-mail de contato para exercício de direitos LGPD (política de privacidade).
- Confirmar se `odontovieira.com.br` (`lib/site.ts` → `SITE_URL`) será
  mesmo o domínio do novo site ou se outro domínio será usado.
- Fotos reais da clínica, do Dr. Luis Vieira e (com autorização) de
  pacientes — atualmente todas as imagens são placeholders visuais
  identificados como tal. Substituir por `next/image` ao inserir as fotos
  reais para manter a otimização automática.
- Depoimentos de pacientes com autorização explícita (`/avaliacoes`).
- Casos de "antes e depois" com autorização explícita (seção removida do
  site até que haja material autorizado).

## Analytics

Os eventos `click_whatsapp`, `click_phone`, `click_schedule`,
`submit_form`, `view_treatment` e `maps_click` já estão instrumentados
(`lib/analytics.ts`). Para ativar o Google Analytics/Google Ads, defina a
variável de ambiente `NEXT_PUBLIC_GA_ID` com o ID de medição (ex.:
`G-XXXXXXX`) — o script só é carregado quando essa variável existe.

## Deploy

Projeto pronto para deploy na Vercel ou qualquer host compatível com
Next.js (build estático de todas as rotas, incluindo tratamentos e blog).
