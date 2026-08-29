import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { ScheduleCTA } from "@/components/CTAButton";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { TrackedExternalLink } from "@/components/TrackedLink";
import { clinic, testimonials } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: "Avaliações",
  description: `A Vieira Odontologia tem nota ${clinic.rating.toLocaleString("pt-BR", { minimumFractionDigits: 1 })} no Google, com ${clinic.reviewCount} avaliações de pacientes.`,
  alternates: { canonical: "/avaliacoes" },
};

export default function AvaliacoesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início", url: "/" },
          { name: "Avaliações", url: "/avaliacoes" },
        ]}
      />

      <section className="container-page py-16 text-center sm:py-24">
        <SectionHeading
          eyebrow="Avaliações"
          title="O que nossos pacientes dizem"
          align="center"
          description="Nota e avaliações reais, publicadas por pacientes no Google — sem depoimentos fictícios."
        />

        <div className="mx-auto mt-10 max-w-md rounded-3xl border border-line bg-white/60 p-10">
          <p className="font-display text-6xl font-semibold text-primary">
            {clinic.rating.toLocaleString("pt-BR", { minimumFractionDigits: 1 })}
          </p>
          <p className="mt-2 tracking-tight text-accent" aria-hidden="true">
            ★★★★★
          </p>
          <p className="mt-2 text-sm text-ink-soft">
            {clinic.reviewCount} avaliações verificadas no Google
          </p>
          <TrackedExternalLink
            href={clinic.googleMapsUrl}
            event="maps_click"
            location="avaliacoes_page"
            className="mt-5 inline-block text-sm font-semibold text-primary underline underline-offset-4"
          >
            Ver todas as avaliações no Google
          </TrackedExternalLink>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-5 text-left sm:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-line bg-white/60 p-6">
              <p className="tracking-tight text-accent" aria-hidden="true">
                {"★".repeat(t.rating)}
              </p>
              <blockquote className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-ink">
                {t.name}
                <span className="ml-2 font-normal text-ink-soft">— {t.date}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-lg text-xs text-ink-soft">
          Avaliações públicas de pacientes, publicadas no Google.
        </p>

        <div className="mt-10 flex justify-center">
          <ScheduleCTA location="avaliacoes">Quero agendar minha avaliação</ScheduleCTA>
        </div>
      </section>
    </>
  );
}
