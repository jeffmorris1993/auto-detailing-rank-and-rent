import Link from "next/link";
import { PhoneCallButton } from "./PhoneCallButton";

type CTASectionProps = {
  heading?: string;
  body?: string;
  trackingLocation?: string;
};

export function CTASection({
  heading = "Ready to schedule mobile detailing?",
  body = "Request a quote in about a minute, or call now to get connected with an available local provider.",
  trackingLocation = "cta_section",
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
            href="#quote"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-semibold text-slate-900 hover:bg-slate-100"
          >
            Request Service
          </Link>
          <PhoneCallButton
            trackingLocation={trackingLocation}
            size="lg"
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
}
