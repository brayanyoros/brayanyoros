import { ScheduleCTA, WhatsAppCTA } from "@/components/CTAButton";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page flex flex-col items-center py-24 text-center sm:py-32">
      <p className="font-display text-6xl font-semibold text-primary">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
        Página não encontrada
      </h1>
      <p className="mt-3 max-w-md text-[15px] text-ink-soft">
        O conteúdo que você procura pode ter mudado de endereço. Que tal
        conhecer nossos tratamentos ou falar diretamente conosco?
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ScheduleCTA location="404">Agendar avaliação</ScheduleCTA>
        <WhatsAppCTA location="404">Falar no WhatsApp</WhatsAppCTA>
      </div>
      <Link href="/tratamentos" className="mt-6 text-sm font-semibold text-primary underline underline-offset-4">
        Ver todos os tratamentos
      </Link>
    </section>
  );
}
