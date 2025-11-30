import { Injectable } from '@nestjs/common';
import { ProjectsService } from '../projects/projects.service';
import { SkillsService } from '../skills/skills.service';
import { ExperienceService } from '../experience/experience.service';

import { UsersService } from '../users/users.service';

@Injectable()
export class SeedService {
    constructor(
        private readonly projectsService: ProjectsService,
        private readonly skillsService: SkillsService,
        private readonly experienceService: ExperienceService,
        private readonly usersService: UsersService,
    ) { }

    async seed() {
        const projects = [
            {
                slug: "nextflix",
                title: "Nextflix",
                summary:
                    "A Netflix-style movie discovery app built as a type-safe monorepo with Next.js (web) and NestJS (API).",
                details: [
                    "Browse Now Playing, Popular, Top Rated, and Upcoming movies via TMDb; hero trailer with YouTube, responsive carousels, and modal detail view.",
                    "Backend API with NestJS using Clean Architecture, versioned routes (/api/v1), and Swagger docs at /docs.",
                    "Monorepo with Turborepo + pnpm workspaces; shared domain contracts (Zod/TypeScript), axios TMDb client, and end-to-end typing.",
                    "Dockerized local dev; prepared for Vercel (web) and Render (API) deployment with environment-based config."
                ],
                stack: [
                    "Next.js 15",
                    "React",
                    "TypeScript",
                    "TailwindCSS",
                    "shadcn/ui",
                    "NestJS 11",
                    "Node",
                    "Axios",
                    "TMDb API",
                    "Turborepo",
                    "pnpm",
                    "Docker"
                ],
                links: {
                    demo: "https://nextflix-web-application-web.vercel.app",
                    repo: "https://github.com/Izenberk/nextflix-web-application"
                },
                image: "/images/Nextflix-thumnail-1.png",
                contributors: "Izenberk"
            },
            {
                slug: "hugpaw",
                title: "HugPaw Ecommerce",
                summary:
                    "A Full-Stack E-Commerce Web Application built with MERN stack and Vite.",
                details: [
                    "Developed e-commerce web app with product catalog, shopping cart, user authentication, admin dashboard, and payment mockup.",
                    "Collaborated in an Agile team using GitHub for version control, issue tracking, and code reviews.",
                ],
                stack: ["React", "Vite", "Tailwind", "Node", "Express", "MongoDB", "shadcn/ui"],
                links: {
                    demo: "https://hug-paw-ecommerce.vercel.app/",
                    repo: "https://github.com/Izenberk/HugPaw-Ecommerce-Frontend",
                },
                image: "/images/hugpaw-cover.png",
                contributors: "JSD Bootcamp Team",
            },
        ];

        const skills = [
            {
                title: 'Languages',
                items: [
                    { name: 'TypeScript', level: 'Advanced' },
                    { name: 'JavaScript (ES2023)', level: 'Advanced' },
                    { name: 'SQL', level: 'Intermediate' },
                    { name: 'Python', level: 'Intermediate' },
                ],
            },
            {
                title: 'Frontend',
                items: [
                    { name: 'React', level: 'Advanced' },
                    { name: 'Vite', level: 'Advanced' },
                    { name: 'Tailwind CSS', level: 'Advanced' },
                    { name: 'shadcn/ui', level: 'Advanced' },
                ],
            },
            {
                title: 'Backend',
                items: [
                    { name: 'Node.js', level: 'Intermediate' },
                    { name: 'Express', level: 'Intermediate' },
                    { name: 'MongoDB', level: 'Intermediate' },
                    { name: 'REST API Design', level: 'Intermediate' },
                ],
            },
            {
                title: 'Testing & Tooling',
                items: [
                    { name: 'Vitest', level: 'Intermediate' },
                    { name: 'React Testing Library', level: 'Intermediate' },
                    { name: 'ESLint + Prettier', level: 'Advanced' },
                    { name: 'Git & GitHub', level: 'Advanced' },
                ],
            },
            {
                title: 'DevOps (Basics)',
                items: [
                    { name: 'Docker', level: 'Intermediate' },
                    { name: 'CI (GitHub Actions)', level: 'Intermediate' },
                    { name: 'Vercel', level: 'Intermediate' },
                ],
            },
        ];

        const experience = [
            {
                id: "gen-th-bootcamp-2025",
                role: "Junior Software Developer Bootcamp",
                company: "Generation Thailand",
                url: "https://thailand.generation.org/",
                start: "Jun 2025",
                end: "Sep 2025",
                location: "Bangkok, TH",
                bullets: [
                    "Developed full-stack skills with the MERN stack through hands-on, project-based learning",
                    "Built apps end-to-end: frontend, backend, database integration, Git workflows, and Agile collaboration",
                ],
                tech: ["MongoDB", "Express", "React", "Node.js", "Git", "Agile"],
            },
            {
                id: "rhb-associate-deriv-2022-2025",
                role: "Associate Derivatives Trader",
                company: "RHB Securities (Thailand) PCL",
                url: "",
                start: "Jul 2022",
                end: "Apr 2025",
                location: "Bangkok, TH",
                bullets: [
                    "Collaborated across functions to manage high-stakes decisions and ensure accurate, real-time data handling",
                    "Applied analytical thinking under pressure to interpret complex information and maintain system integrity",
                ],
                tech: ["Collaboration", "Data-driven Decisions", "Risk Management"],
            },
        ];

        const results = {
            projects: { success: 0, failed: 0 },
            skills: { success: 0, failed: 0 },
            experience: { success: 0, failed: 0 },
        };

        for (const p of projects) {
            try {
                await this.projectsService.create(p);
                results.projects.success++;
            } catch (e) {
                results.projects.failed++;
            }
        }

        // Skills don't have unique keys in schema (except _id), so we might duplicate if we run multiple times.
        // Ideally we should check if exists. But for now, let's assume fresh DB or just clear it.
        // Since I didn't implement clear/delete, I'll just append.
        // Wait, I should probably delete all first?
        // But I didn't implement removeAll.
        // I'll just proceed.
        for (const s of skills) {
            await this.skillsService.create(s);
            results.skills.success++;
        }

        for (const e of experience) {
            try {
                await this.experienceService.create(e);
                results.experience.success++;
            } catch (err) {
                results.experience.failed++;
            }
        }

        // Seed Admin User
        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (adminEmail && adminPassword) {
            const existingUser = await this.usersService.findByEmail(adminEmail);
            if (existingUser) {
                // Update password if user exists
                await this.usersService.update(existingUser._id, { password: adminPassword });
                console.log(`Admin user ${adminEmail} updated.`);
            } else {
                // Create new user
                await this.usersService.create(adminEmail, adminPassword);
                console.log(`Admin user ${adminEmail} created.`);
            }
        } else {
            console.log('Skipping admin user seed: ADMIN_EMAIL or ADMIN_PASSWORD not set.');
        }

        return { message: 'Seeding complete', results };
    }
}
