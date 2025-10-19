'use client'

import { useEffect, useState } from 'react'
import { IoChevronUp } from 'react-icons/io5'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-50 default-bg-blue text-white p-3 shadow-lg transition-all duration-300"
      >
        <IoChevronUp className="h-5 w-5" />
      </button>
    )
  )
}

export default ScrollToTopButton
