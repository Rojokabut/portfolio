"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { Menu, X, Home, User, Code, Briefcase, GraduationCap, Settings } from "lucide-react"


interface NavLink {
  href: string
  label: string
  icon: React.ComponentType<{ size: number; className?: string }>
}

const navLinks: NavLink[] = [
  { href: "#home", label: "Accueil", icon: Home },
  { href: "#about", label: "À propos", icon: User },
  { href: "#skills", label: "Compétences", icon: Code },
  { href: "#projects", label: "Projets", icon: Briefcase },
  { href: "#formation", label: "Formation", icon: GraduationCap },
  { href: "#tools", label: "Outils", icon: Settings },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`
          lg:hidden fixed w-full z-50 top-0 transition-all duration-300
          ${
            isScrolled
              ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-blue-900/50"
              : "bg-slate-900/80 backdrop-blur-sm"
          }
        `}
      >
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("#home")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 group"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-white font-bold text-lg group-hover:text-blue-500 transition-colors duration-200">
              Rojoniaina
            </span>
          </motion.button>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Toggle Theme */}
            {/* <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
              aria-label="Changer de thème"
            >
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={18} className="text-yellow-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={18} className="text-slate-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button> */}

            {/* GitHub Link */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://github.com/Rojokabut"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 rounded-xl px-3 py-2 transition-colors duration-200 group"
                aria-label="Voir mon profil GitHub"
              >
                <FaGithub size={16} className="text-white group-hover:scale-110 transition-transform duration-200" />
                <span className="text-white text-sm font-medium hidden sm:block">GitHub</span>
              </Link>
            </motion.div>

            {/* Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-xl bg-blue-500 hover:bg-blue-600 transition-colors duration-200"
              aria-label="Ouvrir le menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} className="text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} className="text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Menu mobile déroulant */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden bg-slate-900/95 backdrop-blur-md border-t border-blue-900/50"
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(link.href)}
                    className="w-full flex items-center space-x-3 px-4 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 rounded-xl transition-all duration-200 group"
                  >
                    <link.icon
                      size={20}
                      className="text-blue-500 group-hover:scale-110 transition-transform duration-200"
                    />
                    <span className="font-medium">{link.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Overlay pour fermer le menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/20 z-40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
