'use client'

import { Contact } from "../../components/Contact"
import { Header } from "../../components/Header"
import { Hero } from "../../components/Hero"
import { Projects } from "../../components/Projects"
import { Skills } from "../../components/Skills"
import { LanguageProvider } from "../../contexts/LanguageContext"




export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <footer className="py-6 text-center text-sm text-gray-600 bg-gray-100">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </footer>
      </div>
    </LanguageProvider>
  )
}
