const icons = {
  tooth: "M100 20c-22 0-38 16-38 40 0 18 8 30 8 48 0 20-10 28-10 44 0 12 9 20 20 20 10 0 14-8 20-8s10 8 20 8c11 0 20-8 20-20 0-16-10-24-10-44 0-18 8-30 8-48 0-24-16-40-38-40z",
  drop: "M100 24c18 34 46 62 46 92 0 28-21 50-46 50s-46-22-46-50c0-30 28-58 46-92z",
  crown: "M40 90l18-34 22 22 20-30 20 30 22-22 18 34-10 66H50L40 90zm10 82h100v14H50v-14z",
  smile: "M40 70c0 44 27 80 60 80s60-36 60-80M55 60c3-8 9-13 15-13s12 5 15 13M115 60c3-8 9-13 15-13s12 5 15 13",
} as const;

export function PlaceholderMedia({
  label,
  ratio = "aspect-[4/5]",
  tone = "primary",
  rounded = true,
  showLabel = true,
  icon = "tooth",
  className = "",
}: {
  label: string;
  ratio?: string;
  tone?: "primary" | "cream";
  rounded?: boolean;
  showLabel?: boolean;
  icon?: keyof typeof icons;
  className?: string;
}) {
  const toneClasses =
    tone === "primary"
      ? "bg-gradient-to-br from-primary via-primary-light to-primary-dark text-cream/90"
      : "bg-gradient-to-br from-cream-dark to-line text-ink-soft";

  return (
    <div
      className={`relative overflow-hidden ${rounded ? "rounded-2xl" : ""} ${ratio} ${toneClasses} ${className}`}
      role="img"
      aria-label={label}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.14]"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <path
          d={icons[icon]}
          fill={icon === "smile" ? "none" : "currentColor"}
          stroke={icon === "smile" ? "currentColor" : "none"}
          strokeWidth={icon === "smile" ? 8 : 0}
          strokeLinecap="round"
        />
      </svg>
      {showLabel && (
        <div className="absolute inset-0 flex items-end p-4">
          <p className="text-xs font-medium uppercase tracking-wider">{label}</p>
        </div>
      )}
    </div>
  );
}
