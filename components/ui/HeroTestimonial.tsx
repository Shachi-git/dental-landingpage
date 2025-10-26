'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import cn from 'classnames'
import { useMobileOrTablet } from '@/lib/useDevice'
import { Montserrat } from 'next/font/google'
import { useResponsiveDevice } from '@/lib/useResponsive'
import { useMobile } from '@/lib/useMobile'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400'],
})

const slides = [
  {
    bg: '/banner/top-banner-img-opt-3.webp',
    before: '/banner/before-slide-2.webp',
    after: '/banner/after-slide-2.webp',
    quote:
      '"I went from hiding my teeth, to smiling at strangers! This procedure has changed my life!"',
    name: 'Emily, All-On-Four Smile Recipient',
    position: 'top-left',
  },
  {
    bg: '/banner/top-banner-img-opt-2.webp',
    before: '/banner/before-slide-1.webp',
    after: '/banner/after-slide-1.webp',
    quote:
      '“When I was told I was not a candidate for dental implants, I felt completely hopeless. Discovering that I was a candidate for the All-On-Four procedure saved my life!”',
    name: 'Grace, All-On-Four Smile Recipient',
    position: 'top-left',
  },
  {
    bg: '/banner/top-banner-img-opt-5.webp',
    before: '/banner/before-slide-4.webp',
    after: '/banner/after-slide-4.webp',
    quote:
      '“I am so happy I chose to trust this office with my smile! I have never felt more confident!”',
    name: 'John, All-On-Four Smile Recipient',
    position: 'top-right',
  },
  {
    bg: '/banner/top-banner-img-opt-4.webp',
    before: '/banner/before-slide-3.webp',
    after: '/banner/after-slide-3.webp',
    quote:
      '"The All-On-Four procedure was easy, fast, and painless! I can now smile confidently again."',
    name: 'Greg, All-On-Four Smile Recipient',
    position: 'top-left',
  },
]

const mobileSlides = [
  {
    bg: '/banner/top-banner-img-1-center.webp',
    before: '/banner/before-slide-2.webp',
    after: '/banner/after-slide-2.webp',
    quote:
      '"I went from hiding my teeth, to smiling at strangers! This procedure has changed my life!"',
    name: 'Emily, All-On-Four Smile Recipient',
    position: 'top-left',
  },
  {
    bg: '/banner/top-banner-img-2-center.webp',
    before: '/banner/before-slide-1.webp',
    after: '/banner/after-slide-1.webp',
    quote:
      '“When I was told I was not a candidate for dental implants, I felt completely hopeless. Discovering that I was a candidate for the All-On-Four procedure saved my life!”',
    name: 'Grace, All-On-Four Smile Recipient',
    position: 'top-left',
  },
  {
    bg: '/banner/top-banner-img-4-center.webp',
    before: '/banner/before-slide-4.webp',
    after: '/banner/after-slide-4.webp',
    quote:
      '“I am so happy I chose to trust this office with my smile! I have never felt more confident!”',
    name: 'John, All-On-Four Smile Recipient',
    position: 'top-right',
  },
  {
    bg: '/banner/top-banner-img-3-center.webp',
    before: '/banner/before-slide-3.webp',
    after: '/banner/after-slide-3.webp',
    quote:
      '"The All-On-Four procedure was easy, fast, and painless! I can now smile confidently again."',
    name: 'Greg, All-On-Four Smile Recipient',
    position: 'top-left',
  },
]

const HeroTestimonial = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const isBelowDesktop = useResponsiveDevice()
  const isMobileOrTablet = useMobileOrTablet()
  const isMobile = useMobile()

  const slidesToUse = isMobile ? mobileSlides : slides

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % slidesToUse.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slidesToUse])

  const { bg, before, after, quote, name, position } = slidesToUse[currentImage]

  return (
    <div
      className={cn(
        'relative overflow-hidden transition-all duration-500',
        isMobileOrTablet ? 'w-full h-[500px]' : 'w-3/4 h-[560px]'
      )}
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${bg}`}
        alt="Testimonial background"
        fill
        priority
        className={cn(
          'object-cover transition-all duration-500',
          isMobile
            ? 'object-center scale-100'
            : isBelowDesktop
            ? 'object-center scale-100'
            : 'object-top scale-100'
        )}
      />

      <div
        className={cn(
          'absolute bg-white/70 text-foreground p-4 rounded shadow-md z-10 transition-all duration-500',
          montserrat.className,
          isMobile
            ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[85%] max-w-sm'
            : position === 'top-left'
            ? 'top-4 left-4 max-w-xs'
            : 'top-4 right-4 max-w-xs'
        )}
      >
        <p className="italic mb-3 text-lg font-light">{quote}</p>
        <p className="font-semibold">{name}</p>

        <div className="flex justify-center gap-2 mt-4">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${before}`}
            alt="Before"
            width={100}
            height={80}
            className="rounded border"
          />
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${after}`}
            alt="After"
            width={100}
            height={80}
            className="rounded border"
          />
        </div>
      </div>
    </div>
  )
}

export default HeroTestimonial
