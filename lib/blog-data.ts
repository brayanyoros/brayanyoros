export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  cluster: string;
  relatedTreatmentSlug: string;
  excerpt: string;
  content: string[]; // parágrafos
  publishedAt: string; // ISO
};

export const blogClusters = [
  {
    name: "Clareamento Dental",
    topics: ["Quanto custa", "Tempo de duração", "Indicação", "Cuidados após o clareamento"],
  },
  {
    name: "Restaurações Estéticas em Resina",
    topics: ["Fechamento de diastema", "Troca de restaurações antigas", "Reabilitação de fraturas", "Durabilidade da resina"],
  },
  {
    name: "Prótese Dentária",
    topics: ["Tipos de prótese", "Adaptação", "Cuidados e manutenção", "Quando é indicada"],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "clareamento-dental-duvidas-antes-de-decidir",
    title: "Clareamento dental: dúvidas comuns antes de decidir",
    metaDescription:
      "Principais dúvidas sobre clareamento dental — em consultório ou conjugado — respondidas pela Vieira Odontologia, em Teresópolis.",
    cluster: "Clareamento Dental",
    relatedTreatmentSlug: "clareamento-dental-teresopolis",
    excerpt:
      "Antes de agendar um clareamento, é natural surgirem dúvidas sobre sensibilidade, durabilidade e qual técnica escolher. Reunimos as perguntas mais frequentes que ouvimos no consultório.",
    publishedAt: "2026-07-14",
    content: [
      "É comum que o interesse por um clareamento dental comece pela comparação de fotos em redes sociais ou pela recomendação de alguém próximo. Mas cada boca tem uma condição diferente, e por isso a primeira etapa de qualquer clareamento — em consultório ou conjugado — é sempre uma avaliação clínica.",
      "Uma das dúvidas mais frequentes é sobre sensibilidade. É possível sentir os dentes mais sensíveis durante ou logo após as sessões, especialmente a frio. Esse efeito costuma ser temporário e é levado em conta no protocolo definido pelo Dr. Luis Vieira antes de iniciar o tratamento.",
      "Outra pergunta comum é sobre a diferença entre o clareamento apenas em consultório e a técnica conjugada, que combina uma etapa no consultório com o uso complementar de moldeiras personalizadas em casa. A escolha entre uma abordagem e outra depende do objetivo do paciente e da avaliação inicial — não existe uma resposta única para todos os casos.",
      "Também vale lembrar que restaurações e próteses existentes não mudam de cor durante o clareamento. Se você tem restaurações visíveis, isso é algo que deve ser conversado antes do início do tratamento, para alinhar expectativas sobre o resultado final.",
      "Se você está considerando um clareamento dental, o primeiro passo é uma avaliação individual — é nela que se define se o procedimento é indicado para o seu caso e qual protocolo faz mais sentido.",
    ],
  },
  {
    slug: "restauracao-antiga-quando-trocar",
    title: "Restauração antiga escurecida: quando vale a pena trocar",
    metaDescription:
      "Entenda os sinais de que uma restauração em resina ou amálgama pode precisar ser substituída, e como funciona a troca na Vieira Odontologia.",
    cluster: "Restaurações Estéticas em Resina",
    relatedTreatmentSlug: "restauracao-estetica-resina-teresopolis",
    excerpt:
      "Restaurações antigas podem escurecer, infiltrar ou perder o ajuste com o tempo. Veja os sinais mais comuns e como é avaliada a necessidade de troca.",
    publishedAt: "2026-06-02",
    content: [
      "É normal que restaurações — sejam em resina composta ou em amálgama — passem por desgaste ao longo dos anos. Isso não significa, necessariamente, um problema imediato, mas alguns sinais merecem atenção em uma consulta de rotina.",
      "O escurecimento da borda entre a restauração e o dente é um dos sinais mais comuns. Pode indicar infiltração, ou seja, uma pequena entrada de saliva e bactérias entre o material restaurador e o dente, o que pode comprometer a estrutura ao longo do tempo se não for avaliado.",
      "Outro sinal é a sensibilidade nova em um dente que já tem restauração, especialmente ao mastigar. Isso pode ter diferentes causas, e por isso exige avaliação clínica — não é algo que se resolve apenas trocando a restauração sem investigar a origem do desconforto.",
      "Restaurações antigas em amálgama (a conhecida 'obturação prateada') também costumam ser avaliadas quanto à estética, já que muitos pacientes optam por substituí-las por resina composta, de cor semelhante ao dente. Essa decisão, no entanto, também passa por uma avaliação técnica, não apenas estética.",
      "Se você notou escurecimento, desconforto ou insatisfação estética com uma restauração antiga, o caminho é agendar uma avaliação para entender a real condição do dente antes de decidir pela troca.",
    ],
  },
];
