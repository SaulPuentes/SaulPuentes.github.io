import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">© {new Date().getFullYear()} Full Stack + AI — Deployed on GitHub Pages</div>
    </footer>
  );
};

