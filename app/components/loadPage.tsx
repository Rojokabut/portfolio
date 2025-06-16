"use client"

import { useState } from "react"
import { AlertCircle, RefreshCw } from "lucide-react"

export default function LoadPage() {
  const [retryCount, setRetryCount] = useState(0)
  const [isRetrying, setIsRetrying] = useState(false)

  const handleRetry = () => {
    setIsRetrying(true)
    setRetryCount((prev) => prev + 1)

    // Simuler une tentative de rechargement
    setTimeout(() => {
      setIsRetrying(false)
      window.location.reload()
    }, 1000)
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#C9D6FF] to-[#E2E2E2]">
      <div className="text-center space-y-8 p-8 bg-white rounded-2xl shadow-2xl max-w-md mx-4">
        {/* Icône d'erreur */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
              <AlertCircle size={40} className="text-orange-500" />
            </div>
            {/* Spinner de chargement */}
            <div className="absolute inset-0 border-4 border-transparent border-t-orange-500 rounded-full animate-spin" />
          </div>
        </div>

        {/* Message */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-800">Chargement des ressources</h2>
          <p className="text-gray-600 leading-relaxed">
            Nous préparons votre expérience. Cela peut prendre quelques instants...
          </p>
          {retryCount > 0 && <p className="text-sm text-orange-600">Tentative {retryCount} en cours</p>}
        </div>

        {/* Barre de progression */}
        <div className="space-y-2">
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
          </div>
          <p className="text-xs text-gray-500">Chargement en cours...</p>
        </div>

        {/* Bouton de retry */}
        <button
          onClick={handleRetry}
          disabled={isRetrying}
          className="flex items-center justify-center space-x-2 w-full py-3 px-6 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white rounded-xl font-medium transition-colors duration-200"
        >
          <RefreshCw size={18} className={isRetrying ? "animate-spin" : ""} />
          <span>{isRetrying ? "Rechargement..." : "Réessayer"}</span>
        </button>

        {/* Message d'aide */}
        <p className="text-xs text-gray-500">Si le problème persiste, veuillez vérifier votre connexion internet.</p>
      </div>
    </div>
  )
}
