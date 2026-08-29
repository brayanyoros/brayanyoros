import { trustBarItems } from "@/lib/clinic-data";

export function TrustBar() {
  return (
    <section aria-label="Diferenciais" className="border-y border-line bg-cream-dark/60">
      <div className="container-page grid grid-cols-1 gap-6 py-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
        {trustBarItems.map((item) => (
          <div key={item.title} className="text-center lg:text-left">
            <p className="text-[15px] font-semibold text-primary">{item.title}</p>
            <p className="mt-1 text-sm text-ink-soft">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
