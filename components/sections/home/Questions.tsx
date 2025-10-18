'use client'

import { useState } from 'react'
import { useMobileOrTablet } from '@/lib/useDevice'
import cn from 'classnames'
import { Montserrat } from 'next/font/google'
import { IoChevronUp, IoChevronDown } from 'react-icons/io5'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600'],
})
const faqs = [
  {
    question: 'Where do I start?',
    answer: [
      'You can begin your journey toward a beautiful smile by making an appointment with one of our highly experienced New York City periodontists. Give us a call or click here to set up your appointment today.',
      'Dental implants feel so natural and look so good, you just may forget you ever lost a tooth!',
    ],
  },
  {
    question:
      'In what situation then, if any, would a dentist recommend a tooth supported bridge?',
    answer: [
      'Until recently, most dentists considered conventional bridges the treatment of choice for replacing missing or lost teeth. However, over the past decade there have been tremendous advancements in dental implant systems allowing more options for dentists.',
      'Sometimes if the adjacent teeth have large restorations (fillings) that must be replaced or if the teeth are severely broken down, a tooth supported bridge may be the best option because those teeth could benefit from the protection of crowns attached to traditional bridges.',
      'Most dentists, however, detest the idea of grinding down perfect teeth in order to place a traditional bridge and will therefore recommend dental implants in these cases.',
    ],
  },
  {
    question: 'How long do implants last?',
    answer: [
      'Published clinical research shows that implant supported restorations have been successful for over 30 years with success rates now reaching over 95%. These cases were carefully followed from the very beginning and are likely to remain successful for the lifetime of these patients.',
      'Dental implants are designed to be permanent but there are many factors that contribute to their longevity. Home care and regular visits to the dentist or specialist are probably the most critical aspects. However, smoking, grinding of the teeth, or too much pressure on the implants can alter their success.',
      'By comparison, research shows that the typical tooth supported bridge lasts from 7-10 years and that partials and dentures last an average of only 5 years. In fact, insurance companies expect that bridges, partials, and dentures will last 5 years and will therefore pay for replacements every 5 years.',
    ],
  },
  {
    question: 'What if I have already lost all of my teeth?',
    answer:
      'If you are a denture wearer and are having problems keeping your dentures in place or you cannot enjoy some of your favorite foods, implants can still make a big difference for you. Depending on your individual case, anywhere from 2 to 8 implants can be placed in each jaw to anchor your dentures in place. No more wobbling or clicking; no more messy pastes and glues. You will be free to enjoy all of your favorite foods with confidence and comfort.',
  },
  {
    question: 'What are some of the benefits of dental implants?',
    answer: [
      'They look and feel just like your own teeth. Dental implants restore your confidence to talk, laugh, and chew with comfort and without worries.',
      'Implants preserve the integrity of facial structures. Implants prevent the hard and soft tissue collapse that can occur under conventional bridges and removable partial dentures. In patients who have lost all of their teeth, the lower one-third of the face is prone to collapse if implants are not placed to preserve the bone and the facial profile. Implants form a strong bond to the surrounding bone to provide support and anchorage for biting and chewing as well as stimulation for the bone to hold it in place.',
      'Implant-supported crowns and bridges do not require neighboring teeth for support. When teeth are replaced using traditional tooth-supported bridges, the teeth on either side of the missing tooth are ground down so that the bridge can be cemented onto them. This tooth structure can never be replaced. Removable partial dentures use clasps and rests which have to be carved onto adjacent teeth. As the partial rocks back and forth, it can loosen the teeth it depends on for anchorage, causing them to be lost.',
      'Implants replace the entire tooth and the missing root so it is a free-standing restoration. This leaves more of your natural teeth untouched and free of restorations which saves your natural teeth.',
      'Better health and nutrition because you can eat what you want. Patients with dentures often find themselves unable to eat certain foods, such as fruits and vegetables, which can compromise their nutrition. With dental implants, it is much easier to bite into and chew your favorite foods.',
      'Ease of cleansing. An implant supported crown can be cleaned like your other natural teeth, i.e. brushing and flossing. Cleaning under a bridge, however, requires the use of floss threaders for proper cleaning, while a partial must be taken out several times a day and scrubbed clean.',
      `Enjoy your food. Patients who wear an upper denture often have trouble really tasting food because the roof of the mouth is covered. With implant supported replacement teeth, it is not necessary to cover the roof of the mouth, so it is possible to enjoy the taste of all your favorite foods.`,
    ],
  },
  {
    question: 'So, what is a dental implant?',
    answer: [
      'Dental implants are screw-shaped or cylindrical root-form titanium posts that act as artificial tooth roots. These are carefully placed in the jawbone and allowed to heal. During the healing phase, your bone is growing right up to the implant surface in order to lock it in place.',
      `Shortly thereafter, a crown is made to fit on top of the implant's) so as to replace a missing tooth or teeth with a “brand-new” tooth. In many cases, you can be functioning on your “new” tooth in as little as 6 weeks!`,
    ],
  },
]

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const isMobileOrTablet = useMobileOrTablet()

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div
      className={cn(
        'flex flex-col items-center default-bg-gray',
        isMobileOrTablet ? 'p-2 pb-8' : 'px-10 pt-5 pb-12'
      )}
    >
      <h1
        className={cn(
          ` text-center font-bold text-foreground max-w-2xl p-6 uppercase ${montserrat.className}`,
          isMobileOrTablet ? 'p-4 pt-5 text-4xl' : 'text-5xl'
        )}
      >
        Frequently Asked Questions
      </h1>
      <hr className="my-1 border-t border-forground w-3/4" />
      <div className="space-y-2 pt-3 w-5/6 flex flex-col items-center pb-8">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div key={index} className="border-b w-full max-w-4xl">
              <button
                onClick={() => toggle(index)}
                className={cn(
                  'w-full flex justify-between items-center px-4 py-3 font-medium text-left',
                  isOpen ? 'text-[#0085cc]' : 'text-foreground'
                )}
              >
                <span className="flex-1 pr-4">{faq.question}</span>
                <span className="flex-shrink-0">
                  {isOpen ? (
                    <IoChevronUp className="w-5 h-5 transition-transform duration-300 text-[#0085cc]" />
                  ) : (
                    <IoChevronDown className="w-5 h-5 transition-transform duration-300 text-gray-500" />
                  )}
                </span>
              </button>

              <div
                className={cn(
                  'px-4 overflow-hidden transition-all duration-300 text-foreground border-t',
                  isOpen ? 'py-3 h-48 overflow-y-auto' : 'h-0 py-0'
                )}
              >
                {isOpen &&
                  (Array.isArray(faq.answer) ? (
                    faq.answer.map((line, i) => (
                      <p key={i} className="text-base mb-2 text-justify">
                        {line}
                      </p>
                    ))
                  ) : (
                    <p className="text-justify">{faq.answer}</p>
                  ))}
              </div>
            </div>
          )
        })}
      </div>
      <button type="button" className="btn font-medium">
        Show All FAQs
      </button>
    </div>
  )
}
