import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
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
