"use client"

import type React from "react"
import Link from "next/link"
import Image, { type StaticImageData } from "next/image"
import { Eye, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { fadeIn } from "../variants"

import Chat from "../images/chat.png"
import Portf from "../images/capt.png"

interface Technology {
  name: string
  color: string
}

interface ProjectLink {
  label: string
  href: string
  icon?: React.ComponentType<{ size: number; stroke?: string }>
}

interface Project {
  id: string
  title: string
  description: string
  image: StaticImageData
  technologies: Technology[]
  links: ProjectLink[]
  isOldProject?: boolean
}

const projects: Project[] = [
  {
    id: "chat-app",
    title: "Message de discussion",
    description:
      "Cette application permet aux utilisateurs de discuter en temps réel grâce à un système de messagerie instantanée. Elle est construite avec ReactJS côté frontend et Node.js avec Socket.io côté backend pour gérer les connexions en temps réel.",
    image: Chat,
    isOldProject: true,
    technologies: [
      { name: "ReactJS", color: "bg-blue-500" },
      { name: "JavaScript", color: "bg-violet-500" },
      { name: "Tailwind CSS", color: "bg-green-500" },
      { name: "Socket.io", color: "bg-yellow-500" },
      { name: "Node.js/Express", color: "bg-red-500" },
      { name: "MongoDB", color: "bg-orange-500" },
    ],
    links: [
      {
        label: "Code Frontend",
        href: "https://github.com/Rojokabut/frontend_chat",
        icon: Eye,
      },
      {
        label: "Code Backend",
        href: "https://github.com/Rojokabut/backend_chat",
        icon: Eye,
      },
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description:
      "Ce portfolio présente mes projets, compétences et outils utilisés en développement web. Il est développé avec Next.js pour la performance, TypeScript pour la robustesse du code, et Tailwind CSS pour un design moderne et responsive.",
    image: Portf,
    technologies: [
      { name: "Next.js", color: "bg-blue-500" },
      { name: "TypeScript", color: "bg-violet-500" },
      { name: "Tailwind CSS", color: "bg-green-500" },
    ],
    links: [
      {
        label: "Voir le code",
        href: "https://github.com/Rojokabut/portfolio",
        icon: Eye,
      },
    ],
  },
]

export default function MyProject() {
  return (
    <div className="overflow-hidden">
      {/* Titre mobile */}
      <div className="text-center mb-6">
        <h1 className="text-white text-2xl font-bold lg:hidden">Mes Projets</h1>
      </div>

      {/* Grille de projets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}

// Composant réutilisable pour les cartes de projet
interface ProjectCardProps {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeIn("up", 0.2 + index * 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      className="bg-gray-900 border border-blue-950 rounded-xl overflow-hidden hover:border-blue-800 transition-colors duration-300 group"
    >
      {/* Image du projet */}
      <div className="relative overflow-hidden">
        <Image
          alt={project.title}
          src={project.image || "/placeholder.svg"}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {project.isOldProject && (
          <div className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            Ancien projet
          </div>
        )}
      </div>

      {/* Contenu */}
      <div className="p-6 space-y-4">
        <h2 className="text-white font-bold text-xl group-hover:text-blue-400 transition-colors duration-200">
          {project.title}
        </h2>

        <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <TechnologyTag key={techIndex} technology={tech} />
          ))}
        </div>

        {/* Liens */}
        <div className="flex flex-wrap gap-3 pt-2">
          {project.links.map((link, linkIndex) => (
            <ProjectLink key={linkIndex} link={link} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// Composant pour les tags de technologie
interface TechnologyTagProps {
  technology: Technology
}

function TechnologyTag({ technology }: TechnologyTagProps) {
  return (
    <span className={`text-white px-3 py-1 ${technology.color} rounded-lg text-xs font-medium`}>{technology.name}</span>
  )
}

// Composant pour les liens de projet
interface ProjectLinkProps {
  link: ProjectLink
}

function ProjectLink({ link }: ProjectLinkProps) {
  const Icon = link.icon || ExternalLink

  return (
    <Link
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2 group"
    >
      <Icon size={16} className="group-hover:scale-110 transition-transform duration-200" />
      <span>{link.label}</span>
    </Link>
  )
}
