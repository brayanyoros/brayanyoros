"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { Reveal } from "@/components/Reveal";
import { trackEvent } from "@/lib/analytics";
import { clinic, treatments, testimonials } from "@/lib/clinic-data";
import { resultCases } from "@/lib/results-data";
import { assetPath } from "@/lib/site";

const navLinks = [
  { href: "#experiencia", label: "A Clínica" },
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#dr-luis", label: "Dr. Luis Vieira" },
  { href: "#casos", label: "Casos" },
  { href: "#contato-final", label: "Contato" },
];

const treatmentLinks: { n: string; name: string; slug: string; panelPhoto?: string }[] = [
  // Cada item aponta para sua própria página de tratamento e carrega a
  // foto que o representa.
  { n: "01", name: "Clareamento Dental", slug: "clareamento-dental-teresopolis", panelPhoto: "/images/clareamento-depois-painel.png" },
  { n: "02", name: "Fechamento de Diastemas", slug: "fechamento-diastema-teresopolis", panelPhoto: "/images/diastema-depois-painel.png" },
  { n: "03", name: "Troca de Restaurações", slug: "troca-restauracoes-antigas-teresopolis", panelPhoto: "/images/carie-secundaria-depois.png" },
  { n: "04", name: "Restaurações Estéticas", slug: "restauracao-estetica-resina-teresopolis", panelPhoto: "/images/restauracao-incisivo-depois-painel.png" },
  { n: "05", name: "Prótese Dentária", slug: "protese-dentaria-teresopolis" },
];

const caseMeta: Record<string, { title: string; subtitle: string }> = {
  "fechamento-diastema-resina-2-anos": { title: "FECHAMENTO DE DIASTEMA", subtitle: "Resina composta" },
  "clareamento-troca-restauracao-incisivo-lateral": { title: "CLAREAMENTO DENTAL", subtitle: "Clareamento + troca de restauração" },
  "restauracao-estetica-incisivo-central": { title: "RESTAURAÇÃO ESTÉTICA", subtitle: "Resina composta" },
  "restauracoes-diretas-carie-secundaria-molares": { title: "TROCA POR CÁRIE SECUNDÁRIA", subtitle: "Resina composta" },
};

const faqs = [
  { q: "Como funciona a primeira avaliação?", a: "Conversamos sobre sua queixa e expectativas, realizamos um exame clínico completo e explicamos as possibilidades de tratamento para o seu caso." },
  { q: "O tratamento com resina é indicado para mim?", a: "A resina composta é indicada para diastemas, fraturas, desgastes e pequenas correções estéticas. A indicação é confirmada durante a avaliação." },
  { q: "Como funciona o clareamento?", a: "O clareamento pode ser realizado em consultório, de forma conjugada (consultório + caseiro), ou apenas com moldeiras — a técnica é definida de acordo com o seu caso." },
  { q: "Quanto tempo dura o tratamento?", a: "Cada plano de tratamento tem um tempo próprio, definido na etapa de planejamento de acordo com a complexidade do caso." },
  { q: "Como posso agendar?", a: "Você pode agendar sua avaliação diretamente pelo WhatsApp ou pelo formulário de contato." },
];

