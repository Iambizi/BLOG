import { Metadata } from 'next';
import styles from './about.module.scss';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about who I am, what I do, and how to connect.',
};

export default function AboutPage() {
  return (
    <div className="page-container">
      <div className={styles.wrapper}>
        <div className={styles.profileImagePlaceholder}></div>
        
        <h1 className={styles.title}>{siteConfig.realname}</h1>
        
        <div className={styles.subtitleRow}>
          <span className={styles.location}>Internet</span>
          <div className={styles.socialIcons}>
            <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 448 512" fill="currentColor" width="20" height="20">
                <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM448 290c0-120.4-97.6-218-218-218-120.4 0-218 97.6-218 218 0 104.9 73.1 193.3 173 213.6-1.5-12.7-2.1-32.9.4-46.7 2.1-11.4 14.1-59.5 14.1-59.5 0 0-3.6-7.3-3.6-18 0-16.9 9.8-29.5 22-29.5 10.4 0 15.4 7.8 15.4 17.1 0 10.4-6.6 26.1-10.1 40.6-2.9 12.1 6.1 21.9 18 21.9 21.6 0 38.1-22.8 38.1-55.6 0-29.2-21-49.6-51.1-49.6-34.6 0-54.9 25.9-54.9 52.7 0 10.4 4 21.7 9 27.8 1 1.2 1.1 2.2.8 3.5-.9 3.8-3 12.5-3.4 14.1-.5 2-1.7 2.4-3.7 1.5-13.8-6.1-22.5-25.3-22.5-40.8 0-33.3 24.2-63.9 69.8-63.9 36.6 0 65.1 26.1 65.1 61.2 0 36.4-23 65.6-54.8 65.6-10.7 0-20.8-5.6-24.2-12.2l-6.6 25.2c-2.4 9.1-8.9 20.5-13.2 27.5 11 3.4 22.8 5.2 35.1 5.2 120.4 0 218-97.6 218-218zm-229.3 93.8c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1v0z"/>
              </svg>
            </a>
            <a href="https://x.com/amirbusy_" target="_blank" rel="noopener noreferrer" aria-label="X">
              <img src="/social-media-icons/Platform=X (Twitter), Color=Original.svg" alt="X" width={18} height={18} />
            </a>
            <a href={siteConfig.socials.threads} target="_blank" rel="noopener noreferrer" aria-label="Threads">
              <img src="/social-media-icons/Platform=Threads, Color=Original.svg" alt="Threads" width={20} height={20} />
            </a>
            <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src="/social-media-icons/Platform=LinkedIn, Color=Original.svg" alt="LinkedIn" width={20} height={20} />
            </a>
          </div>
        </div>

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

        <div className={styles.newsletter}>
          <p className={styles.newsletterText}>Get occasional AI insights — creators and builders</p>
          <div className={styles.form}>
            <input type="email" placeholder="you@example.com" className={styles.input} />
            <button type="button" className={styles.button}>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
