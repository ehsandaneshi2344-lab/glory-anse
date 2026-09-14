import { Link } from "@tanstack/react-router";

import logo from "@/assets/logo.png.asset.json";
import { t, type Lang } from "@/lib/i18n";
import { categories } from "@/lib/products";

export function SiteFooter({ lang }: { lang: Lang }) {
  const d = t[lang];
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t bg-secondary/50">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
        <div className="sm:col-span-2 lg:col-span-2">
          <img
            src={logo.url}
            alt={`${d.brand} — ${d.tagline}`}
            width={200}
            height={200}
            loading="lazy"
            className="h-16 w-auto"
          />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">{d.footer.note}</p>
        </div>

        <nav aria-label={d.footer.navigate}>
          <p className="kicker">{d.footer.navigate}</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/$lang" params={{ lang }} className="hover:text-foreground">
                {d.nav.home}
              </Link>
            </li>
            <li>
              <Link to="/$lang/products" params={{ lang }} className="hover:text-foreground">
                {d.nav.products}
              </Link>
            </li>
            <li>
              <Link to="/$lang/about" params={{ lang }} className="hover:text-foreground">
                {d.nav.about}
              </Link>
            </li>
            <li>
              <Link to="/$lang/contact" params={{ lang }} className="hover:text-foreground">
                {d.nav.contact}
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label={d.footer.collections}>
          <p className="kicker">{d.footer.collections}</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {categories.map((c) => (
              <li key={c.id}>
                <Link
                  to="/$lang/categories/$category"
                  params={{ lang, category: c.slug }}
                  className="hover:text-foreground"
                >
                  {c.name[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t">
        <div className="mx-auto max-w-[1440px] px-6 py-6 text-xs text-muted-foreground lg:px-12">
          © {year} {d.brand}. {d.footer.rights}
        </div>
      </div>
    </footer>
  );
}
