import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { ScheduleCTA, WhatsAppCTA } from "@/components/CTAButton";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { clinic, trustBarItems } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: "A Clínica",
  description:
    "Conheça a história da Vieira Odontologia em Teresópolis: mais de 50 anos de tradição familiar, hoje conduzida pelo Dr. Luis Vieira, CRO-RJ 55611.",
  alternates: { canonical: "/clinica" },
};

export default function ClinicaPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início", url: "/" },
          { name: "A Clínica", url: "/clinica" },
        ]}
      />

      <section className="container-page py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">A Clínica</p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              Mais de 50 anos cuidando de sorrisos em Teresópolis.
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
              A Vieira Odontologia dá continuidade a uma tradição familiar iniciada
              pelo avô do Dr. Luis Vieira. Hoje, no mesmo espírito de cuidado,
              o consultório funciona na Av. Lúcio Meira, no bairro Várzea, atendendo
              pacientes de Teresópolis e região com foco em odontologia estética
              e reabilitadora.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ScheduleCTA location="clinica_hero">Agendar avaliação</ScheduleCTA>
              <WhatsAppCTA location="clinica_hero">Falar no WhatsApp</WhatsAppCTA>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image src="/images/clinica-recepcao-1.jpg" alt="Recepção da Vieira Odontologia" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-cream-dark/50 py-16 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative order-2 aspect-[4/5] overflow-hidden rounded-2xl lg:order-1">
            <Image src="/images/clinica-recepcao-2.jpg" alt="Recepção do edifício" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Nossa história"
              title="Uma tradição que atravessa gerações"
              description="A clínica foi fundada pelo avô do Dr. Luis Vieira, marcando o início de mais de cinco décadas de atendimento odontológico em Teresópolis. Essa história é a base de uma abordagem que valoriza a relação próxima com cada paciente — algo que nem sempre é possível em atendimentos de grande volume."
            />
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              Hoje, à frente da clínica, o Dr. Luis Vieira une essa tradição a uma
              formação técnica atualizada — graduado pela UNIFESO, com base em
              Prótese Dentária e especialização em andamento pela São Leopoldo
              Mandic — para conduzir cada caso com critério e transparência.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-24">
        <SectionHeading
          eyebrow="Por que os pacientes confiam"
          title="Diferenciais que você pode verificar"
          description="Preferimos falar apenas do que pode ser comprovado."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustBarItems.map((item) => (
            <div key={item.title} className="rounded-2xl border border-line bg-white/60 p-6">
              <p className="text-[15px] font-semibold text-primary">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream-dark/50 py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="O ambiente"
            title="Odontologia de excelência começa pela experiência."
            description="Um espaço pensado para reduzir a insegurança de quem visita o dentista, sem parecer um ambiente hospitalar."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image src="/images/consultorio-1.jpg" alt="Consultório" fill sizes="(min-width: 1024px) 33vw, 50vw" className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image src="/images/clinica-recepcao-1.jpg" alt="Recepção" fill sizes="(min-width: 1024px) 33vw, 50vw" className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image src="/images/clinica-recepcao-2.jpg" alt="Ambiente da clínica" fill sizes="(min-width: 1024px) 33vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16 text-center sm:py-24">
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Conheça a clínica pessoalmente
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-[15px] text-ink-soft">
          {clinic.addressFull}. Agende uma avaliação e conheça de perto a forma
          como cuidamos de cada paciente.
        </p>
        <div className="mt-6 flex justify-center">
          <ScheduleCTA location="clinica_final">Agendar avaliação</ScheduleCTA>
        </div>
      </section>
    </>
  );
}
