import React from 'react';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navInner}>
        <div className={styles.brand}>Saul Puentes</div>
        <div className={styles.navLinks}>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

