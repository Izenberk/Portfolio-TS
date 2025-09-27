// src/data/projects.ts
import { Project } from "@/types/project";


export const PROJECTS: Project[] = [
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
    // {
    //     slug: "devlink",
    //     title: "DevLink",
    //     summary: "A Developer-Centric Portfolio Platform built with MERN stack.",
    //     details: [
    //     "Showcases developer profiles, skills, and projects.",
    //     "Applied CRUD operations, RESTful API integration, and state management for dynamic content handling.",
    //     "Demonstrated solo project ownership through UI design, feature implementation, and deployment readiness.",
    //     ],
    //     stack: ["React", "Node", "Express", "MongoDB", "Tailwind", "shadcn/ui"],
    //     links: {
    //     demo: "https://dev-link-alpha-seven.vercel.app/",
    //     repo: "https://github.com/Izenberk/DevLink",
    //     },
    //     image: "/images/devlink-cover.png",
    //     contributors: "Solo",
    // },
];