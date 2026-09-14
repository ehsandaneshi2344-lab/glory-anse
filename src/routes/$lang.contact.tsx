import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { DEFAULT_LANG, isLang, t, type Lang } from "@/lib/i18n";
import { products } from "@/lib/products";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/$lang/contact")({
  head: ({ params }) => {
    const lang = (isLang(params.lang) ? params.lang : DEFAULT_LANG) as Lang;
    return pageHead({
      lang,
      path: "/contact",
      title: t[lang].seo.contactTitle,
      description: t[lang].seo.contactDesc,
    });
  },
  component: ContactPage,
});

function ContactPage() {
  const { lang: raw } = Route.useParams();
  const lang = (isLang(raw) ? raw : DEFAULT_LANG) as Lang;
  const d = t[lang];
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    for (const field of ["name", "email", "message"]) {
      if (!String(form.get(field) ?? "").trim()) next[field] = d.contact.required;
    }
    const email = String(form.get("email") ?? "");
    if (!next.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = d.contact.invalidEmail;
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      e.currentTarget.reset();
    }
  };

  const field = (
    name: "name" | "email" | "subject" | "message",
    label: string,
    type: "text" | "email" | "textarea",
  ) => (
    <div>
      <label htmlFor={name} className="kicker block">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          rows={5}
          aria-invalid={errors[name] ? true : undefined}
          aria-describedby={errors[name] ? `${name}-error` : undefined}
          className="mt-3 w-full border-b border-border bg-transparent py-3 text-base outline-none transition-colors focus:border-foreground"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          aria-invalid={errors[name] ? true : undefined}
          aria-describedby={errors[name] ? `${name}-error` : undefined}
          className="mt-3 w-full border-b border-border bg-transparent py-3 text-base outline-none transition-colors focus:border-foreground"
        />
      )}
      {errors[name] && (
        <p id={`${name}-error`} className="mt-2 text-xs text-destructive">
          {errors[name]}
        </p>
      )}
    </div>
  );

  const hero = products[2]!;

  return (
    <section className="mx-auto max-w-[1440px] px-6 pt-10 pb-24 lg:px-12">
      <Breadcrumbs lang={lang} items={[{ label: d.contact.title }]} />

      <div className="mt-12 grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <h1 className="text-5xl leading-tight sm:text-6xl">{d.contact.title}</h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              {d.contact.lead}
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-14">
            <h2 className="kicker">{d.contact.formTitle}</h2>
            {sent ? (
              <div role="status" className="mt-8 border-t pt-8">
                <p className="text-2xl">{d.contact.sent}</p>
                <p className="mt-3 text-sm text-muted-foreground">{d.contact.sentNote}</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="mt-8 space-y-8">
                {field("name", d.contact.name, "text")}
                {field("email", d.contact.email, "email")}
                {field("subject", d.contact.subject, "text")}
                {field("message", d.contact.message, "textarea")}
                <button
                  type="submit"
                  className="border border-foreground px-8 py-3 text-sm tracking-wide transition-colors duration-500 hover:bg-foreground hover:text-background"
                >
                  {d.contact.send}
                </button>
              </form>
            )}
          </Reveal>
        </div>

        <Reveal delay={150} className="lg:col-span-5 lg:col-start-8">
          <div className="overflow-hidden bg-secondary">
            <img
              src={hero.image.medium}
              srcSet={`${hero.image.small} 640w, ${hero.image.medium} 1080w`}
              sizes="(min-width: 1024px) 40vw, 100vw"
              width={1080}
              height={1446}
              loading="lazy"
              decoding="async"
              alt={hero.name[lang]}
              className="w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
