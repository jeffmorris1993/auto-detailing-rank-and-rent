import Link from "next/link";
import { CTA } from "@/lib/site-config";

type CTASectionProps = {
  heading?: string;
  body?: string;
};

export function CTASection({
  heading = "Check availability in your area",
  body = "Submit a quote request to find out whether a local mobile detailing provider is available for your vehicle. Service availability is not guaranteed.",
}: CTASectionProps) {
  return (
    <section className="bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">{body}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/#quote"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-semibold text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            {CTA.primary}
          </Link>
          <Link
            href="/#quote"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-4 text-base font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            {CTA.secondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
