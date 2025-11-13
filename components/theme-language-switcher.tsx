"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"
import { useLanguage } from "@/hooks/use-language"

export function ThemeLanguageSwitcher() {
  const { theme, toggleTheme, mounted } = useTheme()
  const { language, changeLanguage, mounted: langMounted } = useLanguage()

  if (!mounted || !langMounted) return null

  return (
    <div className="flex items-center gap-2">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="p-2 hover:bg-muted rounded-lg transition-colors"
        aria-label="Toggle theme"
      >
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </button>

      {/* Language Switcher */}
      <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
        <button
          onClick={() => changeLanguage("id")}
          className={`px-3 py-1 rounded transition-colors text-sm font-medium ${
            language === "id" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-background"
          }`}
        >
          ID
        </button>
        <button
          onClick={() => changeLanguage("en")}
          className={`px-3 py-1 rounded transition-colors text-sm font-medium ${
            language === "en" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-background"
          }`}
        >
          EN
        </button>
      </div>
    </div>
  )
}
