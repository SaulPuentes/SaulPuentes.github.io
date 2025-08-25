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

## Deploy to GitHub Pages

- Enable Pages in the repo settings using GitHub Actions.
- Workflow at `.github/workflows/pages.yml` builds and publishes `dist`.
- `base: './'` in `vite.config.ts` for portability.

### Configure

- Update links in `src/components/Contact.tsx`.
- Set site title in `index.html` and brand in `Navbar`.

## Sections

Hero, About, Skills, Projects, Experience, Contact with a subtle animated background.

## License

MIT
