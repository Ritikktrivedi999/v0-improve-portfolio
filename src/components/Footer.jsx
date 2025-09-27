"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Built with ❤️ using React, Tailwind CSS, and Framer Motion
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
              Twitter
            </a>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">© 2025 Ritik Trivedi. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
