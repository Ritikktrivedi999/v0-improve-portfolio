import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

export default function EducationSection() {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Technology',
      institution: 'National Institute of Technology (NIT)',
      field: 'Computer Science & Engineering',
      year: '2018 - 2022',
      gpa: '8.2 / 10',
      achievements: ['Dean\'s List', 'Programming Club Lead', 'Hackathon Winner'],
    },
    {
      id: 2,
      degree: 'Senior Secondary School',
      institution: 'Delhi Public School',
      field: 'Science Stream',
      year: '2016 - 2018',
      gpa: '94%',
      achievements: ['Merit Scholar', 'Science Olympiad Winner'],
    },
  ]

  return (
    <section id="education" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Academic Journey</h2>
          <p className="text-gray-600 dark:text-gray-300">
            My educational background and academic achievements
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={`flex gap-8 items-start ${idx % 2 === 1 ? 'flex-row-reverse' : ''}`}
            >
              <div className="flex-1 bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {edu.degree}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                  {edu.institution}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{edu.field}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{edu.year}</p>
                <p className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-4">
                  GPA: {edu.gpa}
                </p>
                <div className="space-y-2">
                  {edu.achievements.map((achievement) => (
                    <div
                      key={achievement}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                    >
                      <Award size={16} className="text-yellow-500" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
