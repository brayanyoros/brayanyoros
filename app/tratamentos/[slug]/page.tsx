import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ScheduleCTA, WhatsAppCTA } from "@/components/CTAButton";
import { BreadcrumbSchema, FAQSchema, TreatmentSchema } from "@/components/StructuredData";
import { clinic, treatments } from "@/lib/clinic-data";
import { resultCases } from "@/lib/results-data";
import { SITE_URL } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const treatment = treatments.find((t) => t.slug === slug);
  if (!treatment) return {};

  return {
    title: treatment.metaTitle,
    description: treatment.metaDescription,
    alternates: { canonical: `/tratamentos/${treatment.slug}` },
    openGraph: {
      title: treatment.metaTitle,
      description: treatment.metaDescription,
      url: `${SITE_URL}/tratamentos/${treatment.slug}`,
    },
  };
}

export default async function TreatmentPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const treatment = treatments.find((t) => t.slug === slug);
  if (!treatment) notFound();

  const relatedResults = resultCases.filter((c) => c.relatedTreatmentSlug === treatment.slug);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início", url: "/" },
          { name: "Tratamentos", url: "/tratamentos" },
          { name: treatment.name, url: `/tratamentos/${treatment.slug}` },
        ]}
      />
      <TreatmentSchema
        name={treatment.name}
        description={treatment.metaDescription}
        url={`${SITE_URL}/tratamentos/${treatment.slug}`}
      />
      <FAQSchema items={treatment.faqs} />

      {/* HERO */}
      <section className="container-page py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
              Tratamento
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              {treatment.name} em {clinic.city}
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">{treatment.summary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ScheduleCTA location={`treatment_${treatment.slug}_hero`}>
                Agendar avaliação
              </ScheduleCTA>
              <WhatsAppCTA location={`treatment_${treatment.slug}_hero`}>
                Falar no WhatsApp
              </WhatsAppCTA>
            </div>
          </div>
          <PlaceholderMedia label={`Foto real — ${treatment.shortName}`} ratio="aspect-[4/5]" />
        </div>
      </section>

      {/* O QUE É */}
      <section className="bg-cream-dark/50 py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">O que é?</h2>
          <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">{treatment.whatIsIt}</p>
        </div>
      </section>

      {/* PARA QUEM / PROBLEMAS */}
      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Para quem é indicado?
            </h2>
            <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-ink-soft">
              {treatment.indicatedFor.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Quais problemas pode solucionar?
            </h2>
            <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-ink-soft">
              {treatment.solves.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA / ETAPAS */}
      <section className="bg-cream-dark/50 py-16 sm:py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Como funciona?
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">{treatment.howItWorks}</p>
          </div>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {treatment.steps.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-line bg-white/60 p-5">
                <span className="font-display text-2xl font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-[15px] font-semibold text-ink">{step.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* BENEFÍCIOS E LIMITAÇÕES */}
      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">Benefícios</h2>
            <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-ink-soft">
              {treatment.benefits.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">Limitações</h2>
            <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-ink-soft">
              {treatment.limitations.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-soft/60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* QUEM REALIZA */}
      <section className="bg-cream-dark/50 py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">Quem realiza</h2>
          <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">{treatment.whoPerforms}</p>
        </div>
      </section>

      {/* RESULTADOS REAIS — placeholder honesto, sem imagens não autorizadas */}
      <section className="container-page py-16 sm:py-20">
        <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
          Resultados reais autorizados
        </h2>
        {relatedResults.length > 0 ? (
          <>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
              Casos reais de {treatment.shortName.toLowerCase()}, com autorização
              dos pacientes para divulgação. Nenhum resultado é garantido — cada
              caso tem características próprias.
            </p>
            <Link
              href="/resultados"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
            >
              Ver casos de {treatment.shortName.toLowerCase()} →
            </Link>
          </>
        ) : (
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            Esta seção será atualizada com casos reais de pacientes que autorizarem
            a divulgação de suas imagens. Nenhum resultado é prometido antes da
            avaliação — cada caso tem características próprias.
          </p>
        )}
      </section>

      {/* FAQ */}
      <section className="bg-cream-dark/50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Perguntas frequentes" title={`Dúvidas sobre ${treatment.shortName.toLowerCase()}`} />
          <div className="mt-8 max-w-3xl">
            <FAQAccordion items={treatment.faqs} />
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO + CTA FINAL */}
      <section className="container-page py-16 text-center sm:py-24">
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          {treatment.name} na {clinic.neighborhood}, {clinic.city}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-[15px] text-ink-soft">{clinic.addressFull}</p>
        <div className="mt-6 flex justify-center gap-3">
          <ScheduleCTA location={`treatment_${treatment.slug}_final`}>
            Agendar avaliação
          </ScheduleCTA>
          <WhatsAppCTA location={`treatment_${treatment.slug}_final`}>
            Falar no WhatsApp
          </WhatsAppCTA>
        </div>
      </section>
    </>
  );
}
