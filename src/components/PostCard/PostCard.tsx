import Link from 'next/link';
import { PostMeta } from '@/lib/content';
import { TagChip } from '@/components/TagChip/TagChip';
import styles from './PostCard.module.scss';

interface PostCardProps {
  post: PostMeta;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className={styles.card}>
      <Link href={`/writing/${post.slug}`} className={styles.link}>
        <div className={styles.meta}>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </time>
          <span className={styles.dot}>·</span>
          <span>{post.readingTime}</span>
        </div>
        <h3 className={styles.title}>{post.title}</h3>
        {post.description && (
          <p className={styles.excerpt}>{post.description}</p>
        )}
      </Link>
      {post.tags.length > 0 && (
        <div className={styles.tags}>
          {post.tags.map((tag) => (
            <TagChip key={tag} tag={tag} />
          ))}
        </div>
      )}
    </article>
  );
}
