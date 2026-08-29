import { clinic } from "@/lib/clinic-data";

export function StarRating({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-2 ${compact ? "text-sm" : "text-base"}`}
      aria-label={`Nota ${clinic.rating.toLocaleString("pt-BR")} de 5, com ${clinic.reviewCount} avaliações no Google`}
    >
      <span className="tracking-tight text-accent" aria-hidden="true">
        ★★★★★
      </span>
      <span className="text-ink-soft">
        {clinic.rating.toLocaleString("pt-BR", { minimumFractionDigits: 1 })} no Google ·{" "}
        {clinic.reviewCount} avaliações
      </span>
    </div>
  );
}
