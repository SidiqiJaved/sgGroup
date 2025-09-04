import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata = {
  title: 'Sidiqi Global Group | Strategic Holding Company',
  description: 'Strategic holding company investing in forward-thinking ventures across technology and innovation sectors. Portfolio includes SG2 Technologies and Sidiqi.ai.',
  keywords: 'holding company, strategic investment, technology ventures, innovation, SG2 Technologies, Sidiqi.ai, Javed Sidiqi',
  metadataBase: new URL('https://www.sidiqiglobal.com'),
  canonical: 'https://www.sidiqiglobal.com',
  openGraph: {
    title: 'Sidiqi Global Group | Strategic Holding Company',
    description: 'Strategic holding company investing in forward-thinking ventures across technology and innovation sectors. Portfolio includes SG2 Technologies and Sidiqi.ai.',
    url: 'https://www.sidiqiglobal.com',
    siteName: 'Sidiqi Global Group',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sidiqi Global Group - Strategic Holding Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sidiqi Global Group | Strategic Holding Company',
    description: 'Strategic holding company investing in forward-thinking ventures across technology and innovation sectors.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sidiqi Global Group',
  url: 'https://www.sidiqiglobal.com',
  logo: 'https://www.sidiqiglobal.com/logo.png',
  description: 'Strategic holding company investing in forward-thinking ventures across technology and innovation sectors.',
  founder: {
    '@type': 'Person',
    name: 'Javed Sidiqi',
  },
  sameAs: [
    'https://linkedin.com/company/sidiqi-global-group'
  ],
  owns: [
    {
      '@type': 'Organization',
      name: 'SG2 Technologies',
      url: 'https://sg2tech.com',
      description: 'Digital modernization & data-driven solutions.'
    },
    {
      '@type': 'Organization',
      name: 'Sidiqi.ai',
      url: 'https://sidiqi.ai',
      description: 'AI venture & innovation lab.'
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-white text-brand-ink`}>
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-blue text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        {children}
        
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
