// src/sections/Skills.tsx
import React, { JSX, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  siReact,
  siTailwindcss,
  siShadcnui,
  siNodedotjs,
  siExpress,
  siMongodb,
  siPostgresql,
  siGit,
  siDocker,
  siGithub,
  siVercel,
  siRender,
} from "simple-icons";

// ── brand SVG renderer (no external hooks)
function BrandIcon({
  icon,
  size = 22,
  title,
  className,
}: {
  icon: { path: string; hex: string; title?: string };
  size?: number;
  title?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={title || icon.title || "icon"}
      className={className}
    >
      <path d={icon.path} fill={`#${icon.hex}`} />
    </svg>
  );
}

type SkillKey =
  | "React"
  | "TailwindCSS"
  | "shadcn/ui"
  | "Node.js"
  | "Express"
  | "MongoDB"
  | "PostgreSQL"
  | "Git"
  | "Docker"
  | "GitHub"
  | "Vercel"
  | "Render";

const ICONS: Record<SkillKey, { path: string; hex: string; title?: string }> = {
  React: siReact,
  TailwindCSS: siTailwindcss,
  "shadcn/ui": siShadcnui,
  "Node.js": siNodedotjs,
  Express: siExpress,
  MongoDB: siMongodb,
  PostgreSQL: siPostgresql,
  Git: siGit,
  Docker: siDocker,
  GitHub: siGithub,
  Vercel: siVercel,
  Render: siRender,
};

type SkillDetail = {
  summary: string;
  appliedIn?: string[];
  highlights?: string[];
  links?: { label: string; href: string }[];
};

const SKILL_DETAILS: Record<SkillKey, SkillDetail> = {
  React: {
    summary:
      "Built scalable, component-driven UIs with Hooks, React Router, state management, accessibility (a11y), and performance optimization.",
    appliedIn: ["HugPaw", "DevLink"],
    highlights: [
      "Implemented protected routes and JWT-based auth flow",
      "Developed reusable UI patterns: forms, cards, toast notifications, skeleton loaders",
    ],
  },
  TailwindCSS: {
    summary:
      "Applied utility-first CSS for responsive, mobile-first layouts with custom design tokens, theming, and rapid prototyping.",
    appliedIn: ["HugPaw", "DevLink"],
  },
  "shadcn/ui": {
    summary:
      "Leveraged accessible, headless UI primitives to build consistent, production-ready components with modern design standards.",
    appliedIn: ["HugPaw", "DevLink"],
  },
  "Node.js": {
    summary:
      "Developed RESTful APIs with environment configuration, JWT authentication, and Dockerized dev/prod workflows.",
    appliedIn: ["HugPaw", "DevLink"],
  },
  Express: {
    summary:
      "Implemented API routes, controllers, centralized error handling, authentication/authorization middleware, and secure cookie sessions.",
    appliedIn: ["HugPaw", "DevLink"],
  },
  MongoDB: {
    summary:
      "Designed schema-based data models with Mongoose, optimized queries using `lean()`, and applied basic aggregation pipelines.",
    appliedIn: ["HugPaw", "DevLink"],
  },
  PostgreSQL: {
    summary:
      "Performed relational modeling, SQL joins, and aggregation queries; applied in data-engineering analytics pipelines.",
  },
  Git: {
    summary:
      "Practiced Git workflows with feature branches, pull requests, semantic commit messages, version tags, and release management.",
    appliedIn: ["All projects"],
  },
  Docker: {
    summary:
      "Containerized applications with multi-stage builds, environment configs, and reproducible dev/prod environments.",
    appliedIn: ["HugPaw"],
  },
  GitHub: {
    summary:
      "Managed projects with Issues/Projects, enforced code reviews via PRs, and configured basic CI/CD pipelines with GitHub Actions.",
    links: [{ label: "GitHub profile", href: "https://github.com/Izenberk" }],
  },
  Vercel: {
    summary:
      "Deployed frontend apps with preview builds, environment variable management, smart caching, and edge routing.",
    appliedIn: ["HugPaw", "DevLink"],
  },
  Render: {
    summary:
      "Deployed backend APIs for rapid prototyping and testing, with built-in SSL and environment variable configuration.",
    appliedIn: ["HugPaw"],
  },
};


