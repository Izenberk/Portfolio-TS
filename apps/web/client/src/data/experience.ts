// src/data/experience.ts

export type ExperienceItem = {
    id: string;
    role: string;
    company: string;
    url?: string;
    start: string; // "MMM YYYY" or similar
    end: string;   // "Present" allowed
    location?: string;
    bullets: string[];
    tech?: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
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
