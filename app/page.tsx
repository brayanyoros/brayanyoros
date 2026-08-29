import type { Metadata } from "next";
import Link from "next/link";
import { ScheduleCTA, WhatsAppCTA } from "@/components/CTAButton";
import { StarRating } from "@/components/StarRating";
import { TrustBar } from "@/components/TrustBar";
import { SectionHeading } from "@/components/SectionHeading";
import { TreatmentCard } from "@/components/TreatmentCard";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FAQSchema } from "@/components/StructuredData";
import { clinic, teamMembers, treatments, objections, testimonials } from "@/lib/clinic-data";
import { TrackedExternalLink } from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: `${clinic.name} | Dentista em Teresópolis - RJ`,
  description:
    "Clareamento dental, restaurações estéticas em resina composta e prótese dentária em Teresópolis, com o Dr. Luis Vieira (CRO-RJ 55611). Avaliação individual e atendimento humanizado.",
  alternates: { canonical: "/" },
};

const homeFaqs = [
  { question: "Como funciona a primeira consulta na Vieira Odontologia?", answer: "A primeira consulta é dedicada a ouvir sua queixa e avaliar sua saúde bucal, sem compromisso de iniciar tratamento no mesmo dia. Ao final, você recebe um plano claro das possibilidades para o seu caso." },
  { question: "Onde fica a clínica?", answer: `A Vieira Odontologia fica na ${clinic.addressFull}.` },
  { question: "Como agendar uma avaliação?", answer: "Você pode agendar pelo WhatsApp, pelo formulário de contato do site ou por telefone." },
  { question: "Quanto custa um tratamento?", answer: "O valor depende da avaliação clínica e das características de cada caso. Fale conosco para mais informações." },
  { question: "Vocês atendem convênio?", answer: clinic.insurancePartners },
];

