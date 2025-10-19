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
  title: 'Adanced Periodontics & Implant Dentistry',
  description: 'dentalimplantsusa.com',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopBar />
        {children}
        <Footer />
        <Copyright />
        <ScrollToTopButton />
      </body>
    </html>
  )
}
