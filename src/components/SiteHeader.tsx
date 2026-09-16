import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import logo from "@/assets/logo.png.asset.json";
import { t, type Lang } from "@/lib/i18n";
import { categories } from "@/lib/products";
import { cn } from "@/lib/utils";

export function SiteHeader({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const d = t[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = (
    <>
      <Link
        to="/$lang"
        params={{ lang }}
        activeOptions={{ exact: true }}
        activeProps={{ className: "text-foreground" }}
        inactiveProps={{ className: "text-muted-foreground" }}
        className="transition-colors hover:text-foreground"
        onClick={() => setOpen(false)}
      >
        {d.nav.home}
      </Link>
      <Link
        to="/$lang/products"
        params={{ lang }}
        activeProps={{ className: "text-foreground" }}
        inactiveProps={{ className: "text-muted-foreground" }}
        className="transition-colors hover:text-foreground"
        onClick={() => setOpen(false)}
      >
        {d.nav.products}
      </Link>
      <Link
        to="/$lang/about"
        params={{ lang }}
        activeProps={{ className: "text-foreground" }}
        inactiveProps={{ className: "text-muted-foreground" }}
        className="transition-colors hover:text-foreground"
        onClick={() => setOpen(false)}
      >
        {d.nav.about}
      </Link>
      <Link
        to="/$lang/contact"
        params={{ lang }}
        activeProps={{ className: "text-foreground" }}
        inactiveProps={{ className: "text-muted-foreground" }}
        className="transition-colors hover:text-foreground"
        onClick={() => setOpen(false)}
      >
        {d.nav.contact}
      </Link>
    </>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        scrolled ? "border-b border-border/70 bg-background/88 shadow-[var(--shadow-luxury)] backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-5 px-6 py-4 md:flex md:justify-between lg:px-12">
        <Link
          to="/$lang"
          params={{ lang }}
          aria-label={d.brand}
          className="shrink-0"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo.url}
            alt={`${d.brand} — ${d.tagline}`}
            width={160}
            height={160}
            className="h-11 w-auto sm:h-14"
          />
        </Link>

        <nav aria-label={d.menu} className="hidden items-center gap-2 rounded-full border border-border/70 bg-card/80 p-1.5 text-sm shadow-[var(--shadow-luxury)] md:flex [&_a]:rounded-full [&_a]:px-4 [&_a]:py-2">
          {links}
        </nav>

        <div className="flex items-center gap-5">
          <LanguageSwitcher lang={lang} className="hidden sm:flex" />
          <button
            type="button"
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-border bg-card shadow-[var(--shadow-luxury)] md:hidden"
            aria-expanded={open}
            aria-label={open ? d.close : d.menu}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={cn(
                "block h-px bg-foreground transition-all duration-300",
                open ? "w-5 translate-y-[6px] rotate-45" : "w-6",
              )}
            />
            <span
              className={cn(
                "block h-px w-6 bg-foreground transition-all duration-300",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-px bg-foreground transition-all duration-300",
                open ? "w-5 -translate-y-[6px] -rotate-45" : "w-4",
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile panel: full-height editorial menu, not a bare dropdown */}
      <div
        className={cn(
          "fixed inset-x-0 top-[76px] bottom-0 z-40 overflow-y-auto bg-background px-6 pt-10 pb-16 transition-all duration-500 md:hidden",
          open ? "visible opacity-100" : "pointer-events-none invisible opacity-0",
        )}
      >
        <nav aria-label={d.menu} className="flex flex-col gap-6 font-display text-3xl">
          {links}
        </nav>
        <div className="mt-12 border-t pt-8">
          <p className="kicker">{d.footer.collections}</p>
          <ul className="mt-4 space-y-3 text-base text-muted-foreground">
            {categories.map((c) => (
              <li key={c.id}>
                <Link
                  to="/$lang/categories/$category"
                  params={{ lang, category: c.slug }}
                  onClick={() => setOpen(false)}
                  className="hover:text-foreground"
                >
                  {c.name[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="kicker">{d.language}</p>
          <LanguageSwitcher lang={lang} className="mt-4 text-base" />
        </div>
      </div>
    </header>
  );
}
