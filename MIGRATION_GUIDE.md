# Migration Journey: Vite (SPA) to Next.js (App Router)

This document outlines the architectural shift and specific steps taken to migrate the portfolio from a Vite-based Single Page Application (SPA) to a Next.js App Router framework.

## 1. The Mental Shift: SPA vs. Framework

*   **Vite (SPA)**: The browser loads one empty `index.html` and a massive JavaScript bundle that renders everything client-side.
*   **Next.js (Framework)**: Renders HTML on the server (Server Components) for better performance and SEO, then "hydrates" it with JavaScript on the client.

## 2. Key Migration Steps

### A. Project Structure
In Vite, the entry point was `main.tsx` rendering `App.tsx` into a root div.
In Next.js App Router, the file system *is* the router.

*   **`index.html` → `app/layout.tsx`**: This is the root layout. It holds the `<html>` and `<body>` tags and wraps every page. Global fonts and the `SmoothScroll` component are injected here.
*   **`App.tsx` → `app/page.tsx`**: This is the "Home" page. The section assembly (Hero, About, etc.) was moved here.

### B. Styling (Tailwind CSS)
*   **Old**: Standard `tailwind.config.js` and `index.css`.
*   **New**: Next.js 15+ supports Tailwind v4. Custom animations (like the "aurora" effect) and variables were migrated into `app/globals.css`.

### C. The "use client" Directive
This is a core concept in modern Next.js.
*   **Server Components (Default)**: Components that render *only* on the server. They cannot use hooks like `useState`, `useEffect`, or event listeners (`onClick`).
*   **Client Components**: To use interactivity, `"use client"` must be added at the top of the file.
*   **Implementation**: Since the portfolio is highly interactive (animations, scroll listeners, form state), `"use client"` was added to:
    *   `Navbar.tsx` (scroll listeners)
    *   `Hero.tsx` (framer-motion animations)
    *   `Contact.tsx` (form state)
    *   `SmoothScroll.tsx` (browser APIs)

### D. Routing & Navigation
*   **Old**: Used `react-scroll` to jump between sections.
*   **New**: Upgraded to **Lenis** for premium "momentum" scrolling.
    *   Replaced `<Link to="id">` with standard `<a href="#id">` tags.
    *   Built a custom `SmoothScroll` component to intercept these clicks and trigger Lenis smooth scrolling.

### E. API Integration
*   **Old**: No backend or separate service.
*   **New**: Built a **NestJS API** in the same monorepo (`apps/api`).
    *   **Proxying**: Next.js communicates with the API directly.
    *   **Contact Form**: `Contact.tsx` sends a POST request to the API endpoint (`/api/contact`).

## 3. Summary of Changes

| Feature | Vite (Old) | Next.js (New) |
| :--- | :--- | :--- |
| **Entry Point** | `main.tsx` | `app/layout.tsx` |
| **Routing** | React Router (usually) | File-system (`app/page.tsx`) |
| **Interactivity** | Default | Requires `"use client"` |
| **Scrolling** | `react-scroll` | `lenis` (Custom implementation) |
| **Images** | `<img>` | `<img>` (or `next/image` for optimization) |
| **Icons** | `lucide-react` | `lucide-react` (Same!) |

## 4. Future Improvements
*   **Server Actions**: Handle form submissions without a separate API route.
*   **SEO**: Leverage the `metadata` object in `layout.tsx` to control search engine appearance.
*   **Image Optimization**: Replace `<img>` with `<Image />` from `next/image` for automatic resizing and compression.
