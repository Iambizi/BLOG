import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import { getAllPosts, getPostBySlug, getAdjacentPosts } from '@/lib/content';
import { siteConfig } from '@/lib/site';
import { TagChip } from '@/components/TagChip/TagChip';
import { Callout, Figure, Quote } from '@/components/mdx/components';
import { PostTableOfContents } from './PostTableOfContents';
import styles from './post.module.scss';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      url: `${siteConfig.url}/writing/${post.slug}`,
      images: [`${siteConfig.url}/og?title=${encodeURIComponent(post.title)}`],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

const mdxComponents = {
  Callout,
  Figure,
  Quote,
};

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { prev, next } = getAdjacentPosts(slug);

  return (
    <div className="page-container">
      <div className={styles.layout}>
        <article className={styles.article}>
          <Link href="/writing" className={styles.back}>
            ← Back to Writing
          </Link>

          <header className={styles.header}>
            <div className={styles.meta}>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span className={styles.dot}>·</span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className={styles.title}>{post.title}</h1>
            {post.tags.length > 0 && (
              <div className={styles.tags}>
                {post.tags.map((tag) => (
                  <TagChip key={tag} tag={tag} />
                ))}
              </div>
            )}
          </header>

          <div className={styles.content}>
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [
                    rehypeSlug,
                    [
                      rehypePrettyCode,
                      {
                        theme: {
                          dark: 'github-dark-dimmed',
                          light: 'github-light',
                        },
                        keepBackground: false,
                      },
                    ],
                    [
                      rehypeAutolinkHeadings,
                      { behavior: 'wrap' },
                    ],
                  ],
                },
              }}
            />
          </div>

          {/* Edit on GitHub */}
          <div className={styles.editLink}>
            <a
              href={`${siteConfig.repo}/edit/main/content/writing/${slug}.mdx`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Edit this page on GitHub →
            </a>
          </div>

          {/* Previous / Next */}
          <nav className={styles.adjacentNav}>
            {prev ? (
              <Link href={`/writing/${prev.slug}`} className={styles.adjacentLink}>
                <span className={styles.adjacentLabel}>← Previous</span>
                <span className={styles.adjacentTitle}>{prev.title}</span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/writing/${next.slug}`}
                className={`${styles.adjacentLink} ${styles.next}`}
              >
                <span className={styles.adjacentLabel}>Next →</span>
                <span className={styles.adjacentTitle}>{next.title}</span>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </article>

        <aside className={styles.sidebar}>
          <PostTableOfContents content={post.content} />
        </aside>
      </div>
    </div>
  );
}
