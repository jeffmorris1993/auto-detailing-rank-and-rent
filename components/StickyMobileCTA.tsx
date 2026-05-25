import Link from "next/link";
import { PHONE } from "@/lib/site-config";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-slate-200 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.08)] lg:hidden">
      <a
        href={`tel:${PHONE.telPhone}`}
        data-call-location="sticky_mobile"
        aria-label={`Call ${PHONE.displayPhone}`}
        className="flex flex-1 items-center justify-center gap-2 bg-brand-600 px-4 py-3 text-sm font-semibold text-white"
      >
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
        Call {PHONE.displayPhone}
      </a>
      <Link
        href="#quote"
        className="flex flex-1 items-center justify-center bg-slate-900 px-4 py-3 text-sm font-semibold text-white"
      >
        Request Quote
      </Link>
    </div>
  );
}
