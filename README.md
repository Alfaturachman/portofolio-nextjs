# Alfaturachman - Personal Web Portfolio & Blog

A professional, interactive developer portfolio and blog built with Next.js App Router and TypeScript. Designed following **Apple Human Interface Guidelines (HIG)** for clarity, accessibility, and a refined user experience.

## Core Architecture

This repository serves as both a showcase of software engineering projects and a technical blog. It was developed with a strong focus on clean architecture, fluid user experience, and search engine optimization.

### Key Features

- **Apple HIG Compliance**: Design system built around Apple Human Interface Guidelines — prioritizing clarity, deference, depth, and accessibility across all components.
- **Accessible by Default**: Full `prefers-reduced-motion` support, minimum 44px touch targets, WCAG-compliant contrast ratios, `:focus-visible` indicators, and semantic HTML throughout.
- **System Theme Detection**: Automatically respects user's `prefers-color-scheme` with manual dark/light toggle and localStorage persistence.
- **Bilingual Interface (EN/ID)**: Client-side language switcher in the navbar backed by per-section JSON dictionaries (`src/lib/i18n/en/`, `src/lib/i18n/id/`), `localStorage` persistence, and compile-time key parity between translations.
- **Interactive Design System**: Custom vanilla CSS implementation featuring Glassmorphism, dynamic gradients, and hardware-accelerated animations.
- **Holographic Animations**: Complex CSS keyframe animations integrated with SVG noise filters for high-end visual textures.
- **Mouse-Tracking Interactions**: Real-time CSS variable updates bound to cursor movement for interactive footer elements.
- **Dynamic SEO Generation**: Utilization of Next.js metadata API to dynamically generate titles, descriptions, and keywords for individual project and blog routes.
- **Integrated Content Management**: A structured approach to managing project and article data locally without relying on heavy external CMS dependencies.

## Design Principles

This portfolio is built on **Apple Human Interface Guidelines (HIG)**:

| Principle | Implementation |
|-----------|---------------|
| **Clarity** | High-contrast text (4.5:1+), clear typography hierarchy, legible at all sizes |
| **Deference** | Content-first layout, UI defers to information, subtle visual cues |
| **Depth** | Layered transitions, spatial hierarchy, subtle shadows |
| **Accessibility** | 44px min touch targets, `prefers-reduced-motion`, `:focus-visible`, semantic HTML |
| **Adaptability** | `prefers-color-scheme` detection, responsive layouts, system font integration |

## Technologies Used

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS (CSS Modules & Global Variables)
- **Icons**: FontAwesome
- **Deployment**: Vercel

## Local Development

To run this project locally, ensure you have Node.js installed, then follow these steps:

1.  Clone the repository:

    ```bash
    git clone https://github.com/Alfaturachman/portofolio-nextjs.git
    ```

2.  Navigate to the project directory:

    ```bash
    cd portofolio-nextjs
    ```

3.  Install the dependencies:

    ```bash
    npm install
    ```

4.  Start the development server:

    ```bash
    npm run dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure

- `/src/app`: Next.js App Router layout, pages (blog, portfolio, courses), error/loading states, and API routes (`/api/chat`).
- `/src/components`: Reusable UI components (Navbar, Footer, ImageCarousel, Chatbot).
- `/src/sections`: Page sections (Hero, About, Skills, Experience, PortfolioSection, Certificates, Contact).
- `/src/styles`: Global CSS variables, theme configurations, and component-specific stylesheets.
- `/src/lib`: Data structures, interfaces, and content files (projects.ts, blog.ts).
    - `/src/lib/i18n`: Language context plus per-section EN/ID JSON dictionaries powering the language switcher.

## Contact

For inquiries or professional collaboration, please refer to the contact section within the live application.
