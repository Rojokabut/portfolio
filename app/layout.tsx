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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); // 4.5 secondes

    return () => clearTimeout(timer); // nettoyage si le composant se démonte
  }, []);

  return (
    <html lang="fr">
      <body>
        {isLoading ? <Loading /> : children}
      </body>
    </html>
  );
}
