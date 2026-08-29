"use client";

import { usePathname } from "next/navigation";
import { clinic } from "@/lib/clinic-data";
import { trackEvent } from "@/lib/analytics";

export function WhatsAppFloat() {
  const pathname = usePathname();
  const href = `${clinic.whatsappUrl}?text=${encodeURIComponent(clinic.whatsappDefaultMessage)}`;

  // A Home tem seu próprio botão flutuante de WhatsApp (lateral no
  // desktop, barra fixa no mobile), definido em HomeExperience.tsx.
  if (pathname === "/") return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("click_whatsapp", { location: "floating_button" })}
      aria-label="Falar no WhatsApp com a Vieira Odontologia"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
        <path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.87 1.21 3.07c.15.2 2.09 3.2 5.08 4.48.71.3 1.26.49 1.69.63.71.22 1.35.19 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.34z" />
        <path d="M12.03 2.5c-5.24 0-9.5 4.24-9.5 9.46 0 1.67.44 3.29 1.28 4.72L2.5 21.5l4.94-1.29a9.5 9.5 0 0 0 4.59 1.17h.01c5.24 0 9.5-4.24 9.5-9.46s-4.26-9.42-9.51-9.42zm5.6 15.03a7.9 7.9 0 0 1-5.6 2.31 7.88 7.88 0 0 1-4.02-1.1l-.29-.17-3 .78.8-2.9-.19-.3a7.83 7.83 0 0 1-1.22-4.19c0-4.34 3.55-7.87 7.92-7.87 2.12 0 4.11.82 5.6 2.31a7.83 7.83 0 0 1 2.32 5.57c0 4.34-3.55 7.87-7.92 7.87z" />
      </svg>
    </a>
  );
}
