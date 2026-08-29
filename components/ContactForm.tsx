"use client";

import { useState } from "react";
import { clinic, treatments } from "@/lib/clinic-data";
import { trackEvent } from "@/lib/analytics";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState(treatments[0]?.shortName ?? "");
  const [consent, setConsent] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !phone || !consent) return;

    trackEvent("submit_form", { location: "contato" });

    const message = `Olá! Meu nome é ${name}.\nWhatsApp: ${phone}\nTenho interesse em: ${interest}.\nGostaria de agendar uma avaliação na ${clinic.name}.`;
    const href = `${clinic.whatsappUrl}?text=${encodeURIComponent(message)}`;
    setSent(true);
    window.open(href, "_blank", "noopener,noreferrer");
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-line bg-white/70 p-8 text-center">
        <p className="font-display text-xl font-semibold text-ink">Quase lá!</p>
        <p className="mt-2 text-[15px] text-ink-soft">
          Abrimos o WhatsApp com sua mensagem pronta. Caso não tenha aberto
          automaticamente, toque no botão abaixo para enviar.
        </p>
        <a
          href={`${clinic.whatsappUrl}?text=${encodeURIComponent(
            `Olá! Meu nome é ${name}. WhatsApp: ${phone}. Tenho interesse em: ${interest}. Gostaria de agendar uma avaliação.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center rounded-full bg-whatsapp px-6 py-3 text-[15px] font-medium text-white"
        >
          Abrir WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-line bg-white/70 p-6 sm:p-8">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-ink">
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-line bg-cream px-4 py-3 text-[15px] text-ink outline-none focus:border-primary"
        />
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-medium text-ink">
          WhatsApp
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="(21) 90000-0000"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-line bg-cream px-4 py-3 text-[15px] text-ink outline-none focus:border-primary"
        />
      </div>

      <div>
        <label htmlFor="interest" className="text-sm font-medium text-ink">
          Tratamento de interesse
        </label>
        <select
          id="interest"
          name="interest"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-line bg-cream px-4 py-3 text-[15px] text-ink outline-none focus:border-primary"
        >
          {treatments.map((t) => (
            <option key={t.slug} value={t.shortName}>
              {t.shortName}
            </option>
          ))}
          <option value="Ainda não sei / quero avaliação geral">
            Ainda não sei / quero avaliação geral
          </option>
        </select>
      </div>

      <div className="flex items-start gap-2.5">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 rounded border-line text-primary focus:ring-primary"
        />
        <label htmlFor="consent" className="text-sm text-ink-soft">
          Autorizo o contato pelo WhatsApp informado e li a{" "}
          <a href="/politica-de-privacidade" className="underline underline-offset-2">
            Política de Privacidade
          </a>
          .
        </label>
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-primary px-6 py-3.5 text-[15px] font-medium text-cream transition-colors hover:bg-primary-light"
      >
        Quero agendar minha avaliação
      </button>
    </form>
  );
}
