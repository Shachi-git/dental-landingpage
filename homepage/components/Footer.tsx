'use client'

import Link from 'next/link'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import cn from 'classnames'
import { useMobileOrTablet } from '@/lib/useDevice'
import { useMobile } from '@/lib/useMobile'

const consequences = [
  {
    label: 'Missing Single Tooth',
    href: 'https://www.dentalimplantsusa.com/consequences-of-single-tooth-loss/',
  },
  {
    label: 'Tooth Drifting',
    href: 'https://www.dentalimplantsusa.com/tooth-drifting-and-bone-structure-changes-due-to-missing-teeth/',
  },
  {
    label: 'Missing Several Teeth',
    href: 'https://www.dentalimplantsusa.com/consequences-of-missing-several-teeth/',
  },
  {
    label: 'Sinus Expansion Due to Missing Teeth',
    href: 'https://www.dentalimplantsusa.com/sinus-expansion-due-to-missing-teeth/',
  },
  {
    label: 'Missing All Teeth / Full Jaw Loss',
    href: 'https://www.dentalimplantsusa.com/consequences-of-missing-all-teeth/',
  },
  {
    label: 'Cosmetic Problems Caused by Tooth Loss',
    href: 'https://www.dentalimplantsusa.com/cosmetic-problems-caused-by-tooth-loss/',
  },
  {
    label: 'Headaches Caused by Tooth Loss',
    href: 'https://www.dentalimplantsusa.com/headaches-caused-by-tooth-loss/',
  },
  {
    label: 'Over Eruption Due to Missing Teeth',
    href: 'https://www.dentalimplantsusa.com/over-eruption-from-missing-teeth/',
  },
  {
    label: 'Facial Atrophy',
    href: 'https://www.dentalimplantsusa.com/facial-atrophy-resulting-from-missing-teeth/',
  },
]

const doctors = [
  {
    name: 'Dr. Richard Nejat',
    href: 'https://www.dentalimplantsusa.com/doctor/dr-richard-nejat/',
  },
  {
    name: 'Dr. Daniel Nejat',
    href: 'https://www.dentalimplantsusa.com/doctor/dr-daniel-nejat/',
  },
  {
    name: 'Dr. Eugenie Lee',
    href: 'https://www.dentalimplantsusa.com/doctor/dr-eugenie-lee/',
  },
  {
    name: 'Dr. Annemarie Olga Athansios',
    href: 'https://www.dentalimplantsusa.com/doctor/annemarie-olga-athansios/',
  },
  {
    name: 'Dr. Daniel Schinazi',
    href: 'https://www.dentalimplantsusa.com/doctor/dr-daniel-schinazi/',
  },
]

export default function Footer() {
  const isMobileOrTablet = useMobileOrTablet()
  const isMobile = useMobile()

  return (
    <section
      className={cn(
        'w-full bg-gray-50 py-14',
        isMobile ? 'px-6' : isMobileOrTablet ? 'px-10' : 'px-24'
      )}
    >
      <div
        className={cn(
          'max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12',
          'text-center md:text-center lg:text-left'
        )}
      >
        {/* LEFT COLUMN — Consequences */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Consequences of missing teeth
          </h2>
          <hr
            className={cn(
              'border-t border-gray-400 mb-4 transition-all',
              'mx-auto w-full lg:mx-0 lg:w-3/4'
            )}
          />
          <ul className="space-y-2 text-lg text-foreground">
            {consequences.map(({ label, href }, i) => (
              <li key={i}>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-gray-900 transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT COLUMN — Doctors + Social */}
        <div className="flex-1">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Meet the doctors
            </h2>
            <hr
              className={cn(
                'border-t border-gray-400 mb-4 transition-all',
                'mx-auto w-full lg:mx-0 lg:w-3/4'
              )}
            />
            <ul className="space-y-2 text-lg text-gray-700">
              {doctors.map(({ name, href }, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-gray-900 transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-6">
            {/* Follow us | NY */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Follow us | NY
              </h3>
              <hr
                className={cn(
                  'border-t border-gray-400 mb-3 transition-all',
                  'mx-auto w-full lg:mx-0 lg:w-3/4'
                )}
              />
              <div className="flex justify-center lg:justify-start gap-3">
                <Link
                  href="https://www.facebook.com/AdvancedPeriodonticsImplantDentistryNewYork"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="New York Facebook"
                  className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-80 transition"
                >
                  <FaFacebookF className="text-white w-5 h-5" />
                </Link>
                <Link
                  href="https://www.instagram.com/dentalimplantsnyc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="New York Instagram"
                  className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center hover:opacity-80 transition"
                >
                  <FaInstagram className="text-white w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Follow us | NJ */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Follow us | NJ
              </h3>
              <hr
                className={cn(
                  'border-t border-gray-400 mb-3 transition-all',
                  'mx-auto w-full lg:mx-0 lg:w-3/4'
                )}
              />
              <div className="flex justify-center lg:justify-start gap-3">
                <Link
                  href="https://www.facebook.com/AdvancedPeriodonticsImplantDentistryNewJersey"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="New Jersey Facebook"
                  className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-80 transition"
                >
                  <FaFacebookF className="text-white w-5 h-5" />
                </Link>
                <Link
                  href="https://www.instagram.com/dentalimplantsnj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="New Jersey Instagram"
                  className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center hover:opacity-80 transition"
                >
                  <FaInstagram className="text-white w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
