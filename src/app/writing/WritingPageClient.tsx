'use client';

import { useState, useMemo } from 'react';
import { PostMeta } from '@/lib/content';
import { PostCard } from '@/components/PostCard/PostCard';
import { TagChip } from '@/components/TagChip/TagChip';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import styles from './writing.module.scss';

interface WritingPageClientProps {
  posts: PostMeta[];
  tags: string[];
}

export function WritingPageClient({ posts, tags }: WritingPageClientProps) {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let result = posts;

    if (activeTag) {
      result = result.filter((p) => p.tags.includes(activeTag));
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return result;
  }, [posts, search, activeTag]);

  return (
    <div className="page-container">
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>Writing</h1>
          <p className={styles.subtitle}>
            {posts.length} post{posts.length !== 1 ? 's' : ''} on technology,
            design, and building.
          </p>
        </header>

        <div className={styles.controls}>
          <SearchBar value={search} onChange={setSearch} />
          <div className={styles.tags}>
            <TagChip
              tag="All"
              active={activeTag === null}
              onClick={() => setActiveTag(null)}
            />
            {tags.map((tag) => (
              <TagChip
                key={tag}
                tag={tag}
                active={activeTag === tag}
                onClick={() =>
                  setActiveTag(activeTag === tag ? null : tag)
                }
              />
            ))}
          </div>
        </div>

        <div className={styles.results}>
          {filtered.length === 0 ? (
            <p className={styles.empty}>
              No posts found. Try a different search or tag.
            </p>
          ) : (
            filtered.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
