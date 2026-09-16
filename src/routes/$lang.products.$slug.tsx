import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { DEFAULT_LANG, isLang, t, type Lang } from "@/lib/i18n";
import { categories, getProduct, products } from "@/lib/products";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/$lang/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { slug: product.slug };
  },
  head: ({ params }) => {
    const lang = (isLang(params.lang) ? params.lang : DEFAULT_LANG) as Lang;
    const product = getProduct(params.slug);
    if (!product) {
      return {
        meta: [{ title: t[lang].products.title }, { name: "robots", content: "noindex" }],
      };
    }
    const description = product.extended[lang].slice(0, 158);
    return pageHead({
      lang,
      path: `/products/${product.slug}`,
      title: `${product.name[lang]} | ${t[lang].brand}`,
      description,
      image: product.image.large,
      type: "article",
    });
  },
  component: ProductPage,
});

function ProductPage() {
  const { lang: raw, slug } = Route.useParams();
  const lang = (isLang(raw) ? raw : DEFAULT_LANG) as Lang;
  const d = t[lang];
  const product = getProduct(slug);
  if (!product) return null;
  const category = categories.find((c) => c.id === product.category);
  if (!category) return null;
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug);

  return (
    <>
      <section className="mx-auto max-w-[1440px] px-6 pt-10 lg:px-12">
        <Breadcrumbs
          lang={lang}
          items={[
            { label: d.products.title, to: "/$lang/products", params: { lang } },
            {
              label: category.name[lang],
              to: "/$lang/categories/$category",
              params: { lang, category: category.slug },
            },
            { label: product.name[lang] },
          ]}
        />

        <div className="luxury-frame mt-10 grid gap-0 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div className="m-3 overflow-hidden rounded-[0.9rem] bg-secondary">
              <img
                src={product.image.large}
                srcSet={`${product.image.small} 640w, ${product.image.medium} 1080w, ${product.image.large} 1600w`}
                sizes="(min-width: 1024px) 50vw, 100vw"
                width={1600}
                height={2143}
                fetchPriority="high"
                decoding="async"
                alt={product.name[lang]}
                className="w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="relative z-10 p-8 sm:p-12 lg:col-span-6 lg:p-16">
            <Reveal>
              <Link
                to="/$lang/categories/$category"
                params={{ lang, category: category.slug }}
                className="kicker hover:text-foreground"
              >
                {category.name[lang]}
              </Link>
              <h1 className="mt-5 text-4xl leading-tight sm:text-5xl">{product.name[lang]}</h1>
              <p className="mt-8 text-base leading-loose text-muted-foreground">
                {product.extended[lang]}
              </p>
            </Reveal>

            <Reveal delay={100} className="mt-12 border-t pt-8">
              <h2 className="kicker">{d.product.ingredients}</h2>
              <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2 text-sm">
                {product.ingredients[lang].map((ing) => (
                  <li key={ing} className="rounded-full border border-border bg-secondary/40 px-4 py-2 text-muted-foreground">
                    {ing}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={150} className="mt-10 border-t pt-8">
              <h2 className="kicker">{d.product.notes}</h2>
              <p className="mt-5 text-sm leading-loose text-muted-foreground">
                {product.notes[lang]}
              </p>
            </Reveal>

            <Reveal delay={200} className="mt-10 border-t pt-8">
              <h2 className="kicker">{d.product.keywords}</h2>
              <p className="mt-5 text-sm leading-loose text-muted-foreground">
                {product.keywords[lang].join(lang === "en" ? ", " : "، ")}
              </p>
            </Reveal>

            <Reveal delay={250} className="mt-10">
              <Link to="/$lang/products" params={{ lang }} className="text-sm">
                <span className="rule-link">{d.product.backToProducts}</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-[1440px] px-6 pt-28 lg:px-12">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">{d.product.related}</h2>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <ProductCard key={p.slug} product={p} lang={lang} delay={i * 100} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
