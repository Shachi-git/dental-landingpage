'use client'

import { IoCalendarOutline } from 'react-icons/io5'
import React from 'react'

export default function AppointmentButton() {
  const handleClick = () => {
    window.location.href = `/consultation`
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
