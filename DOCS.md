# Blog Site — Documentation

## What was built

A complete, deploy-ready blog/essay site — 53 files, pushed to [github.com/Iambizi/BLOG](https://github.com/Iambizi/BLOG).

### Architecture

```
content/writing/*.mdx    → MDX posts with frontmatter
src/lib/content.ts       → Content parsing, reading time, drafts, featured
src/lib/site.ts          → Site config (name, socials, nav)
src/styles/              → SCSS tokens, typography, globals
src/components/          → 8 components, each with SCSS module
src/app/                 → 6 pages + 5 API/meta routes
```

### Pages

| Route | Description |
|-------|-------------|
| `/` | Hero, featured posts, latest posts, about/now cards |
| `/writing` | Search + tag filter, full post list |
| `/writing/[slug]` | Article with sticky ToC, prev/next nav |
| `/about` | Bio, cards, social links |
| `/now` | Current focus, last-updated date |
| `404` | Custom not-found page |

### Routes

| Route | Type |
|-------|------|
| `/rss.xml` | RSS 2.0 feed |
| `/sitemap.xml` | Auto-generated sitemap |
| `/robots.txt` | SEO robots |
| `/llms.txt` | LLM navigation guide |
| `/og?title=...` | Dynamic OG images |

---

## Tech Stack

- **Next.js 16** (App Router) + **TypeScript**
- **SCSS Modules** for component-scoped styles
- **MDX** via `next-mdx-remote` for content
- **rehype-pretty-code** + **shiki** for syntax highlighting
- **gray-matter** for frontmatter parsing
- **reading-time** for reading time calculation
- **feed** package for RSS generation

---

## Verification Results

### Build
- `npm run build` — ✅ Compiled successfully, 14 routes generated
- All static pages prerendered, dynamic routes (RSS, OG, llms.txt) server-rendered

### Visual Testing
- ✅ Home page: hero, featured/latest posts, about/now quick links, footer
- ✅ Writing index: search filters posts, tag chips toggle filtering
- ✅ Post page: MDX renders with syntax highlighting, sticky ToC active
- ✅ Dark mode toggle persists via localStorage, no FOUC
- ✅ Responsive layout works across viewport sizes

---

## Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the `Iambizi/BLOG` repo
3. Deploy — zero configuration needed

---

## Key Files to Customize

| File | What to edit |
|------|-------------|
| `src/lib/site.ts` | Name, URL, socials, nav |
| `src/styles/_tokens.scss` | Colors, spacing, fonts |
| `src/app/page.tsx` | Hero text |
| `src/app/about/page.tsx` | Bio content |
| `src/app/now/page.tsx` | Current focus |

---

## Features

- ✅ Next.js App Router + TypeScript
- ✅ SCSS Modules (no Tailwind)
- ✅ MDX content with syntax highlighting
- ✅ Dark mode + system preference (localStorage)
- ✅ RSS feed (`/rss.xml`)
- ✅ Sitemap + robots.txt
- ✅ Dynamic OG images
- ✅ Table of Contents (auto from headings, sticky desktop, collapsible mobile)
- ✅ Client-side search + tag filtering
- ✅ Reading time calculation
- ✅ Responsive typography with `clamp()`
- ✅ Keyboard shortcut: `/` focuses search
- ✅ Edit on GitHub link
- ✅ `/llms.txt` for AI navigation
- ✅ Previous/Next post navigation
- ✅ Copy code button on code blocks
- ✅ MDX components: Callout, Figure, Quote
- ✅ Draft post support (hidden in production)
- ✅ Featured post pinning
