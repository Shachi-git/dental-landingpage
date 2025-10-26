'use client'

import React, { useState } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import { locationSection } from '@/lib/sections'
import { IoLocationSharp, IoCalendarOutline, IoCall } from 'react-icons/io5'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500'],
})

type LocationDialogueProps = {
  open?: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export default function LocationDialogue({
  open = false,
  onMouseEnter,
  onMouseLeave,
}: LocationDialogueProps) {
  const [activeLocation, setActiveLocation] = useState(locationSection[0])

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        'fixed left-1/2 transform -translate-x-1/2 mt-2 z-50 bg-white shadow-lg rounded px-4 py-3',
        'transition-opacity duration-200',
        open
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none',
        'w-[1000px]'
      )}
    >
      <section className="w-full flex flex-col items-start">
        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-5xl">
          {/* Location Buttons */}
          <div className="flex flex-col flex-wrap justify-start gap-2 mb-8">
            {locationSection.map((loc) => (
              <Link
                href={loc.href}
                key={loc.name}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setActiveLocation(loc)}
                className={cn(
                  'whitespace-nowrap text-foreground text-lg transition-colors px-4 py-1',
                  activeLocation.name === loc.name
                    ? 'head-loc-active'
                    : 'head-loc'
                )}
              >
                {loc.buttonName}
              </Link>
            ))}
          </div>

          {/* Map + Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl">
            {/* Map */}
            <div className="w-full h-80 rounded overflow-hidden shadow-sm flex-1">
              <iframe
                src={activeLocation.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>

            <div className="flex flex-col justify-start text-center items-center lg:items-start lg:text-left min-h-[100px]">
              <h4
                className={cn(
                  'text-gl font-semibold text-foreground mb-3 max-w-2xl',
                  montserrat.className
                )}
              >
                Advanced Periodontics & Implants Dentistry -{' '}
                {activeLocation.name}
              </h4>
              <hr className="my-1 border-t border-foreground w-3/4 mb-2" />
              <div className="flex flex-row items-start gap-x-2 mb-2">
                <IoLocationSharp className="h-5 w-5 text-foreground mt-[2px]" />
                <p className="text-base text-foreground whitespace-pre-line">
                  {activeLocation.address}
                </p>
              </div>
              <hr className="my-1 border-t border-foreground w-3/4 mb-2" />
              <div className="flex flex-row items-start gap-x-2 mb-2">
                <IoCall className="h-5 w-5 text-foreground mt-[2px]" />
                <p className="text-base text-foreground">
                  {activeLocation.phone}
                </p>
              </div>
              <hr className="my-1 border-t border-foreground w-3/4 mb-2" />

              <div className="">
                <div className="flex flex-col">
                  {activeLocation.date.map((d, i) => (
                    <p
                      key={i}
                      className="flex flex-row items-start gap-x-2 mb-2 text-base text-foreground whitespace-pre-line"
                    >
                      <IoCalendarOutline className="h-5 w-5 text-foreground mt-[2px]" />
                      {d}
                    </p>
                  ))}
                </div>
              </div>
              {/* Images Column */}
              <div className="flex flex-row gap-4 mt-4 w-full">
                {activeLocation.images?.map((src, index) => (
                  <div key={index} className="w-full rounded overflow-hidden">
                    <Image
                      //src={src}
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${src}`}
                      alt={`Clinic view ${index + 1}`}
                      width={100}
                      height={100}
                      className="w-full h-auto object-cover rounded"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
