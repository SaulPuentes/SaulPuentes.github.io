import React, { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = [
    "Full Stack Developer | AI-Enhanced Software Engineer",
    "Building Scalable Platforms with AI-Driven Workflows",
    "Software Engineer | Web, Cloud & AI-Powered Solutions",
  ];
  
  const currentPhrase = phrases[phraseIndex];
  
  useEffect(() => {
    const typingSpeed = isDeleting ? 30 : 80;
    const deletingSpeed = 50;
    
    if (!isDeleting && currentIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setText(currentPhrase.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex > 0) {
      const timeout = setTimeout(() => {
        setText(currentPhrase.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    } else if (currentIndex === currentPhrase.length && !isDeleting) {
      // Pause at the end before deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timeout);
    } else if (currentIndex === 0 && isDeleting) {
      // Move to next phrase
      setIsDeleting(false);
      setPhraseIndex((phraseIndex + 1) % phrases.length);
    }
  }, [currentIndex, isDeleting, currentPhrase, phraseIndex, phrases.length]);

  return (
    <section id="hero" className="hero container">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="tagline">Full Stack Developer · AI-Augmented Workflows</div>
          <h1>
            {text}
            <span className="cursor">|</span>
          </h1>
          <p className="subline">
            I'm a full stack developer who enjoys turning ideas into scalable, resilient software. Over the years, I've shipped
            production systems with React/Next.js on the front end and Node.js services on the back — containerized with Docker
            and deployed to AWS. I adopt AI tools pragmatically: AI agents help me generate and evolve tests, while Cursor speeds
            up implementation without compromising clarity, patterns, or maintainability. My approach is concise, collaborative,
            and outcome-driven.
          </p>
          <div className="hero-cta">
            <a className="btn" href="#projects">View Projects</a>
            <a className="btn" href="#contact" style={{ background: 'linear-gradient(135deg, var(--accent), var(--primary))' }}>Get in Touch</a>
          </div>
        </div>
        <div className="hero-image-placeholder">
          <div className="circle-image">
            <div className="image-placeholder">
              <span>Photo</span>
            </div>
          </div>
        </div>
        <div className="hero-card">
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

