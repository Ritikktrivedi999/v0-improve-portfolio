import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import EducationSection from './components/EducationSection'
import AnalyticsSection from './components/AnalyticsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import UniverseBackground from './components/UniverseBackground'
import AIAssistant from './components/AIAssistant'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <UniverseBackground theme={theme} />
      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <AnalyticsSection />
        <ContactSection />
      </main>

      <Footer />
      <AIAssistant />
    </div>
  )
}
