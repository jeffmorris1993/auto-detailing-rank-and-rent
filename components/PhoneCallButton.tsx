"use client";

import { usePathname } from "next/navigation";
import { PHONE } from "@/lib/site-config";
import { trackCallButtonClick } from "@/lib/tracking";
import { cn } from "@/lib/utils";

type PhoneCallButtonProps = {
  trackingLocation: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
  showIcon?: boolean;
};

export function PhoneCallButton({
  trackingLocation,
  variant = "primary",
  size = "md",
  className,
  label,
  showIcon = true,
}: PhoneCallButtonProps) {
  const pathname = usePathname() ?? "/";

  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500";
  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-5 py-3",
    lg: "text-lg px-7 py-4",
  };
  const variants = {
    primary: "bg-brand-600 text-white hover:bg-brand-700",
    secondary: "bg-white text-brand-700 border border-brand-200 hover:bg-brand-50",
    ghost: "text-brand-700 hover:text-brand-900 underline-offset-4 hover:underline",
  };

  return (
    <a
      href={`tel:${PHONE.telPhone}`}
      data-call-location={trackingLocation}
      onClick={() =>
        trackCallButtonClick({ trackingLocation, pagePath: pathname })
      }
      aria-label={`Call ${PHONE.displayPhone}`}
      className={cn(base, sizes[size], variants[variant], className)}
    >
      {showIcon && (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1.05.37 2.08.72 3.07a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l2.01-1.29a2 2 0 0 1 2.11-.45c.99.35 2.02.59 3.07.72A2 2 0 0 1 22 16.92z" />
        </svg>
      )}
      <span>{label ?? `Call ${PHONE.displayPhone}`}</span>
    </a>
  );
}
