'use client'

import { Montserrat } from 'next/font/google'
import cn from 'classnames'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600'],
})

export default function ImplantsPage() {
  return (
    <div className={cn('flex justify-center p-5 w-full')}>
      <h2
        className={cn(
          `text-xl text-center text-foreground max-w-2xl ${montserrat.className}`
        )}
      >
        Top Dental Implants Centers in NYC, NJ, Long Island & Bronxville
      </h2>
    </div>
  )
}
