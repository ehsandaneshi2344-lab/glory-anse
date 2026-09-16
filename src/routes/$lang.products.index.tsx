import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { DEFAULT_LANG, isLang, t, type Lang } from "@/lib/i18n";
import { categories, products, type CategoryId } from "@/lib/products";
import { pageHead } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/$lang/products/")({
  head: ({ params }) => {
    const lang = (isLang(params.lang) ? params.lang : DEFAULT_LANG) as Lang;
    return pageHead({
      lang,
      path: "/products",
      title: t[lang].seo.productsTitle,
      description: t[lang].seo.productsDesc,
    });
  },
  component: ProductsPage,
});

function ProductsPage() {
  const { lang: raw } = Route.useParams();
  const lang = (isLang(raw) ? raw : DEFAULT_LANG) as Lang;
  const d = t[lang];
  const [filter, setFilter] = useState<CategoryId | "all">("all");

  const list = filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <section className="mx-auto max-w-[1440px] px-6 pt-10 pb-24 lg:px-12">
      <Breadcrumbs lang={lang} items={[{ label: d.products.title }]} />

      <Reveal className="mt-12 max-w-2xl">
        <h1 className="text-5xl leading-tight sm:text-6xl">{d.products.title}</h1>
        <p className="mt-6 text-lg text-muted-foreground">{d.products.lead}</p>
      </Reveal>

      <div className="mt-12 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-5 rounded-[1.1rem] border border-border/70 bg-card px-5 py-4 text-sm shadow-[var(--shadow-luxury)] sm:flex sm:flex-wrap">
        <span className="sr-only" id="filter-label">
          {d.products.filterLabel}
        </span>
        <div role="group" aria-labelledby="filter-label" className="flex min-w-0 flex-wrap gap-x-6 gap-y-3">
          <button
            type="button"
            onClick={() => setFilter("all")}
            aria-pressed={filter === "all"}
            className={cn(
              "transition-colors",
              filter === "all"
                ? "text-foreground underline underline-offset-8"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {d.products.all}
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setFilter(c.id)}
              aria-pressed={filter === c.id}
              className={cn(
                "transition-colors",
                filter === c.id
                  ? "text-foreground underline underline-offset-8"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {c.name[lang]}
            </button>
          ))}
        </div>
        <span className="kicker ms-auto">
          {list.length === 1 ? d.products.countOne : d.products.countMany(list.length)}
        </span>
      </div>

      <div className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <ProductCard key={p.slug} product={p} lang={lang} delay={(i % 3) * 100} priority={i < 3} />
        ))}
      </div>

      <div className="mt-24 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((c) => (
          <Link
            key={c.id}
            to="/$lang/categories/$category"
            params={{ lang, category: c.slug }}
            className="soft-panel bg-background p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-secondary hover:shadow-[var(--shadow-lift)]"
          >
            <h2 className="text-xl">{c.name[lang]}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.intro[lang]}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
