import React from 'react';

type Project = {
  title: string;
  role: string;
  description: string;
  tools: string[];
  outcomes: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: 'AI-Assisted Test Pipeline',
    role: 'Lead Full Stack Developer',
    description:
      'Integrated AI agents into CI to generate and maintain E2E tests, reducing flakiness and authoring time.',
    tools: ['Next.js', 'Playwright', 'Node.js', 'GitHub Actions', 'AI Agents'],
    outcomes: ['-45% test maintenance time', '+20% deployment frequency', 'Improved coverage by +18%'],
    link: '#'
  },
  {
    title: 'Realtime Analytics Dashboard',
    role: 'Full Stack Developer',
    description:
      'Built a responsive dashboard for streaming metrics with fine-grained access control and caching.',
    tools: ['React', 'Node.js', 'WebSockets', 'Redis', 'AWS ECS'],
    outcomes: ['P95 latency under 120ms', '99.95% uptime', 'Daily active users +35%'],
    link: '#'
  },
  {
    title: 'Dev Tooling with Cursor',
    role: 'Developer Experience',
    description:
      'Adopted Cursor-driven workflows to accelerate feature delivery while preserving code standards.',
    tools: ['Cursor', 'TypeScript', 'ESLint', 'Prettier'],
    outcomes: ['Cycle time -30%', 'PR lead time -25%', 'Fewer regressions via quick test updates'],
    link: '#'
  },
  {
    title: 'Microservices Migration',
    role: 'Backend & Platform',
    description:
      'Decomposed a monolith into containerized services with observability and CI/CD.',
    tools: ['Docker', 'Node.js', 'PostgreSQL', 'AWS Fargate', 'OpenTelemetry'],
    outcomes: ['Release risk reduced', 'Horizontal scaling support', 'Cost optimized by 22%'],
    link: '#'
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="container">
      <h2>Projects / Case Studies</h2>
      <div className="grid cols-3" style={{ marginTop: 16 }}>
        {projects.map((p) => (
          <div className="card" key={p.title}>
            <h3>{p.title}</h3>
            <p><strong>{p.role}</strong></p>
            <p>{p.description}</p>
            <div className="stack">
              {p.tools.map((t) => (
                <span key={t} className="pill">{t}</span>
              ))}
            </div>
            <ul>
              {p.outcomes.map((o) => (
                <li key={o} style={{ color: 'var(--muted)' }}>{o}</li>
              ))}
            </ul>
            {p.link && (
              <a className="btn" href={p.link} target="_blank" rel="noreferrer">View</a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

