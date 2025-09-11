import Section from '@/components/layout/Section'
import ProjectCard from '@/components/projects/ProjectCard'
import { projects } from '@/data/projects'

export default function ProjectsSection() {
    return (
        <Section id="projects" className="py-16">
        <h2 className="mb-6 text-3xl font-bold">Projects</h2>
        <p className="mb-10 max-w-prose text-white/80">A few things I’ve been building lately.</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
            ))}
        </div>
        </Section>
    )
}
