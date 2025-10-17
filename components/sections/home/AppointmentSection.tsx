'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Form } from '../../../components/Form'
import {
  officeOptions,
  serviceOptions,
  timeOptions,
} from '../../../lib/Options'
import { StepIndicator } from '../../../components/ui/StepIndicator'
import { useMobileOrTablet } from '../../../lib/useDevice'
import cn from 'classnames'

const images = [
  '/images/grace.webp',
  '/images/testimonial2.webp',
  '/images/testimonial3.webp',
]

export default function AppointmentSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const [step, setStep] = useState(1)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const isMobileOrTablet = useMobileOrTablet()

  const [formData, setFormData] = useState({
    office: '',
    service: '',
    time: '',
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    HearAboutUs: '',
  })

  const clearForm = () => {
    setFormData({
      office: '',
      service: '',
      time: '',
      firstName: '',
      lastName: '',
      email: '',
      contact: '',
      HearAboutUs: '',
    })
  }

  const LOCAL_STORAGE_KEY = 'dentalImplantFormData'

  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
  }, [])

  const handleChange = (field: keyof typeof formData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleNext = () => {
    const requiredFields =
      step === 1
        ? ['office', 'service', 'time']
        : step === 2
        ? ['firstName', 'lastName', 'email', 'contact']
        : []

    const fieldErrors: Record<string, string> = {}

    requiredFields.forEach((key) => {
      if (formData[key as keyof typeof formData].trim() === '') {
        fieldErrors[key] = 'This field is required!'
      }
    })

    //   if (formData.whatsapp.trim() !== '') {
    //     const whatsappRegex = /^\+63\s?9\d{2}[ -]?\d{3}[ -]?\d{4}$/
    //     if (!whatsappRegex.test(formData.whatsapp.trim())) {
    //       fieldErrors.whatsapp = 'Please enter a valid WhatsApp number'
    //     }
    //   }

    //   if (step === 1 && formData.email.trim() !== '') {
    //    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    //   if (!emailRegex.test(formData.email.trim())) {
    //   fieldErrors.email = 'Please enter a valid email address!'
    // }
    //}

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      return
    }
    setErrors({})
    setStep((prev) => prev + 1)
  }

  return (
    <section
      className={cn(
        'flex w-full',
        isMobileOrTablet ? 'flex-col pt-27' : 'flex-row mt-6 pt-30'
      )}
    >
      <div
        className={cn(
          'bg-cover bg-center transition-all duration-500',
          isMobileOrTablet ? 'w-full' : 'w-1/2'
        )}
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div
          className={cn(
            'bg-black/40 h-full w-full flex items-center justify-center text-white p-6'
          )}
        >
          <blockquote className="max-w-md text-lg italic">
            “When I was told I was not a candidate for dental implants, I felt
            completely hopeless. Discovering that I was a candidate for the
            All-On-Four procedure changed my life!”
            <p className="mt-4 text-sm font-semibold">
              — Grace, All-On-Four Smile Recipient
            </p>
          </blockquote>
        </div>
      </div>
      <div
        className={cn(
          'bg-[#f7f7f7] p-8 flex flex-col justify-start',
          isMobileOrTablet ? 'w-full' : 'w-1/2'
        )}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-[#0085cc]">
          Book an Appointment
        </h2>

        <StepIndicator currentStep={step} />

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault()
            console.log('Form submitted:', formData)
          }}
        >
          {step === 1 && (
            <>
              <Form
                id="office"
                question="Choose your office"
                value={formData.office}
                onChange={handleChange('office')}
                error={errors.office}
                type="select"
                required
                options={officeOptions}
              />
              <Form
                id="service"
                question="What service are you interested in?"
                value={formData.service}
                onChange={handleChange('service')}
                error={errors.service}
                type="select"
                required
                options={serviceOptions}
              />
              <Form
                id="time"
                question="What time is best for you?"
                value={formData.time}
                onChange={handleChange('time')}
                error={errors.time}
                type="select"
                required
                options={timeOptions}
              />
            </>
          )}
          {step === 2 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Form
                  id="firstName"
                  question="First Name"
                  value={formData.firstName}
                  placeholder="Enter Your First Name"
                  onChange={handleChange('firstName')}
                  error={errors.firstName}
                  type="text"
                  required
                />
                <Form
                  id="lastName"
                  question="Last Name"
                  value={formData.lastName}
                  placeholder="Enter Your Last Name"
                  onChange={handleChange('lastName')}
                  error={errors.lastName}
                  type="text"
                  required
                />
              </div>
              <Form
                id="email"
                question="Email"
                required
                type="email"
                value={formData.email}
                onChange={handleChange('email')}
                placeholder="Email Address"
                error={errors.email}
              />
              <Form
                id="contact"
                question="Phone/Mobile"
                required
                type="text"
                placeholder="Mobile number"
                value={formData.contact}
                onChange={handleChange('contact')}
                error={errors.contact}
              />
              <div className="flex items-start gap-2">
                <Form
                  question="By giving your number you agree to receive texts from Advanced Periodontics & Implants. Message frequency varies. Msg & data rates may apply. Reply HELP for help or STOP to opt-out."
                  type="checkbox"
                />
              </div>
            </>
          )}
          {step === 3 && (
            <>
              <Form
                id="HearAboutUs"
                question="Where did you hear about us?"
                value={formData.HearAboutUs}
                onChange={handleChange('HearAboutUs')}
                error={errors.HearAboutUs}
                type="textarea"
                required
              />
            </>
          )}

          <div
            className={cn(
              'flex gap-4',
              step > 1 ? 'justify-between' : 'justify-end'
            )}
          >
            {step > 1 && (
              <button
                type="button"
                className="btn"
                onClick={() => setStep((prev) => prev - 1)}
              >
                Previous
              </button>
            )}
            {step < 3 ? (
              <button type="button" className="btn" onClick={handleNext}>
                Next
              </button>
            ) : (
              <button type="submit" className="btn">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
