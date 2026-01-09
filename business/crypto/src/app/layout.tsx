import "./globals.css"
import type { ReactNode } from "react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${inter.className} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full selection:bg-indigo-500/30 selection:text-white dark:selection:bg-indigo-400/40 dark:selection:text-white">
        {children}
      </body>
    </html>
  )
}
