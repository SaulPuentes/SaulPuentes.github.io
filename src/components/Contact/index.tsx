import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="container">
      <h2>Contact</h2>
      <p>Let’s build something intelligent together.</p>
      <div className="stack" style={{ marginTop: 12 }}>
        <a className="btn" href="mailto:you@example.com">Email</a>
        <a className="btn" href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="btn" href="https://github.com/your-handle" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </section>
  );
};

