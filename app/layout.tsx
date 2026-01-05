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
  metadataBase: new URL('https://kindpathcollective.org'),
  openGraph: {
    title: 'KindPath Collective - Building KindEarth',
    description: 'A digital platform for ethical social-policy forecasting and community-led pilots.',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'KindPath Collective tree seal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KindPath Collective - Building KindEarth',
    description: 'A digital platform for ethical social-policy forecasting and community-led pilots.',
    images: ['/og.png'],
  },
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
      <body className={`${inter.variable} ${manrope.variable} relative bg-[color:var(--kp-mist)] text-[color:var(--kp-ink-soft)]`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
