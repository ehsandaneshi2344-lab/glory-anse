import { LANGS, htmlLang, type Lang } from "./i18n";

export const SITE_URL = "https://glory-anse.lovable.app";

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
  const url = `${SITE_URL}/${lang}${path}`;

  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:locale", content: htmlLang[lang].replace("-", "_") },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];

  if (image) {
    const absolute = image.startsWith("http") ? image : `${SITE_URL}${image}`;
    meta.push({ property: "og:image", content: absolute });
    meta.push({ name: "twitter:image", content: absolute });
  }

  const links = [
    ...LANGS.map((l) => ({
      rel: "alternate",
      hrefLang: htmlLang[l],
      href: `${SITE_URL}/${l}${path}`,
    })),
    { rel: "alternate", hrefLang: "x-default", href: `${SITE_URL}/fa${path}` },
    { rel: "canonical", href: url },
  ];

  return { meta, links };
}
