# The 5 Loaves Agency (5LA)

Website for **The 5 Loaves Agency, LLC** — a multidisciplinary experience
company that designs the systems, people, technology, and stories behind
meaningful experiences across **Business · Technology · Training · Media**.

## Stack

- [Next.js](https://nextjs.org) 15 (App Router) + React 19 + TypeScript
- Hand-authored design-token system (CSS custom properties) + CSS Modules
- Typography via `next/font` — Playfair Display (serif) + Lato (sans)
- Deployed on [Vercel](https://vercel.com)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Project structure

```
public/brand/        Official 5LA logo assets (do not alter)
src/app/             Routes (App Router), sitemap, robots, global styles
src/components/      Reusable layout + UI components
src/config/          Single source of truth: navigation, sectors, companies, site
src/lib/             Fonts + SEO helpers
```

## Design system reference

An internal, non-indexed design-system reference is available at `/style-guide`
(colors, typography, buttons, cards, forms, and section components).

## Content placeholders

Contact details, social links, statistics, photography, company profiles, and
legal copy are intentionally left as clearly-labeled placeholders until final
information is provided. Search the codebase for `PLACEHOLDER` to find them.
