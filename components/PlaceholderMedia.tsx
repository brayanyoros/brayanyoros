export function PlaceholderMedia({
  label,
  ratio = "aspect-[4/5]",
  tone = "primary",
  className = "",
}: {
  label: string;
  ratio?: string;
  tone?: "primary" | "cream";
  className?: string;
}) {
  const toneClasses =
    tone === "primary"
      ? "bg-gradient-to-br from-primary via-primary-light to-primary-dark text-cream/90"
      : "bg-gradient-to-br from-cream-dark to-line text-ink-soft";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${ratio} ${toneClasses} ${className}`}
      role="img"
      aria-label={label}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.12]"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <path
          d="M100 20c-22 0-38 16-38 40 0 18 8 30 8 48 0 20-10 28-10 44 0 12 9 20 20 20 10 0 14-8 20-8s10 8 20 8c11 0 20-8 20-20 0-16-10-24-10-44 0-18 8-30 8-48 0-24-16-40-38-40z"
          fill="currentColor"
        />
      </svg>
      <div className="absolute inset-0 flex items-end p-4">
        <p className="text-xs font-medium uppercase tracking-wider">{label}</p>
      </div>
    </div>
  );
}
