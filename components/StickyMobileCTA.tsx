import Link from "next/link";
import { CTA } from "@/lib/site-config";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] backdrop-blur lg:hidden">
      <Link
        href="/#quote"
        className="flex w-full items-center justify-center rounded-full bg-brand-600 px-5 py-3 text-base font-semibold text-white hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
      >
        {CTA.primary}
      </Link>
    </div>
  );
}
