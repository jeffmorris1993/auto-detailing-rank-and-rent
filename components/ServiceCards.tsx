import Link from "next/link";

type Service = {
  href: string;
  title: string;
  description: string;
};

const DEFAULT_SERVICES: Service[] = [
  {
    href: "/mobile-car-detailing-birmingham-mi",
    title: "Mobile Car Detailing",
    description:
      "Full interior and exterior detail at your home or office. The most popular request in Birmingham.",
  },
  {
    href: "/mobile-car-wash-birmingham-mi",
    title: "Mobile Car Wash",
    description:
      "A quick, thorough hand wash without leaving your driveway. Great for weekly upkeep.",
  },
  {
    href: "/interior-car-detailing-birmingham-mi",
    title: "Interior Detailing",
    description:
      "Deep vacuum, upholstery treatment, dashboard, and trim refresh. Pet hair removal available.",
  },
  {
    href: "/exterior-car-detailing-birmingham-mi",
    title: "Exterior Detailing",
    description:
      "Hand wash, clay bar, polish, and protective sealant for a deeper, longer-lasting shine.",
  },
  {
    href: "/ceramic-coating-birmingham-mi",
    title: "Ceramic Coating",
    description:
      "Long-term paint protection with a hydrophobic finish that holds up through Michigan winters.",
  },
];

type ServiceCardsProps = {
  heading?: string;
  intro?: string;
  services?: Service[];
};

export function ServiceCards({
  heading = "Services available across Oakland County",
  intro = "Pick the service that fits your vehicle. We'll connect you with available local providers.",
  services = DEFAULT_SERVICES,
}: ServiceCardsProps) {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 text-lg text-slate-600">{intro}</p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.href}>
              <Link
                href={service.href}
                className="group block h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-700">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{service.description}</p>
                <span className="mt-4 inline-block text-sm font-medium text-brand-700 group-hover:text-brand-900">
                  Learn more →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
