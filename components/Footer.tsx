import Link from "next/link";
import { BRAND, PHONE, DISCLOSURE } from "@/lib/site-config";

const SERVICE_LINKS = [
  { href: "/mobile-car-wash-birmingham-mi", label: "Mobile Car Wash" },
  { href: "/interior-car-detailing-birmingham-mi", label: "Interior Detailing" },
  { href: "/exterior-car-detailing-birmingham-mi", label: "Exterior Detailing" },
  { href: "/ceramic-coating-birmingham-mi", label: "Ceramic Coating" },
];

const LOCATION_LINKS = [
  { href: "/mobile-car-detailing-birmingham-mi", label: "Birmingham" },
  { href: "/mobile-car-detailing-bloomfield-hills-mi", label: "Bloomfield Hills" },
  { href: "/mobile-car-detailing-rochester-hills-mi", label: "Rochester Hills" },
  { href: "/mobile-car-detailing-troy-mi", label: "Troy" },
];

export function Footer() {
  return (
    <footer className="mt-16 bg-slate-900 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <p className="text-lg font-semibold text-white">{BRAND.name}</p>
          <p className="mt-3 text-sm text-slate-300">{DISCLOSURE.rankAndRent}</p>
          <p className="mt-4 text-sm">
            <a
              href={`tel:${PHONE.telPhone}`}
              data-call-location="footer_brand"
              className="font-medium text-white underline underline-offset-4 hover:text-brand-300"
            >
              {PHONE.displayPhone}
            </a>
          </p>
        </div>

        <nav aria-label="Services">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
            Services
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICE_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-200 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Locations">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
            Locations
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {LOCATION_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-200 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
            Company
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/faq" className="text-slate-200 hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/#quote"
                className="text-slate-200 hover:text-white"
              >
                Request Quote
              </Link>
            </li>
            <li>
              <a
                href={`tel:${PHONE.telPhone}`}
                data-call-location="footer_company"
                className="text-slate-200 hover:text-white"
              >
                Call Now
              </a>
            </li>
            <li>
              <Link
                href="/llm.html"
                className="text-slate-200 hover:text-white"
              >
                AI Summary
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <p>Serving Oakland County, Michigan.</p>
        </div>
      </div>
    </footer>
  );
}
