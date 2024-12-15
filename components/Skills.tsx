'use client'

import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'


const skills = [
  "JavaScript", "React", "Node.js", "TypeScript", "GraphQL", "Python",
  "HTML/CSS", "SQL", "Git", "Docker", "AWS", "Agile Methodologies"
]

export function Skills() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">{t.technicalSkills}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-center bg-white p-4 rounded-lg shadow-sm"
            >
              <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
              <span className="text-gray-700">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

