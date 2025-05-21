"use client";

import './globals.css'
import 'animate.css'
import React, { useEffect, useState } from 'react'
import Loading from './components/loading'
import LoadPage from './components/loadPage'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true)
  const [isZoom, setIsZoom] = useState(true)
  const [hasImageError, setHasImageError] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2800)

    const zoom = setTimeout(() => {
      setIsZoom(false)
    }, 2500)

    return () => {
      clearTimeout(timer)
      clearTimeout(zoom)
    }
  }, [])

  return (
    <html lang="fr">
      <body>
        {isLoading ? (
          hasImageError ? (
            <LoadPage />
          ) : (
            <div className={`${!isZoom && 'animate__animated animate__zoomOut animate__slow'}`}>
              <Loading onImageError={() => setHasImageError(true)} />
            </div>
          )
        ) : (
          <div className='animate__animated animate__fadeIn animate__slow'>
            {children}
          </div>
        )}
      </body>
    </html>
  )
}
