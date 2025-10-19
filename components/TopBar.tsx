'use client'

import { useState, useEffect } from 'react'
import cn from 'classnames'
import CallButton from './ui/CallButton'
import AddressRotator from './ui/AddressRotator'
import AppointmentButton from './ui/AppointmentButton'
import { useMobileOrTablet } from '../lib/useDevice'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa6'
import LeftNav from './LeftNav'
import NavBar from './NavBar'
import Link from 'next/link'

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
                <FaBars className="h-5 w-5" />
              </button>
              <Link
                //href="/"
                href="/index.html"
                aria-label="Dental Implant USA Icon"
              >
                <Image
                  //src="/logo/logo.webp"
                  src={`${
                    process.env.NEXT_PUBLIC_BASE_PATH || ''
                  }/logo/logo.webp`}
                  alt="Logo"
                  width={200}
                  height={100}
                  className="cursor-pointer"
                />
              </Link>
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
