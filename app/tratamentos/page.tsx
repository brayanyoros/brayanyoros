import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { TreatmentCard } from "@/components/TreatmentCard";
import { WhatsAppCTA } from "@/components/CTAButton";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { treatments } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: "Tratamentos",
  description:
    "Conheça os tratamentos da Vieira Odontologia em Teresópolis: clareamento dental, restaurações estéticas em resina composta e prótese dentária.",
  alternates: { canonical: "/tratamentos" },
};

export default function TratamentosPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início", url: "/" },
          { name: "Tratamentos", url: "/tratamentos" },
        ]}
      />

      <section className="container-page py-16 sm:py-24">
        <SectionHeading
          eyebrow="Tratamentos"
          title="Como podemos cuidar do seu sorriso?"
          description="Cada tratamento começa com uma avaliação individual e é conduzido pelo Dr. Luis Vieira, CRO-RJ 55611."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment) => (
            <TreatmentCard key={treatment.slug} treatment={treatment} />
          ))}
        </div>
        <div className="mt-12 rounded-2xl border border-line bg-cream-dark/50 p-8 text-center">
          <p className="text-[15px] text-ink-soft">
            Não encontrou o que procura ou tem dúvidas sobre qual tratamento é
            indicado para o seu caso?
          </p>
          <div className="mt-4 flex justify-center">
            <WhatsAppCTA location="tratamentos_index">Falar no WhatsApp</WhatsAppCTA>
          </div>
        </div>
      </section>
    </>
  );
}
