import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.tagline}>{siteConfig.description}</p>
        <nav className={styles.links}>
          {siteConfig.nav.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={styles.socials}>
          {Object.entries(siteConfig.socials).map(([name, url]) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={name}
            >
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </a>
          ))}
          <Link href="/rss.xml" className={styles.socialLink}>
            RSS
          </Link>
        </div>
        <p className={styles.copyright}>
          © {new Date().getFullYear()}{' '}
          {siteConfig.name.includes('(aka Busy Metal)') ? (
            <>
              {siteConfig.name.replace('(aka Busy Metal)', '').trim()}{' '}
              <span style={{ fontWeight: 400, color: 'var(--color-muted)' }}>
                (aka Busy Metal)
              </span>
            </>
          ) : (
            siteConfig.name
          )}
        </p>
      </div>
    </footer>
  );
}
