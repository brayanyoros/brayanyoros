import Link from "next/link";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import type { Treatment } from "@/lib/clinic-data";

export function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white/60 transition-shadow hover:shadow-lg hover:shadow-primary/5">
      <PlaceholderMedia
        label={`Foto real — ${treatment.shortName}`}
        ratio="aspect-[16/10]"
        tone="cream"
      />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-ink">{treatment.name}</h3>
        <p className="mt-2 text-sm text-ink-soft">
          <span className="font-medium text-primary">Resolve:</span> {treatment.problem}
        </p>
        <p className="mt-2 flex-1 text-sm text-ink-soft">{treatment.benefit}</p>
        <Link
          href={`/tratamentos/${treatment.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-primary-light"
        >
          Conhecer tratamento
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
        </Link>
      </div>
    </article>
  );
}
