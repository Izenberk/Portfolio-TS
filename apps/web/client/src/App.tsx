import Header from '@/components/layout/Header'
import Hero from '@/sections/Hero'
import SkillsSection from '@/sections/Skills'
import ProjectsSection from '@/sections/Projects'
import ExperienceSection from '@/sections/Experience'
import AboutSection from '@/sections/About'
import ContactSection from '@/sections/Contact'
import ScrollToTopOnLoad from './lib/scrollToTopOnLoad'

import { SKILLS } from '@/data/skills'

import { PROJECTS } from '@/data/projects'
import { EXPERIENCE } from '@/data/experience'

export default function App() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <ScrollToTopOnLoad />
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <SkillsSection data={SKILLS} />
        <ProjectsSection data={PROJECTS} />
        <ExperienceSection data={EXPERIENCE} />
        <ContactSection />
      </main>
      <footer className="mt-20 border-t border-border/60 py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Korn. All rights reserved.
      </footer>
    </div>
  )
}
