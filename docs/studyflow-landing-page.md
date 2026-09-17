# StudyFlow AI — landing page specification

## 1. Project Overview

StudyFlow AI is a portfolio-quality, single-page marketing site for a fictional student study assistant. The site explains the product, demonstrates a local simulated AI conversation, previews a study dashboard, and invites visitors to try a demo. It has no account system, payments, uploads to a server, or AI API. Every statistic, quote, identity, and price is clearly demo content.

**Technical choice:** Use the existing Next.js 16 App Router project with React 19, TypeScript, Tailwind CSS 4, Motion, and Lucide React. Vite is an alternative bundler and is not used alongside Next.js. No React Router is needed for a single route; navigation uses section anchors.

## 2. Product Concept

- **Name:** StudyFlow AI
- **Tagline:** Make every study session click.
- **Description:** A calm study workspace that turns questions, class notes, and looming deadlines into clear explanations, focused practice, and a practical next step.
- **Main value proposition:** Go from “I don't get it” to a clear explanation and a plan to remember it, all in one place.
- **Primary CTA:** Start learning free (scrolls to the interactive demo on this portfolio site).
- **Secondary CTA:** See how it works (scrolls to the three-step explanation).
- **Voice:** Clear, encouraging, specific, and credible. Avoid promising guaranteed grades or portraying AI as a replacement for educators.

## 3. Target Users

University and college students managing several courses; high-school students preparing for tests; self-directed learners who want concise explanations and active recall. They typically arrive with a confusing concept, dense notes, or an approaching deadline.

## 4. Problems

1. Search results and long lectures make a simple question take too long to answer.
2. Passive rereading feels productive but does little to test understanding.
3. Notes live in separate places from quizzes, schedules, and progress.
4. Big assignments feel difficult to break into achievable study sessions.

## 5. Value Proposition

StudyFlow combines an approachable AI tutor, note summaries, generated practice, a study plan, and progress cues. The page tells a coherent story: understand a topic, practice it, then know what to do next.

## 6. Features

1. **Ask anything:** Structured, plain-language explanations with examples.
2. **Summarize notes:** Turn long material into key points and takeaways.
3. **Generate quizzes:** Build active-recall questions from topics or notes.
4. **Plan your week:** Break a goal and deadline into manageable sessions.
5. **Study with your material:** Simulate attaching a document and asking about it. The landing page must label this as a preview; no real file processing occurs.
6. **See your progress:** Preview sessions, course progress, and quiz performance.

## 7. Sitemap

- `/` — one-page marketing site with anchor destinations: `#features`, `#demo`, `#how-it-works`, `#dashboard`, `#pricing`, `#faq`.
- Footer utility links without implemented destinations point to the relevant page section or use a clearly labeled demo placeholder. Never suggest a working blog, account, or legal document when none exists.

## 8. Landing Page Structure

Navbar → Hero → demo social proof strip → Problem → Features → Interactive demo → How it works → Dashboard preview → Demo metrics → Testimonials → Pricing → FAQ → Final CTA → Footer.

## 9. Detailed Section Requirements

