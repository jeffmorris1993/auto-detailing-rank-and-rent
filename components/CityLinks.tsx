import Link from "next/link";

const CITIES = [
  {
    href: "/mobile-car-detailing-birmingham-mi",
    name: "Birmingham, MI",
    blurb: "Primary service area, including downtown and Quarton Lake neighborhoods.",
  },
  {
    href: "/mobile-car-detailing-bloomfield-hills-mi",
    name: "Bloomfield Hills, MI",
    blurb: "Mobile detailing for homes and gated communities throughout Bloomfield Hills.",
  },
  {
    href: "/mobile-car-detailing-rochester-hills-mi",
    name: "Rochester Hills, MI",
    blurb: "Home and workplace appointments across Rochester Hills.",
  },
  {
    href: "/mobile-car-detailing-troy-mi",
    name: "Troy, MI",
    blurb: "Office park and residential service throughout Troy.",
  },
];

type CityLinksProps = {
  heading?: string;
  intro?: string;
};

export function CityLinks({
  heading = "Service areas in Oakland County",
  intro = "We focus on these Oakland County, Michigan cities. Pick the one closest to you.",
}: CityLinksProps) {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 text-lg text-slate-600">{intro}</p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {CITIES.map((city) => (
            <li key={city.href}>
              <Link
                href={city.href}
                className="group block h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-700">
                  {city.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{city.blurb}</p>
                <span className="mt-4 inline-block text-sm font-medium text-brand-700 group-hover:text-brand-900">
                  View {city.name} page →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
