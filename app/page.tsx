import { Suspense } from "react"
import { Nav } from "@/components/nav"
import { SplashScreen } from "@/components/sections/splash-screen"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { AnimatedBackground } from "@/components/animated-background"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      {/* Background */}
      <AnimatedBackground />

      {/* Splash overlay */}
      <Suspense fallback={null}>
        <SplashScreen />
      </Suspense>

      {/* Navigation */}
      <Nav />

      {/* Sections */}
      <section id="home" className="relative scroll-mt-24">
        <HeroSection />
      </section>

      <section id="about" className="relative scroll-mt-24">
        <AboutSection />
      </section>

      <section id="experience" className="relative scroll-mt-24">
        <ExperienceSection />
      </section>

      <section id="skills" className="relative scroll-mt-24">
        <SkillsSection />
      </section>

      <section id="projects" className="relative scroll-mt-24">
        <ProjectsSection />
      </section>

      <section id="contact" className="relative scroll-mt-24">
        <ContactSection />
      </section>

      <footer className="mt-16 border-t bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/40">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sultan Mukhtar Khudori. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
