# AI-Forward Portfolio (React + Vite)

Production-ready portfolio for a Full Stack Developer with AI expertise.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Project Structure

The project uses a component-based architecture. Each component is located in its own directory, which contains the component's code (`index.tsx`) and its styles (`*.module.css`).

```
src/
├── styles/
│   ├── base.css          # Global styles, variables, and base elements
│   └── shared.css        # Common components (buttons, cards, grids, etc.)
├── components/
│   ├── Navbar/
│   │   ├── index.tsx           # Component logic
│   │   └── Navbar.module.css   # Component-specific styles
│   ├── Hero/
│   │   ├── index.tsx
│   │   └── Hero.module.css
│   └── ...
├── hooks/
│   └── useTypewriter.ts  # Custom hook for typewriter effect
```

### CSS Modules Usage

```tsx
import styles from './Component.module.css';

// Use camelCase class names
<div className={styles.container}>
  <h1 className={styles.title}>Hello World</h1>
</div>
```

## Deploy to GitHub Pages

- Enable Pages in the repo settings using GitHub Actions.
- Workflow at `.github/workflows/pages.yml` builds and publishes `dist`.
- `base: './'` in `vite.config.ts` for portability.

### Configure

- Update links in `src/components/Contact/index.tsx`.
- Set site title in `index.html` and brand in `Navbar`.

## Sections

Hero, About, Skills, Projects, Experience, Contact with a subtle animated background.

## License

MIT

