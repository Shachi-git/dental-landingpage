'use client'

import { useRef, useState, useEffect } from 'react'
import cn from 'classnames'
import { useMobileOrTablet } from '@/lib/useDevice'
import { Montserrat } from 'next/font/google'
import StarRating from '@/components/ui/Rating'
import { FaGoogle } from 'react-icons/fa'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600'],
})

const testimonials = [
  {
    name: 'Al Busha',
    review:
      "Highly recommended. Can't say enough about Dr. Daniel Nejat. Absolutely the best dentist I have ever had for my complicated situation. In two sessions finished 4 implants and caps of which he has a high level of touching with my sinuses in a correct way with great ease and professionalism!! Great and friendly staff.",
  },
  {
    name: 'Gordana Gelic',
    review:
      "I have been Dr. Richard Nejat's patient for 12+ years having so many different dental procedures and surgeries (some of them to be the most difficult and simple), and every time Dr. Nejat found the best possible solution and executed it with precision and brilliance, always being kind with his presence and ensuring minimal discomfort. His entire dental practice (coordinator Stephanie, his assistants (Emily in particular whom I know the longest) are all excellent professionals and will approach you with great care and make you feel like you are at home during, and post surgery follow up. Highly recommended!",
  },
  {
    name: 'Mark Bianchi',
    review:
      "As a patient of many years, I am impressed with the exemplary work of Dr. Richard Nejat as a dental professional. He explains options and details of treatment in laymen's terms. The procedural plan includes long term projections and Dr. Nejat is extremely skillful, knowledgeable and experienced. The entire staff is helpful, polite and caring. I highly recommend this practice.",
  },
  {
    name: 'Timothy Bright',
    review:
      'Had Fidel for a cleaning and it was a complete dental spa experience. Fidel was very informative during each stage of my recall appointment and did a great job checking my comfort level pertaining to sensitivity from start to finish. He told me my teeth are in great shape already but he still has them feeling better than ever!',
  },
  {
    name: 'Bruce Popolizio',
    review:
      'My implant became loose after 2 years. I went in today and they did the right thing. Their new office is state of the art. Everyone is very professional. I’m highly recommending Advanced Periodontics & Implants.',
  },
  {
    name: 'Zach Vocatura',
    review:
      'I ran out of options and was referred to Dr. Nejat. Immediately upon meeting him, he gave me the best option for my situation. It was something I was unaware of and it definitely calmed my worries down. The office staff is very helpful and great as well. I couldn’t be happier with my results.',
  },
]

export default function Testimonial() {
  const isMobileOrTablet = useMobileOrTablet()
  const itemsPerView = isMobileOrTablet ? 1 : 3
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isAutoScrolling = useRef(false)

  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollStart = useRef(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    startX.current = e.pageX
    scrollStart.current = containerRef.current?.scrollLeft ?? 0
    containerRef.current?.classList.add('cursor-grabbing')
    document.body.classList.add('user-select-none')
  }

  const handleMouseUp = () => {
    isDragging.current = false
    containerRef.current?.classList.remove('cursor-grabbing')
    document.body.classList.remove('user-select-none')
  }

  const handleMouseLeave = () => handleMouseUp()

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return
    const delta = e.pageX - startX.current
    containerRef.current.scrollLeft = scrollStart.current - delta
  }

  const scrollToIndex = (index: number) => {
    const container = containerRef.current
    if (!container) return

    const maxScrollIndex = Math.max(testimonials.length - itemsPerView, 0)
    const clampedIndex = Math.min(index, maxScrollIndex)
    const itemWidth = container.offsetWidth / itemsPerView

    isAutoScrolling.current = true
    container.scrollTo({
      left: itemWidth * clampedIndex,
      behavior: 'smooth',
    })

    setTimeout(() => {
      isAutoScrolling.current = false
      setActiveIndex(clampedIndex)
    }, 50)
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      if (isAutoScrolling.current) return
      const itemWidth = container.offsetWidth / itemsPerView
      const index = Math.round(container.scrollLeft / itemWidth)
      setActiveIndex(index)
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [itemsPerView])

  const maxIndex = Math.max(testimonials.length - itemsPerView, 0)

  return (
    <div
      className={cn(
        'flex flex-col items-center',
        isMobileOrTablet ? 'p-2 pb-8' : 'px-10 pt-5 pb-12'
      )}
    >
      <h1
        className={cn(
          `text-center font-bold text-foreground max-w-2xl p-6 uppercase ${montserrat.className}`,
          isMobileOrTablet ? 'p-4 pt-5 text-4xl' : 'text-5xl'
        )}
      >
        Our Happy Clients
      </h1>
      <h2 className="text-xl text-center text-foreground max-w-2xl pb-4">
        Know more about what our clients say about us!
      </h2>
      <hr className="my-1 border-t border-foreground w-3/4 mb-5" />

      <div className="w-full max-w-5xl px-6 pb-2 overflow-hidden">
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-scroll px-4 cursor-grab scroll-smooth scrollbar-hide"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          {testimonials.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded border-gray-300 border w-full flex-shrink-0"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div className="flex flex-row justify-between px-4 pt-4">
                <div>
                  <p className="font-semibold text-sm text-foreground">
                    {client.name}
                  </p>
                  <StarRating rating={5} />
                </div>
                <FaGoogle className="h-5 w-5 text-foreground" />
              </div>

              <div className="h-px w-full bg-gray-200 my-3" />

              <p className="text-sm text-justify leading-relaxed px-4 pb-4">
                {client.review}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={cn(
                'w-2 h-2 rounded-full transition-all duration-300',
                activeIndex === index
                  ? 'bg-foreground scale-125'
                  : 'bg-gray-300 scale-100'
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
