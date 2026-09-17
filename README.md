# Glory Anse Digital Showroom

Build the complete official website for the luxury skincare & hair care brand "Glory Anse" (گلوری آنسه). Full autonomous execution — do not ask the user any questions or request approvals; make all design, UX, architecture, content and implementation decisions yourself.

SOURCE FILES (attached; these are the ONLY sources of truth — never invent products, specs, claims, contact details, prices, reviews or company history):
1. file1.xlsx — the official product catalog. It contains a sheet with 8 products; column A holds the official high-res product photo (embedded image per row, 1792×2400 JPEG), column B the Persian product name, column C extended description (توضیحات تکمیلی), column D ingredients (مواد تشکیل‌دهنده), column E description (توضیحات), column F keywords. Extract the embedded product images from the xlsx (they are in xl/media/image1..8.jpeg, row order top-to-bottom maps to image1..8), crop/clean them for web use, standardize framing, optimize (WebP + responsive sizes, lazy loading). Never use a whole sheet/page screenshot as a product image; never use stock photos.
2. Glory_Anse_00000.docx — same official Persian product content (authoritative for wording).
3. logo.png — the official logo (black lotus + "Glory Anse" wordmark, transparent background). Use it exactly as provided: never redesign, recolor, distort or recreate it; preserve aspect ratio and transparency. Use in header, footer, homepage, about.

THE 8 REAL PRODUCTS (all Persian names from the catalog; build a detail page for each):
1. ژل‌کرم مرطوب‌کننده و آبرسان گلوری آنسه (moisturizing/hydrating gel-cream, dry & normal skin)
2. ژل شستشوی صورت گلوری آنسه (facial cleansing gel)
3. سرم آبرسان گلوری آنسه (hydrating serum, PCA, vitamin B5, hyaluronic acid)
4. میسلار واتر گلوری آنسه — پاک‌کننده آرایش (micellar water / makeup remover)
5. ژل ضدآفتاب فیزیکی SPF 30 گلوری آنسه (physical sunscreen gel, oily skin)
6. کرم ضدآفتاب و مرطوب‌کننده فیزیکی SPF 30 گلوری آنسه (physical sunscreen + moisturizer cream, dry/normal skin)
7. DD Cream فوق سبک روزانه SPF 30 گلوری آنسه (ultra-light daily DD cream SPF 30)
8. شامپو پروتئینه گیاهی ضد ریزش گلوری آنسه (herbal protein anti-hair-loss shampoo)
For every product use ONLY its catalog name, descriptions, ingredients and keywords — no empty-field placeholders, no invented specs (no sizes, prices, codes that don't exist in the source). NOTE: the source files contain NO company contact info, address, phone, email, social media or About-Us text — omit these gracefully rather than inventing them (a minimal contact/inquiry section pointing to a simple inquiry form or graceful "contact us" placeholder-free layout is fine; do not fabricate details).

REQUIREMENTS:
- Three languages, mandatory: Persian (FA, RTL, DEFAULT), English (EN, LTR), Arabic (AR, RTL). Full translation of all UI, navigation, product content and metadata into all three. Language switcher FA | EN | AR in header, persists across navigation, preserves current page. RTL must be first-class: properly mirrored layouts, curated Persian/Arabic web fonts (e.g. premium Persian typefaces), correct typography, line-heights and alignment — not a mirrored English site.
- Pages: Home, About (editorial brand story built only from what the sources support — product philosophy, natural/botanical ingredient focus), Products overview, one page per product category where meaningful (e.g. پاکسازی/پاک‌کننده, آبرسان و مرطوب‌کننده, ضدآفتاب, مراقبت مو), individual product detail pages with clean SEO URLs, Contact (minimal, no invented info). Related products by category where genuine.
- Design: world-class international luxury brand aesthetic — minimal, editorial, architectural, premium. Sophisticated luxury pastel palette + refined neutrals + dark typography, chosen from the actual product photography and lotus logo (soft botanical/skincare tones: warm ivory, champagne, muted sage/blush families — decide the single best system yourself). Generous whitespace, strong typographic hierarchy, refined grids, subtle premium motion (scroll reveals, elegant hovers, image reveals), reduced-motion support. No template look, no generic SaaS/e-commerce patterns, no heavy shadows/gradients/rounded-card clutter. Products shown large and editorially, not in cramped shop cards.
- No fake e-commerce: no cart, checkout, prices, inventory, reviews or accounts. Premium digital showroom only.
- Technical: React + Vite + Tailwind (or the stack you judge best), clean reusable components (header, footer, language switcher, product cards, galleries, breadcrumbs, filters), i18n architecture with hreflang-style metadata per language, semantic HTML, SEO titles/descriptions per page per language, alt text, keyboard accessibility, focus states, responsive from large desktop to mobile with intentional mobile recomposition (refined mobile nav, not a bare hamburger), performance-optimized images (WebP, responsive srcset, lazy loading).
- No placeholders anywhere — remove all lorem ipsum, dummy text or unfinished sections before finishing. Final audit: every product/spec traces to the xlsx/docx, logo used as-is, imagery only from the catalog, all three languages complete and RTL-correct.

Build the entire site end to end, test it, fix issues, and publish it when complete. Report the finished result.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://glory-anse.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/41955f4f-0df7-42a8-9d00-9d3ef88391d2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
