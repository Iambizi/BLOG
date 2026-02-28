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
          <span className={styles.location}>Socials</span>
          <div className={styles.socialIcons}>
            <a href="https://instagram.com/amirbusy_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/social-media-icons/instagram.svg" alt="Instagram" width={20} height={20} />
            </a>
            <a href="https://x.com/amirbusy_" target="_blank" rel="noopener noreferrer" aria-label="X">
              <img src="/social-media-icons/x.svg" alt="X" width={18} height={18} />
            </a>
            <a href={siteConfig.socials.threads} target="_blank" rel="noopener noreferrer" aria-label="Threads">
              <img src="/social-media-icons/threads.svg" alt="Threads" width={20} height={20} />
            </a>
            <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src="/social-media-icons/linkedin.svg" alt="LinkedIn" width={20} height={20} />
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
