import { Metadata } from 'next';
import styles from './now.module.scss';

export const metadata: Metadata = {
  title: 'Now',
  description: 'What I\'m currently focused on and working towards.',
};

export default function NowPage() {
  return (
    <div className="page-container">
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Now</h1>
        <p className={styles.updated}>Last updated: February 9, 2026</p>

        <div className={styles.content}>
          <p>
            This is a{' '}
            <a
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              now page
            </a>
            . It&apos;s a snapshot of what I&apos;m focused on at this point in my life.
          </p>

          <h2>Working on</h2>
          <ul>
            <li>Building this blog and writing regularly</li>
            <li>Exploring new ideas in AI and tooling</li>
            <li>Reading more long-form content</li>
          </ul>

          <h2>Learning</h2>
          <ul>
            <li>Systems design and architecture patterns</li>
            <li>Writing better technical prose</li>
            <li>The craft of simplicity in software</li>
          </ul>

          <h2>Reading</h2>
          <ul>
            <li><em>Show Your Work!</em> by Austin Kleon</li>
            <li><em>A Philosophy of Software Design</em> by John Ousterhout</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
