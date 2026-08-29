"use client";

import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

export function TrackedExternalLink({
  href,
  event,
  location,
  className,
  children,
}: {
  href: string;
  event: "maps_click" | "click_whatsapp" | "click_phone";
  location: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent(event, { location })}
      className={className}
    >
      {children}
    </a>
  );
}
