import HeroSection from "@/sections/Hero";
import AboutSection from "@/sections/About";
import ExperienceSection from "@/sections/Experience";
import ProjectsSection from "@/sections/Projects";
import SkillsSection from "@/sections/Skills";
import ContactSection from "@/sections/Contact";
import Navbar from "@/components/layout/Navbar";
import ScrollToTopOnLoad from "@/components/layout/ScrollToTopOnLoad";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
      <ScrollToTopOnLoad />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <footer className="mt-20 border-t border-border/60 py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Korn. All rights reserved.
      </footer>
    </main>
  );
}
