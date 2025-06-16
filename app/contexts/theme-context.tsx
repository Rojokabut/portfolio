"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

interface ThemeContextType {
  theme: "dark"
  isLoaded: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    try {
      // Forcer le mode sombre
      document.documentElement.classList.add("dark")
      setIsLoaded(true)
    } catch (error) {
      console.warn("Erreur lors du chargement du thème:", error)
      document.documentElement.classList.add("dark")
      setIsLoaded(true)
    }
  }, [])

  return <ThemeContext.Provider value={{ theme: "dark", isLoaded }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
