import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import "animate.css"
import ClientLayout from "./components/client-layout"
import { ThemeProvider } from "./contexts/theme-context"

export const metadata: Metadata = {
  title: "Rojoniaina RAVELOMANANA | Développeur Full-Stack",
  description:
    "Portfolio professionnel de Rojoniaina RAVELOMANANA - Développeur Full-Stack spécialisé en React, Next.js, Node.js et développement mobile.",
  keywords: ["développeur", "full-stack", "react", "nextjs", "nodejs", "portfolio", "madagascar"],
  authors: [{ name: "Rojoniaina RAVELOMANANA" }],
  creator: "Rojoniaina RAVELOMANANA",
  openGraph: {
    title: "Rojoniaina RAVELOMANANA | Développeur Full-Stack",
    description: "Portfolio professionnel - Développeur Full-Stack passionné",
    url: "https://votre-domaine.com",
    siteName: "Portfolio Rojoniaina",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo/logoRojo.ico",
    shortcut: "/logo/rojoLogo.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased">
        <ThemeProvider>
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