export function HomeExperience() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTreatment, setActiveTreatment] = useState(0);
  const [activeCase, setActiveCase] = useState(0);
  const [activeReview, setActiveReview] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const headerTextColor = scrolled ? "#171717" : "#F7F5F0";
  const whatsappHref = `${clinic.whatsappUrl}?text=${encodeURIComponent(clinic.whatsappDefaultMessage)}`;

  const cases = resultCases.map((c) => ({ ...c, meta: caseMeta[c.slug] }));
  const activeCaseData = cases[activeCase];
  const activeReviewData = testimonials[activeReview];
  const activeTreatmentData = treatments.find((t) => t.slug === treatmentLinks[activeTreatment].slug);
  const activeTreatmentIcon = activeTreatmentData?.icon ?? "tooth";
  const activeTreatmentPhoto = treatmentLinks[activeTreatment].panelPhoto;

  return (
    <div style={{ fontFamily: "var(--font-sans)" }} className="relative overflow-x-hidden bg-cream text-ink">
      {/* HEADER */}
      <header
        style={{
          background: scrolled ? "rgba(247,245,240,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid #DDD9D1" : "1px solid transparent",
          height: scrolled ? 76 : undefined,
        }}
        className="fixed inset-x-0 top-0 z-[100] flex h-[84px] items-center justify-between px-6 transition-all duration-[400ms] lg:h-24 lg:px-14"
      >
        <Link href="/" className="flex items-center">
          <Image
            src={assetPath(scrolled ? "/images/logo-vieira-preta.png" : "/images/logo-vieira-branca.png")}
            alt="Vieira Odontologia"
            width={220}
            height={112}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{ color: headerTextColor }}
              className="text-[13px] tracking-[0.4px] transition-opacity duration-300 hover:opacity-55"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("click_whatsapp", { location: "home_header" })}
            style={{ color: headerTextColor, borderColor: headerTextColor }}
            className="border px-[22px] py-[13px] text-[12px] font-semibold tracking-[1.2px] transition-all duration-300 hover:bg-ink hover:text-cream"
          >
            FALAR NO WHATSAPP
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="flex flex-col gap-[5px] border-none bg-transparent p-2 lg:hidden"
        >
          <span style={{ background: headerTextColor }} className="h-px w-[22px]" />
          <span style={{ background: headerTextColor }} className="h-px w-[22px]" />
        </button>
      </header>

      {/* MOBILE MENU */}
      <div
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transform: menuOpen ? "translateY(0)" : "translateY(-16px)",
        }}
        className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-7 bg-primary transition-all duration-[350ms]"
      >
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          aria-label="Fechar menu"
          className="absolute right-6 top-7 border-none bg-transparent font-display text-[28px] text-cream"
        >
          ×
        </button>
        {navLinks.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="font-display text-[32px] text-cream"
          >
            {item.label}
          </a>
        ))}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            trackEvent("click_whatsapp", { location: "home_mobile_menu" });
            setMenuOpen(false);
          }}
          className="mt-4 bg-cream px-7 py-[15px] text-[12px] font-semibold tracking-[1.2px] text-primary"
        >
          FALAR NO WHATSAPP
        </a>
      </div>

      {/* HERO */}
      <section className="relative h-[92svh] overflow-hidden bg-primary lg:h-screen">
        <div className="absolute inset-y-0 right-0 w-full overflow-hidden lg:w-[60%]">
          <Image
            src={assetPath("/images/dr-luis.webp")}
            alt="Dr. Luis Vieira"
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover animate-[vaSlowZoom_24s_ease-in-out_infinite_alternate]"
            style={{ objectPosition: "center 15%" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg,rgba(20,20,15,0.97) 0%,rgba(20,20,15,0.55) 42%,rgba(20,20,15,0) 68%)",
            }}
          />
        </div>
        <div className="relative z-[2] flex h-full max-w-[600px] flex-col justify-center px-6 lg:px-20">
          <div className="text-xs tracking-[3px] text-cream/75">ODONTOLOGIA ESTÉTICA &middot; TERESÓPOLIS</div>
          <h1 className="mt-5 font-display text-[clamp(44px,7.5vw,92px)] leading-[1.05] text-cream">
            Naturalidade está
            <br />
            nos detalhes.
          </h1>
          <p className="mt-7 max-w-[460px] text-[clamp(15px,1.6vw,18px)] leading-[1.65] text-cream/80">
            Odontologia estética e reabilitação do sorriso com planejamento, precisão e resultados que preservam a
            naturalidade.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-7">
            <Link
              href="/contato"
              onClick={() => trackEvent("click_schedule", { location: "home_hero" })}
              className="border border-cream/45 px-[26px] py-[17px] text-[13px] font-semibold tracking-[1.3px] text-cream transition-all duration-[350ms] hover:border-cream hover:bg-cream hover:text-primary"
            >
              AGENDAR UMA AVALIAÇÃO &rarr;
            </Link>
            <a
              href="#dr-luis"
              className="border-b border-cream/35 pb-[5px] text-[13px] tracking-[1px] text-cream/85 transition-opacity duration-300 hover:opacity-60"
            >
              CONHECER O DR. LUIS
            </a>
          </div>
        </div>
        <div className="absolute bottom-24 left-6 z-[2] text-xs tracking-[2px] text-cream/55 lg:bottom-10 lg:left-20">
          TERESÓPOLIS &mdash; RJ
        </div>
        <div className="absolute bottom-10 right-20 z-[2] hidden flex-col items-end lg:flex">
          <span className="text-[10px] tracking-[2px] text-cream/55">SCROLL</span>
          <span className="mt-2.5 block h-8 w-px overflow-hidden bg-cream/40">
            <span className="block h-full w-px animate-[vaScrollLine_2.4s_ease-in-out_infinite] bg-cream" />
          </span>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="flex flex-col gap-8 bg-cream px-6 py-[88px] lg:flex-row lg:gap-20 lg:px-20 lg:py-40">
        <div className="lg:w-[42%]">
          <Reveal>
            <div className="text-xs tracking-[3px] text-ink-soft">NOSSA FILOSOFIA</div>
            <h2 className="mt-5 font-display text-[clamp(30px,4.5vw,50px)] leading-[1.15]">
              Um sorriso bonito não precisa parecer artificial.
            </h2>
          </Reveal>
        </div>
        <div className="flex items-center lg:w-[58%]">
          <p className="max-w-[480px] text-[19px] leading-[1.75] text-ink-soft">
            Cada tratamento parte de um olhar individual para proporção, harmonia, função e naturalidade.
          </p>
        </div>
      </section>

      {/* TRATAMENTOS */}
      <section id="tratamentos" className="bg-cream-dark px-6 py-[88px] lg:px-20 lg:py-40">
        <Reveal className="max-w-[640px]">
          <div className="text-xs tracking-[3px] text-ink-soft">TRATAMENTOS</div>
          <h2 className="mt-5 font-display text-[clamp(30px,4.5vw,50px)] leading-[1.15]">
            Cuidado pensado para cada sorriso.
          </h2>
        </Reveal>
        <div className="mt-16 flex flex-col gap-0 lg:flex-row lg:gap-16">
          <div className="sticky top-[120px] hidden h-[540px] w-[44%] overflow-hidden lg:block">
            {activeTreatmentPhoto ? (
              <Image
                src={assetPath(activeTreatmentPhoto)}
                alt={`Foto real — ${treatmentLinks[activeTreatment].name}`}
                fill
                sizes="44vw"
                className="object-cover"
              />
            ) : (
              <PlaceholderMedia
                label={`Foto real — ${treatmentLinks[activeTreatment].name}`}
                tone="cream"
                rounded={false}
                ratio="h-full w-full"
                icon={activeTreatmentIcon}
              />
            )}
          </div>
          <div className="relative mb-6 block h-[260px] w-full overflow-hidden lg:hidden">
            {activeTreatmentPhoto ? (
              <Image
                src={assetPath(activeTreatmentPhoto)}
                alt={`Foto real — ${treatmentLinks[activeTreatment].name}`}
                fill
                sizes="100vw"
                className="object-cover"
              />
            ) : (
              <PlaceholderMedia
                label={`Foto real — ${treatmentLinks[activeTreatment].name}`}
                tone="cream"
                rounded={false}
                ratio="h-full w-full"
                icon={activeTreatmentIcon}
              />
            )}
          </div>
          <div className="w-full lg:w-[56%]">
            {treatmentLinks.map((t, i) => (
              <Link
                key={`${t.n}-${t.name}`}
                href={`/tratamentos/${t.slug}`}
                onMouseEnter={() => setActiveTreatment(i)}
                onClick={() => trackEvent("view_treatment", { location: "home_treatments", treatment: t.slug })}
                className="flex cursor-pointer items-center justify-between border-b border-line py-[26px] transition-[padding] duration-300"
              >
                <div className="flex items-baseline gap-6">
                  <span
                    style={{ color: i === activeTreatment ? "#171717" : "#66635E" }}
                    className="text-[13px] font-medium transition-colors duration-300"
                  >
                    {t.n}
                  </span>
                  <span
                    style={{ color: i === activeTreatment ? "#171717" : "#66635E" }}
                    className="font-display text-[clamp(21px,2.6vw,29px)] transition-colors duration-300"
                  >
                    {t.name}
                  </span>
                </div>
                <span
                  style={{
                    opacity: i === activeTreatment ? 1 : 0.25,
                    transform: `translateX(${i === activeTreatment ? "6px" : "0px"})`,
                  }}
                  className="text-lg text-ink transition-all duration-300"
                >
                  &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DESTAQUE */}
      <section className="relative h-[520px] overflow-hidden lg:h-[640px]">
        {/* Dois recortes do mesmo sorriso: o navegador baixa só o que a
            largura da tela pede, então nenhum enquadramento é cortado. */}
        <div className="absolute inset-0 lg:hidden">
          <Image
            src={assetPath("/images/banner-sorriso-mobile.png")}
            alt="Sorriso após tratamento estético"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 hidden lg:block">
          <Image
            src={assetPath("/images/banner-sorriso-desktop.png")}
            alt="Sorriso após tratamento estético"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg,rgba(20,20,15,0.15) 0%,rgba(20,20,15,0.15) 45%,rgba(20,20,15,0.92) 100%)",
          }}
        />
        <div className="absolute inset-x-6 bottom-12 z-[2] lg:inset-x-20 lg:bottom-16">
          <div className="text-xs tracking-[3px] text-cream/75">ODONTOLOGIA ESTÉTICA</div>
          <h2 className="mt-4 max-w-[640px] font-display text-[clamp(30px,5vw,54px)] leading-[1.12] text-cream">
            Transformar sem apagar sua identidade.
          </h2>
          <p className="mt-5 max-w-[460px] text-base leading-[1.7] text-cream/80">
            Cada intervenção é planejada para valorizar a proporção natural do seu sorriso, sem torná-lo artificial.
          </p>
          <a
            href="#tratamentos"
            className="mt-7 inline-block border-b border-cream/40 pb-[5px] text-[13px] tracking-[1px] text-cream transition-opacity duration-300 hover:opacity-60"
          >
            CONHECER TRATAMENTOS ESTÉTICOS &rarr;
          </a>
        </div>
      </section>

      {/* DR. LUIS */}
      <section id="dr-luis" className="flex flex-col items-start gap-10 bg-cream px-6 py-[88px] lg:flex-row lg:gap-24 lg:px-20 lg:py-40">
        <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden lg:w-[40%]">
          <Image
            src={assetPath("/images/dr-luis.webp")}
            alt="Dr. Luis Vieira"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
            style={{ objectPosition: "center 12%" }}
          />
        </div>
        <div className="w-full lg:w-[60%]">
          <Reveal>
            <div className="text-xs tracking-[3px] text-ink-soft">CIRURGIÃO-DENTISTA</div>
            <h2 className="mt-4 font-display text-[clamp(32px,4.5vw,52px)] leading-[1.1]">Dr. Luis Vieira</h2>
            <div className="mt-2.5 text-[13px] tracking-[1px] text-ink-soft">{clinic.dentist.cro}</div>
            <div className="my-8 h-px bg-line" />
            <div className="flex flex-col gap-3.5 text-[15px] leading-[1.6] text-ink-soft">
              <div>Técnico em Prótese Dentária</div>
              <div>Graduação em Odontologia &mdash; UNIFESO</div>
              <div>Atualização em Dentística Restauradora &mdash; UNIFESO</div>
              <div>Especialização em Prótese Dentária em andamento &mdash; São Leopoldo Mandic</div>
            </div>
            <p className="mt-9 max-w-[440px] font-display text-[clamp(20px,2.4vw,25px)] italic leading-[1.5]">
              &ldquo;Precisão técnica para alcançar resultados naturais.&rdquo;
            </p>
            <Link
              href="/equipe"
              className="mt-7 inline-block border-b border-line pb-[5px] text-[13px] tracking-[1px] text-ink transition-opacity duration-300 hover:opacity-55"
            >
              CONHEÇA MINHA TRAJETÓRIA &rarr;
            </Link>
          </Reveal>
        </div>
      </section>

      {/* HISTÓRIA / 50+ */}
      <section className="flex flex-col items-center gap-12 bg-primary px-6 py-[88px] lg:flex-row lg:gap-24 lg:px-20 lg:py-40">
        <div className="w-full shrink-0 lg:w-[38%]">
          <div className="font-display text-[clamp(90px,13vw,160px)] leading-[0.9] text-cream">50+</div>
          <div className="mt-3 max-w-[260px] text-xs tracking-[1.5px] text-cream/55">
            ANOS DE HISTÓRIA FAMILIAR NA ODONTOLOGIA EM TERESÓPOLIS
          </div>
        </div>
        <Reveal className="w-full lg:w-[62%]">
          <div className="text-xs tracking-[3px] text-cream/60">NOSSA HISTÓRIA</div>
          <h2 className="mt-4 font-display text-[clamp(28px,4vw,44px)] leading-[1.18] text-cream">
            Uma história construída entre gerações.
          </h2>
          <p className="mt-5 max-w-[480px] text-base leading-[1.75] text-cream/70">
            Ao longo de mais de cinco décadas, a odontologia em Teresópolis passou por gerações da mesma família —
            unindo tradição e evolução constante da técnica.
          </p>
        </Reveal>
      </section>

      {/* CASOS */}
      <section id="casos" className="bg-cream px-6 py-[88px] lg:px-20 lg:py-40">
        <Reveal>
          <div className="text-xs tracking-[3px] text-ink-soft">CASOS</div>
          <h2 className="mt-5 font-display text-[clamp(30px,4.5vw,50px)] leading-[1.15]">
            Resultados que preservam naturalidade.
          </h2>
          <p className="mt-4 text-sm italic text-ink-soft">
            Casos clínicos reais, autorizados pelos pacientes. Resultados variam de acordo com cada caso.
          </p>
        </Reveal>
        <div className="mt-16">
          <div className="flex flex-col gap-4 bg-cream-dark p-4 lg:h-[480px] lg:flex-row lg:p-6">
            <div className="relative flex h-[300px] flex-1 items-center justify-center overflow-hidden lg:h-full">
              {activeCaseData.images ? (
                <Image
                  src={assetPath(activeCaseData.images.before)}
                  alt={`Antes — ${activeCaseData.title}`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <PlaceholderMedia label="Foto real — antes (a inserir)" tone="cream" rounded={false} ratio="h-full w-full" showLabel={false} />
              )}
              <span className="absolute bottom-3.5 left-3.5 bg-primary/65 px-2.5 py-1 text-[10px] tracking-[1px] text-cream">
                ANTES
              </span>
            </div>
            <div className="relative flex h-[300px] flex-1 items-center justify-center overflow-hidden lg:h-full">
              {activeCaseData.images ? (
                <Image
                  src={assetPath(activeCaseData.images.after)}
                  alt={`Depois — ${activeCaseData.title}`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <PlaceholderMedia label="Foto real — depois (a inserir)" tone="cream" rounded={false} ratio="h-full w-full" showLabel={false} />
              )}
              <span className="absolute bottom-3.5 left-3.5 bg-primary/65 px-2.5 py-1 text-[10px] tracking-[1px] text-cream">
                DEPOIS
              </span>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between gap-4">
            <div>
              <div className="text-sm tracking-[0.5px]">{activeCaseData.meta.title}</div>
              <div className="mt-1 text-[13px] text-ink-soft">{activeCaseData.meta.subtitle}</div>
            </div>
            <div className="flex items-center gap-5">
              <button
                type="button"
                onClick={() => setActiveCase((i) => (i - 1 + cases.length) % cases.length)}
                aria-label="Caso anterior"
                className="h-10 w-10 border border-line text-[15px] text-ink transition-all duration-300 hover:bg-ink hover:text-cream hover:border-ink"
              >
                &larr;
              </button>
              <span className="text-xs tracking-[2px] text-ink-soft">
                {String(activeCase + 1).padStart(2, "0")} / {String(cases.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={() => setActiveCase((i) => (i + 1) % cases.length)}
                aria-label="Próximo caso"
                className="h-10 w-10 border border-line text-[15px] text-ink transition-all duration-300 hover:bg-ink hover:text-cream hover:border-ink"
              >
                &rarr;
              </button>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-soft">
            {activeCaseData.paragraphs[0]}
          </p>
          <Link href="/resultados" className="mt-3 inline-block text-sm font-semibold text-ink underline underline-offset-4">
            Ver todos os casos →
          </Link>
        </div>
      </section>

      {/* EXPERIÊNCIA / A CLÍNICA */}
      <section id="experiencia" className="bg-cream-dark px-6 py-[88px] lg:px-20 lg:py-40">
        <Reveal className="max-w-[600px]">
          <div className="text-xs tracking-[3px] text-ink-soft">A CLÍNICA</div>
          <h2 className="mt-5 font-display text-[clamp(30px,4.5vw,50px)] leading-[1.15]">
            Um espaço pensado para você se sentir bem.
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="relative aspect-[9/16] overflow-hidden">
            <Image src={assetPath("/images/consultorio-1.jpg")} alt="Consultório" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
          </div>
          <div className="relative aspect-[9/16] overflow-hidden">
            <Image src={assetPath("/images/clinica-recepcao-1.jpg")} alt="Recepção" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
          </div>
          <div className="relative aspect-[9/16] overflow-hidden">
            <Image src={assetPath("/images/clinica-recepcao-2.jpg")} alt="Recepção do edifício" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
          </div>
        </div>
        <Link href="/clinica" className="mt-8 inline-block text-sm font-semibold text-ink underline underline-offset-4">
          Conhecer a clínica →
        </Link>
      </section>

      {/* DEPOIMENTOS */}
      <section className="bg-primary px-6 py-[88px] text-center lg:px-20 lg:py-40">
        <div className="text-xs tracking-[3px] text-cream/60">EXPERIÊNCIAS</div>
        <div className="mt-8 font-display text-[80px] leading-[0.5] text-cream/15">&ldquo;</div>
        <div className="mt-2 text-sm tracking-[2px] text-accent">★★★★★</div>
        <p className="mx-auto mt-4 max-w-[720px] font-display text-[clamp(20px,2.8vw,30px)] italic leading-[1.5] text-cream">
          {activeReviewData.text}
        </p>
        <div className="mt-6 text-[13px] tracking-[1px] text-cream/70">{activeReviewData.name} — Google</div>
        <div className="mt-9 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => setActiveReview((i) => (i - 1 + testimonials.length) % testimonials.length)}
            aria-label="Avaliação anterior"
            className="h-10 w-10 border border-cream/30 text-[15px] text-cream transition-all duration-300 hover:bg-cream hover:text-primary hover:border-cream"
          >
            &larr;
          </button>
          <span className="text-xs tracking-[2px] text-cream/50">
            {String(activeReview + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={() => setActiveReview((i) => (i + 1) % testimonials.length)}
            aria-label="Próxima avaliação"
            className="h-10 w-10 border border-cream/30 text-[15px] text-cream transition-all duration-300 hover:bg-cream hover:text-primary hover:border-cream"
          >
            &rarr;
          </button>
        </div>
        <Link href="/avaliacoes" className="mt-8 inline-block text-sm text-cream/70 underline underline-offset-4">
          Ver todas as avaliações →
        </Link>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="bg-cream px-6 py-[88px] lg:px-20 lg:py-40">
        <h2 className="mx-auto mb-16 max-w-[680px] text-center font-display text-[clamp(28px,4vw,44px)] leading-[1.2]">
          Seu tratamento começa antes do procedimento.
        </h2>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-8">
          {[
            { n: "01", title: "CONVERSA", text: "Entendemos sua queixa, expectativas e histórico." },
            { n: "02", title: "AVALIAÇÃO", text: "Exame clínico completo e registro fotográfico do sorriso." },
            { n: "03", title: "PLANEJAMENTO", text: "Definição da técnica e das etapas do tratamento." },
            { n: "04", title: "TRATAMENTO", text: "Execução com acompanhamento em cada etapa." },
          ].map((step) => (
            <div key={step.n} className="border-t border-line pt-7">
              <div className="font-display text-3xl text-ink-soft">{step.n}</div>
              <div className="mt-4 text-[13px] font-semibold tracking-[1.5px]">{step.title}</div>
              <div className="mt-2.5 max-w-[220px] text-sm leading-[1.65] text-ink-soft">{step.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-[820px] bg-cream-dark px-6 py-[88px] lg:px-20 lg:py-40">
        <div className="mb-10 text-xs tracking-[3px] text-ink-soft">PERGUNTAS FREQUENTES</div>
        {faqs.map((f, i) => {
          const open = openFaq === i;
          return (
            <div key={f.q} className="border-b border-line">
              <button
                type="button"
                onClick={() => setOpenFaq(open ? null : i)}
                className="flex w-full items-center justify-between gap-6 border-none bg-transparent py-[26px] text-left"
              >
                <span className="font-display text-[clamp(18px,2.2vw,22px)]">{f.q}</span>
                <span
                  style={{ transform: `rotate(${open ? 45 : 0}deg)` }}
                  className="relative h-[18px] w-[18px] shrink-0 transition-transform duration-[350ms]"
                >
                  <span className="absolute left-0 top-1/2 h-px w-[18px] -translate-y-1/2 bg-ink" />
                  <span className="absolute left-1/2 top-0 h-[18px] w-px -translate-x-1/2 bg-ink" />
                </span>
              </button>
              <div
                style={{ maxHeight: open ? 480 : 0, opacity: open ? 1 : 0 }}
                className="overflow-hidden transition-all duration-500"
              >
                <p className="max-w-[600px] pb-7 text-[15px] leading-[1.7] text-ink-soft">{f.a}</p>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA FINAL */}
      <section id="contato-final" className="bg-primary px-6 py-[88px] text-center lg:px-20 lg:py-40">
        <h2 className="mx-auto max-w-[800px] font-display text-[clamp(34px,6vw,68px)] leading-[1.1] text-cream">
          Seu sorriso merece um olhar individual.
        </h2>
        <p className="mx-auto mt-6 max-w-[520px] text-base leading-[1.7] text-cream/75">
          Agende uma avaliação e converse com o Dr. Luis Vieira sobre as possibilidades para o seu caso.
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("click_whatsapp", { location: "home_cta_final" })}
          className="mt-10 inline-block border border-cream/45 px-7 py-[17px] text-[13px] font-semibold tracking-[1.3px] text-cream transition-all duration-[350ms] hover:border-cream hover:bg-cream hover:text-primary"
        >
          AGENDAR PELO WHATSAPP &rarr;
        </a>
        <div className="mt-7 text-xs tracking-[2px] text-cream/50">TERESÓPOLIS &mdash; RJ</div>
      </section>

      {/* FOOTER */}
      <footer className="bg-cream px-6 pb-8 pt-16 lg:px-20 lg:pb-10 lg:pt-24">
        <Image src={assetPath("/images/logo-vieira-preta.png")} alt="Vieira Odontologia" width={220} height={112} className="h-10 w-auto" />
        <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-10">
          <div>
            <div className="mb-4 text-[11px] tracking-[1.5px] text-ink-soft">NAVEGAÇÃO</div>
            <div className="flex flex-col gap-2.5 text-sm">
              {navLinks.map((item) => (
                <a key={item.href} href={item.href} className="transition-opacity hover:opacity-60">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-4 text-[11px] tracking-[1.5px] text-ink-soft">TRATAMENTOS</div>
            <div className="flex flex-col gap-2.5 text-sm">
              {treatments.map((t) => (
                <Link key={t.slug} href={`/tratamentos/${t.slug}`} className="transition-opacity hover:opacity-60">
                  {t.shortName}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-4 text-[11px] tracking-[1.5px] text-ink-soft">CONTATO</div>
            <div className="flex flex-col gap-2.5 text-sm">
              <div>Teresópolis &mdash; RJ</div>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-60">
                WhatsApp &mdash; {clinic.phoneDisplay}
              </a>
              <div>{clinic.addressFull}</div>
              <div>{clinic.dentist.cro}</div>
            </div>
          </div>
          <div>
            <div className="mb-4 text-[11px] tracking-[1.5px] text-ink-soft">SOCIAL</div>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href={clinic.dentist.instagramUrl} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-60">
                Instagram &mdash; @{clinic.dentist.instagramHandle}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 h-px bg-line" />
        <div className="flex flex-col gap-3 pt-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} {clinic.name}</span>
          <Link href="/politica-de-privacidade" className="transition-opacity hover:opacity-60">
            Política de Privacidade
          </Link>
        </div>
      </footer>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("click_whatsapp", { location: "home_floating_desktop" })}
        title="Falar no WhatsApp"
        className="fixed right-6 top-1/2 z-[90] hidden h-[52px] w-[52px] -translate-y-1/2 items-center justify-center bg-primary text-cream transition-[width] duration-300 lg:flex"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F7F5F0" strokeWidth="1.4">
          <path d="M4 20l1.4-4.2A8 8 0 1112 20.5a8 8 0 01-6.8-3.8z" />
          <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5" strokeLinecap="round" />
        </svg>
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("click_whatsapp", { location: "home_floating_mobile" })}
        className="fixed inset-x-0 bottom-0 z-[90] flex items-center justify-center bg-primary px-6 py-[18px] text-[13px] font-semibold tracking-[1.5px] text-cream lg:hidden"
        style={{ paddingBottom: "calc(18px + env(safe-area-inset-bottom))" }}
      >
        AGENDAR AVALIAÇÃO
      </a>
    </div>
  );
}
