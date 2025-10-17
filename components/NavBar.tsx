'use client'

import React from 'react'
import Image from 'next/image'
import { navOptions } from '../lib/Options'

const NavBar = () => {
  const navWithLogo = [...navOptions.desktop]
  navWithLogo.splice(2, 0, { label: 'logo', href: '#' })
  return (
    <div className="bg-white z-50 shadow-xs px-6 py-4 w-full flex items-center justify-center">
      <nav className="flex flex-row gap-x-6 items-center">
        {navWithLogo.map((option, index) =>
          option.label === 'logo' ? (
            <Image
              key="logo"
              src="/logo/logo.webp"
              //src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo/logo.webp`}
              alt="Logo"
              width={250}
              height={80}
              className="shrink-0 cursor-pointer"
            />
          ) : (
            <button
              key={index}
              className="px-4 py-2 rounded cursor-pointer text-lg text-foreground hover:text-inherit font-normal"
              onClick={() => {
                if (option.href) {
                  const el = document.querySelector(option.href)
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              {option.label}
            </button>
          )
        )}
      </nav>
    </div>
  )
}

export default NavBar
