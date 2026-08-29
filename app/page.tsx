import type { Metadata } from "next";
import { HomeExperience } from "@/components/HomeExperience";
import { FAQSchema } from "@/components/StructuredData";
import { clinic } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: `${clinic.name} | Dentista em Teresópolis - RJ`,
  description:
    "Clareamento dental, restaurações estéticas em resina composta e prótese dentária em Teresópolis, com o Dr. Luis Vieira (CRO-RJ 55611). Avaliação individual e atendimento humanizado.",
  alternates: { canonical: "/" },
};

const homeFaqs = [
  { question: "Como funciona a primeira avaliação?", answer: "Conversamos sobre sua queixa e expectativas, realizamos um exame clínico completo e explicamos as possibilidades de tratamento para o seu caso." },
  { question: "O tratamento com resina é indicado para mim?", answer: "A resina composta é indicada para diastemas, fraturas, desgastes e pequenas correções estéticas. A indicação é confirmada durante a avaliação." },
  { question: "Como funciona o clareamento?", answer: "O clareamento pode ser realizado em consultório, de forma conjugada (consultório + caseiro), ou apenas com moldeiras — a técnica é definida de acordo com o seu caso." },
  { question: "Quanto tempo dura o tratamento?", answer: "Cada plano de tratamento tem um tempo próprio, definido na etapa de planejamento de acordo com a complexidade do caso." },
  { question: "Como posso agendar?", answer: "Você pode agendar sua avaliação diretamente pelo WhatsApp ou pelo formulário de contato." },
];

export default function HomePage() {
  return (
    <>
      <FAQSchema items={homeFaqs} />
      <HomeExperience />
    </>
  );
}
