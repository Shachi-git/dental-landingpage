'use client'

import { FaFacebookF, FaInstagram } from 'react-icons/fa'

const consequences = [
  'Missing Single Tooth',
  'Tooth Drifting',
  'Missing Several Teeth',
  'Sinus Expansion Due to Missing Teeth',
  'Missing All Teeth / Full Jaw Loss',
  'Cosmetic Problems Caused by Tooth Loss',
  'Headaches Caused by Tooth Loss',
  'Over Eruption Due to Missing Teeth',
  'Facial Atrophy',
]

const doctors = [
  'Dr. Richard Nejat',
  'Dr. Daniel Nejat',
  'Dr. Eugene Lee',
  'Dr. Annemarie Olga Athanasius',
  'Dr. Daniel Schinasi',
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
            {consequences.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>

        <div className="text-center lg:text-left lg:items-start flex flex-col items-center">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Meet the Doctors
          </h2>
          <hr className="my-1 border-t border-foreground w-3/4 mb-5" />

          <div className="space-y-2 text-lg text-foreground">
            {doctors.map((doc, index) => (
              <p key={index}>{doc}</p>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center text-center space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Follow us | NY
            </h2>
            <div className="flex gap-2 justify-center">
              <a
                href="https://www.facebook.com/AdvancedPeriodonticsImplantDentistryNewYork"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-80 transition"
              >
                <FaFacebookF className="text-white w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/dentalimplantsnyc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center hover:opacity-80 transition"
              >
                <FaInstagram className="text-white w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Follow us | NJ
            </h2>
            <div className="flex gap-2 justify-center">
              <a
                href="https://www.facebook.com/AdvancedPeriodonticsImplantDentistryNewJersey"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-80 transition"
              >
                <FaFacebookF className="text-white w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/dentalimplantsnj/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center hover:opacity-80 transition"
              >
                <FaInstagram className="text-white w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
