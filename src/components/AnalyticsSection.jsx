"use client"

import { motion } from "framer-motion"
import { Card } from "./ui/Card"

const stats = [
  { label: "Projects Completed", value: "50+", color: "from-blue-400 to-cyan-400" },
  { label: "Happy Clients", value: "30+", color: "from-green-400 to-emerald-400" },
  { label: "Code Commits", value: "1000+", color: "from-purple-400 to-pink-400" },
  { label: "Years Experience", value: "3+", color: "from-orange-400 to-red-400" },
]

export default function AnalyticsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            By the Numbers
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A snapshot of my journey and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center backdrop-blur-sm bg-white/10 border-white/20">
                <div
                  className={`text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
