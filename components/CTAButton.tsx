"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { clinic } from "@/lib/clinic-data";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary: "border border-primary bg-primary text-cream hover:bg-transparent hover:text-primary",
  secondary: "bg-whatsapp text-white hover:brightness-95",
  ghost: "bg-transparent text-primary border border-primary/30 hover:bg-primary/5",
};

export function ScheduleCTA({
  variant = "primary",
  className = "",
  children = "Agendar avaliação",
  location,
}: {
  variant?: Variant;
  className?: string;
  children?: React.ReactNode;
  location: string;
}) {
  return (
    <Link
      href="/contato"
      onClick={() => trackEvent("click_schedule", { location })}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[1.2px] transition-colors duration-300 ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function WhatsAppCTA({
  variant = "secondary",
  className = "",
  children = "Falar no WhatsApp",
  location,
  message,
}: {
  variant?: Variant;
  className?: string;
  children?: React.ReactNode;
  location: string;
  message?: string;
}) {
  const href = `${clinic.whatsappUrl}?text=${encodeURIComponent(
    message ?? clinic.whatsappDefaultMessage
  )}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("click_whatsapp", { location })}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[1.2px] transition-colors duration-300 ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

export function PhoneCTA({
  className = "",
  location,
}: {
  className?: string;
  location: string;
}) {
  return (
    <a
      href={`tel:${clinic.phoneE164}`}
      onClick={() => trackEvent("click_phone", { location })}
      className={`inline-flex items-center gap-2 text-[15px] font-medium text-primary hover:text-primary-light ${className}`}
    >
      {clinic.phoneDisplay}
    </a>
  );
}
