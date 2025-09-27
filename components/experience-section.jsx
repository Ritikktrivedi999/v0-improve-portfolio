"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const experiences = [
  {
    id: 1,
    title: "5G Internet Of IOT Builders",
    company: "FIIT, IIT Delhi",
    tenure: "January 2024 - March 2024",
    subtitle:
      "FITT is an industry Academia interface organization, established by IIT Delhi to facilitate Research Translation, Technology Development, IPR Management, Technology Transfer & Commercialisation, R&D Collaboration, Start-up Incubation and Mentoring.",
    description:
      "Led Capstone project on Wokwi utilizing Blynk IoT to implement MQTT communication with Wokwi and NodeRed as brokers. Analyzed data through thingSpeak for comprehensive analytics. Key features include continuous data acquisition, modular sensor design for customization, and portability for versatile deployment.",
    technologies: ["C++", "STL", "Wokwi", "Sensor", "ThingSpeak Cloud", "Web Service", "Cloud Platforms"],
    link: "https://drive.google.com/file/d/1d0A3zQeURInNbF74kRgGl6gTgBs-XEv-/view",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    title: "Web Developer Intern",
    company: "At Zetpeak, Bangalore",
    tenure: "July 2023 - October 2023",
    subtitle:
      "Zetpeak, founded in 2021, is a training, research, and development company specializes in web development and software services, leveraging expertise in these areas to build robust and innovative digital solutions.",
    description:
      "Rebuilt an E-commerce website using MERN stack, increasing conversion rate by 20% and reducing page load time by 35%. Developed an HR management system for employee onboarding, leave management, and performance tracking. Translated Figma designs into pixel-perfect, responsive web interfaces using HTML, React, and Bootstrap. Learned teamwork, worked with experienced developers, and contributed to developing the company's web application.",
    technologies: [
      "HTML5",
      "React.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "RTK",
      "mongoose",
      "CSS",
      "javascript",
      "figma",
    ],
    link: "https://drive.google.com/file/d/1AV55gdUmq3coPPlJjpp78Efl9UJy6eYo/view?usp=sharing",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    title: "Frontend-Developer Intern",
    company: "IBM SkillBuild and Edunet",
    tenure: "June 2023 - July 2023",
    subtitle:
      "Edunet Foundation in associated with IBM (International Business Machines Corporation) Skill Build: IBM SkillsBuild provides free, online, skills-based learning and support to assist individuals in achieving their employment goals. The Edunet Foundation offers a 4-week learning experience focused on AI, Web Development and Software Development",
    description:
      "Explored frontend technologies and frameworks like React, Redux Tailwind CSS, and Bootstrap and applied the skills in designing a react-based portfolio. Lead a group Capstone Project based on React. As a lead developer, revamped the site to a highly responsive and interactive website. Created new features and pages.",
    technologies: ["React.js", "Web Development Fundamentals", "HTML5", "CSS3", "Axios", "Redux"],
    link: "https://drive.google.com/file/d/104zQuwihP0kNd6iVdeg5cJhaDBB6NoO0/view?usp=sharing",
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function ExperienceSection() {
  return (
    <section className="py-20 bg-section relative overflow-hidden" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-lg mb-2">Experience</p>
          <h2 className="text-4xl font-bold text-primary-custom mb-4">Professional Journey</h2>
          <p className="text-secondary-custom max-w-2xl mx-auto">
            My professional experience and key projects that have shaped my career
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-primary/30 hidden lg:block"
          />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 300 }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10 hidden lg:block"
                />

                {/* Content */}
                <div className="flex items-center gap-8">
                  {index % 2 === 0 ? (
                    <>
                      {/* Left side - Image */}
                      <motion.div whileHover={{ scale: 1.02 }} className="w-1/2 pr-8">
                        <div className="relative h-80 rounded-2xl overflow-hidden shadow-custom-lg">
                          <Image src={exp.image || "/placeholder.svg"} alt={exp.title} fill className="object-cover" />
                          <div className="absolute top-4 right-4">
                            <Button
                              size="sm"
                              onClick={() => window.open(exp.link, "_blank")}
                              className="gradient-primary text-white border-0 hover-glow"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </motion.div>

                      {/* Right side - Details */}
                      <motion.div whileHover={{ y: -2 }} className="w-1/2 pl-8">
                        <div className="glass-effect rounded-2xl shadow-custom border-0 p-8 hover:shadow-custom-lg hover-lift transition-all duration-300">
                          <h3 className="text-2xl font-bold text-primary-custom mb-3">{exp.title}</h3>
                          <p className="text-xl font-semibold text-primary mb-2">{exp.company}</p>
                          <p className="text-sm text-orange-500 dark:text-orange-400 font-medium mb-3">
                            {exp.subtitle}
                          </p>
                          <p className="text-sm text-secondary-custom font-medium mb-4">{exp.tenure}</p>
                          <p className="text-secondary-custom leading-relaxed mb-6">{exp.description}</p>

                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <motion.div
                                key={techIndex}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.2 + techIndex * 0.03 }}
                                whileHover={{ scale: 1.05 }}
                              >
                                <Badge
                                  variant="secondary"
                                  className="text-xs px-3 py-1 glass-effect border-0 text-secondary-custom hover:bg-primary/10 transition-colors"
                                >
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </>
                  ) : (
                    <>
                      {/* Left side - Details */}
                      <motion.div whileHover={{ y: -2 }} className="w-1/2 pr-8">
                        <div className="glass-effect rounded-2xl shadow-custom border-0 p-8 hover:shadow-custom-lg hover-lift transition-all duration-300">
                          <h3 className="text-2xl font-bold text-primary-custom mb-3">{exp.title}</h3>
                          <p className="text-xl font-semibold text-primary mb-2">{exp.company}</p>
                          <p className="text-sm text-orange-500 dark:text-orange-400 font-medium mb-3">
                            {exp.subtitle}
                          </p>
                          <p className="text-sm text-secondary-custom font-medium mb-4">{exp.tenure}</p>
                          <p className="text-secondary-custom leading-relaxed mb-6">{exp.description}</p>

                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <motion.div
                                key={techIndex}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.2 + techIndex * 0.03 }}
                                whileHover={{ scale: 1.05 }}
                              >
                                <Badge
                                  variant="secondary"
                                  className="text-xs px-3 py-1 glass-effect border-0 text-secondary-custom hover:bg-primary/10 transition-colors"
                                >
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>

                      {/* Right side - Image */}
                      <motion.div whileHover={{ scale: 1.02 }} className="w-1/2 pl-8">
                        <div className="relative h-80 rounded-2xl overflow-hidden shadow-custom-lg">
                          <Image src={exp.image || "/placeholder.svg"} alt={exp.title} fill className="object-cover" />
                          <div className="absolute top-4 right-4">
                            <Button
                              size="sm"
                              onClick={() => window.open(exp.link, "_blank")}
                              className="gradient-primary text-white border-0 hover-glow"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`mobile-${exp.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8"
            >
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-primary/30"></div>
              <div className="absolute left-0 top-6 w-6 h-6 bg-primary rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>

              <div className="glass-effect rounded-2xl shadow-custom border-0 overflow-hidden">
                <div className="relative h-48">
                  <Image src={exp.image || "/placeholder.svg"} alt={exp.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4">
                    <Button
                      size="sm"
                      onClick={() => window.open(exp.link, "_blank")}
                      className="gradient-primary text-white border-0 hover-glow"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-custom mb-2">{exp.title}</h3>
                  <p className="text-lg font-semibold text-primary mb-1">{exp.company}</p>
                  <p className="text-sm text-orange-500 dark:text-orange-400 font-medium mb-2">{exp.subtitle}</p>
                  <p className="text-sm text-secondary-custom font-medium mb-3">{exp.tenure}</p>
                  <p className="text-secondary-custom leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs px-2 py-1 glass-effect border-0 text-secondary-custom"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
