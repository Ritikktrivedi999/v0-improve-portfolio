"use client"

import { useState } from "react"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import SkillsSection from "./components/SkillsSection"
import ExperienceSection from "./components/ExperienceSection"
import ProjectsSection from "./components/ProjectsSection"
import AnalyticsSection from "./components/AnalyticsSection"
import EducationSection from "./components/EducationSection"
import ContactSection from "./components/ContactSection"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Toaster } from "./components/Toaster"
import AIAssistant from "./components/AIAssistant"
import UniverseBackground from "./components/UniverseBackground"
import FloatingElements from "./components/FloatingElements"
import ScrollProgress from "./components/ScrollProgress"

function App() {
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
    </main>
  )
}

export default App
