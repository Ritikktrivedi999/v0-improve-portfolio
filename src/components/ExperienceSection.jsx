import { motion } from 'framer-motion'

export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      company: 'Tech Solutions Inc',
      position: 'Senior Frontend Developer',
      duration: 'Jan 2022 - Present',
      description: 'Leading frontend development team, architecting scalable React applications and mentoring junior developers.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
      image: '/images/placeholder.jpg',
    },
    {
      id: 2,
      company: 'Digital Innovations Ltd',
      position: 'Full Stack Developer',
      duration: 'Jun 2021 - Dec 2021',
      description: 'Developed full-stack web applications using MERN stack, improved API performance by 40%.',
      technologies: ['MERN Stack', 'MongoDB', 'AWS', 'Docker'],
      image: '/images/placeholder.jpg',
    },
    {
      id: 3,
      company: 'StartUp Hub',
      position: 'Junior Web Developer',
      duration: 'Jan 2021 - May 2021',
      description: 'Built responsive websites and web applications, collaborated with design team on UI/UX improvements.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      image: '/images/placeholder.jpg',
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Professional Journey</h2>
          <p className="text-gray-600 dark:text-gray-300">
            My professional experience and key projects that have shaped my career
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`flex gap-8 items-center ${idx % 2 === 1 ? 'flex-row-reverse' : ''}`}
            >
              {/* Content */}
              <div className="flex-1 bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {exp.position}
                </h3>
                <p className="text-orange-500 font-semibold mb-2">{exp.company}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{exp.duration}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 hidden md:block">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
