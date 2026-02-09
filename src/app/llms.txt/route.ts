import { getAllPosts } from '@/lib/content';
import { siteConfig } from '@/lib/site';

export async function GET() {
  const posts = getAllPosts();

  const lines = [
    `# ${siteConfig.name}`,
    '',
    `> ${siteConfig.description}`,
    '',
    '## Site Structure',
    '',
    '- `/` — Home page with featured and latest posts',
    '- `/writing` — All published posts, filterable by tag',
    '- `/writing/[slug]` — Individual post pages',
    '- `/about` — About the author',
    '- `/now` — What the author is currently focused on',
    '- `/rss.xml` — RSS feed',
    '',
    '## Posts',
    '',
    ...posts.map(
      (p) =>
        `- [${p.title}](${siteConfig.url}/writing/${p.slug}) — ${p.description}`
    ),
    '',
    '## Formats',
    '',
    '- All posts are written in MDX',
    '- RSS feed available at /rss.xml',
    '- Sitemap available at /sitemap.xml',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
