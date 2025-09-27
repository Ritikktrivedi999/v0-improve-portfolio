"use client"

import { motion } from "framer-motion"
import { Card } from "./ui/Card"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate about creating innovative solutions and pushing the boundaries of technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 backdrop-blur-sm bg-white/10 border-white/20">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                I'm a passionate developer with a strong foundation in modern web technologies. My journey began with
                curiosity about how things work, which led me to explore the fascinating world of software development.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies to create meaningful
                and impactful solutions.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Card className="p-4 backdrop-blur-sm bg-white/10 border-white/20">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">🎯 Focus Areas</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Full-stack development, UI/UX design, and emerging technologies
              </p>
            </Card>

            <Card className="p-4 backdrop-blur-sm bg-white/10 border-white/20">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">💡 Philosophy</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Clean code, user-centered design, and continuous improvement
              </p>
            </Card>

            <Card className="p-4 backdrop-blur-sm bg-white/10 border-white/20">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">🚀 Goals</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Building scalable solutions that make a positive impact
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
