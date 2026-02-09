import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

export interface PostMeta {
  title: string;
  date: string;
  description: string;
  tags: string[];
  draft: boolean;
  featured: boolean;
  slug: string;
  readingTime: string;
}

export interface Post extends PostMeta {
  content: string;
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'writing');

function parseMdxFile(filePath: string): Post | null {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const slug = path.basename(filePath, '.mdx');
  const stats = readingTime(content);

  const post: Post = {
    title: data.title || 'Untitled',
    date: data.date || new Date().toISOString(),
    description: data.description || '',
    tags: data.tags || [],
    draft: data.draft || false,
    featured: data.featured || false,
    slug,
    readingTime: stats.text,
    content,
  };

  return post;
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'));
  const posts = files
    .map((file) => parseMdxFile(path.join(CONTENT_DIR, file)))
    .filter((post): post is Post => post !== null);

  // Filter drafts in production
  const filtered =
    process.env.NODE_ENV === 'production'
      ? posts.filter((p) => !p.draft)
      : posts;

  // Sort by date descending
  return filtered.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  return parseMdxFile(filePath);
}

export function getFeaturedPosts(): Post[] {
  return getAllPosts().filter((p) => p.featured);
}

export function getAllTags(): string[] {
  const allPosts = getAllPosts();
  const tagSet = new Set<string>();
  allPosts.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

export function getAdjacentPosts(slug: string): {
  prev: PostMeta | null;
  next: PostMeta | null;
} {
  const posts = getAllPosts();
  const index = posts.findIndex((p) => p.slug === slug);
  return {
    prev: index < posts.length - 1 ? posts[index + 1] : null,
    next: index > 0 ? posts[index - 1] : null,
  };
}
