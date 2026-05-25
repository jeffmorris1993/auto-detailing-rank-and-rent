import Link from "next/link";
import { PhoneCallButton } from "./PhoneCallButton";

type HeroProps = {
  eyebrow?: string;
  h1: string;
  subhead: string;
  directAnswer?: string;
  trackingLocation?: string;
};

export function Hero({
  eyebrow,
  h1,
  subhead,
  directAnswer,
  trackingLocation = "hero",
}: HeroProps) {
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
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
            >
              Request Service
            </Link>
            <PhoneCallButton
              trackingLocation={trackingLocation}
              size="lg"
              variant="secondary"
            />
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Get connected with available local providers serving Oakland County, MI.
          </p>
        </div>
      </div>
    </section>
  );
}
