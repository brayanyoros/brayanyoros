"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ScheduleCTA, WhatsAppCTA } from "@/components/CTAButton";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/clinica", label: "A Clínica" },
  { href: "/tratamentos", label: "Tratamentos" },
  { href: "/equipe", label: "Equipe" },
  { href: "/resultados", label: "Resultados" },
  { href: "/avaliacoes", label: "Avaliações" },
  { href: "/#duvidas", label: "Dúvidas" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // A Home tem cabeçalho próprio (transparente sobre o hero, com
  // transição ao rolar), definido em components/HomeExperience.tsx.
  if (pathname === "/") return null;

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="flex items-baseline gap-2 leading-none">
          <span className="font-display text-xl font-semibold uppercase tracking-[0.08em] text-primary sm:text-2xl">
            Vieira
          </span>
          <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-ink-soft sm:inline">
            Odontologia
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium text-ink-soft transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ScheduleCTA location="header" className="!py-2.5 !px-5 text-sm">
            Agendar avaliação
          </ScheduleCTA>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <WhatsAppCTA location="header_mobile" variant="secondary" className="!px-4 !py-2 text-sm">
            WhatsApp
          </WhatsAppCTA>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-primary"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              {open ? (
                <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M1 4H17M1 9H17M1 14H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Navegação móvel"
          className="border-t border-line/70 bg-cream lg:hidden"
        >
          <ul className="container-page flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-[15px] font-medium text-ink hover:bg-cream-dark"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <ScheduleCTA location="header_mobile_menu" className="w-full">
                Agendar avaliação
              </ScheduleCTA>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
