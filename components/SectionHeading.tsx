export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  id?: string;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">{description}</p>
      )}
    </div>
  );
}
