'use client'

import React from 'react'
import { useMobileOrTablet } from '../../lib/useDevice'
import { PhoneIcon } from '@heroicons/react/24/solid'

export default function CallButton() {
  const isMobileOrTablet = useMobileOrTablet()

  return (
    <>
      {isMobileOrTablet ? (
        <button
          aria-label="Schedule an Appointment"
          className="inline-flex items-center space-x-2 application-btn w-full justify-center cursor-pointer"
        >
          <PhoneIcon className="h-4 w-4" />
          <span className=" text-lg">Call to Schedule an Appointment</span>
        </button>
      ) : (
        <a
          href="tel:8774406579"
          aria-label="Call"
          className="inline-flex items-center space-x-1 cursor-pointer group"
        >
          <PhoneIcon className="h-5 w-5" />
          <span className="font-bold text-lg group-hover:underline">
            (877) 440-6579
          </span>
        </a>
      )}
    </>
  )
}
