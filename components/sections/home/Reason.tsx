'use client'

import { useState } from 'react'
import { Montserrat } from 'next/font/google'
import { useMobileOrTablet } from '@/lib/useDevice'
import cn from 'classnames'
import Image from 'next/image'
import { useMobile } from '@/lib/useMobile'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600'],
})

const reasons = [
  { label: 'All-On-4 Dental Implants', key: 'allOn4' },
  { label: 'Single Tooth Replacement', key: 'singleTooth' },
  { label: 'Multiple Tooth Replacement', key: 'multipleTooth' },
  { label: 'Smile in a Day', key: 'smileInADay' },
  { label: 'Zygomatic Dental Implants', key: 'zygomatic' },
  { label: 'Dentures', key: 'dentures' },
]

const reasonsContent: Record<string, { text: string; image: string }> = {
  allOn4: {
    text: 'The All-On-4 dental implant procedure is a groundbreaking technique that replaces teeth top and bottom arches with fewer implants than traditional dental implants. This technique is well-known worldwide for its efficiency, precision, and durability. Our experienced elite dental professionals have transformed smiles with the All-On-Four dental implant technique for over a decade. This procedure involves the efficient and precise placement of 4 dental implants to support each arch, making this technique the most cost-effective and time-efficient smile restoration procedure! Our patients leave our office with a brand new, fully-functioning smile in just one day!',
    image: '/reasons/xall-on-4-diagram.webp',
  },
  singleTooth: {
    text: 'Your teeth affect your overall health. A missing tooth can affect your speech, bite, and food choices. Dental implants are the most conservative and long-lasting solution for replacing a single tooth. A dental implant is a secure solution that replaces both the missing tooth and its root. They produce a strong foundation and stimulate jaw bone growth, keeping the jaw bone healthy. If you are looking to replace a single tooth and better your smile, dental implants are the perfect choice for you!',
    image: '/reasons/xsingle-tooth-replacement.webp',
  },
  multipleTooth: {
    text: 'Tooth decay, gum disease, or injury can be one of the causes of missing teeth. You can select from several teeth replacement options for replacing several missing teeth - from temporary to fixed solutions. Multiple teeth replacement options include dental implants, a fixed dental bridge, and a removable partial denture. If you are looking to replace several missing teeth, consult with one of our highly experienced specialists to see which treatment option is best for you!',
    image: '/reasons/xmultiple-tooth-replacement.webp',
  },
  smileInADay: {
    text: 'Smile in a Day™ utilizes dental implants to securely and immediately replace missing, compromised, decayed, or broken teeth. This procedure offers an ideal solution for dental implant patients who struggle with wearing dentures or who need to have their teeth removed. Patients who are missing one or multiple teeth will benefit significantly from the Smile in a Day™ solution that produces a fully functioning, brand new smile in just one day!',
    image: '/reasons/xsmile-in-a-day.webp',
  },
  zygomatic: {
    text: 'If you have been told you do not have enough natural bone for dental implants, we have the perfect solution for you! Traditionally, bone grafting is needed to create a sufficient foundation if the patient does not have adequate jaw bone to support the dental implant. Zygomatic Graftless Dental Implants is a revolutionary dental implant technique that completely eliminates the need for bone grafting. Zygomatic implants are a graftless dental implant technique that embeds the dental implant directly into the lower portion of the cheekbone, where there is sufficient bone material; therefore, replacing the missing tooth or teeth without the additional bone graft.',
    image: '/reasons/xzygomatic-implant.webp',
  },
  dentures: {
    text: `One of the most commonly used solutions for patients missing several teeth in one or both jaws is complete dentures. A denture is a removable prosthetic piece supported by the surrounding soft and hard tissue in the mouth with no secure connection to the jawbone. To maximize functionality and comfort, a removable denture is custom-fitted to each patient's jawbone.`,
    image: '/reasons/xdentures.webp',
  },
}

export default function Reasons() {
  const [activeTab, setActiveTab] = useState('allOn4')
  const isMobileOrTablet = useMobileOrTablet()
  const isMobile = useMobile()
  return (
    <div
      className={cn(
        'flex flex-col items-center w-full',
        isMobile
          ? 'px-5 py-20'
          : isMobileOrTablet
          ? 'px-5 py-10'
          : 'py-20 px-35'
      )}
    >
      <h1
        className={cn(
          ` text-center font-bold text-foreground max-w-2xl pb-5 uppercase ${montserrat.className}`,
          isMobileOrTablet ? 'text-4xl' : 'text-5xl'
        )}
      >
        Why Choose Us?
      </h1>
      <hr className="my-1 border-t" />
      <div className="flex flex-col items-center w-full">
        <div className="flex w-full pt-5 pb-0 overflow-x-auto scrollbar-hide flex-nowrap">
          {reasons.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 px-4 py-2 rounded-t text-foreground font-semibold whitespace-nowrap ${
                activeTab === tab.key ? 'bg-[#f7f7f7]' : 'bg-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="text-foreground flex flex-wrap items-start gap-6 default-bg-gray p-5">
          <Image
            //src={reasonsContent[activeTab].image}
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${
              reasonsContent[activeTab].image
            }`}
            height={400}
            width={400}
            alt={
              reasons.find((t) => t.key === activeTab)?.label || 'Dental-Image'
            }
            className="w-full max-w-sm rounded shadow"
          />
          <p className="flex-1 text-lg min-w-[200px] text-justify">
            {reasonsContent[activeTab].text}
          </p>
        </div>
      </div>
    </div>
  )
}
