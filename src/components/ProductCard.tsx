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
  const category = categories.find((c) => c.id === product.category)!;

  return (
    <Reveal as="article" delay={delay} className={cn("group", className)}>
      <Link
        to="/$lang/products/$slug"
        params={{ lang, slug: product.slug }}
        className="block focus-visible:outline-offset-8"
      >
        <div className="overflow-hidden bg-secondary">
          <img
            src={product.image.medium}
            srcSet={`${product.image.small} 640w, ${product.image.medium} 1080w, ${product.image.large} 1600w`}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            width={1080}
            height={1446}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            alt={product.name[lang]}
            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.04]"
          />
        </div>
        <div className="pt-5">
          <p className="kicker">{category.name[lang]}</p>
          <h3 className="mt-2 text-xl leading-snug text-foreground sm:text-2xl">
            {product.name[lang]}
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            <span className="rule-link">{t[lang].products.viewProduct}</span>
          </p>
        </div>
      </Link>
    </Reveal>
  );
}
