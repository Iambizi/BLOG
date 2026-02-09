import Link from 'next/link';
import styles from './not-found.module.scss';

export default function NotFound() {
  return (
    <div className="page-container">
      <div className={styles.wrapper}>
        <h1 className={styles.code}>404</h1>
        <p className={styles.message}>
          This page doesn&apos;t exist. It might have been moved or deleted.
        </p>
        <div className={styles.links}>
          <Link href="/" className={styles.link}>
            Go home
          </Link>
          <Link href="/writing" className={styles.link}>
            Browse writing
          </Link>
        </div>
      </div>
    </div>
  );
}
