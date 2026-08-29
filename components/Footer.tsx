import Link from "next/link";
import { clinic, treatments } from "@/lib/clinic-data";
import { ScheduleCTA } from "@/components/CTAButton";
import { TrackedExternalLink } from "@/components/TrackedLink";

export function Footer() {
  return (
    <footer className="border-t border-line bg-primary-dark text-cream/90">
      <div className="container-page py-16">
        <div className="rounded-3xl bg-primary/60 px-6 py-10 text-center sm:px-12">
          <h2 className="font-display text-2xl font-semibold text-cream sm:text-3xl">
            Pronto para dar o próximo passo?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] text-cream/80">
            Agende sua avaliação com o {clinic.dentist.firstName} Vieira e entenda,
            com calma, as possibilidades para o seu sorriso.
          </p>
          <div className="mt-6 flex justify-center">
            <ScheduleCTA location="footer_banner" variant="primary" className="!bg-accent !text-ink hover:!bg-accent-light">
              Agendar avaliação
            </ScheduleCTA>
          </div>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-semibold text-cream">{clinic.name}</p>
            <p className="mt-2 text-sm text-cream/70">
              {clinic.dentist.fullName}
              <br />
              {clinic.dentist.cro}
            </p>
            <p className="mt-4 text-sm text-cream/70">{clinic.addressFull}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cream/60">Contato</p>
            <ul className="mt-3 space-y-2 text-sm text-cream/80">
              <li>
                <a href={`tel:${clinic.phoneE164}`} className="hover:text-cream">
                  {clinic.phoneDisplay}
                </a>
              </li>
              <li>
                <TrackedExternalLink
                  href={`${clinic.whatsappUrl}?text=${encodeURIComponent(clinic.whatsappDefaultMessage)}`}
                  event="click_whatsapp"
                  location="footer"
                  className="hover:text-cream"
                >
                  WhatsApp
                </TrackedExternalLink>
              </li>
              <li>
                <a
                  href={clinic.dentist.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream"
                >
                  Instagram @{clinic.dentist.instagramHandle}
                </a>
              </li>
              <li>
                <TrackedExternalLink
                  href={clinic.googleMapsUrl}
                  event="maps_click"
                  location="footer"
                  className="hover:text-cream"
                >
                  Ver no Google Maps
                </TrackedExternalLink>
              </li>
            </ul>
            <p className="mt-4 text-sm text-cream/70">{clinic.openingHours}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cream/60">Tratamentos</p>
            <ul className="mt-3 space-y-2 text-sm text-cream/80">
              {treatments.map((t) => (
                <li key={t.slug}>
                  <Link href={`/tratamentos/${t.slug}`} className="hover:text-cream">
                    {t.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cream/60">Institucional</p>
            <ul className="mt-3 space-y-2 text-sm text-cream/80">
              <li>
                <Link href="/clinica" className="hover:text-cream">A Clínica</Link>
              </li>
              <li>
                <Link href="/equipe" className="hover:text-cream">Equipe</Link>
              </li>
              <li>
                <Link href="/resultados" className="hover:text-cream">Resultados</Link>
              </li>
              <li>
                <Link href="/avaliacoes" className="hover:text-cream">Avaliações</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-cream">Blog</Link>
              </li>
              <li>
                <Link href="/politica-de-privacidade" className="hover:text-cream">Política de Privacidade</Link>
              </li>
              <li>
                <Link href="/termos-de-uso" className="hover:text-cream">Termos de Uso</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {clinic.name}. {clinic.dentist.fullName} — {clinic.dentist.cro}.
          </p>
          <p>Site desenvolvido com foco em confiança, clareza e agendamentos.</p>
        </div>
      </div>
    </footer>
  );
}