| Section | Purpose and copy | Components / layout / UI | Responsive behavior |
| --- | --- | --- | --- |
| Navbar | Orient visitors and expose the main CTA. Links: Features, How it works, Demo, Pricing. | Brand mark, desktop anchors, Start learning button; restrained blur and bottom border on scroll. | Compact logo, CTA, accessible menu button and expandable navigation. |
| Hero | **Heading:** “A little clarity changes everything.” **Copy:** “Meet your AI study partner for clearer answers, better practice, and a plan that actually fits your week.” CTAs: Start learning free / See how it works. | Left editorial message, eyebrow, short benefits and CTA row; right layered tutor conversation with accent orb and floating insight cards. This is the largest visual area. | Copy first, large preview second; CTA buttons wrap or stack; floating cards reposition or hide when space is limited. |
| Social proof | Convey the scope of a demo product honestly. **Heading:** “Built for the way students really learn.” | Small course/topic labels and a “Concept project · sample experience” disclosure rather than invented institutional logos. | Wrap topic labels. |
| Problem | Show the struggle in a concise, empathetic way. **Heading:** “Studying shouldn't feel like starting over every time.” | Split layout: narrative copy and three pain-to-outcome rows. | Single column; rows keep readable line lengths. |
| Core features | Show six connected capabilities. **Heading:** “Everything you need to get unstuck.” | Six cards in an asymmetrical grid; Lucide icons, descriptions, lightweight interface snippets. One or two featured cards span extra space. | Two columns on tablet, one on narrow phones; snippets fit card width. |
| Interactive demo | Make the product idea tangible. **Heading:** “Go ahead. Ask the question.” **Copy:** “Try a sample prompt and see how StudyFlow breaks it down.” | Accessible prompt buttons, editable input, submit, simulated loading/typing, mock response, follow-up actions, reset. State is local only. Visible “Interactive preview” label. | Single wide panel; prompt buttons wrap; input remains usable at 320px. |
| How it works | Explain the three-step loop. **Heading:** “From messy notes to momentum.” | 01 Add what you're learning → 02 Make it click → 03 Practice and move forward, with connector line on desktop. | Vertical steps with compact connector. |
| Dashboard preview | Show the broader workspace without building an app. **Heading:** “Your whole study week, in focus.” | Static dashboard: sidebar, greeting, course progress, today plan, study-time bars, quiz insight. Label “Product preview · sample data.” | Sidebar becomes top icon/label strip or collapses; content stacks; horizontal bar chart remains legible. |
| Statistics | Provide visually strong benefit cues with honest framing. **Heading:** “Small steps add up.” | Four sample metrics: 10K+ students, 500K+ questions, 50K+ quizzes, 4.9/5 rating. Explicit “Illustrative demo metrics” adjacent to them. | 2×2 grid, then compact cards if needed. |
| Testimonials | Give a human perspective while disclosing fiction. **Heading:** “A better rhythm for every kind of learner.” | Three concise fictional student quotes with initials avatars, fields, five-star visuals; “Fictional student stories for this demo” label. | Horizontal cards become stacked. |
| Pricing | Show the product model. **Heading:** “A plan for the way you study.” | Three plans: Free $0, Student $8/month (Most popular), Pro $15/month. Feature lists and matching CTAs; pricing is explicitly illustrative. CTAs scroll to demo. | Cards stack; recommended plan remains prominent without changing reading order. |
| FAQ | Resolve common questions. **Heading:** “A few good questions.” | Six single-open accordion items with button, icon, `aria-expanded`, and associated panel; honest answer on material storage in this demo. | Full-width stacked list; large touch targets. |
| Final CTA | Repeat the next step. **Heading:** “Ready to make it click?” **Copy:** “Bring the question. We'll help you find the next step.” CTA: Start learning free. | Dark accent band with subtle decorative shapes and a strong button. | Centered stack. |
| Footer | Provide navigation and clarify the project. | Brand + short line; Product, Resources, Company, Legal columns; copyright “© 2026 StudyFlow AI. Demo project.” Nonexistent destinations are labeled as upcoming/demo. | Columns wrap into two columns, then one or two as space permits. |

## 10. Desktop Wireframe

```text
┌───────────────────────────────────────────────────────────────────────────────┐
│ mark StudyFlow       Features   How it works   Demo   Pricing   [Start free] │
├───────────────────────────────────────────────────────────────────────────────┤
│  eyebrow                                      ◌ ambient accent                │
│  A little clarity             ┌───────────────────────────────────────────┐ │
│  changes everything.          │ StudyFlow AI        Tutor / Live preview  │ │
│  supporting copy              │ You: Explain useEffect simply...         │ │
│  [Start learning] [How it works]│ AI: clear answer + example + next steps  │ │
│  tiny reassurance             │ [Quiz me] [Simpler]                      │ │
│                               └───────────────────────────────────────────┘ │
├───────────────────────────────────────────────────────────────────────────────┤
│ Built for the way students learn   [STEM] [HUMANITIES] [EXAM PREP]          │
├───────────────────────────────────────────────────────────────────────────────┤
│ Studying shouldn't feel...     │  01 Answers scattered → one clear place  │
│ explanation + short story      │  02 Rereading → active practice           │
│                                │  03 Deadlines → doable sessions          │
├───────────────────────────────────────────────────────────────────────────────┤
│ Everything you need to get unstuck.                                           │
│ ┌──────────────────────────────┐ ┌────────────────┐ ┌────────────────────┐ │
│ │ Ask anything  / mini answer  │ │ Summarize      │ │ Generate quizzes   │ │
│ └──────────────────────────────┘ └────────────────┘ └────────────────────┘ │
│ ┌────────────────┐ ┌────────────────────┐ ┌──────────────────────────────┐ │
│ │ Study plans    │ │ Your materials     │ │ Track progress / mini chart  │ │
│ └────────────────┘ └────────────────────┘ └──────────────────────────────┘ │
├───────────────────────────────────────────────────────────────────────────────┤
│ Go ahead. Ask the question.   │ ┌─────────────────────────────────────────┐ │
│ supporting copy + prompts     │ │ prompt → loading → answer → follow ups  │ │
│                               │ │ text input                    [Send]     │ │
│                               │ └─────────────────────────────────────────┘ │
├───────────────────────────────────────────────────────────────────────────────┤
│ From messy notes to momentum.                                                │
│ [01 Add your material] ───── [02 Make it click] ───── [03 Practice]          │
├───────────────────────────────────────────────────────────────────────────────┤
│ Your whole study week...  ┌────────────────────────────────────────────────┐ │
│ supporting copy           │ Sidebar │ Courses/progress │ Today/weekly bars │ │
│                           └────────────────────────────────────────────────┘ │
├───────────────────────────────────────────────────────────────────────────────┤
│ Small steps add up.      [10K+] [500K+] [50K+] [4.9/5]  sample data         │
├───────────────────────────────────────────────────────────────────────────────┤
│ Student stories          [ quote ]       [ quote ]       [ quote ]            │
├───────────────────────────────────────────────────────────────────────────────┤
│ A plan for...            [ Free $0 ]     [ Student $8 ]  [ Pro $15 ]         │
├───────────────────────────────────────────────────────────────────────────────┤
│ A few good questions.    [ question + ] [ question + ] ...                 │
├───────────────────────────────────────────────────────────────────────────────┤
│ Ready to make it click?                         [Start learning free]        │
├───────────────────────────────────────────────────────────────────────────────┤
│ StudyFlow / promise      Product     Resources     Company     Legal          │
└───────────────────────────────────────────────────────────────────────────────┘
```

