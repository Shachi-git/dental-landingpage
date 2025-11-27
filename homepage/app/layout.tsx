import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { TopBar } from '../components/TopBar'
import Footer from '@/components/Footer'
import Copyright from '@/components/ui/Copyright'
import ScrollToTopButton from '@/components/ui/AutoScroller'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Advanced Periodontics & Implant Dentistry',
  description: 'dentalimplantsusa.com',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PQMLF23');
    `}
        </Script>
      </head>

      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          overflow-x-hidden 
          max-w-full 
          w-full
        `}
      >
        {/*Google Tag Manager (noscript)*/}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PQMLF23"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <div className="flex flex-col min-h-screen max-w-full overflow-x-hidden">
          <TopBar />
          <main className="flex-grow w-full max-w-full overflow-x-hidden">
            {children}
          </main>
          <Footer />
          <Copyright />
          <ScrollToTopButton />
        </div>
      </body>
    </html>
  )
}
