import { Metadata } from 'next';
import styles from './about.module.scss';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about who I am, what I do, and how to connect.',
};

export default function AboutPage() {
  return (
    <div className="page-container">
      <div className={styles.wrapper}>
        <h1 className={styles.title}>About me</h1>

        <div className={styles.bio}>
          <p>
            I&apos;m a builder and writer based on the internet. I work at the
            intersection of technology and design, building tools and sharing
            what I learn along the way.
          </p>
          <p>
            I believe in building in public, writing clearly, and shipping often.
            This site is where I collect my thoughts on software, startups, and
            the craft of making things.
          </p>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I do</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Building</h3>
              <p>Software products at the intersection of AI and design.</p>
            </div>
            <div className={styles.card}>
              <h3>Writing</h3>
              <p>Essays and notes on technology, craft, and process.</p>
            </div>
            <div className={styles.card}>
              <h3>Learning</h3>
              <p>Always exploring new tools, frameworks, and ideas.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Connect</h2>
          <ul className={styles.linkList}>
            <li>
              <a
                href="https://github.com/Iambizi"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://threads.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                Threads
              </a>
            </li>
            <li>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                X / Twitter
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
