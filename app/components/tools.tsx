"use client"

import type React from "react"
import Image, { type StaticImageData } from "next/image"
import { DatabaseZap, Settings2 } from "lucide-react"
import { motion } from "framer-motion"
import { fadeIn } from "../variants"

// Import des images
import vscode from "../logo/vscode.webp"
import postman from "../logo/postman1.png"
import mongodb from "../logo/mongodb.png"
import mysql from "../logo/mysql.png"
import expoGo from "../logo/expoGo.png"
import git from "../logo/git.png"
import github from "../logo/github.png"

interface ToolItem {
  name: string
  image: StaticImageData
  alt: string
}

interface ToolCategory {
  title: string
  icon: React.ComponentType<{ size: number; className: string }>
  items: ToolItem[]
  gridCols: string
}

const toolCategories: ToolCategory[] = [
  {
    title: "Databases",
    icon: DatabaseZap,
    gridCols: "grid-cols-2",
    items: [
      { name: "MongoDB", image: mongodb, alt: "MongoDB logo" },
      { name: "MySQL", image: mysql, alt: "MySQL logo" },
    ],
  },
  {
    title: "Tools & Others",
    icon: Settings2,
    gridCols: "grid-cols-2 lg:grid-cols-3",
    items: [
      { name: "VS Code", image: vscode, alt: "Visual Studio Code logo" },
      { name: "Postman", image: postman, alt: "Postman logo" },
      { name: "GitHub", image: github, alt: "GitHub logo" },
      { name: "Git", image: git, alt: "Git logo" },
      { name: "Expo Go", image: expoGo, alt: "Expo Go logo" },
    ],
  },
]

export default function Tools() {
  return (
    <div className="overflow-hidden">
      {/* Titre mobile */}
      <div className="text-center mb-6">
        <h1 className="text-white text-2xl font-bold lg:hidden">Tools & Database</h1>
      </div>

      {/* Grille des catégories */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        {toolCategories.map((category, index) => (
          <ToolCategory key={index} category={category} index={index} />
        ))}
      </div>
    </div>
  )
}

// Composant pour chaque catégorie d'outils
interface ToolCategoryProps {
  category: ToolCategory
  index: number
}

function ToolCategory({ category, index }: ToolCategoryProps) {
  const Icon = category.icon

  return (
    <motion.div
      variants={fadeIn("up", 0.2 + index * 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      className="px-6 py-5 rounded-2xl bg-gray-900 border border-blue-950 text-white shadow-lg hover:border-blue-800 transition-colors duration-300"
    >
      {/* En-tête */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="bg-gradient-to-br from-gray-200 to-white p-3 rounded-xl shadow-md">
          <Icon size={32} className="text-blue-500" />
        </div>
        <h2 className="text-xl font-semibold">{category.title}</h2>
      </div>

      {/* Grille des outils */}
      <div className={`grid ${category.gridCols} gap-4`}>
        {category.items.map((item, itemIndex) => (
          <ToolItem key={itemIndex} item={item} />
        ))}
      </div>
    </motion.div>
  )
}

// Composant pour chaque outil individuel
interface ToolItemProps {
  item: ToolItem
}

function ToolItem({ item }: ToolItemProps) {
  return (
    <div className="group bg-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
      <div className="flex items-center justify-center">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.alt}
          width={50}
          height={50}
          className="object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <p className="text-gray-800 text-sm font-medium text-center mt-2">{item.name}</p>
    </div>
  )
}
