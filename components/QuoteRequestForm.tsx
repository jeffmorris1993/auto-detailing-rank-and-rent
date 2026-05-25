"use client";

import { useEffect, useRef, useState } from "react";
import { DISCLOSURE } from "@/lib/site-config";
import { submitLeadAction } from "@/app/actions/submit-lead";

type QuoteRequestFormProps = {
  /** Pre-select the service dropdown. Must match a SERVICES entry. */
  defaultService?: string;
  /** Pre-select the city dropdown. Must match a CITIES entry. */
  defaultCity?: string;
  /** Server-known identifier for the page hosting the form (e.g. route slug). */
  sourcePage?: string;
  heading?: string;
  intro?: string;
  id?: string;
};

const SERVICES = [
  "Mobile Car Detailing",
  "Mobile Car Wash",
  "Interior Car Detailing",
  "Exterior Car Detailing",
  "Ceramic Coating",
  "Not sure — recommend something",
];

const CITIES = [
  "Birmingham",
  "Bloomfield Hills",
  "Rochester Hills",
  "Troy",
  "Other Oakland County area",
];

const VEHICLE_TYPES = ["Sedan", "Coupe", "SUV", "Truck", "Van / Minivan", "Other"];

const VEHICLE_CONDITIONS = [
  "Light — recent wash, mostly maintenance",
  "Moderate — typical buildup, normal use",
  "Heavy — needs extra time / deep clean",
  "Pet hair / spills / odor",
];

const TIMING_OPTIONS = [
  "ASAP",
  "Within a few days",
  "Within 1–2 weeks",
  "Flexible — schedule when available",
];

type Status = "idle" | "submitting" | "success" | "error";

export function QuoteRequestForm({
  defaultService = "",
  defaultCity = "",
  sourcePage = "",
  heading = "Request a quote",
  intro = "Tell us about your vehicle and we'll check whether a local provider is available in your area.",
  id = "quote",
}: QuoteRequestFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const errorRef = useRef<HTMLParagraphElement>(null);

  // Populate hidden URL / referrer / UTM fields on mount (client-only).
  const [hidden, setHidden] = useState({
    page_url: "",
    referrer: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    setHidden({
      page_url: window.location.href,
      referrer: document.referrer || "direct",
      utm_source: params.get("utm_source") ?? "",
      utm_medium: params.get("utm_medium") ?? "",
      utm_campaign: params.get("utm_campaign") ?? "",
      utm_term: params.get("utm_term") ?? "",
      utm_content: params.get("utm_content") ?? "",
    });
  }, []);

  const initialService = SERVICES.includes(defaultService) ? defaultService : "";
  const initialCity = CITIES.includes(defaultCity) ? defaultCity : "";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const result = await submitLeadAction(formData);

    if (result.ok) {
      setStatus("success");
      (event.target as HTMLFormElement).reset();
      return;
    }

    setStatus("error");
    setErrorMessage(result.error);
    // Move focus to the error so screen readers announce it.
    requestAnimationFrame(() => errorRef.current?.focus());
  }

  if (status === "success") {
    return (
      <section
        id={id}
        className="bg-slate-50 py-14 sm:py-20"
        aria-labelledby={`${id}-heading`}
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
            <h2
              id={`${id}-heading`}
              className="text-2xl font-bold text-emerald-900"
            >
              Request received
            </h2>
            <p className="mt-3 text-base text-emerald-900/90">
              Thanks — your request has been received. If service becomes
              available in your area, you may be contacted by a local provider.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 inline-flex items-center rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
            >
              Submit another request
            </button>
          </div>
        </div>
      </section>
    );
  }

  const submitting = status === "submitting";

  return (
    <section
      id={id}
      className="bg-slate-50 py-14 sm:py-20"
      aria-labelledby={`${id}-heading`}
      data-source-page={sourcePage || undefined}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2
            id={`${id}-heading`}
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            {heading}
          </h2>
          <p className="mt-3 text-lg text-slate-600">{intro}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          aria-busy={submitting}
          className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        >
          {/* Honeypot — visually hidden, ignored by humans, filled by bots. */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "-9999px",
              top: "auto",
              width: "1px",
              height: "1px",
              overflow: "hidden",
            }}
          >
            <label htmlFor="website">
              Website (leave blank)
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </label>
          </div>

          {/* Hidden context fields */}
          <input type="hidden" name="source_page" value={sourcePage} />
          <input type="hidden" name="page_url" value={hidden.page_url} />
          <input type="hidden" name="referrer" value={hidden.referrer} />
          <input type="hidden" name="utm_source" value={hidden.utm_source} />
          <input type="hidden" name="utm_medium" value={hidden.utm_medium} />
          <input type="hidden" name="utm_campaign" value={hidden.utm_campaign} />
          <input type="hidden" name="utm_term" value={hidden.utm_term} />
          <input type="hidden" name="utm_content" value={hidden.utm_content} />

          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="name" label="Name" required>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                maxLength={120}
                className={inputClass}
              />
            </Field>
            <Field id="phone" label="Phone" required>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                maxLength={32}
                className={inputClass}
                placeholder="(248) 555-0123"
              />
            </Field>
          </div>

          <Field id="email" label="Email" required>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              className={inputClass}
            />
          </Field>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="city" label="City" required>
              <select
                id="city"
                name="city"
                defaultValue={initialCity}
                required
                className={inputClass}
              >
                <option value="" disabled>
                  Select city
                </option>
                {CITIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </Field>
            <Field id="service" label="Service requested" required>
              <select
                id="service"
                name="service"
                defaultValue={initialService}
                required
                className={inputClass}
              >
                <option value="" disabled>
                  Select service
                </option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="vehicle_type" label="Vehicle type" required>
              <select
                id="vehicle_type"
                name="vehicle_type"
                required
                defaultValue=""
                className={inputClass}
              >
                <option value="" disabled>
                  Select vehicle type
                </option>
                {VEHICLE_TYPES.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </Field>
            <Field id="vehicle_condition" label="Vehicle condition">
              <select
                id="vehicle_condition"
                name="vehicle_condition"
                defaultValue=""
                className={inputClass}
              >
                <option value="">Select condition (optional)</option>
                {VEHICLE_CONDITIONS.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field id="preferred_timing" label="Preferred timing">
            <select
              id="preferred_timing"
              name="preferred_timing"
              defaultValue=""
              className={inputClass}
            >
              <option value="">Select timing (optional)</option>
              {TIMING_OPTIONS.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </Field>

          <Field id="message" label="Anything else? (optional)">
            <textarea
              id="message"
              name="message"
              rows={4}
              maxLength={2000}
              className={inputClass}
              placeholder="Year, make, model, or anything else a provider should know."
            />
          </Field>

          {status === "error" && errorMessage && (
            <p
              ref={errorRef}
              role="alert"
              tabIndex={-1}
              className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800 focus:outline-none"
            >
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-6 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {submitting ? (
              <>
                <Spinner /> Submitting…
              </>
            ) : (
              "Request a Quote"
            )}
          </button>

          <p className="text-xs text-slate-500">{DISCLOSURE.formSubmission}</p>
        </form>
      </div>
    </section>
  );
}

const inputClass =
  "block w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-base text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30";

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-slate-800"
      >
        {label}
        {required && (
          <span className="ml-1 text-red-600" aria-hidden>
            *
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

function Spinner() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="mr-2 h-4 w-4 animate-spin"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="3"
      />
      <path
        d="M22 12a10 10 0 0 0-10-10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
