import { createFileRoute } from "@tanstack/react-router";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import logo from "@/assets/logo.png.asset.json";
import { DEFAULT_LANG, isLang, t, type Lang } from "@/lib/i18n";
import { products } from "@/lib/products";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/$lang/about")({
  head: ({ params }) => {
    const lang = (isLang(params.lang) ? params.lang : DEFAULT_LANG) as Lang;
    return pageHead({
      lang,
      path: "/about",
      title: t[lang].seo.aboutTitle,
      description: t[lang].seo.aboutDesc,
    });
  },
  component: AboutPage,
});

function AboutPage() {
  const { lang: raw } = Route.useParams();
  const lang = (isLang(raw) ? raw : DEFAULT_LANG) as Lang;
  const d = t[lang];

  return (
    <>
      <section className="mx-auto max-w-[1440px] px-6 pt-10 pb-16 lg:px-12">
        <Breadcrumbs lang={lang} items={[{ label: d.nav.about }]} />
        <div className="luxury-frame mt-12 grid gap-12 p-8 sm:p-12 lg:grid-cols-12 lg:p-16">
          <Reveal className="lg:col-span-7">
            <p className="kicker">{d.about.kicker}</p>
            <h1 className="mt-6 text-5xl leading-tight sm:text-6xl">{d.about.title}</h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {d.about.lead}
            </p>
          </Reveal>
          <Reveal delay={120} className="flex items-center justify-center lg:col-span-4 lg:col-start-9">
            <img
              src={logo.url}
              alt={`${d.brand} — ${d.tagline}`}
              width={420}
              height={420}
              className="w-56 max-w-full lg:w-72"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border/70 bg-card">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-3">
            {[d.about.p1, d.about.p2, d.about.p3].map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <p className="text-base leading-loose text-muted-foreground">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl">{d.about.pillarsTitle}</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {d.about.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="soft-panel bg-background p-8">
              <h3 className="text-xl">{p.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-24 lg:px-12">
        <div className="grid gap-5 sm:grid-cols-12">
          {[products[5]!, products[3]!, products[7]!].map((p, i) => (
            <Reveal key={p.slug} delay={i * 100} className={`overflow-hidden rounded-[1.2rem] border border-border/70 bg-secondary shadow-[var(--shadow-luxury)] ${i === 0 ? "sm:col-span-5" : i === 1 ? "sm:col-span-3 sm:mt-16" : "sm:col-span-4 sm:mt-8"}`}>
              <img
                src={p.image.medium}
                srcSet={`${p.image.small} 640w, ${p.image.medium} 1080w`}
                sizes="(min-width: 640px) 33vw, 100vw"
                width={1080}
                height={1446}
                loading="lazy"
                decoding="async"
                alt={p.name[lang]}
                className="h-full w-full object-cover"
              />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
