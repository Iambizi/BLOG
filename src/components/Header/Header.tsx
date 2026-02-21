'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/lib/site';
import styles from './Header.module.scss';

export function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          {siteConfig.name.includes('(aka Busy Metal)') ? (
            <>
              {siteConfig.name.replace('(aka Busy Metal)', '').trim()}{' '}
              <span style={{ fontWeight: 400, color: 'var(--color-muted)', fontSize: '13px' }}>
                (aka Busy Metal)
              </span>
            </>
          ) : (
            siteConfig.name
          )}
        </Link>
        <nav className={styles.nav}>
          {siteConfig.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${
                pathname.startsWith(link.href) ? styles.active : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className={styles.abLogoContainer}>
            <img src="/AB-logo.PNG" alt="AB Logo" className={styles.abLogo} />
          </div>
        </nav>
      </div>
    </header>
  );
}
