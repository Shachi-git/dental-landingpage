'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { navOptions } from '../lib/Options'
import { FaAngleRight } from 'react-icons/fa6'
import { IoChevronBack } from 'react-icons/io5'
import Link from 'next/link'
import {
  periodonticsDental,
  locations,
  ourDoctors,
  beforeAfterMobile,
  learnMobile,
  treatmentOptionsMobile,
} from '@/lib/sections'

const subMenuMap: Record<string, { label: string; href: string }[]> = {
  'Periodontics Dental': periodonticsDental,
  Learn: learnMobile,
  'Treatment Options': treatmentOptionsMobile,
  'Before After': beforeAfterMobile,
  'Our Doctors': ourDoctors,
  Locations: locations,
}

const LeftNav = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null)

  const handleBack = () => {
    setActiveSubMenu(null)
  }

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        id="mobile-drawer"
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-lg p-4 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Link
          //href="/"
          href="/index.html"
          aria-label="Dental Implant USA Logo"
        >
          <Image
            //src="/logo/logo.webp"
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo/logo.webp`}
            alt="Dental Implant USA Logo"
            width={350}
            height={200}
            className="cursor-pointer"
          />
        </Link>

        <nav className="flex flex-col space-y-2 mt-4">
          {activeSubMenu ? (
            <>
              <div className="flex items-center gap-x-2 px-4 py-2">
                <button onClick={handleBack} aria-label="Go back">
                  <IoChevronBack className="h-5 w-5 text-foreground" />
                </button>
                <span className="text-lg font-semibold">{activeSubMenu}</span>
              </div>
              {subMenuMap[activeSubMenu]?.map((item, index) => (
                <React.Fragment key={index}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-left hover:bg-gray-200 rounded block"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  <hr className="my-1 border-t border-gray-300 w-3/4 self-center" />
                </React.Fragment>
              ))}
            </>
          ) : (
            navOptions.mobile.map((option, index) => (
              <React.Fragment key={index}>
                {subMenuMap[option.label] ? (
                  <button
                    className="flex justify-between items-center px-4 py-2 rounded hover:bg-gray-200 text-left w-full"
                    onClick={() => setActiveSubMenu(option.label)}
                  >
                    <span>{option.label}</span>
                    <FaAngleRight className="h-5 w-5" />
                  </button>
                ) : (
                  <a
                    href={
                      option.label === 'Blog'
                        ? 'https://www.dentalimplantsusa.com/blog/'
                        : option.href
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center px-4 py-2 rounded hover:bg-gray-200 text-left w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{option.label}</span>
                    {option.label !== 'Blog' && (
                      <FaAngleRight className="h-5 w-5" />
                    )}
                  </a>
                )}
                <hr className="my-1 border-t border-gray-300 w-3/4 self-center" />
              </React.Fragment>
            ))
          )}
        </nav>
      </aside>
    </>
  )
}

export default LeftNav
