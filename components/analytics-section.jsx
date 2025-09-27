"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { BarChart3, TrendingUp, Award, Target, Code2, Database, Settings, Star, Activity, Zap } from "lucide-react"

// Skills data with usage frequency and proficiency
const skillsAnalytics = {
  mostUsed: [
    { name: "React.js", usage: 95, projects: 12, hours: 850, category: "Frontend" },
    { name: "JavaScript", usage: 92, projects: 15, hours: 920, category: "Programming" },
    { name: "Node.js", usage: 88, projects: 10, hours: 720, category: "Backend" },
    { name: "MongoDB", usage: 85, projects: 8, hours: 650, category: "Database" },
    { name: "Express.js", usage: 82, projects: 9, hours: 580, category: "Backend" },
    { name: "Tailwind CSS", usage: 80, projects: 11, hours: 520, category: "Frontend" },
    { name: "Next.js", usage: 75, projects: 6, hours: 480, category: "Frontend" },
    { name: "Redux", usage: 70, projects: 7, hours: 420, category: "State Management" },
    { name: "Git/GitHub", usage: 68, projects: 15, hours: 380, category: "Tools" },
    { name: "CSS3", usage: 65, projects: 13, hours: 450, category: "Frontend" },
  ],
  proficiencyLevels: [
    { skill: "React.js", level: 95, color: "from-blue-500 to-cyan-500" },
    { skill: "JavaScript", level: 92, color: "from-yellow-500 to-orange-500" },
    { skill: "Node.js", level: 88, color: "from-green-500 to-emerald-500" },
    { skill: "HTML5", level: 90, color: "from-red-500 to-pink-500" },
    { skill: "CSS3", level: 85, color: "from-purple-500 to-violet-500" },
    { skill: "MongoDB", level: 82, color: "from-green-600 to-green-400" },
    { skill: "Express.js", level: 80, color: "from-gray-600 to-gray-400" },
    { skill: "Tailwind CSS", level: 88, color: "from-teal-500 to-cyan-500" },
  ],
  categories: [
    { name: "Frontend", count: 6, percentage: 35, icon: Code2 },
    { name: "Backend", count: 4, percentage: 25, icon: Database },
    { name: "Tools", count: 3, percentage: 20, icon: Settings },
    { name: "Database", count: 2, percentage: 12, icon: Database },
    { name: "Other", count: 2, percentage: 8, icon: Star },
  ],
  projectStats: {
    totalProjects: 15,
    completedProjects: 12,
    inProgress: 2,
    planned: 1,
    totalHours: 5420,
    avgProjectDuration: "2.5 months",
  },
}

const SkillBar = ({ skill, level, color, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="space-y-2"
  >
    <div className="flex justify-between items-center">
      <span className="text-sm font-medium text-primary-custom">{skill}</span>
      <span className="text-sm text-secondary-custom">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ delay: delay + 0.2, duration: 1, ease: "easeOut" }}
        className={`h-2 rounded-full bg-gradient-to-r ${color}`}
      />
    </div>
  </motion.div>
)

const UsageChart = ({ data }) => {
  const maxUsage = Math.max(...data.map((item) => item.usage))

  return (
    <div className="space-y-4">
      {data.map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="flex items-center space-x-4"
        >
          <div className="w-20 text-sm font-medium text-primary-custom truncate">{item.name}</div>
          <div className="flex-1 relative">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-6">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(item.usage / maxUsage) * 100}%` }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
                className="h-6 rounded-full bg-gradient-to-r from-primary to-purple-600 flex items-center justify-end pr-2"
              >
                <span className="text-xs text-white font-medium">{item.usage}%</span>
              </motion.div>
            </div>
          </div>
          <div className="text-xs text-secondary-custom w-16 text-right">{item.projects} projects</div>
        </motion.div>
      ))}
    </div>
  )
}

