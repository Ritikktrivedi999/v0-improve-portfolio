import { motion } from 'framer-motion'
import { MapPin, Mail, Phone } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Get to know me better and what drives my passion for technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Hello! I'm Ritik
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                I'm a passionate full-stack developer based in Rewa, M.P., India. With 3+ years of professional experience, I've had the opportunity to work on diverse projects and collaborate with talented teams across the globe.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey in web development started with a curiosity about how things work on the internet. Today, I specialize in building robust, scalable web applications using modern JavaScript frameworks and cloud technologies.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-lg text-white"
              >
                <div className="text-3xl font-bold">3+</div>
                <div className="text-blue-100">Years Experience</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-lg text-white"
              >
                <div className="text-3xl font-bold">15+</div>
                <div className="text-purple-100">Projects Completed</div>
              </motion.div>
            </div>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">Rewa, M.P., India</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <Mail className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">ritik@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">+91 7049950018</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
