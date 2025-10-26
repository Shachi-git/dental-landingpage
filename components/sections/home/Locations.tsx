'use client'

import { useState } from 'react'
import cn from 'classnames'
import { Montserrat } from 'next/font/google'
import { useMobileOrTablet } from '@/lib/useDevice'
import { useRouter } from 'next/navigation'
import { useMobile } from '@/lib/useMobile'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600'],
})

const montserratSemi = Montserrat({
  subsets: ['latin'],
  weight: ['600'],
})

const locations = [
  {
    name: 'New York',
    buttonName: 'Manhattan',
    address: '110 E 40th Ave #500\nNew York, NY 10016',
    phone: '(877) 806-8913',
    href: '8778068913',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.8571860630873!2d-73.97801679999999!3d40.7503912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2590144805063%3A0x1f4d3ebe2a8c496b!2sAdvanced%20Periodontics%20%26%20Implant%20Dentistry!5e1!3m2!1sen!2sph!4v1760701687852!5m2!1sen!2sph',
  },
  {
    name: 'Nutley',
    buttonName: 'Nutley',
    address: '230 Centre St #A\nNutley, NJ 07110',
    phone: '(973) 988-2661',
    href: '9739882661',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d439.0929416805792!2d-74.1564205727619!3d40.81276241424011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2558ee08d6f5b%3A0xedf122e33e2f9aca!2sAll%20On%20Four%20Dental%20Implants%20New%20Jersey!5e1!3m2!1sen!2sph!4v1760758899804!5m2!1sen!2sph',
  },
  {
    name: 'Long Island',
    buttonName: 'Long Island',
    address: '110 New Hyde Park Road\nFranklin Square, NY 11010',
    phone: '(516) 504-3430',
    href: '5165043430',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.46895950950565!2d-73.67598435969498!3d40.71046181730976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26320102de04f%3A0x3fda5d8c983b59be!2sClock%20Tower%20Dental%20Associates!5e1!3m2!1sen!2sph!4v1760758983511!5m2!1sen!2sph',
  },
  {
    name: 'Bronxville',
    buttonName: 'Bronxville',
    address: '21 Kraft Ave, Bronxville\nNY 10708',
    phone: '(914) 337-7757',
    href: '9143377757',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1361.264413604947!2d-73.8301239940691!3d40.93857835747274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c292aeeab34591%3A0xf014ec94ddde7641!2s21%20Kraft%20Ave%2C%20Bronxville%2C%20NY%2010708%2C%20USA!5e1!3m2!1sen!2sph!4v1760759262876!5m2!1sen!2sph',
  },
]

export default function AppointmentSection() {
  const [activeLocation, setActiveLocation] = useState(locations[0])
  const isMobileOrTablet = useMobileOrTablet()
  const router = useRouter()
  const isMobile = useMobile()

  const handleClick = () => {
    router.push('/consultation/')
  }
  return (
    <section
      className={cn(
        'flex flex-col items-center w-full',
        isMobile ? 'px-5 py-5' : isMobileOrTablet ? 'px-5 py-10' : 'py-20 px-35'
      )}
    >
      <h1
        className={cn(
          `text-center font-bold text-foreground p-6 uppercase ${montserrat.className}`,
          isMobileOrTablet ? 'p-4 pt-5 text-4xl' : 'pt-0 text-5xl '
        )}
      >
        Schedule Your Appointment
      </h1>
      <hr className="my-1 w-full border-t" />
      <div className="flex flex-col md:flex-row pt-5 gap-8 w-full max-w-5xl">
        <div className="flex flex-col flex-wrap justify-start gap-2 mb-8">
          {locations.map((loc) => (
            <button
              key={loc.name}
              onClick={() => setActiveLocation(loc)}
              className={cn(
                'shadow-sm whitespace-nowrap text-sm font-medium transition-colors',
                activeLocation.name === loc.name ? 'loc-btn-active' : 'loc-btn'
              )}
            >
              {loc.buttonName}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          <div className="w-full h-50 rounded overflow-hidden shadow-sm flex-1">
            <iframe
              src={activeLocation.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>

          <div className="flex flex-col justify-start text-center items-center md:items-start md:text-left min-h-[100px]">
            <h3
              className={cn(
                `text-2xl font-semibold text-foreground mb-3 max-w-2xl ${montserratSemi.className}`
              )}
            >
              Advanced Periodontics & Implants Dentistry - {activeLocation.name}
            </h3>
            <p className="text-base font-light text-foreground mb-2 whitespace-pre-line">
              {activeLocation.address}
            </p>
            <a
              href={`tel:${activeLocation.phone.replace(/\D/g, '')}`}
              aria-label="Call"
              className="text-base default-blue mb-3 cursor-pointer"
            >
              {activeLocation.phone}
            </a>

            <button
              className="btn w-1/2 text-sm font-medium"
              onClick={handleClick}
            >
              Book an appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
