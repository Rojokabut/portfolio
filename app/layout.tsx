"use client";

import './globals.css';
import 'animate.css';
import React, { useEffect, useState } from 'react';
import Loading from './components/loading';
import LoadPage from './components/loadPage';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const [isZoom, setIsZoom] = useState(true);
  const [hasImageError, setHasImageError] = useState(false);

  useEffect(() => {
    const imageUrls = [
      "/photo1.png",
      // "/RAVELOMANANA_Rojoniaina.pdf",
      "/progress-bar.gif",

    ];

    let loadedCount = 0;
    let hasError = false;

    const onFinish = () => {
      setTimeout(() => {
        setIsZoom(false);
        setIsLoading(false);
      }, 2000);
    };

    const checkAllLoaded = () => {
      if (loadedCount === imageUrls.length && !hasError) {
        onFinish();
      }
    };

    const timeout = setTimeout(() => {
      if (loadedCount < imageUrls.length) {
        setHasImageError(true);
        setIsLoading(true); // forcer le composant <LoadPage />
      }
    }, 5000); // 5s max pour charger les images

    imageUrls.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        checkAllLoaded();
      };
      img.onerror = () => {
        hasError = true;
        setHasImageError(true);
        clearTimeout(timeout);
      };
    });

    return () => clearTimeout(timeout);
  }, []);

  return (
    <html lang="fr">
      <head>
        <title>Rojoniaina</title>
        <link rel="icon" href="/logo/logoRojo.ico" />
        <link rel="shortcut icon" href="/logo/rojoLogo.ico" />
      </head>
      <body>
        {isLoading ? (
          hasImageError ? (
            <LoadPage />
          ) : (
            <div
              className={`${
                !isZoom &&
                "animate__animated animate__zoomOut animate__slow"
              }`}
            >
              <Loading />
            </div>
          )
        ) : (
          <div className="animate__animated animate__fadeIn animate__slow">
            {children}
          </div>
        )}
      </body>
    </html>
  );
}
