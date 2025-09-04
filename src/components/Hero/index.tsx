import React, { useState, useEffect } from 'react';
import { useTypewriter } from '../../hooks/useTypewriter';
import styles from './Hero.module.css';

interface HeroProps {
  photoPath?: string;
}

export const Hero: React.FC<HeroProps> = ({ photoPath }) => {
  const [imageExists, setImageExists] = useState(false);
  
  const taglinePhrases = [
    "SaaS Platforms · Cloud-Native · AI-Augmented Development",
    "Scalable Web & Mobile Apps · Next.js · React Native",
    "Serverless Architectures · AWS · Edge Deployments",
    "Pragmatic AI Adoption in Testing & Delivery",
    "Logistics, E-Commerce & Enterprise Solutions at Scale",
    "Shipping Resilient Code with SOLID Principles",
    "Multilingual Platforms · CMS Integrations · Global Reach",
    "Automated Workflows · CI/CD · DevOps Mindset",
  ];
  
  const { text } = useTypewriter({ phrases: taglinePhrases });
  
  // Check if image exists when photoPath changes
  useEffect(() => {
    if (photoPath) {
      const img = new Image();
      img.onload = () => setImageExists(true);
      img.onerror = () => setImageExists(false);
      img.src = photoPath;
    } else {
      setImageExists(false);
    }
  }, [photoPath]);

  return (
    <section id="hero" className={`${styles.hero} container`}>
      <div className={`${styles.heroGrid} ${imageExists ? styles.heroGridWithPhoto : styles.heroGridWithoutPhoto}`}>
        <div className={styles.heroContent}>
          <div className={styles.tagline}>
            {text}
            <span className={styles.cursor}>|</span>
          </div>
          <h1 className={styles.title}>Full-Stack Developer | AI-Enhanced Engineering</h1>
          <p className={styles.subline}>
            I'm a full stack developer who enjoys turning ideas into scalable, resilient software. Over the years, I've shipped
            production systems with React/Next.js on the front end and Node.js services on the back — containerized with Docker
            and deployed to AWS. I adopt AI tools pragmatically: AI agents help me generate and evolve tests, while Cursor speeds
            up implementation without compromising clarity, patterns, or maintainability. My approach is concise, collaborative,
            and outcome-driven.
          </p>
          <div className={styles.heroCta}>
            <a className="btn" href="#projects">View Projects</a>
            <a className="btn" href="#contact" style={{ background: 'linear-gradient(135deg, var(--accent), var(--primary))' }}>Get in Touch</a>
          </div>
        </div>
        {imageExists && (
          <div className={styles.heroImagePlaceholder}>
            <div className={styles.circleImage}>
              <img 
                src={photoPath} 
                alt="Profile photo" 
                className={styles.profilePhoto}
              />
            </div>
          </div>
        )}
        <div className={styles.heroCard}>
          <h3>AI-Accelerated Practices</h3>
          <p>
            I integrate AI agents into CI for test authoring and maintenance, and use Cursor to speed up implementation while preserving code quality.
          </p>
          <div className="stack">
            <span className="pill">React</span>
            <span className="pill">Next.js</span>
            <span className="pill">Node.js</span>
            <span className="pill">Docker</span>
            <span className="pill">AWS</span>
            <span className="pill">SQL/NoSQL</span>
            <span className="pill">AI Agents</span>
            <span className="pill">Cursor</span>
          </div>
        </div>
      </div>
    </section>
  );
};

