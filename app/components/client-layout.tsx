"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Loading from "./loading"
import LoadPage from "./loadPage" // Correction: utiliser le bon nom de fichier

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isZoom, setIsZoom] = useState(true)
  const [hasImageError, setHasImageError] = useState(false)

  useEffect(() => {
    const imageUrls = ["/photo1.png", "/progress-bar.gif"]

    let loadedCount = 0
    let hasError = false

    const onFinish = () => {
      setTimeout(() => {
        setIsZoom(false)
        setIsLoading(false)
      }, 2000)
    }

    const checkAllLoaded = () => {
      if (loadedCount === imageUrls.length && !hasError) {
        onFinish()
      }
    }

    const timeout = setTimeout(() => {
      if (loadedCount < imageUrls.length) {
        setHasImageError(true)
        setIsLoading(true)
      }
    }, 5000)

    // Chargement des images
    imageUrls.forEach((src) => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        loadedCount++
        checkAllLoaded()
      }
      img.onerror = () => {
        hasError = true
        setHasImageError(true)
        clearTimeout(timeout)
      }
    })

    return () => clearTimeout(timeout)
  }, [])

  if (isLoading) {
    if (hasImageError) {
      return <LoadPage />
    }
    return (
      <div className={`${!isZoom && "animate__animated animate__zoomOut animate__slow"}`}>
        <Loading />
      </div>
    )
  }

  return <div className="animate__animated animate__fadeIn animate__slow">{children}</div>
}
