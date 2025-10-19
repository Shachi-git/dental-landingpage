'use client'

import Link from 'next/link'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

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
    name: 'Dr. Eugene Lee',
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
  return (
    <section className="w-full default-bg-gray px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="text-center lg:text-left lg:items-start flex flex-col items-center">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Consequences of Missing Teeth
          </h2>
          <hr className="my-1 border-t border-foreground w-3/4 mb-5" />

          <div className="space-y-2 text-lg text-foreground">
            {consequences.map(({ label, href }, index) => (
              <Link
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center lg:text-left lg:items-start flex flex-col items-center">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Meet the Doctors
          </h2>
          <hr className="my-1 border-t border-foreground w-3/4 mb-5" />

          <div className="space-y-2 text-lg text-foreground">
            {doctors.map(({ name, href }, index) => (
              <Link
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center text-center space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Follow us | NY
            </h2>
            <div className="flex gap-2 justify-center">
              <Link
                href="https://www.facebook.com/AdvancedPeriodonticsImplantDentistryNewYork"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="New York Facebook Page"
                className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-80 transition"
              >
                <FaFacebookF className="text-white w-6 h-6" />
              </Link>
              <Link
                href="https://www.instagram.com/dentalimplantsnyc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="New York Instagram Page"
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center hover:opacity-80 transition"
              >
                <FaInstagram className="text-white w-6 h-6" />
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Follow us | NJ
            </h2>
            <div className="flex gap-2 justify-center">
              <Link
                href="https://www.facebook.com/AdvancedPeriodonticsImplantDentistryNewJersey"
                target="_blank"
                aria-label="New Jersey Facebook Page"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-80 transition"
              >
                <FaFacebookF className="text-white w-6 h-6" />
              </Link>
              <Link
                href="https://www.instagram.com/dentalimplantsnj/"
                target="_blank"
                aria-label="New Jersey Instagram Page"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center hover:opacity-80 transition"
              >
                <FaInstagram className="text-white w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
