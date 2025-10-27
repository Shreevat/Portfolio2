"use client";

import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* <Header /> */}

      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
    </div>
  );
}
