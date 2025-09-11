import type { ExperienceItem } from '@/types/sections'

export const EXPERIENCE: ExperienceItem[] = [
    {
        id: 'devlink',
        role: 'Full-Stack Developer (Personal Project)',
        company: 'DevLink',
        url: 'https://github.com/Izenberk/DevLink',
        location: 'Bangkok, TH',
        start: '2025-07',
        end: 'Present',
        bullets: [
        'Built a portfolio/name-card builder focused on first-jobbers.',
        'Implemented typed components (TSX), dark theme tokens, and shadcn/ui.',
        'Deployed with Vercel; CI with GitHub Actions.',
        ],
        tech: ['react', 'typescript', 'vite', 'tailwind', 'shadcn'],
    },
    {
        id: 'hugpaw',
        role: 'Frontend Developer (Team Project)',
        company: 'HugPaw e-commerce',
        url: 'https://github.com/Izenberk/HugPaw-Ecommerce-Frontend',
        location: 'Remote',
        start: '2025-07',
        end: '2025-08',
        bullets: [
        'Implemented cart/favorites and product customization UI.',
        'Refactored toast UX, stock validation, and responsive layouts.',
        ],
        tech: ['react', 'typescript', 'tailwind'],
    },
    {
        id: 'eqd',
        role: 'Derivatives Trader (EQD)',
        company: 'RHB Securities Thailand',
        location: 'Bangkok, TH',
        start: '2022-01',
        end: '2025-06',
        bullets: [
        'Market-making DW/SSF; pricing, hedging, and risk control.',
        'Automated workflows, built analytic dashboards, improved SLAs.',
        ],
        tech: ['node', 'typescript', 'vitest'],
    },
]
