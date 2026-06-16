# Deployment

This project is ready to deploy on Vercel as a Vite React app.

## Vercel Settings

- Framework Preset: `Vite`
- Install Command: `npm ci`
- Build Command: `npm run build`
- Output Directory: `dist`

These settings are also captured in `vercel.json`.

## Deploy From GitHub

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Keep the detected project settings, or use the settings above.
4. Deploy.

## Deploy With Vercel CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

No environment variables are currently required.

## SPA Routing

`vercel.json` includes a rewrite from all paths to `index.html`, so React Router and anchor-based navigation can load correctly on refresh.
