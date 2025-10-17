'use client'

import { useRef, useEffect } from 'react'
import cn from 'classnames'
import { Montserrat } from 'next/font/google'
import { useMobileOrTablet } from '@/lib/useDevice'
import Image from 'next/image'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600'],
})

const affiliations = [
  {
    name: 'Academy of Osseointegration',
    image: '/affiliation/final-ao-logo.webp',
  },
  {
    name: 'American Dental Society',
    image: '/affiliation/ada-logo.webp',
  },
  {
    name: 'New York State Dental Association',
    image: '/affiliation/NYS-dental-association.webp',
  },
  {
    name: 'Accredited BBB Rating A+',
    image: '/affiliation/a-rated.webp',
  },
  {
    name: 'American Board of Periodontology',
    image: '/affiliation/sp-img-2.webp',
  },
]

export default function AffiliationsScroller() {
  const isMobileOrTablet = useMobileOrTablet()
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollStart = useRef(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    startX.current = e.pageX
    scrollStart.current = containerRef.current?.scrollLeft || 0
    containerRef.current?.classList.add('cursor-grabbing')
    document.body.classList.add('user-select-none')
  }

  const handleMouseUp = () => {
    isDragging.current = false
    containerRef.current?.classList.remove('cursor-grabbing')
    document.body.classList.remove('user-select-none')
  }

  const handleMouseLeave = () => handleMouseUp()

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return
    const delta = e.pageX - startX.current
    containerRef.current.scrollLeft = scrollStart.current - delta
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const itemWidth = container.offsetWidth / (isMobileOrTablet ? 1 : 3)
    let currentIndex = 0

    const scrollStep = () => {
      currentIndex += 1
      const maxIndex = container.scrollWidth / itemWidth - 1

      if (currentIndex > maxIndex) {
        currentIndex = 0
      }

      container.scrollTo({
        left: itemWidth * currentIndex,
        behavior: 'smooth',
      })
    }

    const interval = setInterval(scrollStep, 3000)

    return () => clearInterval(interval)
  }, [isMobileOrTablet])

  return (
    <section className="w-full flex flex-col items-center pt-5 pb-12 px-4 sm:px-6 lg:px-8">
      <h1
        className={cn(
          `text-center font-bold text-foreground max-w-2xl p-6 uppercase ${montserrat.className}`,
          isMobileOrTablet ? 'p-4 pt-5 text-4xl' : 'text-5xl'
        )}
      >
        Accreditations and Affiliations
      </h1>

      <hr className="my-1 border-t border-foreground w-3/4 mb-5" />
      <div className="w-full ">
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-scroll px-4 cursor-grab scroll-smooth scrollbar-hide"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          {affiliations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 shadow-sm flex-shrink-0 w-64 h-40 flex flex-col items-center justify-center text-center p-4"
            >
              <div className="h-[130px] flex items-center justify-center mb-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  height={150}
                  width={150}
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-medium text-foreground leading-tight">
                {item.name}
              </p>
            </div>
          ))}

          {affiliations.map((item, index) => (
            <div
              key={`repeat-${index}`}
              className="bg-white rounded-lg border border-gray-200 shadow-sm flex-shrink-0 w-64 h-40 flex flex-col items-center justify-center text-center p-4"
            >
              <div className="h-[130px] flex items-center justify-center mb-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  height={150}
                  width={150}
                  className="object-contain"
                />
              </div>
              <p className="text-base font-medium text-foreground leading-tight">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
