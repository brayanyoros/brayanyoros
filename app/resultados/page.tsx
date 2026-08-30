import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { ScheduleCTA } from "@/components/CTAButton";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { resultCases } from "@/lib/results-data";
import { treatments } from "@/lib/clinic-data";
import { assetPath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resultados",
  description:
    "Casos reais de clareamento dental e restaurações estéticas em resina composta realizados na Vieira Odontologia, em Teresópolis, com autorização dos pacientes.",
  alternates: { canonical: "/resultados" },
};

export default function ResultadosPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início", url: "/" },
          { name: "Resultados", url: "/resultados" },
        ]}
      />

      <section className="container-page py-16 sm:py-24">
        <SectionHeading
          eyebrow="Resultados"
          title="Casos reais, acompanhados de perto"
          description="Cada caso tem características próprias — os resultados aqui mostrados não representam garantia de resultado igual para outro paciente, apenas o que foi observado nesses casos específicos, com autorização para divulgação."
        />

        <div className="mt-12 space-y-12">
          {resultCases.map((c) => {
            const treatment = treatments.find((t) => t.slug === c.relatedTreatmentSlug);
            return (
              <article
                key={c.slug}
                className="grid gap-6 rounded-2xl border border-line bg-white/60 p-6 sm:p-8 lg:grid-cols-2 lg:items-center"
              >
                <div className="grid grid-cols-2 gap-3">
                  {c.images ? (
                    <>
                      <div className="relative aspect-square overflow-hidden rounded-2xl">
                        <Image
                          src={assetPath(c.images.before)}
                          alt={`Antes — ${c.title}`}
                          fill
                          sizes="(min-width: 1024px) 25vw, 45vw"
                          className="object-cover"
                        />
                        <span className="absolute left-2 top-2 rounded-full bg-primary/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-cream">
                          Antes
                        </span>
                      </div>
                      <div className="relative aspect-square overflow-hidden rounded-2xl">
                        <Image
                          src={assetPath(c.images.after)}
                          alt={`Depois — ${c.title}`}
                          fill
                          sizes="(min-width: 1024px) 25vw, 45vw"
                          className="object-cover"
                        />
                        <span className="absolute left-2 top-2 rounded-full bg-primary/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-cream">
                          Depois
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <PlaceholderMedia
                        label="Foto real — antes (a inserir)"
                        ratio="aspect-square"
                        tone="cream"
                      />
                      <PlaceholderMedia
                        label="Foto real — depois (a inserir)"
                        ratio="aspect-square"
                        tone="cream"
                      />
                    </>
                  )}
                </div>
                <div>
                  <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                    {c.title}
                  </h2>
                  <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink-soft">
                    {c.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  {treatment && (
                    <Link
                      href={`/tratamentos/${treatment.slug}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                    >
                      Conhecer {treatment.shortName.toLowerCase()} →
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink-soft">
          Casos publicados com autorização dos pacientes. Nenhum resultado é
          garantido — cada tratamento depende de avaliação clínica
          individual.
        </p>

        <div className="mt-8 flex justify-center">
          <ScheduleCTA location="resultados">Agendar minha avaliação</ScheduleCTA>
        </div>
      </section>
    </>
  );
}
