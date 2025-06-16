"use client"

import Link from "next/link"
import type React from "react"
import Image from "next/image"
import { Typewriter } from "react-simple-typewriter"
import { motion } from "framer-motion"
import { fadeIn, scaleIn, staggerContainer } from "../variants"
import { Phone, Calendar, Download, MapPin } from "lucide-react"
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa"

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/rojoniaina-ravelomanana-6351782a2",
    icon: FaLinkedin,
    label: "LinkedIn",
    color: "hover:text-blue-400 hover:bg-blue-500/10",
  },
  {
    href: "https://www.facebook.com/profile.php?id=100095456943803",
    icon: FaFacebook,
    label: "Facebook",
    color: "hover:text-blue-600 hover:bg-blue-500/10",
  },
  {
    href: "https://github.com/Rojokabut",
    icon: FaGithub,
    label: "GitHub",
    color: "hover:text-slate-300 hover:bg-slate-500/10",
  },
]

const contactInfo = [
  {
    icon: Phone,
    text: "+261 34 05 633 35",
    href: "tel:+261340563335",
    color: "text-emerald-400",
  },
  {
    icon: MapPin,
    text: "Ambatolampy, Madagascar",
    color: "text-blue-400",
  },
  {
    icon: Calendar,
    text: "23 Septembre 2002",
    color: "text-purple-400",
  },
]

const typewriterWords = ["Créativité", "Innovation", "Excellence", "Passion"]

export default function MyProfile() {
  const handleDownloadCV = () => {
    const modal = document.getElementById("my_modal_2") as HTMLDialogElement | null
    modal?.showModal()
  }

  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative w-full"
    >
      {/* Carte principale */}
      <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl border border-blue-500/20 shadow-2xl overflow-hidden">
        {/* Effet de brillance en haut */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

        {/* Photo de profil */}
        <motion.div variants={scaleIn(0.2)} className="relative pt-12 pb-6 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-lg opacity-30 animate-pulse" />
            <Image
              src="/photo1.png"
              alt="Photo de profil de Rojoniaina"
              width={140}
              height={140}
              className="relative rounded-full border-4 border-blue-500/30 shadow-2xl"
              priority
            />
            {/* Badge en ligne */}
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full border-4 border-slate-900 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
            </div>
          </div>
        </motion.div>

        <div className="px-8 pb-8 space-y-6">
          {/* Nom et titre */}
          <motion.div variants={staggerContainer(0.1)} className="text-center space-y-3">
            <motion.h1 variants={fadeIn("up", 0.1)} className="text-2xl font-bold text-white">
              RAVELOMANANA Rojoniaina
            </motion.h1>

            <motion.div variants={fadeIn("up", 0.2)} className="space-y-2">
              <p className="text-slate-400 font-medium">Développeur Full-Stack</p>
              <div className="flex items-center justify-center space-x-2 text-blue-400">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-sm">Disponible pour de nouveaux projets</span>
              </div>
            </motion.div>

            {/* Réseaux sociaux */}
            <motion.div variants={fadeIn("up", 0.3)} className="flex justify-center space-x-4 pt-4">
              {socialLinks.map((social, index) => (
                <motion.div key={index} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 text-blue-500 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-slate-700/50 transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Citation avec typewriter */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            className="relative bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30"
          >
            <div className="text-center space-y-3">
              <div className="text-blue-100 text-lg font-medium min-h-[28px] flex items-center justify-center">
                <Typewriter
                  words={typewriterWords}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={80}
                  delaySpeed={2000}
                />
              </div>
              <p className="text-emerald-300 font-semibold">✨ Bienvenue sur mon portfolio !</p>
            </div>
          </motion.div>

          {/* Informations de contact */}
          <motion.div variants={staggerContainer(0.1)} className="space-y-3">
            {contactInfo.map((contact, index) => (
              <ContactItem key={index} contact={contact} index={index} />
            ))}
          </motion.div>

          {/* Bouton téléchargement CV */}
          <motion.div variants={fadeIn("up", 0.6)} className="pt-4">
            <motion.button
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg shadow-blue-500/25 group"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              <span>Télécharger mon CV</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

// Composant ContactItem amélioré
interface ContactItemProps {
  contact: {
    icon: React.ComponentType<{ size: number; className: string }>
    text: string
    href?: string
    color: string
  }
  index: number
}

function ContactItem({ contact, index }: ContactItemProps) {
  const Icon = contact.icon

  const content = (
    <motion.div
      variants={fadeIn("right", 0.1 * index)}
      whileHover={{ x: 4 }}
      className="flex items-center space-x-4 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group"
    >
      <div
        className={`w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center ${contact.color} group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon size={18} className="current-color" />
      </div>
      <span className="text-slate-300 text-sm leading-relaxed flex-1 group-hover:text-white transition-colors duration-300">
        {contact.text}
      </span>
    </motion.div>
  )

  if (contact.href) {
    return (
      <a href={contact.href} className="block">
        {content}
      </a>
    )
  }

  return content
}
