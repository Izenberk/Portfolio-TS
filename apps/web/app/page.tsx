import HeroSection from "@/sections/Hero";
import AboutSection from "@/sections/About";
import ExperienceSection from "@/sections/Experience";
import ProjectsSection from "@/sections/Projects";
import SkillsSection from "@/sections/Skills";
import ContactSection from "@/sections/Contact";
import Navbar from "@/components/layout/Navbar";
import ScrollToTopOnLoad from "@/components/layout/ScrollToTopOnLoad";

async function getData(endpoint: string) {
  const res = await fetch(`http://localhost:3001/api/${endpoint}`, {
    cache: "no-store"
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const projects = await getData("projects");
  const skills = await getData("skills");
  const experience = await getData("experience");
  
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
      <ScrollToTopOnLoad />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection data={skills} />
      <ProjectsSection data={projects} />
      <ExperienceSection data={experience} />
      <ContactSection />
      <footer className="mt-20 border-t border-border/60 py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Korn. All rights reserved.
      </footer>
    </main>
  );
}
