import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { generateDefaultMetadata, generateLocalBusinessSchema } from '@/lib/seo'
import { BUSINESS_INFO } from '@/lib/constants'

const GA_TRACKING_ID = 'G-6KQ47LKEEB'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const defaultMeta = generateDefaultMetadata()

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_INFO.website),
  title: {
    default: defaultMeta.title,
    template: `%s | ${BUSINESS_INFO.name}`,
  },
  description: defaultMeta.description,
  keywords: defaultMeta.keywords,
  authors: [{ name: BUSINESS_INFO.owner }],
  creator: BUSINESS_INFO.name,
  publisher: BUSINESS_INFO.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BUSINESS_INFO.website,
    siteName: BUSINESS_INFO.name,
    title: defaultMeta.openGraph?.title,
    description: defaultMeta.openGraph?.description,
    images: [
      {
        url: defaultMeta.openGraph?.image || '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${BUSINESS_INFO.name} - ${BUSINESS_INFO.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultMeta.twitter?.title,
    description: defaultMeta.twitter?.description,
    images: [defaultMeta.twitter?.image || '/images/twitter-card.jpg'],
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
  verification: {
    // Add your verification codes here when you set up:
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const businessSchema = generateLocalBusinessSchema()

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
