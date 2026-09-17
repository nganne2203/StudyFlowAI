# StudyFlow AI

A responsive landing page for a fictional AI study companion. The site pairs a polished product story with a browser-only tutor preview, a sample dashboard, pricing, testimonials, and an accessible FAQ.

This is a **frontend concept project**. There is no backend, account creation, payment flow, document upload, or AI API. Demo responses are scripted locally; metrics, testimonials, dashboard data, and prices are illustrative.

## Stack

- Next.js 16 App Router and React 19
- TypeScript
- Tailwind CSS 4 with project design tokens
- Motion for restrained entrance animations
- Lucide React icons

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

The production build uses Next.js's webpack option so it can build without Turbopack's local worker port requirement in restricted environments.

## Project map

- `app/page.tsx`: landing page composition
- `components/layout/`: navigation and footer
- `components/sections/`: page sections and product previews
- `components/ui/`: reusable brand, buttons, headings, and reveal animation
- `data/site.ts`: typed sample product content
- `docs/studyflow-landing-page.md`: product definition, wireframes, design system, behavior, and implementation plan

The interactive demo accepts suggested or custom questions, shows a loading and typing state, offers follow-up prompts, and can be reset. Unknown topics receive a transparent preview limitation message.
