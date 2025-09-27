"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram, Youtube, Facebook } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Ritikktrivedi999",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/ritik-trivedi-598a4b21b",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/its_titled_trivedi_jii99?igshid=YmMyMTA2M2Y=",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/@ritiktrivedi99",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/rohan.trivedi.3990",
  },
]

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Analytics", href: "#analytics" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

export default function Footer() {
  const scrollToSection = (href) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Ritik Trivedi</h3>
            <p className="text-gray-300">
              Full Stack Developer passionate about creating innovative web solutions and bringing ideas to life through
              code.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary hover:text-white transition-colors"
                    onClick={() => window.open(social.url, "_blank")}
                  >
                    <IconComponent className="h-5 w-5" />
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Web Development</li>
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>Full Stack Solutions</li>
              <li>API Development</li>
              <li>Database Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p>ritikktrivedi9999@gmail.com</p>
              <p>Rewa, M.P., India</p>
              <Button
                variant="outline"
                className="mt-4 border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                onClick={() => scrollToSection("#contact")}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-center md:text-left">
              © 2024 Ritik Trivedi. All rights reserved. Thank you for visiting ❤️
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-gray-300 hover:text-primary transition-colors text-sm">Privacy Policy</button>
              <button className="text-gray-300 hover:text-primary transition-colors text-sm">Terms of Service</button>
              <button className="text-gray-300 hover:text-primary transition-colors text-sm">Cookie Settings</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
