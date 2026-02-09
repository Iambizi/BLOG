'use client';

import { useEffect, useState } from 'react';
import styles from './TableOfContents.module.scss';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: TocItem[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -60% 0px' }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className={styles.toc} aria-label="Table of contents">
      <button
        className={styles.mobileToggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        On this page
        <svg
          className={`${styles.chevron} ${isOpen ? styles.open : ''}`}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div className={styles.desktopTitle}>On this page</div>
      <ul className={`${styles.list} ${isOpen ? styles.visible : ''}`}>
        {headings.map((h) => (
          <li
            key={h.id}
            className={`${styles.item} ${activeId === h.id ? styles.active : ''}`}
            style={{ paddingLeft: `${(h.level - 2) * 12}px` }}
          >
            <a href={`#${h.id}`} onClick={() => setIsOpen(false)}>
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export type { TocItem };
