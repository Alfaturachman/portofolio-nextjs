# Migration: Vanilla Portfolio → Next.js

## Overview

Migrating the legacy vanilla HTML/CSS/JS portfolio (`portofolio/`) into the existing Next.js 16 (App Router) project at the root.

| Aspect        | Source (`portofolio/`)                 | Target (root)                   |
| ------------- | -------------------------------------- | ------------------------------- |
| Framework     | Vanilla HTML/CSS/JS + ES Modules       | Next.js 16 App Router           |
| Language      | JavaScript                             | TypeScript (strict)             |
| Styling       | CSS Custom Properties + Tailwind CDN   | Tailwind CSS v4                 |
| Routing       | Hash anchors + separate HTML files     | File-system routing             |
| Components    | JS-generated partials (Navbar, Footer) | React Client Components         |
| Interactivity | GSAP, custom canvas, DOM manipulation  | React hooks + Client Components |

## Route Mapping

| Legacy Path              | Next.js Route  | File                       |
| ------------------------ | -------------- | -------------------------- |
| `/` (hash sections)      | `/`            | `app/page.tsx`             |
| `/blog/`                 | `/blog`        | `app/blog/page.tsx`        |
| `/blog/detail.html?id=X` | `/blog/[slug]` | `app/blog/[slug]/page.tsx` |
| `/detail/?id=X`          | `/detail/[id]` | `app/detail/[id]/page.tsx` |
| `/404`                   | `not-found`    | `app/not-found.tsx`        |

## Project Structure (Actual)

```
app/
├── layout.tsx              # Root layout (Navbar, Footer, Cursor, ThemeProvider, fonts, metadata, JSON-LD)
├── page.tsx                # Homepage (composes all 7 sections)
├── globals.css             # Entry point: @import tailwind + all partials
├── styles/
│   ├── theme.css           # CSS vars, @theme block, reset, utilities (glass, blob, sections)
│   ├── navbar.css          # Navbar, hamburger, mobile menu
│   ├── hero.css            # Hero section
│   ├── sections.css        # About, Skills, Experience, Portfolio, Certificates, Contact
│   ├── footer.css          # Footer
│   └── components.css      # Cursor, Modal, Skeleton, Loader, animations
├── components/
│   ├── Navbar.tsx          # Nav with inline theme toggle, scroll state, mobile menu
│   ├── Footer.tsx          # Footer with socials, nav links, back-to-top
│   └── Cursor.tsx          # Custom cursor (dot + outline, GSAP-free)
├── sections/
│   ├── Hero.tsx            # Headline, socials, CTAs, stats (no canvas mesh)
│   ├── About.tsx           # Bio, profile image, stats, education card
│   ├── Skills.tsx          # 3 category grids with SVG logos
│   ├── Experience.tsx      # Timeline
│   ├── PortfolioSection.tsx# Project grid + inline ProjectCard with skeleton
│   ├── Certificates.tsx    # Cards + inline modal viewer
│   └── Contact.tsx         # Heading, links
└── lib/
    ├── types.ts            # Project, BlogArticle, Specialization, Course, Experience
    ├── projects.ts         # 12 projects
    ├── blog.ts             # 8 articles
    ├── courses.ts          # 2 specializations + courses
    ├── experiences.ts      # 4 experiences + skillsCategories
    └── theme-context.tsx   # ThemeProvider + useTheme hook
```

## Data Layer

Source files (`portofolio/assets/js/`) → TypeScript modules (`app/lib/`):

| Source                  | Target                      | Notes                                   |
| ----------------------- | --------------------------- | --------------------------------------- |
| `projects-data.js`      | `app/lib/projects.ts`       | 12 projects, typed interface            |
| `blog-data.js`          | `app/lib/blog.ts`           | 8 articles, typed interface             |
| `courses-data.js`       | `app/lib/courses.ts`        | 2 specializations + 21 courses          |
| _(new — not in legacy)_ | `app/lib/experiences.ts`    | 4 work experiences + 3 skill categories |
| _(new — not in legacy)_ | `app/lib/theme-context.tsx` | ThemeProvider + useTheme (localStorage) |

### Type Definitions (`app/lib/types.ts`)

```typescript
interface Project {
    id: string;
    image: string;
    gallery: string[];
    title: string;
    privacy: 'Public' | 'Private';
    cardDesc: string;
    desc: string;
    role: string;
    year: string;
    tags: string[];
    demo: string;
    github: string;
}

interface BlogArticle {
    id: string;
    title: string;
    date: string;
    category: string;
    summary: string;
    content: string;
    tags: string[];
}

interface Course {
    id: number;
    title: string;
    provider: string;
    skills: string[];
    credentialUrl: string;
}

interface Specialization {
    id: number;
    title: string;
    provider: string;
    skills: string[];
    credentialUrl: string;
    image: string;
}
```

## Component Breakdown

### Server Components (default)

- `page.tsx`, `About`, `Skills`, `Experience`, `Contact` — static sections, no client hooks

### Client Components (`"use client"`)

