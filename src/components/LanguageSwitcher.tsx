import { useNavigate, useRouterState } from "@tanstack/react-router";

import { LANGS, langLabels, t, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ lang, className }: { lang: Lang; className?: string }) {
  const navigate = useNavigate();
  const last = useRouterState({
    select: (s) => {
      const m = s.matches[s.matches.length - 1];
      return { routeId: m?.routeId ?? "/$lang", params: (m?.params ?? {}) as Record<string, string> };
    },
  });

  const switchTo = (next: Lang) => {
    if (next === lang) return;
    navigate({
      to: last.routeId as never,
      params: { ...last.params, lang: next } as never,
      replace: false,
    });
  };

  return (
    <div
      className={cn("flex items-center gap-2 text-xs", className)}
      role="group"
      aria-label={t[lang].language}
    >
      {LANGS.map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          {i > 0 && (
            <span aria-hidden="true" className="text-border">
              |
            </span>
          )}
          <button
            type="button"
            onClick={() => switchTo(l)}
            aria-current={l === lang ? "true" : undefined}
            lang={l}
            className={cn(
              "transition-colors duration-300",
              l === lang
                ? "text-foreground underline underline-offset-4"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {langLabels[l]}
          </button>
        </span>
      ))}
    </div>
  );
}
