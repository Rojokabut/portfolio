// app/layout.tsx ou app/root-layout.tsx
"use client";

import './globals.css'
import 'animate.css'
import Loading from './components/loading';
import React, { useEffect, useState } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const [isZoom, setIsZoom] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); // 4.5 secondes
    const zoom = setTimeout(() => {
      setIsZoom(false)
    }, 2500)

    return () => {
      clearTimeout(timer)
      clearTimeout(zoom)
    }; // nettoyage si le composant se démonte
  }, []);

  return (
    <html lang="fr">
      <body>
        {
          isLoading ? 
          <div className={`${!isZoom && 'animate__animated animate__zoomOut animate__slow'}`}><Loading /></div>
          : 
          <div className='animate__animated animate__fadeIn animate__slow'>
            {children}    
          </div>
          
        }
      </body>
    </html>
  );
}
