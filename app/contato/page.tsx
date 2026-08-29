import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppCTA, PhoneCTA } from "@/components/CTAButton";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { TrackedExternalLink } from "@/components/TrackedLink";
import { clinic } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: "Contato e Agendamento",
  description: `Agende sua avaliação na Vieira Odontologia, em ${clinic.addressFull}. Atendimento pelo WhatsApp ${clinic.phoneDisplay}.`,
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início", url: "/" },
          { name: "Contato", url: "/contato" },
        ]}
      />

      <section className="container-page py-16 sm:py-24">
        <SectionHeading
          eyebrow="Contato"
          title="Vamos agendar sua avaliação"
          description="Preencha o formulário abaixo ou fale diretamente pelo WhatsApp. Retornamos o quanto antes."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <ContactForm />

          <div className="space-y-8">
            <div className="rounded-2xl border border-line bg-white/60 p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-ink-soft">
                Fale diretamente
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <WhatsAppCTA location="contato_sidebar" className="w-full">
                  Falar no WhatsApp
                </WhatsAppCTA>
                <PhoneCTA location="contato_sidebar" className="justify-center" />
              </div>
              <p className="mt-4 text-sm text-ink-soft">
                Outro telefone: {clinic.altPhoneDisplay}
                <br />
                E-mail:{" "}
                <a href={`mailto:${clinic.contactEmail}`} className="underline underline-offset-2">
                  {clinic.contactEmail}
                </a>
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-white/60 p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-ink-soft">
                Endereço
              </p>
              <p className="mt-3 text-[15px] text-ink-soft">{clinic.addressFull}</p>
              <p className="mt-3 text-sm text-ink-soft">
                <span className="font-medium text-ink">Horário: </span>
                {clinic.openingHours}
              </p>
              <p className="mt-2 text-sm text-ink-soft">
                <span className="font-medium text-ink">Estacionamento: </span>
                {clinic.parking}
              </p>
              <TrackedExternalLink
                href={clinic.googleMapsUrl}
                event="maps_click"
                location="contato_sidebar"
                className="mt-4 inline-block text-sm font-semibold text-primary underline underline-offset-4"
              >
                Ver como chegar no Google Maps
              </TrackedExternalLink>
            </div>

            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe
                title="Mapa — Vieira Odontologia"
                src={`https://www.google.com/maps?q=${encodeURIComponent(clinic.addressFull)}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 260 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
