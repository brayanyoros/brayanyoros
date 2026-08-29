export function FAQAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-white/60">
      {items.map((item) => (
        <details key={item.question} className="group p-5 sm:p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-ink marker:content-none">
            {item.question}
            <span
              aria-hidden="true"
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-primary transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
