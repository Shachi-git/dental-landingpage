'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { navOptions } from '../lib/Options'
import { FaAngleRight } from 'react-icons/fa6'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const LeftNav = () => {
  const [isOpen, setIsOpen] = useState(true)
  const router = useRouter()

  const handleNavigate = (href: string) => {
    setIsOpen(false)
    router.push(href)
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
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/logo/logo.webp"
            //src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo/logo.webp`}
            alt="Logo"
            width={350}
            height={200}
            className="cursor-pointer"
          />
        </Link>

        <nav className="flex flex-col space-y-2 mt-4">
          {navOptions.mobile.map((option, index) => (
            <button
              key={index}
              className="flex justify-between items-center px-4 py-2 rounded hover:bg-gray-100 text-left"
              onClick={() => handleNavigate(option.href)}
            >
              <span>{option.label}</span>
              {option.label !== 'Blog' && <FaAngleRight className="h-5 w-5" />}
            </button>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default LeftNav
