"use client"

import type React from "react"
import { createContext, useState, useEffect } from "react"
import { type Language, translations } from "@/hooks/use-language"

interface LanguageContextType {
  language: Language
  changeLanguage: (lang: Language) => void
  t: (typeof translations)["id"]
  mounted: boolean
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("id")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("language") as Language | null
    if (saved) {
      setLanguage(saved)
    }
  }, [])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t: translations[language], mounted }}>
      {children}
    </LanguageContext.Provider>
  )
}
