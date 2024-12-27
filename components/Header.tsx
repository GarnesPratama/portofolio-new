'use client'

import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'
import { Button } from './ui/button'


export function Header() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id')
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Portfolio Garnes
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="#projects" className="text-gray-600 hover:text-gray-800">{t.latestProjects}</Link>
            <Link href="#skills" className="text-gray-600 hover:text-gray-800">{t.technicalSkills}</Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-800">{t.contactMe}</Link>
          </nav>
          <Button onClick={toggleLanguage} variant="outline" className="ml-4">
            {language === 'id' ? 'EN' : 'ID'}
          </Button>
        </div>
      </div>
    </header>
  )
}

