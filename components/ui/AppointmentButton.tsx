'use client'

import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import React from 'react'

export default function AppointmentButton() {
  return (
    <button
      aria-label="Schedule an Appointment"
      className="inline-flex items-center space-x-1 application-btn cursor-pointer"
    >
      <CalendarDaysIcon className="h-6 w-6" />
      <span className="font-bold text-lg">Make An Appointment</span>
    </button>
  )
}
