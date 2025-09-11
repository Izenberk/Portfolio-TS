import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Info } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const PROJECTS = [
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
        links: { demo: "https://hug-paw-ecommerce.vercel.app/", repo: "https://github.com/Izenberk/HugPaw-Ecommerce-Frontend" },
        image: "/images/hugpaw-cover.png",
        contributors: "JSD Bootcamp Team",
    },
    {
        slug: "devlink",
        title: "DevLink",
        summary: "A Developer-Centric Portfolio Platform built with MERN stack.",
        details: [
        "Showcases developer profiles, skills, and projects.",
        "Applied CRUD operations, RESTful API integration, and state management for dynamic content handling.",
        "Demonstrated solo project ownership through UI design, feature implementation, and deployment readiness.",
        ],
        stack: ["React", "Node", "Express", "MongoDB", "Tailwind", "shadcn/ui"],
        links: { demo: "https://dev-link-alpha-seven.vercel.app/", repo: "https://github.com/Izenberk/DevLink" },
        image: "/images/devlink-cover.png",
        contributors: "Solo",
    },
];

function ProjectCard({ p }) {
    const [isFlipped, setFlipped] = useState(false);
    const [hasDemoed, setHasDemoed] = useState(false);
    const cardRef = useRef(null);
    const inView = useInView(cardRef, { amount: 0.4, once: true });

    // One-time demo flip when scrolled into view
    useEffect(() => {
        if (inView && !hasDemoed) {
        setFlipped(true);
        const t = setTimeout(() => {
            setFlipped(false);
            setHasDemoed(true);
        }, 1100); // flip back after 1.1s
        return () => clearTimeout(t);
        }
    }, [inView, hasDemoed]);

    const flipOnKey = (e) => {
        if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setFlipped((v) => !v);
        }
    };

    return (
        <article
        key={p.slug}
        ref={cardRef}
        tabIndex={0}
        onKeyDown={flipOnKey}
        aria-pressed={isFlipped}
        className="group relative rounded-2xl border border-border bg-card/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-within:-translate-y-1 focus:outline-none"
        >
        {/* 3D Flip container */}
        <div className="[perspective:1200px]">
            <motion.div
            className="relative h-full w-full [transform-style:preserve-3d]"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
            {/* FRONT */}
            <div className="relative [backface-visibility:hidden]">
                {/* Glow frame */}
                <div
                className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-30"
                style={{
                    background:
                    "radial-gradient(120px_80px_at_20%_10%,hsl(var(--accent))/.45_0%,transparent_60%),radial-gradient(140px_100px_at_90%_20%,hsl(var(--primary))/.35_0%,transparent_55%),radial-gradient(160px_120px_at_50%_100%,hsl(var(--muted-foreground))/.15_0%,transparent_60%)",
                }}
                />

                {/* Media */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl border-b border-border bg-surface">
                <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-background/60 to-transparent" />

                {/* One-time overlay hint */}
                {!hasDemoed && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-sm font-medium animate-fade-out pointer-events-none">
                    🔄 Flip me for details!
                    </div>
                )}

                {/* The shimmer “Flip for Details” button */}
                <motion.button
                    type="button"
                    onClick={() => setFlipped(true)}
                    onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setFlipped(true);
                    }
                    }}
                    aria-label={`Show details for ${p.title}`}
                    className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium text-white shadow-md focus:outline-none focus:ring-2 focus:ring-accent/50 overflow-hidden bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_200%] animate-gradient hover:scale-105 transition"
                >
                    <Info className="h-3.5 w-3.5" /> Flip for Details
                </motion.button>
                </div>

                <Card className="border-0 shadow-none">
                <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base md:text-lg font-semibold tracking-tight leading-tight">
                        {p.title}
                    </h3>
                    <div className="hidden sm:flex items-center gap-2">
                        <Button asChild size="sm" variant="secondary" className="h-8 px-3">
                        <a href={p.links.demo} target="_blank" rel="noreferrer" aria-label={`${p.title} demo`}>
                            <ExternalLink className="mr-1 h-4 w-4" /> Demo
                        </a>
                        </Button>
                        <Button asChild size="sm" variant="outline" className="h-8 px-3">
                        <a href={p.links.repo} target="_blank" rel="noreferrer" aria-label={`${p.title} source`}>
                            <Github className="mr-1 h-4 w-4" /> Source
                        </a>
                        </Button>
                    </div>
                    </div>

                    <p className="mt-1 text-sm text-muted-foreground/90 leading-relaxed">{p.summary}</p>

                    <ul className="mt-3 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                        <li key={t}>
                        <Badge variant="secondary" className="rounded-md border border-border/70 bg-accent/60">
                            {t}
                        </Badge>
                        </li>
                    ))}
                    </ul>

                    <div className="mt-4 flex sm:hidden gap-2">
                    <Button asChild size="sm" variant="secondary" className="flex-1">
                        <a href={p.links.demo} target="_blank" rel="noreferrer" aria-label={`${p.title} demo`}>
                        <ExternalLink className="mr-1 h-4 w-4" /> Demo
                        </a>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="flex-1">
                        <a href={p.links.repo} target="_blank" rel="noreferrer" aria-label={`${p.title} source`}>
                        <Github className="mr-1 h-4 w-4" /> Source
                        </a>
                    </Button>
                    </div>

                    <p className="mt-3 text-xs text-muted-foreground">Contributors: {p.contributors}</p>
                </CardContent>
                </Card>
            </div>

            {/* BACK */}
            <div
                className="absolute inset-0 rounded-2xl [backface-visibility:hidden]"
                style={{ transform: "rotateY(180deg)" }}
            >
                <div className="flex h-full flex-col rounded-2xl border border-border bg-gradient-to-b from-card/90 to-card p-5">
                <h3 className="text-base md:text-lg font-semibold tracking-tight">{p.title} — Details</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {p.summary}
                </p>

                <div className="mt-3 grid gap-2 text-sm">
                    <div className="grid grid-cols-3 gap-2">
                    <span className="text-muted-foreground">Stack</span>
                    <span className="col-span-2">{p.stack.join(" · ")}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                    <span className="text-muted-foreground">Contributors</span>
                    <span className="col-span-2">{p.contributors}</span>
                    </div>
                    <ul className="mt-2 list-disc pl-5 text-muted-foreground/90">
                    {p.details.map((d, i) => (
                        <li key={i}>{d}</li>
                    ))}
                    </ul>
                </div>

                <div className="mt-auto flex items-center justify-between gap-2 pt-4">
                    <div className="flex gap-2">
                    <Button asChild size="sm" variant="secondary">
                        <a href={p.links.demo} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-1 h-4 w-4" /> Demo
                        </a>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                        <a href={p.links.repo} target="_blank" rel="noreferrer">
                        <Github className="mr-1 h-4 w-4" /> Source
                        </a>
                    </Button>
                    </div>
                    <Button size="sm" variant="ghost" onClick={() => setFlipped(false)} aria-label="Back to cover">
                    Back
                    </Button>
                </div>
                </div>
            </div>
            </motion.div>
        </div>

        {/* focus ring for keyboard users */}
        <span className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-accent/40 transition-[ring,box-shadow] duration-300 group-hover:ring-1 group-focus-within:ring-2" />
        </article>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
            <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Projects</h2>
            <span className="hidden md:inline-block text-xs text-muted-foreground">Scroll to preview, Tab to flip ✨</span>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {PROJECTS.map((p) => (
                <ProjectCard key={p.slug} p={p} />
            ))}
            </div>
        </div>
        </section>
    );
}
