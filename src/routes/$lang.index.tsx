import { Link, createFileRoute } from "@tanstack/react-router";

import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { DEFAULT_LANG, isLang, t, type Lang } from "@/lib/i18n";
import { categories, products, productsByCategory } from "@/lib/products";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => {
    const lang = (isLang(params.lang) ? params.lang : DEFAULT_LANG) as Lang;
    return pageHead({
      lang,
      path: "",
      title: t[lang].seo.homeTitle,
      description: t[lang].seo.homeDesc,
    });
  },
  component: HomePage,
});

function HomePage() {
  const { lang: raw } = Route.useParams();
  const lang = (isLang(raw) ? raw : DEFAULT_LANG) as Lang;
  const d = t[lang];
  const hero = products[2];
  const featured = [products[0], products[6], products[7]];

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-[1440px] px-6 pt-10 pb-24 lg:px-12 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="kicker">{d.home.heroKicker}</p>
            <h1 className="mt-6 text-[2.6rem] leading-[1.08] sm:text-6xl lg:text-[4.25rem]">
              {d.home.heroTitle}
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              {d.home.heroText}
            </p>
            <Link
              to="/$lang/products"
              params={{ lang }}
              className="mt-10 inline-block text-sm tracking-wide text-foreground"
            >
              <span className="rule-link">{d.home.heroCta}</span>
            </Link>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <div className="overflow-hidden bg-secondary">
              <img
                src={hero.image.large}
                srcSet={`${hero.image.small} 640w, ${hero.image.medium} 1080w, ${hero.image.large} 1600w`}
                sizes="(min-width: 1024px) 58vw, 100vw"
                width={1600}
                height={2143}
                fetchPriority="high"
                decoding="async"
                alt={hero.name[lang]}
                className="h-[58vh] w-full object-cover lg:h-[76vh]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Collection statement */}
      <section className="border-y bg-card">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-24 lg:grid-cols-12 lg:px-12">
          <Reveal className="lg:col-span-4">
            <p className="kicker">{d.home.collectionKicker}</p>
            <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">{d.home.collectionTitle}</h2>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg leading-relaxed text-muted-foreground">{d.home.collectionText}</p>
          </Reveal>
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12">
        <Reveal>
          <p className="kicker">{d.home.featuredKicker}</p>
        </Reveal>
        <div className="mt-10 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ProductCard key={p.slug} product={p} lang={lang} delay={i * 100} />
          ))}
        </div>
        <Reveal className="mt-16">
          <Link to="/$lang/products" params={{ lang }} className="text-sm">
            <span className="rule-link">{d.products.title}</span>
          </Link>
        </Reveal>
      </section>

      {/* Philosophy */}
      <section className="bg-champagne/40">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-12">
          <Reveal>
            <div className="overflow-hidden">
              <img
                src={products[0].image.medium}
                srcSet={`${products[0].image.small} 640w, ${products[0].image.medium} 1080w`}
                sizes="(min-width: 1024px) 45vw, 100vw"
                width={1080}
                height={1446}
                loading="lazy"
                decoding="async"
                alt={products[0].name[lang]}
                className="h-full max-h-[70vh] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="kicker">{d.home.philosophyKicker}</p>
            <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">{d.home.philosophyTitle}</h2>
            <p className="mt-7 text-base leading-relaxed text-muted-foreground">
              {d.home.philosophyText}
            </p>
            <Link to="/$lang/about" params={{ lang }} className="mt-9 inline-block text-sm">
              <span className="rule-link">{d.home.philosophyCta}</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl">{d.home.categoriesTitle}</h2>
        </Reveal>
        <div className="mt-12 grid gap-px border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => {
            const count = productsByCategory(c.id).length;
            return (
              <Reveal key={c.id} delay={i * 80} className="bg-background">
                <Link
                  to="/$lang/categories/$category"
                  params={{ lang, category: c.slug }}
                  className="flex h-full flex-col justify-between gap-8 p-8 transition-colors duration-500 hover:bg-secondary"
                >
                  <div>
                    <h3 className="text-2xl">{c.name[lang]}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {c.intro[lang]}
                    </p>
                  </div>
                  <p className="kicker">
                    {count === 1 ? d.products.countOne : d.products.countMany(count)}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