## 11. Mobile Wireframe

```text
┌───────────────────────────────┐
│ mark StudyFlow  [Start] [☰]   │
├───────────────────────────────┤
│ eyebrow                       │
│ A little clarity              │
│ changes everything.           │
│ supporting copy               │
│ [Start learning free]          │
│ [See how it works]             │
│ ┌───────────────────────────┐ │
│ │ Tutor conversation        │ │
│ │ prompt / answer / actions │ │
│ └───────────────────────────┘ │
├───────────────────────────────┤
│ Social proof chips wrap       │
│ Problem copy + 3 outcome rows │
│ Features: 6 stacked cards     │
│ Demo: chips, answer, input    │
│ How: 01 ↓ 02 ↓ 03             │
│ Dashboard: simplified top nav │
│          courses → plan → bars │
│ Metrics: 2 × 2                │
│ Quotes: 3 stacked cards       │
│ Pricing: 3 stacked cards      │
│ FAQ: 6 accordion rows         │
│ Final CTA + footer columns    │
└───────────────────────────────┘
```

On mobile, preserve the narrative order. Interactive controls remain in the visible flow. No horizontal page overflow; only intentionally scrollable small dashboard navigation may scroll horizontally.

## 12. Design System

- **Direction:** editorial, calm, premium SaaS; light warm canvas, deep ink typography, electric periwinkle primary accent, soft lavender surfaces, sparse mint highlights. UI previews supply the visual interest instead of stock photography.
- **Container:** 1200px maximum, 24px mobile gutters, 40px tablet gutters.
- **Section spacing:** 112–136px desktop, 76–88px tablet, 64–72px phone.
- **Radii:** 12px controls, 20px cards, 28–32px major product panels, full pills for badges.
- **Shadows:** subtle cool shadow for cards; stronger layered shadow for hero preview; keep borders visible.
- **Buttons:** dark ink or periwinkle filled primary, quiet outlined secondary, 46–52px minimum visual height and visible focus ring.
- **Cards:** off-white/white surfaces, 1px cool border, generous internal padding, tiny hover lift where appropriate.

## 13. Typography

Use a clean, locally available sans-serif stack so builds do not depend on a font network request. Display headings use bold weight and tight tracking; H1 scales about 48px mobile to 76px desktop with ~1.05 line height. H2 scales 36–52px. H3 is 20–24px. Body is 16–18px at 1.55–1.7 line height. Small labels are 11–13px with selective uppercase tracking. Preserve a readable ~65-character line length for long paragraphs.

## 14. Colors

| Token | Hex | Use |
| --- | --- | --- |
| Canvas | `#F8F9FC` | Page background |
| Paper | `#FFFFFF` | Card surfaces |
| Ink | `#171B35` | Headings / primary controls |
| Body | `#626A80` | Supporting text (adjust darker for small text) |
| Primary | `#635BDF` | CTA, links, chart accent |
| Primary dark | `#5048C4` | Hover / contrast |
| Lavender | `#EEECFF` | Soft accent surfaces |
| Mint | `#DDF7EA` | Success / secondary accents |
| Line | `#E5E8F0` | Card borders and dividers |

Normal text and controls must meet WCAG AA contrast against their actual surface. Pale colors are backgrounds, not body text.

## 15. Components

