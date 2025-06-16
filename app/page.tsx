"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { staggerContainer } from "./variants"

// Composants
import Myskills from "./components/myskills"
import Myproject from "./components/myproject"
import Myprofile from "./components/myprofile"
import Tools from "./components/tools"
import Formation from "./components/formation"
import Navbar from "./components/Navbar"
import About from "./components/about"
import ScrollSkills from "./components/ScrollSkill"
import Telechargement from "./components/telechargement"

type ComponentType = "about" | "skills" | "projects" | "formation" | "tools"

interface NavItem {
  id: ComponentType
  label: string
  component: React.ComponentType
  icon: string
}

const navItems: NavItem[] = [
  { id: "about", label: "À propos", component: About, icon: "👋" },
  { id: "skills", label: "Compétences", component: Myskills, icon: "⚡" },
  { id: "projects", label: "Projets", component: Myproject, icon: "🚀" },
  { id: "formation", label: "Formation", component: Formation, icon: "🎓" },
  { id: "tools", label: "Outils", component: Tools, icon: "🛠️" },
]

export default function Home() {
  const [activeComponent, setActiveComponent] = useState<ComponentType>("about")

  const renderActiveComponent = () => {
    const activeItem = navItems.find((item) => item.id === activeComponent)
    if (!activeItem) return null
    const Component = activeItem.component
    return <Component />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <Navbar />
      <Telechargement />

      {/* Particules d'arrière-plan */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <motion.div variants={staggerContainer()} initial="hidden" animate="show" className="relative z-10 pt-20 pb-10">
        <div className="container mx-auto px-4 lg:px-8 ">
          <div className="flex flex-col lg:flex-row gap-8 max-w-9xl lg:mx-auto">
            {/* Section Profil */}
            <motion.div id="home" variants={staggerContainer()} className="lg:w-1/2 w-full">
              <Myprofile />
            </motion.div>

            {/* Section Contenu Principal */}
            <motion.div variants={staggerContainer()} className="lg:w-3/4">
              <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-blue-500/20 shadow-2xl overflow-hidden">
                {/* En-tête avec titre */}
                <div className="hidden lg:block p-8 pb-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">💼</span>
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        Portfolio
                      </h1>
                      <p className="text-slate-400 text-sm">Développeur Full-Stack</p>
                    </div>
                  </motion.div>
                </div>

                {/* Navigation Desktop */}
                <nav className="hidden lg:flex justify-center p-6">
                  <div className="flex space-x-2 bg-slate-800/50 rounded-2xl p-2 backdrop-blur-sm border border-slate-700/50">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className={`
                          relative px-6 py-3 rounded-xl font-medium transition-all duration-300
                          flex items-center space-x-2 group
                          ${
                            activeComponent === item.id
                              ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25"
                              : "text-slate-400 hover:text-white hover:bg-slate-700/50"
                          }
                        `}
                        onClick={() => setActiveComponent(item.id)}
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span>{item.label}</span>
                        {activeComponent === item.id && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl -z-10"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                      </motion.button>
                    ))}
                  </div>
                </nav>

                {/* Contenu Desktop */}
                <div className="hidden lg:block p-8 pt-4">
                  <motion.div
                    key={activeComponent}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {renderActiveComponent()}
                  </motion.div>
                </div>

                {/* Contenu Mobile - Sections avec IDs */}
                <div className="lg:hidden p-6 space-y-16">
                  <div id="about">
                    <About />
                  </div>
                  <div className="py-8">
                    <ScrollSkills />
                  </div>
                  <div id="skills">
                    <Myskills />
                  </div>
                  <div id="projects">
                    <Myproject />
                  </div>
                  <div id="tools">
                    <Tools />
                  </div>
                  <div id="formation">
                    <Formation />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ScrollSkills pour desktop */}
        <div className="hidden lg:block mt-12">
          <ScrollSkills />
        </div>
      </motion.div>
    </div>
  )
}
