# kantao.space — Website Rebuild

Rebuild of the KANTAO TECHNOLOGY (HK) LIMITED website (kantao.space),
reconstructed from its live content. The original source code was lost
(the live site was deployed from a local machine and never pushed to Git),
so this repository is a clean-room rebuild: structure first, then content
filled in from a fresh fetch of the live site (2026-11-25). All 24 routes
(25 paths × `zh-hk` + `en`, minus the hidden product page) are filled with
the fetched copy, in both locales; page content lives in `lib/content.ts`
and page titles/descriptions in `lib/meta.ts`, transcribed from the fetch
by parsing the live HTML — no copy was invented.

## Deliberately hidden: Satellite AI (in preparation)

The Satellite AI product is still in preparation and was deliberately
hidden from this rebuild:

- No `/satellite-ai` route exists.
- The homepage has no subscription-pricing or "Satellite AI subscription
  preview" section.
- On `/ai-facts`, the in-preparation product disclosure paragraph and its
  indicative USD pricing (Research USD 299 / Professional USD 999 /
  Enterprise USD 2,499+ per month, annual from USD 29,988, one-off pilot
  USD 1,990–4,990) were removed. The rest of the page — company identity,
  core capabilities, use cases, crawler policy and wording boundary — is
  published as served.
- No internal links to `/satellite-ai` exist anywhere, and `sitemap.xml`
  contains no `/satellite-ai` URLs.
- Passing mentions of the product in FAQ and whitepaper answers (e.g. a
  planned 6–8 week subscription pilot) were also removed.

Do not re-add these until the product is ready to launch.

## Contact form

The enquiry form on `/contact` and `/card/eason-lian` has the live site's
exact fields (name, organisation, email, phone, region, interest select
with 9 options, message, privacy-consent checkbox, hidden `website`
honeypot). There is no server backend: submitting opens the visitor's own
mail client with a pre-filled email to `info@kantao.space` (mailto
fallback), and the form says so. The original's pre-submit security
verification cannot be reproduced without a backend and was replaced by
this fallback.

## Not reproduced

- The floating "AI 顧問 / AI Adviser" chat widget (needs a backend).
- The interactive plan-finder calculator, model-library filters and demo
  from the hidden `/satellite-ai` page (captured only as visible text, and
  the demo belonged to the hidden page). Where a live page had such a
  widget, its content is rendered as static text/tables instead.
- The zh-hk privacy/terms pages are genuinely much shorter than the en
  versions on the live site (condensed, not a fetch error) and are
  reproduced as served.

## Tech stack

- Next.js 16 (App Router) + React 19 + TypeScript (strict)
- Plain CSS only — no Tailwind, no extra dependencies
- Bilingual routing under `/[locale]` (`zh-hk` and `en`); `/` redirects to `/zh-hk`

## Run locally

```bash
npm install
npm run dev
npm run build
```

Then open http://localhost:3000 — you will be redirected to `/zh-hk`.

## Deploy on Vercel

1. Push this repository to GitHub.
2. In Vercel, import the repository and choose the **Next.js** framework preset.
3. Deploy — no environment variables are required (see `.env.example`).