- `Navbar` — scroll state, mobile menu, inline theme toggle
- `Footer` — scroll-to-top button
- `Cursor` — mousemove tracking (vanilla JS, no GSAP)
- `Hero` — (currently static, no GSAP)
- `PortfolioSection` — lazy loading images, skeleton, inline `ProjectCard`
- `Certificates` — open/close modal state, keyboard handling (inline `CertModal`)
- `ThemeProvider` (in `lib/`) — localStorage dark mode context

### Missing (planned but inlined or not created)

| Planned Component | Status                                   |
| ----------------- | ---------------------------------------- |
| `ThemeToggle`     | Inlined in `Navbar.tsx`                  |
| `CanvasMesh`      | Not created (Hero has no canvas)         |
| `CertModal`       | Inlined in `Certificates.tsx`            |
| `ProjectCard`     | Inlined in `PortfolioSection.tsx`        |
| `BlogCard`        | Not created (blog pages don't exist yet) |
| `Loader`          | Not created (CSS exists in globals.css)  |

## Migration Steps

### Phase 1: Foundation ✅

- [x] Set up data files (types, projects, blog, courses, experiences) — experiences.ts is extra, not in original plan
- [x] Create root layout with Navbar + Footer + Cursor + ThemeProvider
- [x] Set up globals.css with CSS custom properties + Tailwind v4 + all component styles

### Phase 2: Homepage Sections ✅

- [x] Hero (headline, socials, CTAs, stats) — canvas mesh component not created (not used)
- [x] About (bio, profile image, stats, education card)
- [x] Skills (3 category grids with SVG logos)
- [x] Experience (timeline)
- [x] Portfolio (project grid with skeleton loading) — ProjectCard is inlined, not separate component
- [x] Certificates (cards + modal viewer) — modal is inlined, not separate component
- [x] Contact (heading, links)

### Phase 3: Subpages ❌

- [ ] Blog listing (`/blog/page.tsx`) — linked from Footer but doesn't exist
- [ ] Blog detail (`/blog/[slug]/page.tsx`)
- [ ] Project detail (`/detail/[id]/page.tsx`)
- [ ] 404 page (`/not-found.tsx`)
- [ ] Global loading skeleton (`/loading.tsx`)

### Phase 4: Interactivity & Polish ⚠️ Partial

- [x] Dark mode toggle with localStorage (ThemeProvider + inline toggle in Navbar)
- [x] Custom cursor (Cursor component, GSAP-free vanilla JS)
- [ ] GSAP entrance animations + ScrollTrigger
- [ ] Loader animation (CSS exists in globals.css, component not created)
- [ ] Responsive design verification

### Phase 5: Assets & Deployment ⚠️ Partial

- [x] Static assets moved (`public/assets/` — images, logos, certificates, profile)
- [x] Favicon (SVG in head), metadata, Open Graph, Twitter, JSON-LD structured data
- [ ] manifest.json (referenced in layout but file does not exist)
- [ ] robots.txt, sitemap.xml
- [ ] Build + preview

### Cleanup ✅

- [x] `portofolio/` directory already removed

## Implementation Notes

### params is Promise-based (Next.js 16)

```typescript
// app/blog/[slug]/page.tsx
export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    // ...
}
```

### Global TypeScript Helpers

- `PageProps` and `LayoutProps` are globally available (no import needed)

### Tailwind CSS v4

- Uses `@import "tailwindcss"` (not `@tailwind` directives)
- Custom theme via `@theme inline` block in CSS
- Dark mode via CSS custom properties (not `dark:` variants)
- PostCSS plugin: `@tailwindcss/postcss`

### Image Handling

- Currently uses `<img>` tags (not `next/image`) for simplicity
- Cache-busting: N/A yet
- Fallback image: `/assets/images/projects/fallback.png`

### CSS Architecture

- **Modular files in `app/styles/`** — split into 6 files by concern:
    - `theme.css` — CSS custom properties, `@theme` block, reset, base utilities (glass, blob, section helpers)
    - `navbar.css` — Navbar, hamburger, mobile menu
    - `hero.css` — Hero section
    - `sections.css` — About, Skills, Experience, Portfolio, Certificates, Contact
    - `footer.css` — Footer
    - `components.css` — Cursor, Modal, Skeleton, Loader, animations
- Component styles use class-based selectors (not Tailwind utility classes)
- Custom properties for theming via `:root` (light) + `[data-theme='dark']` (dark)
    - Removed redundant `[data-theme='light']` duplicate
- `@theme` block (not `@theme inline`) exposes tokens globally for Tailwind utility use
- Fixed broken animations (pulse, skeleton), removed dead keyframes
- Font Awesome 6 via CDN for icons

### Key Dev Notes

- No GSAP/ScrollTrigger animations implemented yet
- No `next/image` usage — plain `<img>` with `loading="lazy"`
- Canvas mesh component planned but not created
- Some components are inlined rather than separated (ProjectCard, CertModal, ThemeToggle)

## Legacy Files to Remove (after migration)

- ~~`portofolio/` directory~~ ✅ Already removed

---

> **Status**: Migration in progress — **Phases 1–2 complete, Phases 3–5 in progress**
