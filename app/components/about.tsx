"use client"

import type React from "react"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer, textReveal } from "../variants"
import { MdWavingHand } from "react-icons/md"
import { Sparkles, Code2, Database } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Développement Frontend",
    description: "Création d'interfaces modernes et intuitives avec React, Next.js et les dernières technologies web.",
    features: ["React.js & Next.js", "TypeScript", "Tailwind CSS", "Animations fluides"],
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.2,
  },
  {
    icon: Database,
    title: "Développement Backend",
    description: "Conception d'APIs robustes et scalables avec une architecture moderne et sécurisée.",
    features: ["Node.js & Express","Laravel", "Bases de données", "APIs RESTful", "Authentification"],
    gradient: "from-emerald-500 to-teal-500",
    delay: 0.4,
  },
]

export default function About() {
  return (
    <motion.div
      id="about"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Titre mobile */}
      <div
        
       className="text-center lg:hidden">

        <motion.h1
          variants={textReveal()}
          className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
        >
          A propos
        </motion.h1>
      </div>

      {/* Section présentation */}
      <motion.div
        variants={fadeIn("up", 0.1)}
        className="relative bg-slate-800/40 backdrop-blur-sm p-8 rounded-3xl border border-blue-500/20 shadow-xl overflow-hidden transition-colors duration-500"
      >
        {/* Effet de brillance */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

        {/* Salutation avec animation */}
        <motion.div variants={fadeIn("right", 0.2)} className="flex items-center space-x-3 mb-6">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Bonjour !
            </span>
            <motion.div
              animate={{
                rotate: [0, 30, -10, 30, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              <MdWavingHand size={28} className="text-yellow-500 drop-shadow-lg" />
            </motion.div>
          </div>
          <Sparkles className="text-blue-500 w-6 h-6 animate-pulse" />
        </motion.div>

        {/* Présentation */}
        <motion.div variants={staggerContainer(0.1)} className="space-y-6">
          <motion.p variants={textReveal(0.1)} className="text-lg leading-relaxed  text-slate-300">
            Je m&apos;appelle{" "}
            <span className="font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Rojo
            </span>
            , développeur Full-Stack passionné par l&apos;innovation technologique et l&apos;excellence dans le développement web
            et mobile.
          </motion.p>

          <motion.p variants={textReveal(0.2)} className="text-lg leading-relaxed  text-slate-300">
            Je conçois des applications performantes et élégantes, en alliant créativité et expertise technique pour
            créer des expériences utilisateur exceptionnelles.
          </motion.p>

          <motion.p variants={textReveal(0.3)} className="text-lg leading-relaxed  text-slate-300">
            Toujours en quête d&apos;apprentissage, je relève chaque défi avec enthousiasme et rigueur, en adoptant les
            meilleures pratiques du développement moderne.
          </motion.p>
        </motion.div>

        {/* Stats rapides */}
        <motion.div variants={fadeIn("up", 0.4)} className="mt-8 grid lg:grid-cols-3 grid-cols-1 gap-4">
          {[
            { label: "Projets", value: "5+" },
            { label: "Technologies", value: "10+" },
            { label: "Expérience", value: "2+ ans" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4  bg-slate-800/30 rounded-xl border  border-slate-700/50 transition-colors duration-500"
            >
              <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-sm t text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Section services */}
      <motion.div variants={fadeIn("up", 0.3)}>
        <motion.h2
          variants={textReveal()}
          className="text-2xl font-bold  text-white mb-8 flex items-center space-x-3"
        >
          <span>Ce que je fais</span>
          <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent" />
        </motion.h2>

        <motion.div variants={staggerContainer(0.2)} className="grid gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Composant ServiceCard amélioré
interface ServiceCardProps {
  service: {
    icon: React.ComponentType<{ size: number; className: string }>
    title: string
    description: string
    features: string[]
    gradient: string
    delay: number
  }
}

function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <motion.div
      variants={fadeIn("up", service.delay)}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative bg-slate-800/60 backdrop-blur-sm p-8 rounded-3xl border  border-slate-700/50  hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
    >
      {/* Effet de brillance au hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col md:flex-row justify-center md:items-start items-center gap-2 space-x-6">
        {/* Icône */}
        <div
          className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon size={28} className="text-white" />
        </div>

        {/* Contenu */}
        <div className="flex-1 space-y-4">
          <h3 className="text-xl font-bold text-white  group-hover:text-blue-400 transition-colors duration-300">
            {service.title}
          </h3>

          <p className=" text-slate-300 leading-relaxed">{service.description}</p>

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {service.features.map((feature, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-slate-100 bg-slate-700/50  text-slate-300 text-sm rounded-full border border-slate-200 border-slate-600/50 group-hover:border-blue-300 group-hover:border-blue-500/50 transition-colors duration-300"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