Reusable: `Brand`, `ButtonLink`, `SectionHeading`, `Container`, `FeatureCard`, `Reveal`. Section-specific: `Navbar`, `Hero`, `SocialProof`, `Problem`, `Features`, `AIDemo`, `HowItWorks`, `DashboardPreview`, `Statistics`, `Testimonials`, `Pricing`, `FAQ`, `FinalCTA`, `Footer`. Data arrays live separately when reused or lengthy. Avoid abstraction for one-off decorative markup.

## 16. Interactions

- Navbar anchors scroll to sections; mobile menu opens/closes and closes after selection.
- Demo suggestion buttons set and submit predefined prompts. Input accepts a custom prompt; a deterministic local answer handles common keywords and a useful fallback handles all other text. Submit shows a short loading state, then a simulated type reveal. Follow-up buttons start another response. Reset returns to the initial state. Disable duplicate submissions while loading. Maintain keyboard submit and live region announcement.
- FAQ allows one open item at a time; buttons expose expanded state and panel relationship.
- All CTAs on this demo lead to the interactive preview. Pricing cards have no checkout promise.

## 17. Animations

Use Motion for short fade/translate entrances on hero, cards, and product preview. Stagger feature cards lightly. CSS provides button hover and card lift. Demo response typing should be quick and skippable in reduced-motion mode. Respect `prefers-reduced-motion` via Motion's reduced-motion hook and CSS media query; avoid parallax or looping attention effects.

## 18. Responsive Rules

- `<640px`: single column sections; stacked hero and pricing; mobile navigation; simplified dashboard grid.
- `640–1023px`: two-column feature grid, flexible hero, pricing may stack or use two columns when legible.
- `≥1024px`: full desktop navigation, split hero/demo/problem, three-column features and pricing.
- `≥1280px`: max-width container prevents overlong lines; expanded whitespace, not enlarged controls.
- Product previews must fit 320px screens without clipping important content.

## 19. Accessibility Requirements

One H1, ordered section headings, semantic `header/main/section/footer`, skip link, meaningful button names, native form fields and buttons, visible `:focus-visible` outlines, accessible mobile navigation state, accordion state and IDs, `aria-live` for demo answers, no color-only status cues. Decorative icons are hidden from assistive tech. Motion respects user preference. Test with keyboard and browser inspection.

## 20. Project Architecture

```text
app/
  layout.tsx                 metadata, fonts, global CSS
  page.tsx                   server page composition
  globals.css                tokens, shared styles, responsive details
components/
  layout/                    Navbar, Footer
  sections/                  marketing sections and product previews
  ui/                        small genuinely reused elements
data/
  site.ts                    feature, pricing, FAQ, quote, and prompt data
docs/
  studyflow-landing-page.md  this implementation-ready specification
```

Interactive components (`Navbar`, `AIDemo`, `FAQ`, Motion reveals) carry `"use client"` boundaries; static sections remain server-rendered where practical. No backend or routing package.

## 21. Mock Data Requirements

Use six feature records, three testimonial records with fictional names and fields, three pricing records, six FAQ records, and four suggested demo prompts. Mark student quotes and metrics as fictional/sample. Pricing is illustrative, with no billing flow. Dashboard percentages, task completion, and weekly bars are local sample data. The demo does not transmit or persist user input or files.

## 22. Implementation Plan

| Phase | Components | Main tasks | Expected result |
| --- | --- | --- | --- |
| 1. Foundation | `layout`, global styles, data | Set metadata, tokens, font, container, install Lucide and Motion. | A coherent design system and type-safe content model. |
| 2. First impression | `Navbar`, `Hero`, `SocialProof` | Build responsive navigation and the layered tutor preview. | A polished, strong first viewport and working anchor CTA. |
| 3. Product story | `Problem`, `Features`, `HowItWorks` | Build six varied cards, outcome rows, and connected steps. | Visitors understand what the product solves and how it works. |
| 4. Hands-on proof | `AIDemo` | Add suggestions, input, deterministic responses, loading, type reveal, follow-ups, reset. | A usable frontend-only interactive preview. |
| 5. Workspace view | `DashboardPreview` | Build static courses, daily plan, sidebar, and weekly bars. | A credible visual product preview at all sizes. |
| 6. Decision support | `Statistics`, `Testimonials`, `Pricing` | Add clearly labeled sample data, quotes, and pricing. | Trust cues without implying verified users or live purchase. |
| 7. Close | `FAQ`, `FinalCTA`, `Footer` | Add accessible accordion and complete navigation/footer. | Questions answered and a clear return path to the demo. |
| 8. Polish | `Reveal`, responsive CSS | Add restrained animation, reduced-motion behavior, focus states, contrast and overflow fixes. | Accessible, coherent mobile-to-desktop experience. |
| 9. Verification | Whole page | Run lint/type/build; inspect desktop and mobile in browser; test demo, menu, FAQ, anchors. | Portfolio-ready page with no known interaction or layout defects. |
