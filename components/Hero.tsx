'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'
import { Button } from './ui/button'

export function Hero() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            {t.welcome}
          </h1>
          <p className="text-xl mb-8 text-gray-600">{t.description}</p>
          <Link href="#projects">
            <Button size="lg" className="rounded-md bg-blue-600 text-white hover:bg-blue-700">
              {t.exploreProjects}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2"
        >
          <Image
            src="/placeholder.svg?height=400&width=400&text=Your+Photo"
            alt="Hero Image"
            width={400}
            height={400}
            className="rounded-lg shadow-lg mx-auto"
          />
        </motion.div>
      </div>
    </section>
  )
}

