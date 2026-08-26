# Mashhad — US & UK TV Series Reviews (EN / FR / DE)

A fast, static Astro site covering American and British TV series, with full
English / French / German versions and 10 original trending articles.

## Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:4321` — it redirects to `/en/`.

## Build for production

```bash
npm run build
```

Verified build output: **34 static pages, 336 KB total, zero client-side JS
on the homepage.** That's what makes it fast — Astro ships plain HTML/CSS by
default; there is no framework runtime to download or hydrate.

## Structure

```
src/
  data/trending.js         ← the 10 articles, each with en/fr/de translations
  layouts/Layout.astro     ← <head>, hreflang tags, canonical URL
  components/
    Header.astro           ← nav + language switcher
    LangSwitcher.astro     ← EN / FR / DE buttons
    TrendCard.astro        ← article card (placeholder poster, no scraped images)
    AdSlot.astro           ← ad placeholder (drop in AdSense here)
  pages/
    index.astro            ← redirects to /en/
    en/index.astro, fr/index.astro, de/index.astro
    en/trending/[slug].astro, fr/trending/[slug].astro, de/trending/[slug].astro
```

Each language lives in its own folder with its own URLs
(`/en/trending/ted-lasso-season-4`, `/fr/trending/...`, `/de/trending/...`),
which is what search engines expect — see the note on SEO below.

## Why no real posters/images

The images are intentionally stylized placeholder cards, not photos pulled
from IMDb or any other site. IMDb's posters, stills, and photos are
copyrighted by studios/distributors, and IMDb's terms prohibit scraping or
hotlinking its images — so a fast, safe site cannot legally source images
from it directly. Two legitimate paths forward:
- **TMDb API** (themoviedb.org) — free API, official poster artwork, requires
  attribution per their terms.
- **Official press kits / studio media rooms** — usually licensed for
  editorial use with credit.

## Monetization

- `AdSlot.astro` is a placeholder — paste your AdSense (or other network)
  script inside it.
- Every `TrendCard` and article page can carry an affiliate "where to watch"
  link — point it to your Amazon Associates / streaming-affiliate links.

## Next steps

- Move `trending.js` data into Markdown + Astro Content Collections so you
  can add articles without touching code.
- Add an XML sitemap (`@astrojs/sitemap`) and submit it per language.
- Add Open Graph + Twitter card meta tags per article.
