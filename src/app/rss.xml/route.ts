import { Feed } from 'feed';
import { getAllPosts } from '@/lib/content';
import { siteConfig } from '@/lib/site';

export async function GET() {
  const posts = getAllPosts();

  const feed = new Feed({
    title: siteConfig.title,
    description: siteConfig.description,
    id: siteConfig.url,
    link: siteConfig.url,
    language: 'en',
    copyright: `© ${new Date().getFullYear()} ${siteConfig.name}`,
    feedLinks: {
      rss2: `${siteConfig.url}/rss.xml`,
    },
    author: {
      name: siteConfig.name,
      link: siteConfig.url,
    },
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${siteConfig.url}/writing/${post.slug}`,
      link: `${siteConfig.url}/writing/${post.slug}`,
      description: post.description,
      date: new Date(post.date),
      author: [{ name: siteConfig.name }],
    });
  });

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
