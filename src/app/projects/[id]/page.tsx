'use client'


import { LanguageProvider } from '../../../../contexts/LanguageContext'
import ProjectDetail from '../../../../module/projectDetail'

export default function ProjectPage() {
  return (
    <LanguageProvider>
      <ProjectDetail />
    </LanguageProvider>
  )
}
