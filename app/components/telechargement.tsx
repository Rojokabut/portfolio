"use client"
import { useState } from "react"
import { Download, X, FileText, CheckCircle, AlertCircle } from "lucide-react"

type DownloadStatus = "idle" | "loading" | "success" | "error"

export default function Telechargement() {
  const [status, setStatus] = useState<DownloadStatus>("idle")

  const handleDownload = async () => {
    setStatus("loading")

    try {
      const response = await fetch("/CV_RAVELOMANANA_Rojoniaina.pdf")

      if (!response.ok) {
        throw new Error("Fichier non trouvé")
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)

      const link = document.createElement("a")
      link.href = url
      link.download = "CV_RAVELOMANANA_Rojoniaina.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      window.URL.revokeObjectURL(url)

      setStatus("success")

      // Fermer la modal après succès
      setTimeout(() => {
        const modal = document.getElementById("my_modal_2") as HTMLDialogElement
        modal?.close()
        setStatus("idle")
      }, 1500)
    } catch (error) {
      console.error("Erreur lors du téléchargement :", error)
      setStatus("error")

      // Reset après erreur
      setTimeout(() => {
        setStatus("idle")
      }, 3000)
    }
  }

  const closeModal = () => {
    const modal = document.getElementById("my_modal_2") as HTMLDialogElement
    modal?.close()
    setStatus("idle")
  }

  const getStatusConfig = () => {
    switch (status) {
      case "loading":
        return {
          icon: Download,
          title: "Téléchargement en cours...",
          message: "Veuillez patienter pendant le téléchargement de mon CV.",
          buttonText: "Téléchargement...",
          buttonClass: "bg-blue-600 hover:bg-blue-700",
          iconClass: "text-blue-500 animate-bounce",
        }
      case "success":
        return {
          icon: CheckCircle,
          title: "Téléchargement réussi !",
          message: "Mon CV a été téléchargé avec succès.",
          buttonText: "Téléchargé ✓",
          buttonClass: "bg-green-600 hover:bg-green-700",
          iconClass: "text-green-500",
        }
      case "error":
        return {
          icon: AlertCircle,
          title: "Erreur de téléchargement",
          message: "Une erreur s'est produite. Veuillez réessayer.",
          buttonText: "Réessayer",
          buttonClass: "bg-red-600 hover:bg-red-700",
          iconClass: "text-red-500",
        }
      default:
        return {
          icon: FileText,
          title: "Télécharger le CV",
          message: "Êtes-vous sûr de vouloir télécharger mon CV ?",
          buttonText: "Oui, télécharger",
          buttonClass: "bg-blue-600 hover:bg-blue-700",
          iconClass: "text-blue-500",
        }
    }
  }

  const config = getStatusConfig()
  const Icon = config.icon

  return (
    <dialog id="my_modal_2" className="modal backdrop-blur-sm">
      <div className="modal-box rounded-2xl p-8 max-w-md mx-auto shadow-2xl border border-gray-200">
        {/* En-tête */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-gray-100">
              <Icon size={24} className={config.iconClass} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{config.title}</h3>
          </div>

          <button
            onClick={closeModal}
            disabled={status === "loading"}
            className="text-gray-400 hover:text-red-500 transition-colors duration-200 disabled:opacity-50"
            aria-label="Fermer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Message */}
        <p className="text-gray-600 mb-6 leading-relaxed">{config.message}</p>

        {/* Informations du fichier */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Fichier :</span>
            <span className="font-medium text-gray-800">CV_RAVELOMANANA_Rojoniaina.pdf</span>
          </div>
          <div className="flex items-center justify-between text-sm mt-2">
            <span className="text-gray-600">Taille :</span>
            <span className="font-medium text-gray-800">~500 KB</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button
            onClick={closeModal}
            disabled={status === "loading"}
            className="px-4 py-2 rounded-xl bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-200 disabled:opacity-50"
          >
            {status === "success" ? "Fermer" : "Annuler"}
          </button>

          {status !== "success" && (
            <button
              onClick={handleDownload}
              disabled={status === "loading"}
              className={`
                px-6 py-2 rounded-xl text-white transition-all duration-200 
                flex items-center gap-2 disabled:opacity-50 font-medium
                ${config.buttonClass}
              `}
            >
              {status === "loading" && (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              )}
              {config.buttonText}
            </button>
          )}
        </div>
      </div>

      {/* Backdrop */}
      <form method="dialog" className="modal-backdrop">
        <button onClick={closeModal}>Fermer</button>
      </form>
    </dialog>
  )
}
