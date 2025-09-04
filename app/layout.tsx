import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata = {
  title: 'Sidiqi Global Group | Strategic Holding Company',
  description: 'A strategic holding company that identifies, develops, and invests in forward-thinking ventures across technology and innovation sectors.',
  keywords: 'holding company, strategic investment, technology ventures, innovation, SG2 Technologies, Sidiqi.ai',
  metadataBase: new URL('https://sidiqigroup.com'),
  openGraph: {
    title: 'Sidiqi Global Group | Strategic Holding Company',
    description: 'A strategic holding company that identifies, develops, and invests in forward-thinking ventures across technology and innovation sectors.',
    url: 'https://sidiqigroup.com',
    siteName: 'Sidiqi Global Group',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sidiqi Global Group | Strategic Holding Company',
    description: 'A strategic holding company that identifies, develops, and invests in forward-thinking ventures across technology and innovation sectors.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className={`${inter.className} antialiased bg-white text-brand-ink`}>
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-blue text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
