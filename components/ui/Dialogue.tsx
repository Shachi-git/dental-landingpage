'use client'

import React from 'react'
import cn from 'classnames'
import Link from 'next/link'

type DialogueSection = {
  title?: string
  links: { label: string; href: string; position?: string }[]
}

type DialogueProps = {
  sections: DialogueSection[]
  open?: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export default function Dialogue({
  sections,
  open = false,
  onMouseEnter,
  onMouseLeave,
}: DialogueProps) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        'fixed left-1/2 transform -translate-x-1/2 mt-2 z-50 bg-white shadow-lg rounded px-4 py-3',
        'transition-opacity duration-200',
        open
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none',
        'w-[1000px]'
      )}
    >
      <div className="flex gap-8">
        {sections.map((section, i) => (
          <div key={i} className="flex flex-col space-y-2 w-full">
            <h3 className="font-semibold text-lg text-foreground">
              {section.title}
            </h3>
            {section.links.map((link, j) => (
              <div
                key={j}
                className="flex flex-col justify-between px-2 py-4 default-bg-gray rounded-lg w-full"
              >
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground text-lg hover:text-[#0085cc] w-full"
                >
                  {link.label}
                  <p className="text-sm text-gray-500 w-full">
                    {link.position}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
