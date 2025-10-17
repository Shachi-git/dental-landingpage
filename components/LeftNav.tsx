import React from 'react'
import Image from 'next/image'
import { navOptions } from '../lib/Options'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

const LeftNav = () => {
  return (
    <aside
      id="mobile-drawer"
      className="fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-lg p-4 transition-transform duration-300"
    >
      <Image
        src="/logo/logo.webp"
        //src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo/logo.webp`}
        alt="Logo"
        width={350}
        height={200}
      />

      <nav className="flex flex-col space-y-2 mt-4">
        {navOptions.mobile.map((option, index) => (
          <button
            key={index}
            className="flex justify-between items-center px-4 py-2 rounded hover:bg-gray-100"
            onClick={() => {
              if (option.href) {
                const el = document.querySelector(option.href)
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            <span>{option.label}</span>
            {option.label !== 'Blog' && (
              <ChevronRightIcon className="h-5 w-5" />
            )}
          </button>
        ))}
      </nav>
    </aside>
  )
}

export default LeftNav