export default function HomePage() {
  return (
    <>
      <FAQSchema items={homeFaqs} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-page grid gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
              Odontologia estética e reabilitadora em Teresópolis
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-[3.25rem]">
              Um sorriso que se cuida com técnica, tempo e atenção real ao seu caso.
            </h1>
            <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-ink-soft">
              Clareamento, restaurações estéticas em resina composta e reabilitação
              protética conduzidos pelo Dr. Luis Vieira, na Av. Lúcio Meira,
              no coração de Teresópolis — com avaliação individual antes de
              qualquer decisão.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ScheduleCTA location="hero">Agendar minha avaliação</ScheduleCTA>
              <WhatsAppCTA location="hero">Falar pelo WhatsApp</WhatsAppCTA>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
              <StarRating />
              <p className="text-sm text-ink-soft">
                Atendimento na Várzea, Teresópolis - RJ
              </p>
            </div>
          </div>

          <div className="relative">
            <PlaceholderMedia
              label="Foto real do consultório / Dr. Luis Vieira — a inserir"
              ratio="aspect-[4/5]"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* TRATAMENTOS */}
      <section id="tratamentos" className="container-page py-20 sm:py-28">
        <SectionHeading
          eyebrow="Tratamentos"
          title="Como podemos cuidar do seu sorriso?"
          description="Cada tratamento começa com uma avaliação individual — o que você vê aqui são as principais frentes de cuidado conduzidas pelo Dr. Luis Vieira."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment) => (
            <TreatmentCard key={treatment.slug} treatment={treatment} />
          ))}
        </div>
      </section>

      {/* AUTORIDADE DO PROFISSIONAL */}
      <section className="bg-cream-dark/50 py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <PlaceholderMedia
            label="Foto profissional real — Dr. Luis Vieira"
            ratio="aspect-[4/5]"
            tone="cream"
            className="order-2 lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Quem cuida do seu sorriso"
              title="Conheça quem vai cuidar do seu sorriso"
            />
            {teamMembers.map((member) => (
              <div key={member.name} className="mt-6">
                <p className="font-display text-2xl font-semibold text-ink">{member.name}</p>
                <p className="mt-1 text-sm font-medium text-primary">{member.role} · {member.cro}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{member.bio}</p>
                <ul className="mt-5 space-y-1.5 text-sm text-ink-soft">
                  {member.education.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/equipe"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  Conhecer a equipe completa →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA DA CLÍNICA */}
      <section className="container-page py-20 sm:py-28">
        <SectionHeading
          eyebrow="A experiência na clínica"
          title="Odontologia de excelência começa pela experiência."
          description="Um ambiente pensado para reduzir a insegurança de quem visita o dentista — sem parecer um hospital."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <PlaceholderMedia label="Recepção — foto real a inserir" ratio="aspect-square" tone="cream" />
          <PlaceholderMedia label="Consultório — foto real a inserir" ratio="aspect-square" tone="cream" />
          <PlaceholderMedia label="Equipamentos — foto real a inserir" ratio="aspect-square" tone="cream" />
          <PlaceholderMedia label="Ambiente — foto real a inserir" ratio="aspect-square" tone="cream" />
        </div>
        <p className="mt-6 max-w-2xl text-sm text-ink-soft">
          Tecnologias disponíveis no consultório: {clinic.technologies}
        </p>
      </section>

      {/* PROVA SOCIAL */}
      <section className="bg-primary py-20 text-cream sm:py-28">
        <div className="container-page text-center">
          <SectionHeading
            eyebrow="Avaliações"
            title="O que nossos pacientes dizem"
            align="center"
          />
          <div className="mx-auto mt-8 flex max-w-md flex-col items-center gap-3 rounded-2xl bg-cream/10 p-8">
            <p className="font-display text-5xl font-semibold text-accent-light">
              {clinic.rating.toLocaleString("pt-BR", { minimumFractionDigits: 1 })}
            </p>
            <p className="tracking-tight text-accent-light" aria-hidden="true">★★★★★</p>
            <p className="text-sm text-cream/80">
              {clinic.reviewCount} avaliações verificadas no Google
            </p>
            <TrackedExternalLink
              href={clinic.googleMapsUrl}
              event="maps_click"
              location="home_social_proof"
              className="mt-2 text-sm font-semibold text-cream underline underline-offset-4"
            >
              Ver avaliações no Google
            </TrackedExternalLink>
          </div>
          <div className="mx-auto mt-10 grid max-w-3xl gap-4 text-left sm:grid-cols-2">
            {testimonials.slice(0, 2).map((t) => (
              <figure key={t.name} className="rounded-2xl bg-cream/10 p-6">
                <blockquote className="text-[15px] leading-relaxed text-cream/90">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-3 text-sm font-semibold text-cream/80">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
          <Link
            href="/avaliacoes"
            className="mt-6 inline-block text-sm font-semibold text-cream underline underline-offset-4"
          >
            Ver todas as avaliações →
          </Link>
          <div className="mt-8">
            <ScheduleCTA
              location="home_social_proof"
              variant="primary"
              className="!bg-accent !text-ink hover:!bg-accent-light"
            >
              Quero agendar minha avaliação
            </ScheduleCTA>
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="container-page py-20 sm:py-28">
        <SectionHeading
          eyebrow="Como funciona"
          title="Seu tratamento começa com um bom diagnóstico."
          description="Nenhuma decisão é tomada sem que você entenda claramente as opções indicadas para o seu caso."
        />
        <div className="mt-10">
          <ProcessSteps />
        </div>
        <div className="mt-10">
          <ScheduleCTA location="home_process">Agendar avaliação</ScheduleCTA>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="bg-cream-dark/50 py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Localização"
              title={`Dentista na ${clinic.neighborhood}, ${clinic.city} - ${clinic.state}`}
              description={`A Vieira Odontologia atende pacientes da ${clinic.neighborhood} e de toda a região de ${clinic.city}, com foco em clareamento dental, restaurações estéticas em resina composta e reabilitação protética.`}
            />
            <dl className="mt-8 space-y-4 text-sm text-ink-soft">
              <div>
                <dt className="font-semibold text-ink">Endereço</dt>
                <dd>{clinic.addressFull}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Telefone / WhatsApp</dt>
                <dd>{clinic.phoneDisplay}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Horário de atendimento</dt>
                <dd>{clinic.openingHours}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Estacionamento</dt>
                <dd>{clinic.parking}</dd>
              </div>
            </dl>
            <TrackedExternalLink
              href={clinic.googleMapsUrl}
              event="maps_click"
              location="home_local_seo"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
            >
              Ver como chegar no Google Maps →
            </TrackedExternalLink>
          </div>
          <div className="overflow-hidden rounded-2xl border border-line">
            <iframe
              title="Mapa — Vieira Odontologia, Av. Lúcio Meira, 100, Teresópolis - RJ"
              src={`https://www.google.com/maps?q=${encodeURIComponent(clinic.addressFull)}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 340 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* OBJEÇÕES / FAQ */}
      <section id="duvidas" className="container-page py-20 sm:py-28">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="Sabemos que escolher um dentista exige confiança."
          description="Reunimos aqui as perguntas mais comuns de quem está conhecendo a Vieira Odontologia."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <FAQAccordion items={objections.slice(0, 5)} />
          <FAQAccordion items={[...objections.slice(5), ...homeFaqs.slice(0, 2)]} />
        </div>
        <div className="mt-10 text-center">
          <WhatsAppCTA location="home_faq">Ainda com dúvidas? Fale no WhatsApp</WhatsAppCTA>
        </div>
      </section>
    </>
  );
}
