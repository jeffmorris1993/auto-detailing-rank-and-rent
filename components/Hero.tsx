import Link from "next/link";
import { CTA } from "@/lib/site-config";

type HeroProps = {
  eyebrow?: string;
  h1: string;
  subhead: string;
  directAnswer?: string;
};

export function Hero({ eyebrow, h1, subhead, directAnswer }: HeroProps) {
  return (
    <section className="bg-gradient-to-b from-brand-50 via-white to-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {h1}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-700 sm:text-xl">
            {subhead}
          </p>

          {directAnswer && (
            <p className="mt-6 max-w-2xl rounded-lg border-l-4 border-brand-500 bg-brand-50/60 p-4 text-base leading-relaxed text-slate-800">
              {directAnswer}
            </p>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#quote"
              className="inline-flex items-center justify-center rounded-full bg-brand-600 px-7 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
            >
              {CTA.primary}
            </Link>
            <Link
              href="#quote"
              className="inline-flex items-center justify-center rounded-full border border-brand-200 bg-white px-7 py-4 text-base font-semibold text-brand-700 hover:bg-brand-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
            >
              {CTA.secondary}
            </Link>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Submit a request to see whether a local provider can serve your area
            in Oakland County, MI. Service availability is not guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
}