const CategoryChart = ({ categories }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
    {categories.map((category, index) => {
      const IconComponent = category.icon
      return (
        <motion.div
          key={category.name}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="text-center"
        >
          <div className="relative w-20 h-20 mx-auto mb-3">
            <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-200 dark:text-gray-700"
              />
              <motion.path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeDasharray={`${category.percentage}, 100`}
                initial={{ strokeDasharray: "0, 100" }}
                whileInView={{ strokeDasharray: `${category.percentage}, 100` }}
                transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--gradient-from))" />
                  <stop offset="100%" stopColor="hsl(var(--gradient-to))" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <IconComponent className="h-6 w-6 text-primary" />
            </div>
          </div>
          <h3 className="font-semibold text-primary-custom text-sm">{category.name}</h3>
          <p className="text-xs text-secondary-custom">{category.count} skills</p>
          <p className="text-xs text-primary font-medium">{category.percentage}%</p>
        </motion.div>
      )
    })}
  </div>
)

const StatCard = ({ icon: Icon, title, value, subtitle, delay = 0 }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.5 }}>
    <Card className="glass-effect border-0 shadow-custom hover:shadow-custom-lg hover-lift transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <div className="p-3 rounded-full gradient-primary">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-2xl font-bold text-primary-custom">{value}</p>
            <p className="text-sm font-medium text-primary">{title}</p>
            <p className="text-xs text-secondary-custom">{subtitle}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
)

export default function AnalyticsSection() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <section id="analytics" className="py-20 bg-section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-lg mb-2">Skills Analytics</p>
          <h2 className="text-4xl font-bold text-primary-custom mb-4">Performance Dashboard</h2>
          <p className="text-secondary-custom max-w-2xl mx-auto">
            Comprehensive analysis of my technical skills, project involvement, and development expertise
          </p>
        </motion.div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            icon={Target}
            title="Total Projects"
            value={skillsAnalytics.projectStats.totalProjects}
            subtitle="Completed & In Progress"
            delay={0}
          />
          <StatCard
            icon={Activity}
            title="Development Hours"
            value={`${skillsAnalytics.projectStats.totalHours}+`}
            subtitle="Coding Experience"
            delay={0.1}
          />
          <StatCard icon={Award} title="Top Skill" value="React.js" subtitle="95% Proficiency" delay={0.2} />
          <StatCard
            icon={Zap}
            title="Avg Project Time"
            value={skillsAnalytics.projectStats.avgProjectDuration}
            subtitle="Development Cycle"
            delay={0.3}
          />
        </div>

        {/* Main Analytics Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Most Used Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-effect border-0 shadow-custom h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-primary-custom">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span>Top 10 Most Used Skills</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <UsageChart data={skillsAnalytics.mostUsed} />
              </CardContent>
            </Card>
          </motion.div>

          {/* Proficiency Levels */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <Card className="glass-effect border-0 shadow-custom h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-primary-custom">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span>Skill Proficiency Levels</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skillsAnalytics.proficiencyLevels.map((skill, index) => (
                  <SkillBar
                    key={skill.skill}
                    skill={skill.skill}
                    level={skill.level}
                    color={skill.color}
                    delay={index * 0.1}
                  />
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Skills Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Card className="glass-effect border-0 shadow-custom">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-primary-custom">
                <Award className="h-5 w-5 text-primary" />
                <span>Skills Distribution by Category</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CategoryChart categories={skillsAnalytics.categories} />
            </CardContent>
          </Card>
        </motion.div>

        {/* Expertise Badges */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Card className="glass-effect border-0 shadow-custom">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-primary-custom">
                <Star className="h-5 w-5 text-primary" />
                <span>Areas of Expertise</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-center p-6 rounded-lg glass-effect"
                >
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code2 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-primary-custom mb-2">Frontend Expert</h3>
                  <p className="text-sm text-secondary-custom mb-3">React, Next.js, Tailwind CSS</p>
                  <Badge className="gradient-primary text-white border-0">Expert Level</Badge>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-center p-6 rounded-lg glass-effect"
                >
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-primary-custom mb-2">Backend Specialist</h3>
                  <p className="text-sm text-secondary-custom mb-3">Node.js, Express.js, MongoDB</p>
                  <Badge className="gradient-primary text-white border-0">Advanced</Badge>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-center p-6 rounded-lg glass-effect"
                >
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-primary-custom mb-2">Full Stack Developer</h3>
                  <p className="text-sm text-secondary-custom mb-3">MERN Stack, DevOps, APIs</p>
                  <Badge className="gradient-primary text-white border-0">Professional</Badge>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
