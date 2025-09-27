"use client"

import { motion } from "framer-motion"
import { Card } from "./ui/Card"
import { Badge } from "./ui/Badge"

const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "University of Technology",
    period: "2018 - 2022",
    description: "Focused on software engineering, algorithms, and modern web technologies.",
    achievements: ["Dean's List", "Programming Competition Winner", "Tech Club President"],
  },
  {
    degree: "Full Stack Web Development",
    institution: "Online Bootcamp",
    period: "2021",
    description: "Intensive program covering modern web development stack and best practices.",
    achievements: ["Top 5% Graduate", "Capstone Project Award", "Peer Mentor"],
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic background and continuous learning journey
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
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
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{edu.degree}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.institution}</p>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                    {edu.period}
                  </Badge>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{edu.description}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((achievement) => (
                    <Badge key={achievement} variant="secondary" className="bg-white/20 text-gray-800 dark:text-white">
                      {achievement}
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
