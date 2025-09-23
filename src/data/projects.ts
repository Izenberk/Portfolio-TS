// src/data/projects.ts
import type { Project } from '@/types'

export const projects: Project[] = [
    {
        id: 'devlink',
        title: 'DevLink · Developer Profile Builder',
        description:
        'A portfolio/name-card builder for first-jobbers with project highlights and goals.',
        cover: '/images/devlink-cover.png', // optional
        repoUrl: 'https://github.com/Izenberk/DevLink',
        demoUrl: 'https://dev-link-alpha-seven.vercel.app',
        tech: ['react', 'javascript', 'vite', 'tailwind', 'shadcn'],
        highlights: ['Profile schema', 'Dynamic sections', 'Responsive layout'],
    },
    {
        id: 'hugpaw',
        title: 'HugPaw · Pet Supply Shop (SPA)',
        description:
        'Single-page e-commerce with cart, favorites, product customization, and admin UI.',
        cover: '/images/hugpaw-cover.png',
        repoUrl: 'https://github.com/Izenberk/HugPaw-Ecommerce-Frontend',
        demoUrl: 'https://hug-paw-ecommerce.vercel.app',
        tech: ['react', 'javascript', 'tailwind'],
        highlights: ['Cart logic', 'Variant options', 'Toast UX'],
    },
]
