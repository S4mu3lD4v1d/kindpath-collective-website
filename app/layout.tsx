import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })

export const metadata: Metadata = {
  title: 'KindPath Collective - Building KindEarth',
  description: 'A digital platform for ethical social-policy forecasting and community-led pilots.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} bg-sand text-slate`}>
        <header className="border-b border-neutral-200 bg-white/70 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center gap-3 px-6 py-4">
            <img src="/logo-mark-512.png" width="32" height="32" alt="KindPath" />
            <div className="text-sm sm:text-base">
              <span className="font-semibold text-neutral-800">KindPath Foundation</span>
              <span className="mx-2 text-[#B09958]">|</span>
              <span className="font-semibold text-[#436F87]">KindPath Collective</span>
              <span className="mx-2 text-[#B09958]">|</span>
              <span className="font-semibold text-[#1F2812]">KindEarth</span>
            </div>
          </div>
        </header>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
