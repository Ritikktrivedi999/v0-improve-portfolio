"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Zap } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "OpportuneHub: Full Stack Job Portal",
    description:
      "Developed a full-featured Job Portal Application aimed at connecting job seekers with employers. The project demonstrates proficiency in modern web development, focusing on user-friendly design, secure authentication, and efficient data management.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Tailwind CSS"],
    liveLink: "https://github.com/Ritikktrivedi999/OpportuneHub-Full-Stack-Job-Portal.git",
    githubLink: "https://github.com/Ritikktrivedi999/OpportuneHub-Full-Stack-Job-Portal.git",
    featured: true,
  },
  {
    id: 2,
    title: "API Based Movie App",
    description:
      "A movie web application clone utilizing React.js and Axios package for API Integration. Features trending movies, search functionality, and detailed movie information.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React.js", "Axios", "CSS3", "Movie API"],
    liveLink: "https://movie-point-trend.netlify.app/",
    githubLink: "https://github.com/Ritikktrivedi999/Movie-Point-Trending-movie-fetching-app.git",
    featured: false,
  },
  {
    id: 3,
    title: "MERN Blog Application",
    description:
      "A full-stack blog application using the MERN stack featuring robust user authentication (JWT & Google OAuth), dynamic routing, and state management with Redux Toolkit.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "JWT"],
    liveLink: "https://github.com/Ritikktrivedi999/MERN-Blog.git",
    githubLink: "https://github.com/Ritikktrivedi999/MERN-Blog.git",
    featured: true,
  },
  {
    id: 4,
    title: "Food-Street-Redux",
    description:
      "Redux Toolkit Based Food ordering Site Prototype with redux-react integration. Features cart management, order processing, and state persistence.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React.js", "Redux Toolkit", "CSS3", "JavaScript"],
    liveLink: "https://react-redux-food-ordering-app.netlify.app/",
    githubLink: "https://github.com/Ritikktrivedi999/Food-order-react-redux-2",
    featured: false,
  },
  {
    id: 5,
    title: "Landing Page Prototype",
    description:
      "React and Tailwind CSS Landing Page with fetching GitHub dynamic data. Responsive design with modern UI components.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React.js", "Tailwind CSS", "GitHub API", "React Router"],
    liveLink: "https://github.com/Ritikktrivedi999/Clean-UI-React_Router_dom_project",
    githubLink: "https://github.com/Ritikktrivedi999/Clean-UI-React_Router_dom_project",
    featured: false,
  },
  {
    id: 6,
    title: "React.js Portfolio",
    description:
      "React and CSS3 portfolio for client. Component Based Methodology and Pure CSS is Used with responsive design principles.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React.js", "CSS3", "JavaScript", "Responsive Design"],
    liveLink: "https://ritik-react-portfolio.netlify.app/",
    githubLink: "https://github.com/Ritikktrivedi999/MyPortfolio-with-React.js",
    featured: false,
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          <div>
            <p className="text-primary font-semibold text-lg mb-2">Recent Projects</p>
            <h2 className="text-4xl font-bold text-primary-custom mb-4">My Portfolio</h2>
            <p className="text-secondary-custom max-w-2xl">
              A showcase of my recent projects demonstrating various technologies and problem-solving approaches
            </p>
          </div>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open("https://github.com/Ritikktrivedi999", "_blank")}
            className="mt-6 lg:mt-0 glass-effect border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Github className="mr-2 h-4 w-4" />
            Visit GitHub
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card
                className={`group h-full hover:shadow-custom-lg hover:ai-glow transition-all duration-300 hover-lift glass-effect-ai border border-blue-500/30 ${
                  project.featured ? "ring-2 ring-blue-500/30" : ""
                } bg-white/5`}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {project.featured && (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="absolute top-4 left-4"
                    >
                      <Badge className="gradient-primary text-white border-0 ai-glow font-semibold">
                        <Zap className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    </motion.div>
                  )}
                </div>

              <CardHeader>
                <CardTitle className="text-xl text-primary-custom group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-secondary-custom text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge className="text-xs glass-effect-ai border border-blue-500/30 bg-blue-500/10 text-blue-200 hover:bg-blue-500/20 transition-colors font-medium">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>

                <div className="flex gap-2 pt-4 border-t border-blue-500/20">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                    <Button
                      size="sm"
                      onClick={() => window.open(project.liveLink, "_blank")}
                      className="w-full gradient-primary text-white border-0 ai-glow transition-all"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                    <Button
                      size="sm"
                      onClick={() => window.open(project.githubLink, "_blank")}
                      className="w-full glass-effect-ai border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition-colors"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
