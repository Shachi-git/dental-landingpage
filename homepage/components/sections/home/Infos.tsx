'use client'

import Link from 'next/link'
import { FaMapLocationDot, FaUserDoctor } from 'react-icons/fa6'
import { MdOutlineMessage } from 'react-icons/md'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'

const infoItems = [
  {
    icon: FaMapLocationDot,
    label: 'Locations',
    href: 'https://www.dentalimplantsusa.com/locations/',
  },
  {
    icon: FaUserDoctor,
    label: 'Meet the Doctors',
    href: 'https://www.dentalimplantsusa.com/about-us/',
  },
  {
    icon: IoIosCheckmarkCircleOutline,
    label: 'Before & After',
    href: 'https://www.dentalimplantsusa.com/before-after/',
  },
  {
    icon: MdOutlineMessage,
    label: 'Our Services',
    href: 'https://www.dentalimplantsusa.com/our-services/',
  },
]

export default function Infos() {
  return (
    <div className="flex flex-wrap justify-center gap-8 py-5 default-bg-gray">
      {infoItems.map(({ icon: Icon, label, href }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-center bg-white px-3 py-4 rounded-xl w-45 cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <Icon className="h-8 w-8 text-foreground mb-2" />
          <span className="text-base font-semibold text-foreground">
            {label}
          </span>
        </Link>
      ))}
    </div>
  )
}
