// Casos reais já publicados no site anterior da clínica
// (odontovieira.com.br, seção "Portfólio Estético"), com autorização dos
// pacientes para divulgação. As fotos clínicas ainda precisam ser
// adicionadas como arquivos reais — ver PlaceholderMedia nesta página e
// o README para instruções.

export type ResultCase = {
  slug: string;
  title: string;
  relatedTreatmentSlug: string;
  paragraphs: string[];
  images?: { before: string; after: string };
  // Proporção nativa das fotos deste caso, para exibir o enquadramento
  // que o cliente recortou sem o object-cover aparar as bordas.
  imageRatio?: string;
  moreAngles?: { src: string; label: "Antes" | "Depois" }[];
};

// Casos com fotos reais aparecem primeiro — assim o carrossel da Home e a
// lista de /resultados abrem mostrando imagem, não um placeholder.
const allCases: ResultCase[] = [
  {
    slug: "fechamento-diastema-resina-2-anos",
    title: "Fechamento de diastema (espaços) com resina composta — 2 anos de acompanhamento",
    relatedTreatmentSlug: "restauracao-estetica-resina-teresopolis",
    paragraphs: [
      "Paciente de 16 anos procurou atendimento após tratamento ortodôntico, ainda com a presença de um diastema na frente que não havia sido totalmente fechado pelo aparelho. A principal queixa era estética, e o caso foi encaminhado para reabilitação com resina composta direta.",
      "Optamos por uma abordagem conservadora, preservando a estrutura dental e buscando harmonia no sorriso. Dois anos após o procedimento, o resultado segue estável, com excelente integração estética e saúde gengival preservada.",
    ],
  },
  {
    slug: "clareamento-troca-restauracao-incisivo-central",
    title: "Clareamento dental e troca de restauração do incisivo central",
    relatedTreatmentSlug: "clareamento-dental-teresopolis",
    paragraphs: [
      "Paciente procurou o consultório para realizar clareamento dental e substituir uma restauração antiga no dente da frente, fraturado na infância. Após o clareamento, realizamos a troca da resina para adequação da cor, alcançando um resultado mais harmônico e natural com o sorriso.",
    ],
    images: {
      before: "/images/clareamento-antes-destaque.png",
      after: "/images/clareamento-depois-destaque.png",
    },
    imageRatio: "aspect-[4/5]",
  },
  {
    slug: "clareamento-conjugado-troca-restauracao-incisivo-lateral",
    title: "Clareamento conjugado e troca de restauração em incisivo lateral",
    relatedTreatmentSlug: "clareamento-dental-teresopolis",
    paragraphs: [
      "Paciente procurou clareamento dental e optamos por um protocolo conjugado — clareamento de consultório associado ao caseiro. Durante o processo, observou-se alteração de cor na restauração antiga do incisivo lateral, que ficou amarelada em relação aos dentes clareados.",
      "Foi realizada a substituição por uma nova restauração em resina composta, harmonizando cor e estética do sorriso.",
    ],
  },
  {
    slug: "restauracao-estetica-incisivo-central",
    title: "Restauração estética em incisivo central",
    relatedTreatmentSlug: "restauracao-estetica-resina-teresopolis",
    paragraphs: [
      "Paciente apresentou fratura em incisivo central e foi realizada a reabilitação com resina composta, devolvendo forma, função e estética ao dente.",
    ],
  },
  {
    slug: "restauracoes-diretas-carie-secundaria-molares",
    title: "Restaurações diretas para substituição de resinas infiltradas por cárie secundária",
    relatedTreatmentSlug: "restauracao-estetica-resina-teresopolis",
    paragraphs: [
      "Paciente apresentava restaurações antigas em dentes posteriores com infiltração marginal — as bordas escurecidas indicavam a entrada de saliva e bactérias entre a resina e o dente, resultando em lesões de cárie secundária sob e ao redor das restaurações.",
      "As restaurações comprometidas foram removidas e substituídas por novas restaurações diretas em resina composta, eliminando o tecido cariado e devolvendo a vedação e a função dos dentes.",
    ],
    images: {
      before: "/images/carie-secundaria-antes.png",
      after: "/images/carie-secundaria-depois.png",
    },
    imageRatio: "aspect-[5/4]",
    moreAngles: [
      { src: "/images/carie-secundaria-antes-2.png", label: "Antes" },
      { src: "/images/carie-secundaria-depois-2.png", label: "Depois" },
      { src: "/images/carie-secundaria-antes-3.png", label: "Antes" },
      { src: "/images/carie-secundaria-depois-3.png", label: "Depois" },
    ],
  },
];

export const resultCases: ResultCase[] = [
  ...allCases.filter((c) => c.images),
  ...allCases.filter((c) => !c.images),
];
