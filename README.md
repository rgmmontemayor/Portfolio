# Roberto Montemayor — Portfolio

A personal developer portfolio built with Next.js, styled after the **Cosmos** design system (warm linen canvas, whisper-weight serif type, single 16px signature radius, monochrome UI) with a few custom additions layered on top.

## Features

- **Cosmos-inspired design system** — linen-canvas background, `Fraunces` serif at weight 350 for display type, flat surfaces with no shadows, one consistent 16px border radius across cards, buttons, and inputs.
- **Dark mode** — toggle in the nav pill, respects the visitor's OS preference on first load, remembers their choice in `localStorage`, and cross-fades all colors smoothly.
- **Floating tech-logo collage** — the hero scatters your actual tech-stack marks (Next.js, React, AWS, TypeScript, etc.) around the headline instead of generic imagery.
- **Dual-direction scrolling tech showcase** — two horizontal marquee rows drifting in opposite directions, pausable on hover.
- **Scroll reveals** — sections and stats fade/count up into view via `IntersectionObserver`, respecting `prefers-reduced-motion`.
- **Fully responsive** — floating nav pill collapses to a mobile menu; grids stack down to a single column.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- React
- Tailwind CSS (utility classes) + inline CSS custom properties for theming
- [lucide-react](https://lucide.dev/) for UI icons

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

Build for production:

```bash
npm run build
npm start
```

## Project Structure

```
app/
  layout.jsx      # root layout — update the `metadata` object here (title, description, favicon)
  page.jsx         # the portfolio page (hero, tech marquee, projects, repos, contact)
  favicon.ico      # replace with your own icon
```

## Customizing

**Content** — `FEATURED` and `REPOS` near the top of `page.jsx` hold your project and repository data. Edit those arrays to add, remove, or update entries; cards and tags render automatically.

**Tech stack marquee** — the `TECH_STACK` array controls what scrolls in the showcase section. Each entry is `{ name, Icon }`; a handful of monochrome logo components (`NextIcon`, `ReactIcon`, `AwsIcon`, etc.) are defined above it — add a new one the same way to include another tool.

**Colors** — all theme colors live as CSS custom properties inside the `<style jsx global>` block in `page.jsx`:

```css
[data-theme="light"] {
  --color-linen-canvas: #f7f5f3;
  --color-ink-black: #0d0d0d;
  --color-paper-white: #ffffff;
  --color-stone: #6e6a69;
  --color-pebble: #9a9796;
}

[data-theme="dark"] {
  --color-linen-canvas: #121110;
  --color-ink-black: #f5f2ee;
  --color-paper-white: #1c1a19;
  --color-stone: #a8a3a0;
  --color-pebble: #726d6a;
}
```

Everything in the page references these variables, so changing a value here updates it everywhere, in both themes.

**Typography** — the display/body face is `Fraunces`, imported via Google Fonts in the same style block. Swap the `@import` URL and the `--font-cosmosoracle` fallback stack to change the typeface.

**Contact info** — the footer currently has `[email]` and `[location]` placeholders; replace them with your real details.

## Deployment

This is a standard Next.js app, so it deploys to [Vercel](https://vercel.com/) with zero configuration:

```bash
npx vercel
```

or connect the GitHub repo directly in the Vercel dashboard. Note that the page `<title>` shown in the browser tab and link previews comes from the `metadata` export in `app/layout.jsx` — update that file (not anything Vercel-specific) if you want to change it.

## License

Personal project — feel free to fork for your own portfolio, but please swap out the content, name, and project details for your own.
