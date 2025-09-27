"use client"

import { motion } from "framer-motion"
import { Card } from "./ui/Card"
import { Badge } from "./ui/Badge"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2023 - Present",
    description: "Leading development of modern web applications using React, Node.js, and cloud technologies.",
    technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    period: "2022 - 2023",
    description: "Developed responsive user interfaces and improved user experience across multiple projects.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Figma"],
  },
  {
    title: "Junior Developer",
    company: "StartUp Ventures",
    period: "2021 - 2022",
    description: "Contributed to various projects while learning modern development practices and methodologies.",
    technologies: ["JavaScript", "HTML/CSS", "Git", "MongoDB"],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and key contributions
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 backdrop-blur-sm bg-white/10 border-white/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                    {exp.period}
                  </Badge>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-white/20 text-gray-800 dark:text-white">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
