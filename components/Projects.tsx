'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'
import { Badge } from './ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'


const projects = [
  {
    title: {
      id: "Website E-commerce",
      en: "E-commerce Website"
    },
    description: {
      id: "Platform e-commerce dengan sistem keranjang dan pembayaran.",
      en: "E-commerce platform with shopping cart and payment system."
    },
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/placeholder.svg?height=200&width=300&text=E-commerce",
    id: "e-commerce"
  },
  {
    title: {
      id: "Aplikasi Manajemen Tugas",
      en: "Task Management App"
    },
    description: {
      id: "Aplikasi manajemen tugas dengan fitur kolaborasi tim.",
      en: "Task management application with team collaboration features."
    },
    technologies: ["Vue.js", "Firebase"],
    image: "/placeholder.svg?height=200&width=300&text=Task+App",
    id: "task-management"
  },
  {
    title: {
      id: "Dashboard Cuaca",
      en: "Weather Dashboard"
    },
    description: {
      id: "Dashboard cuaca real-time dengan visualisasi data.",
      en: "Real-time weather dashboard with data visualization."
    },
    technologies: ["React", "D3.js", "API"],
    image: "/placeholder.svg?height=200&width=300&text=Weather+App",
    id: "weather-dashboard"
  }
]

export function Projects() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">{t.latestProjects}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/projects/${project.id}`}>
                <Card className="bg-gray-50 border-gray-200 hover:shadow-md transition-shadow duration-300">
                  <Image
                    src={project.image}
                    alt={project.title[language]}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-800">{project.title[language]}</CardTitle>
                    <CardDescription className="text-gray-600">{project.description[language]}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-blue-100 text-blue-800">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

