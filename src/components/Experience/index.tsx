import React from 'react';
import styles from './Experience.module.css';

type ExperienceItem = {
  period: string;
  title: string;
  company: string;
  achievements: string[];
};

const items: ExperienceItem[] = [
  {
    period: '2023 — Present',
    title: 'Senior Full Stack Developer',
    company: 'SaaS Platform',
    achievements: [
      'Led AI adoption: integrated agents for test generation and triage',
      'Delivered Next.js features with Cursor-assisted workflows, reducing cycle time',
      'Scaled Node.js services with Docker on AWS (ECS/Fargate)'
    ]
  },
  {
    period: '2020 — 2023',
    title: 'Full Stack Developer',
    company: 'Fintech',
    achievements: [
      'Built real-time dashboards and role-based access controls',
      'Owned CI/CD improvements and observability with OpenTelemetry',
      'Mentored devs on TypeScript best practices'
    ]
  },
  {
    period: '2017 — 2020',
    title: 'Software Engineer',
    company: 'Startup',
    achievements: [
      'Shipped MVP to production and grew to thousands of users',
      'Implemented caching and performance optimizations (P95 under 150ms)',
      'Introduced end-to-end testing culture'
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="container">
      <h2>Experience</h2>
      <div className={styles.timeline} style={{ marginTop: 16 }}>
        {items.map((item) => (
          <div className={styles.timelineItem} key={item.period + item.title}>
            <h3>{item.period} · {item.title} — {item.company}</h3>
            <ul>
              {item.achievements.map((a) => (
                <li key={a} style={{ color: 'var(--muted)' }}>{a}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

