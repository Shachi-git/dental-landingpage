import { useState } from 'react'
import Image from 'next/image'

const tabs = [
  { label: 'All-On-4 Dental Implants', key: 'allOn4' },
  { label: 'Single Tooth Replacement', key: 'singleTooth' },
  { label: 'Multiple Tooth Replacement', key: 'multipleTooth' },
  { label: 'Smile in a Day', key: 'smileInADay' },
  { label: 'Zygomatic Dental Implants', key: 'zygomatic' },
  { label: 'Dentures', key: 'dentures' },
]

const tabContent: Record<string, { text: string; image: string }> = {
  allOn4: {
    text: 'The All-On-4 dental implant procedure is a groundbreaking technique that replaces teeth top and bottom arches with fewer implants than traditional dental implants. This technique is well-known worldwide for its efficiency, precision, and durability. Our experienced elite dental professionals have transformed smiles with the All-On-Four dental implant technique for over a decade. This procedure involves the efficient and precise placement of 4 dental implants to support each arch, making this technique the most cost-effective and time-efficient smile restoration procedure! Our patients leave our office with a brand new, fully-functioning smile in just one day!',
    image: '/reasons/xall-on-4-diagram.webp',
  },
  singleTooth: {
    text: 'Your teeth affect your overall health. A missing tooth can affect your speech, bite, and food choices. Dental implants are the most conservative and long-lasting solution for replacing a single tooth. A dental implant is a secure solution that replaces both the missing tooth and its root. They produce a strong foundation and stimulate jaw bone growth, keeping the jaw bone healthy. If you are looking to replace a single tooth and better your smile, dental implants are the perfect choice for you!',
    image: '/reasons/xsingle-tooth-replacement.webp',
  },
  multipleTooth: {
    text: 'Tooth decay, gum disease, or injury can be one of the causes of missing teeth. You can select from several teeth replacement options for replacing several missing teeth — from temporary to fixed solutions. Multiple teeth replacement options include dental implants, a fixed dental bridge, and a removable partial denture. If you are looking to replace several missing teeth, consult with one of our highly experienced specialists to see which treatment option is best for you!',
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

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('allOn4')

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded ${
              activeTab === tab.key
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-4 text-foreground">
        <Image
          src={tabContent[activeTab].image}
          /*src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${
            tabContent[activeTab].image
          }`}*/
          height={400}
          width={400}
          alt={tabs.find((t) => t.key === activeTab)?.label || 'Dental-Image'}
          className="w-full max-w-md mb-4 rounded shadow"
        />
        <p>{tabContent[activeTab].text}</p>
      </div>
    </div>
  )
}
