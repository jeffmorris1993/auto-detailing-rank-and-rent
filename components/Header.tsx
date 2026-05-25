"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { BRAND } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { PhoneCallButton } from "./PhoneCallButton";

type NavLink = { href: string; label: string };

const SERVICES_LINKS: NavLink[] = [
  { href: "/mobile-car-wash-birmingham-mi", label: "Mobile Car Wash" },
  { href: "/interior-car-detailing-birmingham-mi", label: "Interior Detailing" },
  { href: "/exterior-car-detailing-birmingham-mi", label: "Exterior Detailing" },
  { href: "/ceramic-coating-birmingham-mi", label: "Ceramic Coating" },
];

const LOCATIONS_LINKS: NavLink[] = [
  { href: "/mobile-car-detailing-birmingham-mi", label: "Birmingham" },
  { href: "/mobile-car-detailing-bloomfield-hills-mi", label: "Bloomfield Hills" },
  { href: "/mobile-car-detailing-rochester-hills-mi", label: "Rochester Hills" },
  { href: "/mobile-car-detailing-troy-mi", label: "Troy" },
];

export function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<"services" | "locations" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  // Close any open dropdowns / mobile drawer on route change.
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  // Click outside closes the open dropdown.
  useEffect(() => {
    if (!openMenu) return;
    function onClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [openMenu]);

  // Escape closes everything.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll while mobile drawer is open.
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div
        ref={navRef}
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          aria-label={`${BRAND.name} home`}
          className="flex items-center gap-2 text-slate-900"
        >
          <span
            aria-hidden
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-white text-sm font-bold"
          >
            OC
          </span>
          <span className="hidden text-base font-semibold leading-tight sm:inline sm:text-lg">
            {BRAND.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1 text-sm font-medium text-slate-700">
            <li>
              <Link
                href="/"
                className="rounded-md px-3 py-2 transition-colors hover:bg-slate-100 hover:text-brand-700"
              >
                Home
              </Link>
            </li>
            <li
              onMouseEnter={() => setOpenMenu("services")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Dropdown
                label="Services"
                links={SERVICES_LINKS}
                isOpen={openMenu === "services"}
                onToggle={() =>
                  setOpenMenu(openMenu === "services" ? null : "services")
                }
                onClose={() => setOpenMenu(null)}
              />
            </li>
            <li
              onMouseEnter={() => setOpenMenu("locations")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Dropdown
                label="Locations"
                links={LOCATIONS_LINKS}
                isOpen={openMenu === "locations"}
                onToggle={() =>
                  setOpenMenu(openMenu === "locations" ? null : "locations")
                }
                onClose={() => setOpenMenu(null)}
              />
            </li>
            <li>
              <Link
                href="/faq"
                className="rounded-md px-3 py-2 transition-colors hover:bg-slate-100 hover:text-brand-700"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#quote"
            className="hidden rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 lg:inline-flex"
          >
            Request Quote
          </Link>
          <PhoneCallButton
            trackingLocation="header"
            size="sm"
            variant="primary"
            label="Call Now"
            className="hidden sm:inline-flex"
          />
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 lg:hidden"
          >
            {mobileOpen ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

function Dropdown({
  label,
  links,
  isOpen,
  onToggle,
  onClose,
}: {
  label: string;
  links: NavLink[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const menuId = useId();
  return (
    <div className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={onToggle}
        className={cn(
          "inline-flex items-center gap-1 rounded-md px-3 py-2 transition-colors hover:bg-slate-100 hover:text-brand-700",
          isOpen && "bg-slate-100 text-brand-700"
        )}
      >
        {label}
        <ChevronIcon
          className={cn(
            "h-3.5 w-3.5 transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && (
        <ul
          id={menuId}
          role="menu"
          aria-label={label}
          className="absolute left-0 top-full min-w-[14rem] rounded-xl border border-slate-200 bg-white p-2 shadow-lg"
        >
          {links.map((link) => (
            <li key={link.href} role="none">
              <Link
                role="menuitem"
                href={link.href}
                onClick={onClose}
                className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [servicesOpen, setServicesOpen] = useState(true);
  const [locationsOpen, setLocationsOpen] = useState(true);

  return (
    <div
      id="mobile-nav"
      className={cn(
        "lg:hidden",
        open ? "block" : "hidden"
      )}
    >
      <div
        className="fixed inset-0 top-[57px] z-30 bg-slate-900/40"
        aria-hidden
        onClick={onClose}
      />
      <nav
        aria-label="Mobile"
        className="fixed inset-x-0 top-[57px] z-40 max-h-[calc(100dvh-57px)] overflow-y-auto border-t border-slate-200 bg-white px-4 pb-24 pt-4 sm:px-6"
      >
        <ul className="space-y-1 text-base text-slate-800">
          <li>
            <Link
              href="/"
              onClick={onClose}
              className="block rounded-md px-3 py-3 font-medium hover:bg-slate-100"
            >
              Home
            </Link>
          </li>

          <li>
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-controls="m-services"
              onClick={() => setServicesOpen((v) => !v)}
              className="flex w-full items-center justify-between rounded-md px-3 py-3 font-medium hover:bg-slate-100"
            >
              Services
              <ChevronIcon
                className={cn(
                  "h-4 w-4 transition-transform",
                  servicesOpen && "rotate-180"
                )}
              />
            </button>
            {servicesOpen && (
              <ul id="m-services" className="mt-1 ml-2 space-y-1 border-l border-slate-200 pl-3">
                {SERVICES_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <button
              type="button"
              aria-expanded={locationsOpen}
              aria-controls="m-locations"
              onClick={() => setLocationsOpen((v) => !v)}
              className="flex w-full items-center justify-between rounded-md px-3 py-3 font-medium hover:bg-slate-100"
            >
              Locations
              <ChevronIcon
                className={cn(
                  "h-4 w-4 transition-transform",
                  locationsOpen && "rotate-180"
                )}
              />
            </button>
            {locationsOpen && (
              <ul id="m-locations" className="mt-1 ml-2 space-y-1 border-l border-slate-200 pl-3">
                {LOCATIONS_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link
              href="/faq"
              onClick={onClose}
              className="block rounded-md px-3 py-3 font-medium hover:bg-slate-100"
            >
              FAQ
            </Link>
          </li>

          <li className="pt-3">
            <Link
              href="/#quote"
              onClick={onClose}
              className="block w-full rounded-full bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Request Quote
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
