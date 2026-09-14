import { LANGS, htmlLang, type Lang } from "./i18n";

/** Builds meta + hreflang alternates for a page. `path` is the part after /{lang}. */
export function pageHead({
  lang,
  path = "",
  title,
  description,
  image,
  type = "website",
}: {
  lang: Lang;
  path?: string;
  title: string;
  description: string;
  image?: string;
  type?: string;
}) {
  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:locale", content: htmlLang[lang].replace("-", "_") },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];

  if (image) {
    meta.push({ property: "og:image", content: image });
    meta.push({ name: "twitter:image", content: image });
  }

  const links = [
    ...LANGS.map((l) => ({
      rel: "alternate",
      hrefLang: htmlLang[l],
      href: `/${l}${path}`,
    })),
    { rel: "alternate", hrefLang: "x-default", href: `/fa${path}` },
    { rel: "canonical", href: `/${lang}${path}` },
  ];

  return { meta, links };
}
