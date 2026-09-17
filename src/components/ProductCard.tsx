import { Link } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
import { t, type Lang } from "@/lib/i18n";
import { categories, type Product } from "@/lib/products";
import { cn } from "@/lib/utils";

export function ProductCard({
  product,
  lang,
  delay = 0,
  className,
  priority = false,
}: {
  product: Product;
  lang: Lang;
  delay?: number;
  className?: string;
  priority?: boolean;
}) {
  const category = categories.find((c) => c.id === product.category);
  if (!category) return null;

  return (
    <Reveal as="article" delay={delay} className={cn("group flex min-w-0 flex-col", className)}>
      <Link
        to="/$lang/products/$slug"
        params={{ lang, slug: product.slug }}
        className="flex h-full flex-col rounded-[1.2rem] focus-visible:outline-offset-4"
      >
        <div className="relative aspect-[3/4] overflow-hidden rounded-[1.2rem] border border-border/70 bg-secondary shadow-[var(--shadow-luxury)] transition-all duration-700 group-hover:-translate-y-1 group-hover:shadow-[var(--shadow-lift)]">
          <span className="pointer-events-none absolute inset-3 z-10 rounded-[0.75rem] border border-champagne/25" />
          <img
            src={product.image.medium}
            srcSet={`${product.image.small} 640w, ${product.image.medium} 1080w, ${product.image.large} 1600w`}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            width={1080}
            height={1446}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            alt={product.name[lang]}
            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.035]"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between px-1 pt-5">
          <div>
            <p className="kicker">{category.name[lang]}</p>
            <h3 className="mt-2 text-xl leading-snug text-foreground sm:text-2xl">
              {product.name[lang]}
            </h3>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            <span className="rule-link">{t[lang].products.viewProduct}</span>
          </p>
        </div>
      </Link>
    </Reveal>
  );
}
