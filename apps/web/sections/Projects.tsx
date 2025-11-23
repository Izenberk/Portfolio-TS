"use client";

import { PROJECTS } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function Projects() {
  if (!PROJECTS?.length) return null;

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Projects
          </h2>
          <span className="hidden md:inline-block text-xs text-muted-foreground">
            Enter to focus, Tab through actions ✨
          </span>
        </div>

        <div className="mt-10 grid gap-10 grid-cols-1 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
