"use client"

import type React from "react"
import { useRef } from "react"
// import Image from "next/image"
import { Code, Figma, Server } from "lucide-react"
import { motion } from "framer-motion"
import { fadeIn , textReveal} from "../variants"
import ProgressBar from "./Progressbar/ProgressBar"


// Import de l'image backend
// import backend from "../logo/backend-development.png"

interface Skill {
  label: string
  target: number
  category: "frontend" | "backend" | "language" | "mobile"
}

const skills: Skill[] = [
  // Frontend
  { label: "React.js", target: 80, category: "frontend" },
  { label: "React Native", target: 75, category: "mobile" },
  { label: "Next.js", target: 80, category: "frontend" },
  { label: "Tailwind CSS", target: 80, category: "frontend" },

  // Backend
  { label: "Node.js", target: 85, category: "backend" },
  { label: "Laravel", target: 80, category: "backend" },

  // Languages
  { label: "TypeScript", target: 75, category: "language" },
  { label: "JavaScript", target: 80, category: "language" },
  { label: "PHP", target: 75, category: "language" },
]

interface SkillCategory {
  title: string
  icon: React.ComponentType<{ size: number; className?: string; stroke?: string }>
  gradient: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: Figma,
    gradient: "from-blue-400 to-blue-600",
    skills: skills.filter((s) => s.category === "frontend" || s.category === "mobile"),
  },
  {
    title: "Backend Development",
    // icon: ({ size, className }) => (
    //   <Image alt="backend" src={backend || "/placeholder.svg"} width={size} height={size} className={className} />
    // ),
    icon: Server,
    gradient: "from-emerald-500 to-emerald-600",
    skills: skills.filter((s) => s.category === "backend"),
  },
  {
    title: "Langages de Programmation",
    icon: Code,
    gradient: "from-violet-500 to-violet-600",
    skills: skills.filter((s) => s.category === "language"),
  },
]

export default function MySkills() {
  const ref = useRef<HTMLDivElement | null>(null)

  return (
    <div id="skills" className="w-full space-y-6 text-white overflow-hidden">
      {/* En-tête */}
      <div className="text-center space-y-2">
        <motion.h1
          variants={textReveal()}
          className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
        >
          Mes compétences
        </motion.h1>
        <p className="text-gray-400 text-sm leading-relaxed">
          Un aperçu de mes compétences en développement web et mobile avec mes niveaux de maîtrise
        </p>
      </div>

      {/* Grille des compétences */}
      <div ref={ref} className="space-y-6">
        <div className="grid lg:grid-cols-2 gap-6">
          {skillCategories.slice(0, 2).map((category, index) => (
            <SkillCategoryCard key={index} category={category} index={index} />
          ))}
        </div>

        {/* Langages en pleine largeur */}
        {skillCategories.slice(2).map((category, index) => (
          <SkillCategoryCard key={index + 2} category={category} index={index + 2} fullWidth />
        ))}
      </div>

      {/* Statistiques globales */}
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-6 rounded-2xl border border-blue-800"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-blue-400">{skills.length}</div>
            <div className="text-sm text-gray-400">Technologies</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-green-400">
              {Math.round(skills.reduce((acc, skill) => acc + skill.target, 0) / skills.length)}%
            </div>
            <div className="text-sm text-gray-400">Moyenne</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-purple-400">+1ans</div>
            <div className="text-sm text-gray-400">Années d&apos;exp.</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-orange-400">5+</div>
            <div className="text-sm text-gray-400">Projets</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// Composant pour chaque catégorie de compétences
interface SkillCategoryCardProps {
  category: SkillCategory
  index: number
  fullWidth?: boolean
}

function SkillCategoryCard({ category, index, fullWidth = false }: SkillCategoryCardProps) {
  const Icon = category.icon

  return (
    <motion.div
      variants={fadeIn("up", 0.2 + index * 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      className={`
        bg-gray-900 p-6 rounded-2xl shadow-lg border border-blue-950 
        hover:border-blue-800 transition-all duration-300 group
        ${fullWidth ? "col-span-full" : ""}
      `}
    >
      {/* En-tête */}
      <div className="flex items-center space-x-4 mb-6">
        <div className={`bg-gradient-to-r ${category.gradient} p-3 rounded-xl shadow-lg`}>
          <Icon size={30} className="text-white" />
        </div>
        <h2 className="text-xl font-semibold group-hover:text-blue-400 transition-colors duration-200">
          {category.title}
        </h2>
      </div>

      {/* Barres de progression */}
      <div className="space-y-4">
        {category.skills.map((skill) => (
          <ProgressBar key={skill.label} label={skill.label} target={skill.target} gradient={category.gradient}/>
        ))}
      </div>
    </motion.div>
  )
}
