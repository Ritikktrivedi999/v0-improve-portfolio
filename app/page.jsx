"use client"

import { useState } from "react"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import AnalyticsSection from "@/components/analytics-section"
import EducationSection from "@/components/education-section"
import ContactSection from "@/components/contact-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from "@/components/toaster"
import AIAssistant from "@/components/ai-assistant"
import UniverseBackground from "@/components/universe-background"
import FloatingElements from "@/components/floating-elements"
import ScrollProgress from "@/components/scroll-progress"
import ToastContainerWrapper from "@/components/toast-container"

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  return (
    <main className="min-h-screen relative">
      <UniverseBackground isDark={isDark} />
      <FloatingElements isDark={isDark} />
      <ScrollProgress />
      <Navbar onThemeChange={setIsDark} />
      <HeroSection isDark={isDark} />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <AnalyticsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
      <AIAssistant />
      <Toaster />
      <ToastContainerWrapper />
    </main>
  )
}
