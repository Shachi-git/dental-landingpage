'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { navOptions } from '../lib/Options'
import Link from 'next/link'
import Dialogue from './ui/Dialogue'
import {
  beforeAfter,
  doctorSection,
  learnSection,
  treatmentOptions,
} from '@/lib/sections'
import LocationDialogue from './ui/LocationDialogue'

const NavBar = () => {
  const navWithLogo = [...navOptions.desktop]
  navWithLogo.splice(2, 0, { label: 'logo', href: '/index.html' })

  const [floatingOpen, setFloatingOpen] = useState(false)
  const [activeOption, setActiveOption] = useState<string | null>(null)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const openFloating = (label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
    }
    setActiveOption(label)
    setFloatingOpen(true)
  }

  const closeFloating = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveOption(null)
      setFloatingOpen(false)
    }, 300)
  }

  return (
    <div className="bg-white z-50 shadow-xs px-6 py-4 w-full flex items-center justify-center">
      <nav className="flex flex-row gap-x-6 items-center">
        {navWithLogo.map((option) => {
          if (option.label === 'logo') {
            return (
              <Link
                key="logo"
                //href="/"
                href="/index.html"
                aria-label="Dental Implant USA Logo"
              >
                <Image
                  //src="/logo/logo.webp"
                  src={`${
                    process.env.NEXT_PUBLIC_BASE_PATH || ''
                  }/logo/logo.webp`}
                  alt="Dental Implant USA Logo"
                  width={250}
                  height={80}
                  className="cursor-pointer"
                />
              </Link>
            )
          }

          return (
            <div key={option.label} className="relative">
              <button
                className="px-4 py-2 rounded cursor-pointer text-lg text-foreground hover:text-inherit font-normal"
                onMouseEnter={() => openFloating(option.label)}
                onMouseLeave={closeFloating}
                onFocus={() => openFloating(option.label)}
                onBlur={closeFloating}
              >
                {option.label}
              </button>

              {option.label === 'Learn' && activeOption === 'Learn' && (
                <Dialogue
                  open={floatingOpen}
                  onMouseEnter={() => openFloating('Learn')}
                  onMouseLeave={closeFloating}
                  sections={learnSection}
                />
              )}
              {option.label === 'Treatment Options' &&
                activeOption === 'Treatment Options' && (
                  <Dialogue
                    open={floatingOpen}
                    onMouseEnter={() => openFloating('Treatment Options')}
                    onMouseLeave={closeFloating}
                    sections={treatmentOptions}
                  />
                )}
              {option.label === 'Before After' &&
                activeOption === 'Before After' && (
                  <Dialogue
                    open={floatingOpen}
                    onMouseEnter={() => openFloating('Before After')}
                    onMouseLeave={closeFloating}
                    sections={beforeAfter}
                  />
                )}
              {option.label === 'Our Doctors' &&
                activeOption === 'Our Doctors' && (
                  <Dialogue
                    open={floatingOpen}
                    onMouseEnter={() => openFloating('Our Doctors')}
                    onMouseLeave={closeFloating}
                    sections={doctorSection}
                  />
                )}
              {option.label === 'Locations' && activeOption === 'Locations' && (
                <LocationDialogue
                  open={floatingOpen}
                  onMouseEnter={() => openFloating('Locations')}
                  onMouseLeave={closeFloating}
                />
              )}
            </div>
          )
        })}
      </nav>
    </div>
  )
}

export default NavBar
