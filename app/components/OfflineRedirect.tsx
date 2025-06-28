// components/OfflineRedirect.tsx
"use client";

import { useEffect } from "react";

export default function OfflineRedirect() {
  useEffect(() => {
    function checkConnection() {
      if (!navigator.onLine) {
        window.location.href = "/offline.html";
      }
    }
    checkConnection();
    window.addEventListener("online", checkConnection);
    window.addEventListener("offline", checkConnection);

    return () => {
      window.removeEventListener("online", checkConnection);
      window.removeEventListener("offline", checkConnection);
    };
  }, []);

  return null; // Pas besoin d'affichage
}
