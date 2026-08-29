import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { ScheduleCTA, WhatsAppCTA } from "@/components/CTAButton";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { teamMembers } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: "Equipe",
  description:
    "Conheça o Dr. Luis Rodrigues Vieira, CRO-RJ 55611, responsável técnico da Vieira Odontologia em Teresópolis.",
  alternates: { canonical: "/equipe" },
};

export default function EquipePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início", url: "/" },
          { name: "Equipe", url: "/equipe" },
        ]}
      />

      <section className="container-page py-16 sm:py-24">
        <SectionHeading
          eyebrow="Equipe"
          title="Conheça quem vai cuidar do seu sorriso"
          description="Competência técnica e proximidade — sem transformar isso em um currículo distante."
        />

        <div className="mt-12 space-y-16">
          {teamMembers.map((member) => (
            <article key={member.name} className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <PlaceholderMedia label={`Foto profissional real — ${member.name}`} ratio="aspect-[4/5]" />
              <div>
                <h2 className="font-display text-3xl font-semibold text-ink">{member.name}</h2>
                <p className="mt-1 text-[15px] font-medium text-primary">
                  {member.role} · {member.cro}
                </p>
                <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">{member.bio}</p>

                <div className="mt-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-ink-soft">
                    Formação
                  </p>
                  <ul className="mt-3 space-y-1.5 text-[15px] text-ink-soft">
                    {member.education.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-ink-soft">
                    Áreas de atuação
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {member.areas.map((area) => (
                      <li
                        key={area}
                        className="rounded-full border border-line bg-white/60 px-3 py-1.5 text-sm text-ink-soft"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ScheduleCTA location="equipe">Agendar avaliação</ScheduleCTA>
                  <WhatsAppCTA location="equipe">Falar no WhatsApp</WhatsAppCTA>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
