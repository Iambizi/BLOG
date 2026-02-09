import { ReactNode } from 'react';
import styles from './mdx.module.scss';

type CalloutType = 'note' | 'warning' | 'tip';

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}

const icons: Record<CalloutType, string> = {
  note: 'ℹ️',
  warning: '⚠️',
  tip: '💡',
};

export function Callout({ type = 'note', title, children }: CalloutProps) {
  return (
    <aside className={`${styles.callout} ${styles[`callout_${type}`]}`}>
      <div className={styles.calloutHeader}>
        <span className={styles.calloutIcon}>{icons[type]}</span>
        <span className={styles.calloutTitle}>
          {title || type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </div>
      <div className={styles.calloutBody}>{children}</div>
    </aside>
  );
}

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
}

export function Figure({ src, alt, caption }: FigureProps) {
  return (
    <figure className={styles.figure}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className={styles.figureImg} />
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}

interface QuoteProps {
  children: ReactNode;
  author?: string;
}

export function Quote({ children, author }: QuoteProps) {
  return (
    <blockquote className={styles.quote}>
      {children}
      {author && <cite className={styles.cite}>— {author}</cite>}
    </blockquote>
  );
}
