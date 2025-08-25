import React, { useState } from 'react';

export const Hero: React.FC = () => {
  const [showImage, setShowImage] = useState(false);
  return (
    <section id="hero" className="hero container">
      <div className="hero-grid">
        <div>
          <div className="tagline">Full Stack Developer · AI-Augmented Workflows</div>
          <h1>
            Building modern products with React, Next.js, Node.js — accelerated by AI agents and Cursor.
          </h1>
          <p className="subline">
            7+ years across SaaS, fintech, and developer tools. I focus on AI-enhanced productivity: rapid prototyping, automated testing, and continuous improvement.
          </p>
          <div className="hero-cta">
            <a className="btn" href="#projects">View Projects</a>
            <a className="btn" href="#contact" style={{ background: 'linear-gradient(135deg, var(--accent), var(--primary))' }}>Get in Touch</a>
            <button className="btn" onClick={() => setShowImage((v) => !v)} type="button">
              {showImage ? 'Hide Image' : 'Show Image'}
            </button>
            <a className="btn" href="/cv/CV.pdf" download>Download CV</a>
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
        {showImage && (
          <div className="hero-card" style={{ gridColumn: '1 / -1' }}>
            <img src="/cv/img/avatar.jpg" alt="Profile" style={{ width: '100%', borderRadius: 12, display: 'block' }} />
          </div>
        )}
      </div>
    </section>
  );
};

