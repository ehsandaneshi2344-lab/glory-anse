import { createFileRoute, notFound } from "@tanstack/react-router";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { DEFAULT_LANG, isLang, t, type Lang } from "@/lib/i18n";
import { getCategory, productsByCategory } from "@/lib/products";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/$lang/categories/$category")({
  loader: ({ params }) => {
    const category = getCategory(params.category);
    if (!category) throw notFound();
    return { slug: category.slug };
  },
  head: ({ params }) => {
    const lang = (isLang(params.lang) ? params.lang : DEFAULT_LANG) as Lang;
    const category = getCategory(params.category);
    if (!category) {
      return { meta: [{ title: t[lang].products.title }, { name: "robots", content: "noindex" }] };
    }
    return pageHead({
      lang,
      path: `/categories/${category.slug}`,
      title: `${category.name[lang]} | ${t[lang].brand}`,
      description: category.intro[lang],
    });
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { lang: raw, category: slug } = Route.useParams();
  const lang = (isLang(raw) ? raw : DEFAULT_LANG) as Lang;
  const d = t[lang];
  const category = getCategory(slug);
  if (!category) return null;
  const list = productsByCategory(category.id);

  return (
    <section className="mx-auto max-w-[1440px] px-6 pt-10 pb-24 lg:px-12">
      <Breadcrumbs
        lang={lang}
        items={[
          { label: d.products.title, to: "/$lang/products", params: { lang } },
          { label: category.name[lang] },
        ]}
      />

      <Reveal className="mt-12 max-w-2xl">
        <p className="kicker">{d.product.category}</p>
        <h1 className="mt-5 text-5xl leading-tight sm:text-6xl">{category.name[lang]}</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{category.intro[lang]}</p>
        <p className="kicker mt-6">
          {list.length === 1 ? d.products.countOne : d.products.countMany(list.length)}
        </p>
      </Reveal>

      <div className="mt-16 grid gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <ProductCard key={p.slug} product={p} lang={lang} delay={(i % 3) * 100} priority={i < 3} />
        ))}
      </div>
    </section>
  );
}
