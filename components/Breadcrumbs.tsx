import Link from "next/link";

type Crumb = { name: string; path: string };

type BreadcrumbsProps = {
  items: Crumb[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-slate-100 bg-white">
      <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-1 px-4 py-3 text-sm text-slate-600 sm:px-6 lg:px-8">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1">
              {idx > 0 && <span aria-hidden className="text-slate-400">/</span>}
              {isLast ? (
                <span
                  aria-current="page"
                  className="font-medium text-slate-900"
                >
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-brand-700">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
