# Blog

A minimal, editorial blog built with Next.js, TypeScript, SCSS, and MDX. Deployed on Vercel.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding Posts

Create a new `.mdx` file in `/content/writing/`:

```bash
touch content/writing/my-new-post.mdx
```

Add frontmatter at the top:

```yaml
---
title: "My New Post"
date: "2026-02-10"
description: "A short description for previews and SEO."
tags: ["topic", "another-topic"]
draft: false
featured: false
---
```

Write your content below the frontmatter using Markdown and MDX components.

### Available MDX Components

- `<Callout type="note|warning|tip" title="Optional title">Content</Callout>`
- `<Figure src="/path/to/image.jpg" alt="description" caption="Optional caption" />`
- `<Quote author="Name">Quote text</Quote>`

### Setting Featured Posts

Set `featured: true` in the post's frontmatter. Featured posts appear in a dedicated section on the home page.

### Draft Posts

Set `draft: true` to hide a post from production. Drafts are visible in development.

## Updating /now

Edit `src/app/now/page.tsx` directly. Update the "Last updated" date when you make changes.

## Customization

### Site Configuration

Edit `src/lib/site.ts` to update:
- Site name, title, description
- Social links
- Navigation items
- Repository URL

### Styling

- **Design tokens**: `src/styles/_tokens.scss` (colors, spacing, fonts)
- **Typography**: `src/styles/_typography.scss`
- **Globals**: `src/styles/globals.scss`
- **Components**: Each component has a `.module.scss` file

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import the repo in [Vercel](https://vercel.com)
3. Deploy — no configuration needed

### Manual Build

```bash
npm run build
npm start
```

## Features

- ✅ Next.js App Router + TypeScript
- ✅ SCSS Modules (no Tailwind)
- ✅ MDX content with syntax highlighting
- ✅ Dark mode + system preference
- ✅ RSS feed (`/rss.xml`)
- ✅ Sitemap + robots.txt
- ✅ Dynamic OG images
- ✅ Table of Contents (auto from headings)
- ✅ Search + tag filtering
- ✅ Reading time calculation
- ✅ Responsive typography
- ✅ Keyboard shortcut: `/` focuses search
- ✅ Edit on GitHub link
- ✅ `/llms.txt` for AI navigation

## Project Structure

```
├── content/writing/       # MDX posts
├── src/
│   ├── app/               # Next.js pages and routes
│   ├── components/        # React components
│   ├── lib/               # Content utilities + site config
│   └── styles/            # SCSS tokens, typography, globals
├── next.config.ts
└── package.json
```
