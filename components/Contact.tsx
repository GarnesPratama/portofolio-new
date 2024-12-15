'use client'

import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../translations/translations"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textArea"



export function Contact() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-md">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">{t.contactMe}</h2>
        <form className="space-y-4">
          <Input type="text" placeholder={t.name} required />
          <Input type="email" placeholder={t.email} required />
          <Textarea placeholder={t.message} rows={4} required />
          <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
            {t.send}
          </Button>
        </form>
      </div>
    </section>
  )
}

