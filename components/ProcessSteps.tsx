import { processSteps } from "@/lib/clinic-data";

export function ProcessSteps() {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {processSteps.map((step, index) => (
        <li key={step.title} className="relative rounded-2xl border border-line bg-white/60 p-6">
          <span className="font-display text-3xl font-semibold text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="mt-3 text-[15px] font-semibold text-ink">{step.title}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
