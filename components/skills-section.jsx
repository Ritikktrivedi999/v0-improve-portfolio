"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Settings, Star } from "lucide-react"
import { motion } from "framer-motion"

const skillsData = [
  {
    id: 1,
    icon: Code,
    title: "Frontend & Programming",
    description: "Modern web technologies and programming languages",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "C", "C++"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    icon: Database,
    title: "Backend & Database",
    description: "Server-side technologies and database management",
    skills: ["Node.js", "Express.js", "MongoDB", "SQL", "Redux RTK", "REST APIs"],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    icon: Settings,
    title: "Developer Tools",
    description: "Development environment and productivity tools",
    skills: ["VS Code", "Git", "GitHub", "Postman", "MongoDB Compass", "MATLAB"],
    color: "from-purple-500 to-violet-500",
  },
  {
    id: 4,
    icon: Star,
    title: "Other Skills",
    description: "Additional competencies and soft skills",
    skills: ["Event Coordination", "Canva", "Communication", "Leadership", "Project Management"],
    color: "from-orange-500 to-red-500",
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-section-alt relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(var(--gradient-from) / 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(var(--gradient-from) / 0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-lg mb-2">My Skills</p>
          <h2 className="text-4xl font-bold text-primary-custom mb-4">My Expertise</h2>
          <p className="text-secondary-custom max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and competencies across different domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="group h-full glass-effect border-0 shadow-custom hover:shadow-custom-lg hover-glow transition-all duration-300">
                  <CardHeader className="text-center">
                    <motion.div
                      whileHover={{ rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-custom`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl text-primary-custom">{skill.title}</CardTitle>
                    <p className="text-secondary-custom text-sm">{skill.description}</p>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skill.skills.map((item, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + skillIndex * 0.03 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-xs glass-effect border-0 hover:bg-primary/10 transition-colors"
                          >
                            {item}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
