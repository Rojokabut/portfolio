"use client"

import { useState } from "react"
import Image from "next/image"

interface LoadingProps {
  onImageError?: () => void
}

export default function Loading({ onImageError }: LoadingProps) {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
    onImageError?.()
  }

  if (imageError) {
    return <LoadingFallback />
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="text-center space-y-6">
        {/* Image de chargement */}
        <div className="relative">
          <Image
            src="/progress-bar.gif"
            width={400}
            height={400}
            alt="Chargement en cours"
            className="rounded-3xl shadow-2xl"
            onError={handleImageError}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
        </div>

        {/* Texte de chargement */}
        <div className="space-y-2">
          <h2 className="text-white text-2xl font-bold">Chargement...</h2>
          {/* <p className="text-gray-400">Préparation de votre expérience</p> */}
        </div>

        {/* Barre de progression animée */}
        <div className="w-100 bg-gray-700 rounded-full h-2 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  )
}

// Composant de fallback en cas d'erreur d'image
function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="text-center space-y-6">
        {/* Spinner personnalisé */}
        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute inset-0 border-4 border-gray-700 rounded-full" />
          <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full animate-spin" />
          <div className="absolute inset-4 border-2 border-transparent border-t-green-400 rounded-full animate-spin animation-delay-150" />
        </div>

        {/* Texte */}
        <div className="space-y-2">
          <h2 className="text-white text-2xl font-bold">Chargement...</h2>
          <p className="text-gray-400">Initialisation en cours</p>
        </div>

        {/* Points animés */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
