"use client";

// Camada fina sobre o gtag do Google Analytics / Google Ads.
// Não faz nada se o GA ainda não estiver configurado (NEXT_PUBLIC_GA_ID vazio),
// então os componentes podem chamar essas funções livremente.

type AnalyticsEvent =
  | "click_whatsapp"
  | "click_phone"
  | "click_schedule"
  | "submit_form"
  | "view_treatment"
  | "maps_click";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: AnalyticsEvent, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", event, params);
}
