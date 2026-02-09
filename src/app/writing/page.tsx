import { Metadata } from 'next';
import { getAllPosts, getAllTags } from '@/lib/content';
import { WritingPageClient } from './WritingPageClient';

export const metadata: Metadata = {
  title: 'Writing',
  description: 'All posts — essays, notes, and guides on technology, design, and building.',
};

export default function WritingPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <WritingPageClient
      posts={posts.map(({ content, ...meta }) => meta)}
      tags={tags}
    />
  );
}