const GROUPS: Record<string, SkillKey[]> = {
  Frontend: ["React", "TailwindCSS", "shadcn/ui"],
  Backend: ["Node.js", "Express"],
  Database: ["MongoDB", "PostgreSQL"],
  "Ops & Deploy": ["Git", "Docker", "GitHub", "Vercel", "Render"],
};

// Minimal modal (portal + no third-party hooks)
function SimpleModal({
  open,
  onClose,
  title,
  icon,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  icon?: { path: string; hex: string; title?: string };
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} aria-hidden="true" />
      <div className="relative z-[101] w-[min(92vw,640px)] rounded-xl border border-border/60 bg-card p-5 shadow-xl">
        <div className="flex items-center gap-3 mb-2">
          {icon && (
            <span className="inline-flex items-center justify-center rounded-md bg-primary/10 p-2">
              <BrandIcon icon={icon} size={20} title={title} />
            </span>
          )}
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="ml-auto rounded-md px-2 py-1 text-sm text-foreground/70 hover:bg-foreground/10"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="text-sm text-foreground/80">{children}</div>
      </div>
    </div>,
    document.body
  );
}

function SkillRow({
  skill,
  onClick,
  className,
}: {
  skill: SkillKey
  onClick: (k: SkillKey) => void
  className?: string
}) {
  const icon = ICONS[skill];

  const baseBtn =
    "inline-flex items-center gap-4 md:gap-5 w-full text-left " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 " +
    "focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  return (
    <li className="flex items-center gap-4 md:gap-5 text-base md:text-lg">
      <button
        type="button"
        onClick={() => onClick(skill)}
        className={className ? `${baseBtn} ${className}` : baseBtn}
        aria-label={`Show details for ${skill}`}
      >
        {/* Badge icon */}
        <span
          className="
            skill-icon
            inline-flex items-center justify-center rounded-lg
            bg-primary/10 text-primary w-11 h-11 md:w-12 md:h-12
            ring-1 ring-primary/20 transition
          "
        >
          <BrandIcon icon={icon} size={22} title={skill} />
        </span>

        <span className="flex-1 min-w-0">
          <span className="font-medium">{skill}</span>
          <span className="ml-2 align-middle text-xs text-foreground/60 group-hover:text-foreground/80">
            click to see how I used this
          </span>
        </span>

        <span className="ml-auto text-xs text-foreground/50 group-hover:text-foreground/80">
          Learn more →
        </span>
      </button>
    </li>
  );
}


export default function Skills(): JSX.Element {
  const [active, setActive] = useState<SkillKey | null>(null);
  const detail = useMemo(() => (active ? SKILL_DETAILS[active] : null), [active]);

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
          <div className="hidden md:block text-xs text-foreground/60">Click a skill to see real usage in projects</div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(GROUPS).map(([group, items]) => (
            <Card
              key={group}
              className="
                group transition-all duration-300 border border-border/80 bg-card/50
                hover:-translate-y-1 hover:bg-primary/25
              "
            >
              <CardHeader className="pb-2 md:pb-3">
                <CardTitle className="text-xl md:text-2xl">{group}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="flex flex-col gap-4 md:gap-5">
                  {items.map((k) => (
                    <SkillRow
                      key={k}
                      skill={k}
                      onClick={setActive}
                      className="hover:-translate-y-0.5  hover:cursor-pointer"
                      // (drop shadow since glow is handled at icon level)
                    />

                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <SimpleModal
        open={!!active}
        onClose={() => setActive(null)}
        title={active ?? ""}
        icon={active ? ICONS[active] : undefined}
      >
        {detail && (
          <>
            <p>{detail.summary}</p>

            {detail.appliedIn?.length ? (
              <div className="mt-3">
                <div className="text-xs uppercase tracking-wide text-foreground/60 mb-1">Applied In</div>
                <div className="flex flex-wrap gap-2">
                  {detail.appliedIn.map((p) => (
                    <span
                      key={p}
                      className="rounded-full border border-border/60 bg-background/60 px-2.5 py-0.5 text-xs"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            {detail.highlights?.length ? (
              <ul className="mt-3 list-disc pl-5 space-y-1.5">
                {detail.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            ) : null}

            {detail.links?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {detail.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm underline underline-offset-4 hover:no-underline text-primary"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            ) : null}
          </>
        )}
      </SimpleModal>
    </section>
  );
}
