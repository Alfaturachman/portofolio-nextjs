# Alfaturachman - Personal Web Portfolio & Blog

A professional, interactive developer portfolio and blog built with Next.js App Router and TypeScript. The project features a custom-built Glassmorphism design system, and optimized performance.

## Core Architecture

This repository serves as both a showcase of software engineering projects and a technical blog. It was developed with a strong focus on clean architecture, fluid user experience, and search engine optimization.

### Key Features

- **Interactive Design System**: Custom vanilla CSS implementation featuring Glassmorphism, dynamic gradients, and hardware-accelerated animations.
- **Holographic Animations**: Complex CSS keyframe animations integrated with SVG noise filters for high-end visual textures.
- **Mouse-Tracking Interactions**: Real-time CSS variable updates bound to cursor movement for interactive footer elements.
- **Dynamic SEO Generation**: Utilization of Next.js metadata API to dynamically generate titles, descriptions, and keywords for individual project and blog routes.
- **Integrated Content Management**: A structured approach to managing project and article data locally without relying on heavy external CMS dependencies.

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

- `/app`: Contains the Next.js App Router layout, pages, and API routes.
    - `/blog`: Blog index and dynamic article routing.
    - `/detail`: Dynamic routing for project details.
- `/app/components`: Reusable UI components (Navbar, Footer, ImageCarousel).
- `/app/styles`: Global CSS variables, theme configurations, and component-specific stylesheets.
- `/app/lib`: Data structures, interfaces, and content files (projects.ts, blog.ts).

## Contact

For inquiries or professional collaboration, please refer to the contact section within the live application.
