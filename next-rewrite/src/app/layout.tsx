import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import './globals.css'
import BottomNav from '@/components/BottomNav'
import RegisterSW from '@/components/RegisterSW'
import { ThemeProvider } from '@/components/ThemeProvider'

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas', display: 'swap' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
  title: 'Campeonato de la Estrella',
  description: 'Seguimiento en vivo — Predio Pintita',
  manifest: '/manifest.json',
  appleWebApp: { capable: true, statusBarStyle: 'black-translucent', title: 'La Estrella' },
  icons: { apple: '/icons/icon-192.png' },
}

export const viewport: Viewport = {
  width: 'device-width', initialScale: 1, maximumScale: 1, userScalable: false,
  themeColor: '#0a0712',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${bebas.variable} ${inter.variable}`} data-theme="dark">
      <body className="min-h-screen pb-20 overflow-x-hidden">
        <ThemeProvider>
          <RegisterSW />

          {/* Mesh background */}
          <div className="mesh-bg" aria-hidden="true" />
          <div className="mesh-orb mesh-orb-a" aria-hidden="true" />
          <div className="mesh-orb mesh-orb-b" aria-hidden="true" />
          <div className="mesh-orb mesh-orb-c" aria-hidden="true" />

          <div className="relative z-10">{children}</div>
          <BottomNav />
        </ThemeProvider>
      </body>
    </html>
  )
}
