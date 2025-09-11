// src/components/projects/ProjectCard.tsx
import type { Project } from '@/types'

type Props = { project: Project }
export default function ProjectCard({ project }: Props) {
    const { title, description, cover, tech, repoUrl, demoUrl } = project
    return (
        <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
        {cover && (
            <img
            src={cover}
            alt={title}
            className="mb-3 aspect-video w-full rounded-xl object-cover"
            />
        )}
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-white/80">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
            {tech.map((t) => (
            <span key={t} className="rounded-full bg-white/10 px-2 py-1 text-xs">
                {t}
            </span>
            ))}
        </div>
        <div className="mt-4 flex gap-3">
            {repoUrl && (
            <a className="text-sm text-blue-300 hover:underline" href={repoUrl} target="_blank" rel="noreferrer">
                Repository
            </a>
            )}
            {demoUrl && (
            <a className="text-sm text-blue-300 hover:underline" href={demoUrl} target="_blank" rel="noreferrer">
                Live Demo
            </a>
            )}
        </div>
        </article>
    )
}
