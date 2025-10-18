'use client'

import Link from 'next/link'

export default function Copyright() {
  return (
    <div className="w-full bg-gray-200 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
        <p className="text-sm text-foreground">
          Copyright © 2025 Advanced & Implant Dentistry. All Rights Reserved.
        </p>

        <div className="flex gap-4 text-sm text-foreground">
          <Link href="/privacy-policy" className="underline hover:no-underline">
            Privacy Policy
          </Link>
          <Link
            href="/accessibility-policy"
            className="underline hover:no-underline"
          >
            Accessibility Policy
          </Link>
          <Link
            href="/terms-and-conditions"
            className="underline hover:no-underline"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  )
}
