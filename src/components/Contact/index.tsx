import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="container">
      <h2>Contact</h2>
      <p>Let’s build something intelligent together <a className="link" href="mailto:saul.puentess@gmail.com">saul.puentess@gmail.com</a>.</p>
      <div className="stack" style={{ marginTop: 12 }}>
        <a className="btn" href="https://www.linkedin.com/in/saul-puentes" target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="btn" href="https://github.com/SaulPuentes" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </section>
  );
};

