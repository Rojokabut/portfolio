import React, { useState } from "react";
import { Download, X } from "lucide-react";

export default function Telechargement() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("/CV_RAVELOMANANA_Rojoniaina.pdf");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "CV_RAVELOMANANA_Rojoniaina.pdf";
      link.click();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Erreur lors du téléchargement :", error);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // petit délai pour simuler un chargement fluide
  };

  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box rounded-2xl p-8">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <Download className="w-5 h-5 text-blue-500" />
              Télécharger le CV
            </h3>
            <form method="dialog">
              <button className="text-gray-400 hover:text-red-500 transition">
                <X className="w-5 h-5" />
              </button>
            </form>
          </div>

          <p className="mt-4 text-gray-600">
            Êtes-vous sûr de vouloir télécharger mon CV ?
          </p>

          <div className="mt-6 flex justify-end gap-3 items-center">
            <form method="dialog">
              <button
                disabled={isLoading}
                className="px-4 py-2 rounded-xl bg-gray-200 text-gray-700 hover:bg-gray-300 transition disabled:opacity-50"
              >
                Annuler
              </button>
            </form>

            <button
              onClick={handleDownload}
              disabled={isLoading}
              className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition flex items-center gap-2 disabled:opacity-50"
            >
              {isLoading && (
                <span className="loading loading-spinner loading-sm text-white"></span>
              )}
              {isLoading ? "Téléchargement..." : "Oui, télécharger"}
            </button>
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>Fermer</button>
        </form>
      </dialog>
    </div>
  );
}
