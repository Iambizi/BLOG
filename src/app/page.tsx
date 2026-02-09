import Link from 'next/link';
import { getAllPosts, getFeaturedPosts } from '@/lib/content';
import { PostCard } from '@/components/PostCard/PostCard';
import styles from './page.module.scss';

export default function Home() {
  const allPosts = getAllPosts();
  const featured = getFeaturedPosts();
  const latest = allPosts.slice(0, 5);

  return (
    <div className="page-container">
      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Writing about technology, design, and building things.
        </h1>
        <p className={styles.heroSub}>
          Essays and notes on software, startups, and the craft of making.
        </p>
      </section>

      {/* Featured */}
      {featured.length > 0 && (
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured</h2>
          </div>
          <div className={styles.postList}>
            {featured.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Latest */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Latest</h2>
          <Link href="/writing" className={styles.viewAll}>
            View all →
          </Link>
        </div>
        <div className={styles.postList}>
          {latest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className={styles.quickLinks}>
        <Link href="/about" className={styles.quickLink}>
          <span className={styles.quickLinkLabel}>About</span>
          <span className={styles.quickLinkDesc}>Who I am and what I do</span>
          <span className={styles.arrow}>→</span>
        </Link>
        <Link href="/now" className={styles.quickLink}>
          <span className={styles.quickLinkLabel}>Now</span>
          <span className={styles.quickLinkDesc}>What I&apos;m focused on right now</span>
          <span className={styles.arrow}>→</span>
        </Link>
      </section>
    </div>
  );
}
