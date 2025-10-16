'use client'

import React, { useEffect, useState } from 'react'

const addresses = [
  '110 New Hyde Park Road Franklin Square, NY 11010',
  '230 Centre St. Nutley, NJ 07110',
  '110 East 40th St #508 New York, NY 10016',
]
const highlight = ['Long Island', 'Nutley', 'New York']

export default function AddressRotator() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % addresses.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center text-center">
      <p className="transition-opacity duration-500 ease-in-out opacity-100 text-foreground cursor-pointer">
        <span className="font-bold text-2xl text-[#0085cc]">
          {highlight[index]}
        </span>{' '}
        {addresses[index]}
      </p>
    </div>
  )
}
