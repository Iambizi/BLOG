'use client';

import { useMemo } from 'react';
import {
  TableOfContents,
  TocItem,
} from '@/components/TableOfContents/TableOfContents';

interface PostTableOfContentsProps {
  content: string;
}

export function PostTableOfContents({ content }: PostTableOfContentsProps) {
  const headings = useMemo(() => {
    const regex = /^(#{2,3})\s+(.+)$/gm;
    const items: TocItem[] = [];
    let match;

    while ((match = regex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-');
      items.push({ id, text, level });
    }

    return items;
  }, [content]);

  return <TableOfContents headings={headings} />;
}
