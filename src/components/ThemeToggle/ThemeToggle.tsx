'use client';

import { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.scss';

type Theme = 'light' | 'dark' | 'system';

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('system');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored) {
      setTheme(stored);
      applyTheme(stored);
    }
  }, []);

  function applyTheme(t: Theme) {
    const root = document.documentElement;
    if (t === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    } else {
      root.setAttribute('data-theme', t);
    }
  }

  function cycle() {
    const order: Theme[] = ['light', 'dark', 'system'];
    const next = order[(order.indexOf(theme) + 1) % order.length];
    setTheme(next);
    localStorage.setItem('theme', next);
    applyTheme(next);
  }

  const icon = theme === 'light' ? '☀️' : theme === 'dark' ? '🌙' : '💻';

  return (
    <button
      className={styles.toggle}
      onClick={cycle}
      aria-label={`Theme: ${theme}. Click to change.`}
      title={`Theme: ${theme}`}
    >
      <span className={styles.icon}>{icon}</span>
    </button>
  );
}
