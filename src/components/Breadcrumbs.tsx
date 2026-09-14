import { Link } from "@tanstack/react-router";

import { t, type Lang } from "@/lib/i18n";

export type Crumb = { label: string; to?: string; params?: Record<string, string> };

export function Breadcrumbs({ lang, items }: { lang: Lang; items: Crumb[] }) {
  const all: Crumb[] = [{ label: t[lang].breadcrumb.home, to: "/$lang", params: { lang } }, ...items];

  return (
    <nav aria-label="breadcrumb" className="text-xs text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {all.map((c, i) => (
          <li key={i} className="flex items-center gap-x-2">
            {c.to ? (
              <Link to={c.to} params={c.params as never} className="hover:text-foreground">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-foreground">
                {c.label}
              </span>
            )}
            {i < all.length - 1 && <span aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
