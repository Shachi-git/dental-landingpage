'use client'

import { useState, useEffect } from 'react'
import cn from 'classnames'
import CallButton from './ui/CallButton'
import AddressRotator from './ui/AddressRotator'
import AppointmentButton from './ui/AppointmentButton'
import { useMobileOrTablet } from '../lib/useDevice'
import Image from 'next/image'
import { Bars3Icon } from '@heroicons/react/24/solid'
import LeftNav from './LeftNav'
import NavBar from './NavBar'

export const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const isMobileOrTablet = useMobileOrTablet()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const drawer = document.getElementById('mobile-drawer')
      if (drawer && !drawer.contains(e.target as Node)) {
        setIsMenuOpen(false)
      }
    }
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  if (!mounted) return null

  return (
    <>
      {isMenuOpen && (
        <></>
        //<div className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300" />
      )}

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isMobileOrTablet ? 'py-0 px-0' : 'py-0 px-0'
        )}
      >
        {isMobileOrTablet ? (
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between py-2 px-3">
              <button onClick={() => setIsMenuOpen(true)}>
                <Bars3Icon className="h-8 w-8" />
              </button>
              <Image
                src="/logo/logo.webp"
                /*src={`${
                  process.env.NEXT_PUBLIC_BASE_PATH || ''
                }/logo/logo.webp`}*/
                alt="Logo"
                width={250}
                height={200}
              />
            </div>
            <CallButton />
          </div>
        ) : (
          <div>
            <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-12">
              <CallButton />
              <AddressRotator />
              <AppointmentButton />
            </div>
            <div className="w-full">
              <NavBar />
            </div>
          </div>
        )}
      </header>

      {isMenuOpen && <LeftNav />}
    </>
  )
}
