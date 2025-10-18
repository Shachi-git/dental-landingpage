'use client'

import { IoCalendarOutline } from 'react-icons/io5'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function AppointmentButton() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/consultation/')
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Schedule an Appointment"
      className="inline-flex items-center space-x-1 application-btn cursor-pointer"
    >
      <IoCalendarOutline className="h-6 w-6" />
      <span className="font-bold text-lg">Make An Appointment</span>
    </button>
  )
}
