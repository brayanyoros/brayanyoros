// Fonte única de verdade para NAP (Nome, Endereço, Telefone) e demais
// informações reais da clínica. Qualquer dado ainda não confirmado pelo
// cliente aparece marcado como [PREENCHER] — nunca é inventado.

export const clinic = {
  // Nome confirmado pelo título da ficha do Google Maps, pelo domínio do
  // site anterior da clínica (odontovieira.com.br) e pela logomarca
  // enviada pelo cliente ("VIEIRA").
  name: "Vieira Odontologia",
  shortName: "Vieira Odontologia",
  tagline: "Odontologia estética e reabilitadora em Teresópolis",

  dentist: {
    fullName: "Dr. Luis Rodrigues Vieira",
    firstName: "Dr. Luis",
    cro: "CRO-RJ 55611",
    instagramHandle: "_luisrodrigues",
    instagramUrl: "https://www.instagram.com/_luisrodrigues",
  },

  city: "Teresópolis",
  state: "RJ",
  neighborhood: "Várzea",
  addressLine: "Av. Lúcio Meira, 100 — 8º andar",
  addressFull: "Av. Lúcio Meira, 100, 8º andar, Várzea, Teresópolis - RJ",
  postalCode: "25953-001",

  // Número principal — usado como telefone e WhatsApp em todo o site
  // (NAP consistente). Confirmado com o cliente.
  phoneDisplay: "(21) 96669-1006",
  phoneE164: "+5521966691006",
  whatsappNumber: "5521966691006",
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}`;
  },
  whatsappDefaultMessage:
    "Olá! Vim pelo site e gostaria de agendar uma avaliação na Vieira Odontologia.",

  // Contato alternativo informado pelo cliente (site anterior). Mantido
  // como opção secundária no Contato — o WhatsApp acima segue como
  // canal principal para preservar consistência de NAP.
  altPhoneDisplay: "(21) 99951-0051",
  contactEmail: "luisfrodriguesvieira@gmail.com",

  googleMapsUrl:
    "https://www.google.com/maps/place/Vieira+Odontologia+%7C+Dentista+%7C+Pr%C3%B3teses+%7C+Implante+%7C+Aparelho+invisivel+SouSmile+%7C+Teres%C3%B3polis+-+Rio+de+Janeiro/@-22.4136464,-42.9700884,3a,75y,90t/data=!3m8!1e2",
  googleMapsEmbedQuery: "Vieira+Odontologia+Av.+Lúcio+Meira+100+Teresópolis+RJ",
  googlePlaceCoords: { lat: -22.4137016, lng: -42.9699996 },

  rating: 5.0,
  reviewCount: 25,

  // [PREENCHER] — horário de funcionamento ainda não informado pelo cliente.
  openingHours: "[PREENCHER — horário de atendimento]",
  openingHoursSchema: [] as string[], // preencher em formato schema.org quando disponível

  // [PREENCHER]
  paymentMethods: "[PREENCHER — formas de pagamento aceitas]",
  insurancePartners: "[PREENCHER — convênios atendidos, ou remover seção]",
  technologies: "[PREENCHER — lista de tecnologias/equipamentos do consultório]",
  parking: "[PREENCHER — informação sobre estacionamento no local/entorno]",
} as const;

export type Treatment = {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  problem: string;
  benefit: string;
  summary: string;
  whatIsIt: string;
  indicatedFor: string[];
  solves: string[];
  howItWorks: string;
  steps: { title: string; description: string }[];
  benefits: string[];
  limitations: string[];
  whoPerforms: string;
  faqs: { question: string; answer: string }[];
};

export const treatments: Treatment[] = [
  {
    slug: "clareamento-dental-teresopolis",
    name: "Clareamento Dental",
    shortName: "Clareamento Dental",
    metaTitle: "Clareamento Dental em Teresópolis | Vieira Odontologia",
    metaDescription:
      "Clareamento dental em consultório ou conjugado (consultório + caseiro) em Teresópolis, com acompanhamento do Dr. Luis Vieira (CRO-RJ 55611). Agende sua avaliação.",
    problem: "Dentes escurecidos ou amarelados por manchas, idade ou hábitos alimentares.",
    benefit: "Sorriso com tom mais uniforme e luminoso, com acompanhamento profissional.",
    summary:
      "Clareamento realizado em consultório, ou de forma conjugada com moldeiras de uso caseiro, sempre com avaliação prévia da saúde bucal.",
    whatIsIt:
      "O clareamento dental é um procedimento estético que utiliza agentes clareadores para reduzir manchas e escurecimento do esmalte, deixando o tom dos dentes mais uniforme. Na Vieira Odontologia, ele pode ser realizado em consultório ou de forma conjugada — combinando uma sessão em consultório com o uso complementar de moldeiras personalizadas em casa, sob orientação do Dr. Luis Vieira.",
    indicatedFor: [
      "Pessoas com dentes saudáveis que apresentam escurecimento por pigmentação externa (café, vinho, cigarro, entre outros) ou envelhecimento natural do esmalte.",
      "Pacientes que desejam uniformizar o tom do sorriso antes de eventos importantes ou como parte de um plano estético mais amplo.",
    ],
    solves: [
      "Manchas superficiais causadas por alimentos, bebidas e hábitos.",
      "Escurecimento progressivo relacionado à idade.",
      "Desuniformidade de tom entre os dentes.",
    ],
    howItWorks:
      "Antes de iniciar, é feita uma avaliação clínica para confirmar se o clareamento é indicado para o seu caso — dentes com cáries, restaurações comprometidas ou sensibilidade acentuada podem precisar de tratamento prévio. A partir daí, o Dr. Luis Vieira define o protocolo mais adequado: apenas em consultório, ou a técnica conjugada, combinando consultório e moldeiras de uso caseiro.",
    steps: [
      { title: "Avaliação inicial", description: "Exame clínico para verificar a saúde bucal e a indicação do clareamento." },
      { title: "Planejamento", description: "Definição do protocolo — consultório, caseiro ou técnica conjugada — de acordo com o seu caso." },
      { title: "Registro do tom inicial", description: "Documentação da cor dos dentes antes do início do tratamento." },
      { title: "Aplicação do clareamento", description: "Execução das sessões em consultório e/ou orientação para uso das moldeiras em casa." },
      { title: "Acompanhamento", description: "Avaliação do resultado e orientações de manutenção com o Dr. Luis Vieira." },
    ],
    benefits: [
      "Procedimento conduzido com acompanhamento profissional em todas as etapas.",
      "Possibilidade de combinar técnicas (consultório + caseiro) conforme o objetivo do paciente.",
      "Protocolo ajustado à sensibilidade e às características de cada arcada.",
    ],
    limitations: [
      "O grau de clareamento varia de pessoa para pessoa e depende da causa do escurecimento.",
      "Restaurações e próteses existentes não mudam de cor com o clareamento — isso é avaliado antes do início.",
      "A manutenção do resultado depende de hábitos e cuidados após o tratamento.",
    ],
    whoPerforms:
      "O clareamento é avaliado e conduzido pelo Dr. Luis Rodrigues Vieira (CRO-RJ 55611).",
    faqs: [
      { question: "O clareamento dental dói?", answer: "Alguma sensibilidade temporária pode ocorrer durante ou após o procedimento, variando de pessoa para pessoa. O protocolo é ajustado na avaliação para minimizar esse desconforto." },
      { question: "Quanto tempo dura o tratamento?", answer: "Varia conforme a técnica escolhida e a resposta de cada paciente. Isso é definido durante a avaliação, junto com o Dr. Luis Vieira." },
      { question: "Qual a diferença entre o clareamento em consultório e o conjugado?", answer: "O clareamento em consultório é realizado inteiramente na clínica. Já o conjugado combina uma etapa em consultório com o uso complementar de moldeiras personalizadas em casa, seguindo orientação profissional." },
      { question: "Quanto custa o clareamento dental?", answer: "O valor depende da avaliação clínica e da técnica mais indicada para o seu caso. Fale conosco pelo WhatsApp para mais informações." },
      { question: "Quem realiza o procedimento?", answer: "O Dr. Luis Rodrigues Vieira, CRO-RJ 55611, responsável técnico da Vieira Odontologia." },
    ],
  },
  {
    slug: "restauracao-estetica-resina-teresopolis",
    name: "Restaurações Estéticas em Resina Composta",
    shortName: "Restaurações Estéticas",
    metaTitle: "Restaurações Estéticas em Resina Composta em Teresópolis | Vieira Odontologia",
    metaDescription:
      "Restaurações em resina composta, fechamento de diastemas, troca de restaurações antigas e reabilitação de dentes fraturados em Teresópolis, com o Dr. Luis Vieira (CRO-RJ 55611).",
    problem: "Dentes fraturados, com espaços (diastemas) ou restaurações antigas desgastadas e escurecidas.",
    benefit: "Recuperação da forma, função e harmonia do sorriso com técnica direta em resina composta.",
    summary:
      "Um mesmo material — a resina composta — aplicado em diferentes situações: fechamento de diastemas, substituição de restaurações antigas e reconstrução de dentes fraturados.",
    whatIsIt:
      "A resina composta é um material estético usado para reconstruir ou modificar a forma dos dentes diretamente no consultório, sem a necessidade de próteses de laboratório na maioria dos casos. Na Vieira Odontologia, esse recurso é utilizado em diferentes indicações: fechar pequenos espaços entre os dentes (diastemas), substituir restaurações antigas que escureceram ou se desgastaram, e reconstruir dentes fraturados, sempre planejado caso a caso pelo Dr. Luis Vieira.",
    indicatedFor: [
      "Quem tem espaços entre os dentes (diastemas) e deseja fechá-los sem aparelho ortodôntico, quando clinicamente indicado.",
      "Pacientes com restaurações antigas em resina ou amálgama, escurecidas, manchadas ou com infiltração.",
      "Pessoas com dentes fraturados por trauma, desgaste ou cáries extensas, que precisam recompor a estrutura dentária.",
    ],
    solves: [
      "Espaços entre os dentes (diastemas).",
      "Restaurações antigas, escurecidas ou comprometidas.",
      "Fraturas e perdas de estrutura dentária.",
    ],
    howItWorks:
      "O tratamento começa com uma avaliação clínica e, quando necessário, radiográfica, para entender a extensão do problema. O Dr. Luis Vieira planeja a forma, o volume e a cor da resina a ser utilizada, buscando harmonia com os dentes vizinhos. A aplicação é feita em camadas, diretamente sobre o dente, com escultura e acabamento realizados na própria consulta.",
    steps: [
      { title: "Avaliação e diagnóstico", description: "Exame clínico (e radiográfico quando necessário) para identificar a extensão do caso." },
      { title: "Planejamento estético", description: "Definição da forma, proporção e cor da resina de acordo com o restante do sorriso." },
      { title: "Preparo do dente", description: "Remoção de tecido comprometido ou de restaurações antigas, quando aplicável." },
      { title: "Aplicação da resina composta", description: "Reconstrução em camadas diretamente no consultório." },
      { title: "Acabamento e polimento", description: "Ajuste de forma, textura e brilho para um resultado natural." },
    ],
    benefits: [
      "Técnica direta, geralmente concluída em consultório.",
      "Preserva a estrutura dentária saudável remanescente.",
      "Permite ajustes de forma e harmonia ainda na mesma sessão.",
    ],
    limitations: [
      "A durabilidade da resina depende de fatores como hábitos, oclusão e manutenção periódica.",
      "Casos com perda extensa de estrutura podem exigir outras soluções, avaliadas individualmente.",
      "O fechamento de diastemas por resina nem sempre é a melhor indicação — em alguns casos, a avaliação pode apontar para tratamento ortodôntico associado.",
    ],
    whoPerforms:
      "O planejamento e a execução são realizados pelo Dr. Luis Rodrigues Vieira (CRO-RJ 55611).",
    faqs: [
      { question: "Fechar diastema com resina dói?", answer: "É um procedimento geralmente bem tolerado, podendo ser realizado com anestesia local quando necessário. Isso é avaliado caso a caso." },
      { question: "Restauração em resina composta é definitiva?", answer: "A resina composta tem boa durabilidade, mas não é eterna — pode precisar de manutenção ou substituição ao longo dos anos, conforme o desgaste e os hábitos do paciente." },
      { question: "É possível trocar uma restauração antiga sem prejudicar o dente?", answer: "Na maioria dos casos sim. O Dr. Luis Vieira avalia a extensão da restauração antiga antes de definir a melhor forma de substituição." },
      { question: "Quanto tempo leva para reabilitar um dente fraturado?", answer: "Depende da extensão da fratura e da técnica indicada. O prazo é definido após a avaliação clínica." },
      { question: "Quanto custa uma restauração estética?", answer: "O valor depende do número de dentes, da complexidade do caso e do material indicado, definidos na avaliação." },
    ],
  },
  {
    slug: "protese-dentaria-teresopolis",
    name: "Prótese Dentária",
    shortName: "Prótese Dentária",
    metaTitle: "Prótese Dentária em Teresópolis | Vieira Odontologia",
    metaDescription:
      "Reabilitação protética em Teresópolis com o Dr. Luis Vieira, formado em Técnico em Prótese Dentária e em especialização na área. Agende sua avaliação.",
    problem: "Dentes perdidos, desgastados ou com próteses antigas que comprometem função e estética.",
    benefit: "Reabilitação da função mastigatória e da estética do sorriso com planejamento individualizado.",
    summary:
      "Reabilitação protética planejada de acordo com a necessidade de cada paciente — a indicação específica (tipo de prótese) é definida somente após avaliação clínica.",
    whatIsIt:
      "A prótese dentária é utilizada para repor dentes perdidos ou reabilitar dentes muito comprometidos, devolvendo função e estética ao sorriso. O Dr. Luis Vieira tem formação como Técnico em Prótese Dentária e está em especialização na área pela São Leopoldo Mandic, o que fundamenta o planejamento técnico de cada caso. [PREENCHER — especificar aqui os tipos de prótese efetivamente oferecidos pela clínica: fixa, removível, sobre implante, total, parcial etc., conforme validação com o Dr. Luis].",
    indicatedFor: [
      "Pessoas com um ou mais dentes ausentes.",
      "Pacientes com dentes muito desgastados ou fragilizados que necessitam de cobertura protética.",
      "Quem já utiliza próteses antigas e busca reavaliação ou substituição.",
    ],
    solves: [
      "Perda de um ou mais dentes.",
      "Comprometimento estrutural severo de dentes.",
      "Próteses antigas desadaptadas ou desgastadas.",
    ],
    howItWorks:
      "O processo começa com uma avaliação clínica completa, incluindo exame da arcada e, quando necessário, exames complementares. A partir do diagnóstico, o Dr. Luis Vieira define o tipo de reabilitação protética mais adequado ao caso, explica as alternativas e etapas antes do início do tratamento.",
    steps: [
      { title: "Avaliação clínica", description: "Exame da arcada dentária e da condição dos dentes remanescentes." },
      { title: "Diagnóstico e planejamento", description: "Definição do tipo de prótese e das etapas necessárias para o caso." },
      { title: "Apresentação do plano", description: "Explicação das opções, prazos e cuidados envolvidos antes de iniciar." },
      { title: "Confecção e ajustes", description: "Etapas técnicas de confecção da prótese, com provas e ajustes." },
      { title: "Instalação e acompanhamento", description: "Entrega da prótese com orientações de uso, higienização e manutenção." },
    ],
    benefits: [
      "Planejamento conduzido por profissional com formação técnica específica em prótese dentária.",
      "Abordagem individualizada de acordo com a condição de cada arcada.",
      "Acompanhamento após a instalação para ajustes e orientações.",
    ],
    limitations: [
      "O tipo de prótese indicado depende inteiramente da avaliação clínica — não é possível definir isso antes da consulta.",
      "O prazo de confecção varia conforme o tipo de prótese e a necessidade de etapas laboratoriais.",
      "Casos mais complexos podem exigir tratamentos prévios (como readequação da gengiva ou de outros dentes).",
    ],
    whoPerforms:
      "Avaliação e planejamento conduzidos pelo Dr. Luis Rodrigues Vieira (CRO-RJ 55611), com formação técnica em prótese dentária e especialização em andamento pela São Leopoldo Mandic.",
    faqs: [
      { question: "Qual tipo de prótese é indicado para o meu caso?", answer: "Isso só pode ser definido após uma avaliação clínica individual, já que depende da quantidade de dentes ausentes, da saúde da gengiva e do osso, entre outros fatores." },
      { question: "Prótese dentária dói para colocar?", answer: "O processo é planejado para ser o mais confortável possível, com anestesia local quando indicado. Eventual desconforto de adaptação é normal e acompanhado pelo Dr. Luis Vieira." },
      { question: "Quanto tempo leva para ficar pronta uma prótese?", answer: "O prazo varia conforme o tipo de prótese e as etapas necessárias, sendo informado durante o planejamento." },
      { question: "Quanto custa uma prótese dentária?", answer: "O valor depende do tipo de prótese e da complexidade do caso, definidos após avaliação." },
      { question: "Atendem convênio para prótese dentária?", answer: "[PREENCHER — informar convênios atendidos ou confirmar atendimento apenas particular]." },
    ],
  },
];

export const teamMembers = [
  {
    name: "Dr. Luis Rodrigues Vieira",
    role: "Cirurgião-dentista responsável técnico",
    cro: "CRO-RJ 55611",
    education: [
      "Técnico em Prótese Dentária",
      "Graduação em Odontologia pela UNIFESO",
      "Atualização em Dentística Restauradora pela UNIFESO",
      "Especialização em Prótese Dentária em andamento — São Leopoldo Mandic",
    ],
    areas: ["Clareamento dental", "Restaurações estéticas em resina composta", "Reabilitação protética"],
    bio:
      "Luis Vieira dá continuidade a uma tradição familiar de mais de 50 anos na odontologia em Teresópolis, atendendo no mesmo endereço fundado por seu avô. Formado em Odontologia pela UNIFESO e com base técnica em Prótese Dentária, mantém-se em atualização constante — hoje em especialização em Prótese Dentária pela São Leopoldo Mandic — para conduzir cada caso com critério técnico e atenção individual.",
    // Texto original do Dr. Luis Vieira, em primeira pessoa, já publicado
    // no site anterior da clínica ("Minha História").
    personalStatement: [
      "Minha história com a odontologia começou antes mesmo de eu nascer. Venho de uma família de dentistas que há mais de 50 anos atua em Teresópolis, desde quando meu avô fundou a clínica onde tenho o privilégio de trabalhar até hoje.",
      "Comecei minha trajetória na área da saúde com a formação em Prótese Dentária — foi ali que descobri minha paixão por devolver sorrisos e autoestima às pessoas. Logo depois, entrei na faculdade de Odontologia, onde aprofundei esse propósito e me formei cirurgião-dentista.",
      "Hoje, estou concluindo a especialização em Prótese Dentária, fechando um ciclo que começou lá atrás, mas que, na verdade, é apenas o início de uma nova fase. Carrego comigo a tradição da minha família, o amor pela profissão e o compromisso de continuar oferecendo um trabalho ético, humano e de excelência à nossa cidade.",
    ],
  },
];

export type Testimonial = {
  name: string;
  date: string;
  rating: number;
  text: string;
};

// Avaliações reais de pacientes, já publicadas publicamente no Google e
// reproduzidas no site anterior da clínica (odontovieira.com.br).
export const testimonials: Testimonial[] = [
  {
    name: "João Pedro",
    date: "9 de outubro de 2024",
    rating: 5,
    text: "A melhor clínica que já fui nessa cidade. Excelentes Profissionais, qualidade e resultados impecáveis.",
  },
  {
    name: "Felipe Cunha Costa",
    date: "9 de outubro de 2024",
    rating: 5,
    text: "Qualidade e Atendimento que Teresópolis precisa! Recomendo muito! Tive ótima experiência.",
  },
  {
    name: "João Fernandes",
    date: "9 de outubro de 2024",
    rating: 5,
    text: "Super recomendo, melhor atendimento e profissionalismo. O Dr Luís dispensa comentários, excelente profissional. Sucesso!",
  },
  {
    name: "Emilia Alcoforado",
    date: "Avaliação recente",
    rating: 5,
    text: "Atendimento excelente com Dr. Luis Vieira, profissional atencioso e tranquilo. Tive um super atendimento :)",
  },
];

export const trustBarItems = [
  { title: "Mais de 50 anos de tradição em Teresópolis", detail: "Clínica fundada pelo avô do Dr. Luis Vieira, no mesmo endereço." },
  { title: "Responsável técnico com formação continuada", detail: "Graduação pela UNIFESO e especialização em andamento pela São Leopoldo Mandic." },
  { title: "Avaliação individual para cada caso", detail: "Planejamento próprio antes de qualquer tratamento." },
  { title: "Localização central em Teresópolis", detail: "Av. Lúcio Meira, 100, no bairro Várzea." },
  { title: "Nota máxima no Google", detail: "5,0 de avaliação em 25 avaliações de pacientes." },
];

export const processSteps = [
  { title: "Agende sua avaliação", description: "Fale conosco pelo WhatsApp ou pelo formulário e escolha o melhor horário." },
  { title: "Entendemos seu caso", description: "Ouvimos suas queixas, expectativas e histórico antes de qualquer exame." },
  { title: "Diagnóstico e planejamento", description: "Exame clínico (e complementar, quando necessário) para entender a real condição do seu sorriso." },
  { title: "Apresentação das possibilidades", description: "Você conhece as alternativas indicadas para o seu caso, com explicações claras." },
  { title: "Início do tratamento", description: "O plano só avança após sua aprovação, com etapas e prazos explicados com antecedência." },
];

export const objections = [
  { question: "Vai doer?", answer: "A maioria dos procedimentos realizados na clínica utiliza anestesia local quando necessário e é planejada para minimizar o desconforto. Eventual sensibilidade pontual é explicada com antecedência, caso do seu tratamento." },
  { question: "Quanto tempo leva um tratamento?", answer: "Varia conforme o procedimento e a complexidade do caso. Isso é definido durante a avaliação e explicado antes de você decidir avançar." },
  { question: "Como funciona a primeira consulta?", answer: "A primeira consulta é dedicada a ouvir sua queixa, examinar sua saúde bucal e, quando necessário, indicar exames complementares — sem compromisso de iniciar um tratamento no mesmo dia." },
  { question: "Existe avaliação antes do tratamento?", answer: "Sim. Nenhum tratamento é indicado sem uma avaliação clínica prévia individual." },
  { question: "Quais formas de pagamento vocês aceitam?", answer: clinic.paymentMethods },
  { question: "Vocês atendem convênio?", answer: clinic.insurancePartners },
  { question: "Onde fica a clínica?", answer: `${clinic.addressFull}, referência próxima ao centro de Teresópolis.` },
  { question: "Tem estacionamento?", answer: clinic.parking },
  { question: "Como funciona um tratamento mais complexo, como uma reabilitação protética?", answer: "Esses casos são conduzidos em etapas, com diagnóstico detalhado e apresentação do plano completo antes do início — você entende cada fase antes de aprovar." },
];
