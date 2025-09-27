"use client"

import { motion } from "framer-motion"
import { Card } from "./ui/Card"
import { Badge } from "./ui/Badge"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "from-blue-400 to-cyan-400",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
    color: "from-green-400 to-emerald-400",
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "Figma", "VS Code"],
    color: "from-purple-400 to-pink-400",
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full backdrop-blur-sm bg-white/10 border-white/20">
                <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-white/20 text-gray-800 dark:text-white">
                      {skill}
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
