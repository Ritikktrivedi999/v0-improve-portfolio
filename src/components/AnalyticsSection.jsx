import { motion } from 'framer-motion'
import { BarChart3, TrendingUp } from 'lucide-react'

export default function AnalyticsSection() {
  const topSkills = [
    { name: 'React', percentage: 95, projects: 12 },
    { name: 'Node.js', percentage: 90, projects: 10 },
    { name: 'JavaScript', percentage: 98, projects: 15 },
    { name: 'MongoDB', percentage: 85, projects: 8 },
    { name: 'Tailwind CSS', percentage: 92, projects: 14 },
    { name: 'Express.js', percentage: 88, projects: 9 },
    { name: 'Next.js', percentage: 87, projects: 8 },
    { name: 'Docker', percentage: 80, projects: 6 },
    { name: 'PostgreSQL', percentage: 82, projects: 7 },
    { name: 'AWS', percentage: 75, projects: 5 },
  ]

  const stats = [
    { label: 'Total Projects', value: '15+' },
    { label: 'Development Hours', value: '5420+' },
    { label: 'Code Commits', value: '2400+' },
    { label: 'Happy Clients', value: '25+' },
  ]

  return (
    <section id="analytics" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Skills Analytics</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Visual representation of my technical expertise and usage statistics
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-lg text-white text-center"
            >
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Top Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <BarChart3 size={28} className="text-blue-600" />
            Top 10 Most Used Skills
          </h3>

          <div className="space-y-6">
            {topSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.projects} projects
                    </p>
                  </div>
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, delay: idx * 0.05 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Proficiency Levels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-2 border-green-300 dark:border-green-700">
            <h4 className="text-lg font-bold text-green-700 dark:text-green-400 mb-2">
              Expert Level
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              React, JavaScript, Tailwind CSS, Next.js, Node.js
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-700">
            <h4 className="text-lg font-bold text-blue-700 dark:text-blue-400 mb-2">
              Advanced
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              MongoDB, Express.js, Docker, AWS, PostgreSQL
            </p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-2 border-yellow-300 dark:border-yellow-700">
            <h4 className="text-lg font-bold text-yellow-700 dark:text-yellow-400 mb-2">
              Intermediate
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              DevOps, GraphQL, Microservices, Cloud Architecture
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
