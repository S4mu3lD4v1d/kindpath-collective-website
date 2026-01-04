import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
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
      <body className={`${inter.variable} ${manrope.variable} bg-[color:var(--kp-mist)] text-[color:var(--kp-ink)]`}>
        <header className="border-b border-neutral-200 bg-white/70 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center gap-3 px-6 py-4">
            <Link href="/" aria-label="Home" className="shrink-0">
              <Image
                src="/brand/foundation-mark-64.png"
                width={40}
                height={40}
                alt="KindPath Foundation"
                className="h-10 w-10"
              />
            </Link>
            <div className="text-xs tracking-wide text-[color:var(--kp-forest)] opacity-80">
              <Link href="/" className="hover:underline decoration-[color:var(--kp-amber)] underline-offset-4">
                KindPath Foundation
              </Link>
              <span className="px-2 opacity-50">|</span>
              <Link href="/" className="hover:underline decoration-[color:var(--kp-amber)] underline-offset-4">
                KindPath Collective
              </Link>
              <span className="px-2 opacity-50">|</span>
              <Link href="/platform" className="hover:underline decoration-[color:var(--kp-amber)] underline-offset-4">
                KindEarth
              </Link>
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
