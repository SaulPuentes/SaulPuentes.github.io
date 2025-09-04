import React from 'react';
import styles from './Skills.module.css';

const Item: React.FC<{ icon: string; label: string }> = ({ icon, label }) => (
  <div className={styles.skillItem} title={label}>
    <div className={styles.skillIcon} aria-hidden>
      <span style={{ fontSize: 16 }}>{icon}</span>
    </div>
    <div className={styles.skillLabel}>{label}</div>
  </div>
);

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="container">
      <h2>Skills & Tools</h2>
      <div className="grid cols-2" style={{ marginTop: 16 }}>
        <div className="card">
          <h3>Core Dev Stack</h3>
          <p>Modern, production-tested technologies for building reliable web apps.</p>
          <div className={styles.skillGrid}>
            <Item icon="⚛️" label="React" />
            <Item icon="⏭️" label="Next.js" />
            <Item icon="🟢" label="Node.js" />
            <Item icon="🐳" label="Docker" />
            <Item icon="☁️" label="AWS" />
            <Item icon="🗄️" label="SQL" />
            <Item icon="📦" label="NoSQL" />
          </div>
        </div>
        <div className="card">
          <h3>AI & Automation</h3>
          <p>Practical integrations that enhance speed and quality.</p>
          <div className={styles.skillGrid}>
            <Item icon="🤖" label="AI Agents" />
            <Item icon="🔤" label="LLM Integrations" />
            <Item icon="✨" label="Cursor Workflows" />
            <Item icon="🎯" label="Prompt Engineering" />
            <Item icon="✅" label="Test Generation" />
            <Item icon="🔍" label="Code Review Assist" />
          </div>
        </div>
      </div>
    </section>
  );
};

