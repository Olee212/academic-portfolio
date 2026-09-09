import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Inter, Source_Serif_4 } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ahnaf Rashid Olee — EEE Graduate, BUET | PhD Candidate 2027',
  description:
    'Academic research portfolio of Ahnaf Rashid Olee — semiconductor device fabrication, 2D & wide-bandgap materials, DFT contact optimization, embedded systems, and applied AI. Applying for PhD programs, Fall 2027.',
  generator: 'v0.app',
  keywords: [
    'Ahnaf Rashid Olee',
    'BUET',
    'PhD 2027',
    '2D semiconductors',
    'van der Waals contacts',
    'DFT',
    'semiconductor devices',
    'flexible sensors',
    'embedded systems',
  ],
  openGraph: {
    title: 'Ahnaf Rashid Olee — Research Portfolio',
    description:
      'Semiconductor device fabrication, DFT contact optimization, embedded hardware, and applied AI. PhD applicant, Fall 2027.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0f1b2d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {/*
          ================= VISITOR ANALYTICS =================
          Vercel Analytics (page views, referrers, country, device) and
          Speed Insights are enabled below and run automatically once the
          site is deployed on Vercel — no tracking ID needed.

          To add a THIRD-PARTY / self-hosted analytics script instead
          (e.g. Plausible, Umami, GA), insert it right here, e.g.:

            <Script
              src="https://plausible.io/js/script.js"
              data-domain="YOUR_DOMAIN_HERE"
              strategy="afterInteractive"
            />

          (import Script from 'next/script' at the top of this file).
          Replace YOUR_DOMAIN_HERE / add your API key where noted.
          ======================================================
        */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  )
}
