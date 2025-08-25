import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="brand">Full Stack + AI</div>
        <nav className="nav-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

