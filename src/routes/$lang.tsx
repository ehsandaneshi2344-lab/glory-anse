import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import { useEffect } from "react";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { DEFAULT_LANG, dir, htmlLang, isLang, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (!isLang(params.lang)) {
      throw redirect({ to: "/$lang", params: { lang: DEFAULT_LANG } });
    }
  },
  component: LangLayout,
});

function LangLayout() {
  const { lang } = Route.useParams();
  const l = (isLang(lang) ? lang : DEFAULT_LANG) as Lang;
  const direction = dir(l);

  useEffect(() => {
    const el = document.documentElement;
    el.lang = htmlLang[l];
    el.dir = direction;
  }, [l, direction]);

  return (
    <div dir={direction} lang={htmlLang[l]} className="flex min-h-screen flex-col">
      <SiteHeader lang={l} />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter lang={l} />
    </div>
  );
}
