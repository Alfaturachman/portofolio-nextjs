# Code Audit — Portfolio

> **Date:** 2026-06-01
> **Scope:** Full codebase review for clean code & best practices

---

## ✅ Already Good

| Aspect                | Notes                                                                                           |
| --------------------- | ----------------------------------------------------------------------------------------------- |
| **Project Structure** | Clean separation `components/` / `sections/` / `lib/` / `app/`, path alias `@/*`                |
| **TypeScript**        | `strict: true`, interfaces in `types.ts`, proper type imports                                   |
| **Data Layer**        | Data files separated from components (`projects.ts`, `courses.ts`, `blog.ts`, `experiences.ts`) |
| **SEO**               | Metadata, OpenGraph, Twitter card, JSON-LD structured data in `layout.tsx`                      |
| **Font Optimisation** | `next/font` with `display: 'swap'`                                                              |
| **Lazy Loading**      | `loading="lazy"` on images                                                                      |
| **Accessibility**     | `aria-label`, `skip-link`, `role` attributes on Navbar, Footer, modals                          |
| **Reusability**       | `ImagePreview`, `ImageCarousel` extracted as reusable components                                |
| **Loading States**    | `loading.tsx` present for detail and courses pages                                              |

---

## High Priority

### 1. Navbar uses raw DOM instead of React state

**File:** `src/components/Navbar.tsx:23-28`

`getElementById('hamburger')` + `classList.toggle` bypasses React's render cycle. The mobile menu state should use `useState` and conditional class binding.

### 2. Blog page is `'use client'` at page level

**File:** `src/app/blog/page.tsx:1`

The entire page is client-rendered, killing SSR/SEO. Extract the filter button bar into its own small client component and keep the page as a server component.

### 3. Redundant `force-dynamic` / `revalidate = 0`

**File:** `src/app/blog/[id]/page.tsx:7-9`

```ts
export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;
```

`generateStaticParams` is already present, making these flags redundant and counter-productive (defeats ISR entirely).

### 4. Theme flash + dead code

**File:** `src/lib/theme-context.tsx:23-25`

- `getInitialTheme()` always returns `'light'` — never called, dead code.
- `useState<Theme>('light')` is hardcoded, then `useEffect` reads `localStorage` — causes a flash of wrong theme. Should initialise from `localStorage` synchronously or use a `<script>` in the `<head>`.

### 5. `coursesData` file is very large (304 lines)

**File:** `src/lib/courses.ts`

Hardcoded static data with repetitive structure. Would be better as a JSON file (`src/data/courses.json`) and imported directly.

---

## Medium Priority

### 6. Duplicated modal logic

Two implementations of the same pattern:

- `src/components/ImagePreview.tsx` — proper reusable modal
- `src/sections/Certificates.tsx:18-29` — hand-rolled open/close + `keydown` listener

`Certificates.tsx` should delegate to `ImagePreview` instead of duplicating the logic.

### 7. Duplicated card component

The "education-card" pattern (terminal-style window with red/yellow/green dots) is copy-pasted across `About.tsx` and `Experience.tsx`. Extract into a shared component.

### 8. Duplicated breadcrumb pattern

Breadcrumb (`Home > ... > Current`) repeated in `blog/page.tsx`, `courses/[id]/page.tsx`, `detail/[id]/page.tsx`. Extract into a reusable `Breadcrumb` component.

### 9. Font Awesome via full CDN bundle

**File:** `src/app/layout.tsx:73-75`

Loading the entire Font Awesome library (100kb+) via CDN. In Next.js, prefer `@fortawesome/react-fontawesome` for tree-shaking, or use inline SVG icons.

### 10. Excessive inline styles

Inline `style={{}}` props scattered across:

| File                          | Lines                                   |
| ----------------------------- | --------------------------------------- |
| `src/sections/About.tsx`      | 24–26, 92–95, 106–117, 124–129, 135–150 |
| `src/sections/Experience.tsx` | 28–33, 44–50, 54, 60, 69–73             |
| `src/app/blog/page.tsx`       | 33–42, 56, 62, 121–128                  |

These should be CSS classes in the relevant stylesheet.

### 11. `(typeof projects)[0]` instead of proper type

**File:** `src/sections/PortfolioSection.tsx:31`

```ts
project: (typeof projects)[0];
```

Import the `Project` interface from `@/lib/types` instead.

### 12. `image: '#'` as placeholder

**File:** `src/lib/courses.ts` (multiple entries)

Using `'#'` as a placeholder URL is fragile. Use `null` or `undefined` and conditionally render (or skip) the image.

---

## Low Priority

### 13. `dangerouslySetInnerHTML` in blog detail

**File:** `src/app/blog/[id]/page.tsx:83`

Content is static today, but the pattern is a XSS risk for future dynamic content. Consider MDX or a sanitizer.

### 14. PostCSS config formatting

**File:** `postcss.config.mjs`

Inconsistent indentation (2 spaces vs 4 spaces used in the rest of the project).

---

## Summary

| Priority | Count | Action                                               |
| -------- | ----- | ---------------------------------------------------- |
| High     | 5     | Fix first — affects correctness, SEO, or performance |
| Medium   | 7     | Refactor for maintainability and DRY                 |
| Low      | 2     | Nice-to-have improvements                            |

**Recommended order:** High → Medium → Low.
