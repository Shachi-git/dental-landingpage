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
import { Montserrat } from 'next/font/google'
import { directus } from '@/lib/directus'
import { createItem } from '@directus/sdk'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400'],
})

const slides = [
  {
    bg: '/banner/top-banner-img-opt-2.webp',
    before: '/banner/before-slide-1.webp',
    after: '/banner/after-slide-1.webp',
    quote:
      '“When I was told I was not a candidate for dental implants, I felt completely hopeless. Discovering that I was a candidate for the All-On-Four procedure saved my life!”',
    name: 'Grace, All-On-Four Smile Recipient',
    position: 'top-left',
  },
  {
    bg: '/banner/top-banner-img-opt-3.webp',
    before: '/banner/before-slide-2.webp',
    after: '/banner/after-slide-2.webp',
    quote:
      '"I went from hiding my teeth, to smiling at strangers! This procedure has changed my life!"',
    name: 'Emily, All-On-Four Smile Recipient',
    position: 'top-left',
  },
  {
    bg: '/banner/top-banner-img-opt-5.webp',
    before: '/banner/before-slide-4.webp',
    after: '/banner/after-slide-4.webp',
    quote:
      '“I am so happy I chose to trust this office with my smile! I have never felt more confident!”',
    name: 'John, All-On-Four Smile Recipient',
    position: 'top-right',
  },
  {
    bg: '/banner/top-banner-img-opt-4.webp',
    before: '/banner/before-slide-3.webp',
    after: '/banner/after-slide-3.webp',
    quote:
      '"The All-On-Four procedure was easy, fast, and painless! I can now smile confidently again."',
    name: 'Greg, All-On-Four Smile Recipient',
    position: 'top-right',
  },
]

export default function AppointmentSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const [step, setStep] = useState(1)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
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
    allowTexts: false,
  })

  const LOCAL_STORAGE_KEY = 'dentalImplantFormData'

  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (savedData) setFormData(JSON.parse(savedData))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleChange = (field: keyof typeof formData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const validatePhone = (phone: string) => {
    const digitsOnly = phone.replace(/\D/g, '')
    return digitsOnly.length >= 10 && digitsOnly.length <= 15
  }

  const handleNext = () => {
    const requiredFields =
      step === 1
        ? ['office', 'service', 'time']
        : step === 2
        ? ['firstName', 'lastName', 'email', 'contact']
        : []

    const fieldErrors: Record<string, string> = {}

    requiredFields.forEach((key) => {
      const value = formData[key as keyof typeof formData]
      if (typeof value === 'string' && !value.trim()) {
        fieldErrors[key] = 'This field is required!'
      }
    })

    if (step === 2) {
      if (!validateEmail(formData.email.trim())) {
        fieldErrors.email = 'Please enter a valid email address!'
      }
      if (!validatePhone(formData.contact.trim())) {
        fieldErrors.contact = 'Please enter a valid phone number!'
      }
    }

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      return
    }

    setErrors({})
    setStep((prev) => prev + 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (step !== 3) return

    setLoading(true)
    try {
      const payload = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.contact,
        allow_texts: formData.allowTexts,
        submission_data: {
          office: formData.office,
          service: formData.service,
          time: formData.time,
          hear_about_us: formData.HearAboutUs,
        },
      }
      await directus.request(createItem('vue_forms', payload))
      setStep(4)
      localStorage.removeItem(LOCAL_STORAGE_KEY)
    } catch (err) {
      console.error('Error submitting form:', err)
    }
  }

  const { bg, before, after, quote, name, position } = slides[currentImage]

  if (submitted) {
    return (
      <section className="flex flex-col items-center justify-center text-center py-20 bg-default-gray">
        <h2 className="text-3xl font-bold text-[#0085cc] mb-4">
          Thank You for Booking!
        </h2>
        <p className="text-lg text-foreground mb-6 max-w-md">
          We received your appointment request. Our team will contact you soon
          to confirm your schedule.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="bg-[#0085cc] hover:bg-[#006da8] text-white font-semibold px-6 py-3 rounded-lg transition-all"
        >
          Submit Another Appointment
        </button>
      </section>
    )
  }

  return (
    <section
      className={cn(
        'flex w-full',
        isMobileOrTablet ? 'flex-col pt-25' : 'flex-row mt-6 pt-30'
      )}
    >
      <div
        className={cn(
          'relative overflow-hidden bg-cover bg-center transition-all duration-500',
          isMobileOrTablet ? 'w-full h-[500px]' : 'w-1/2 h-[600px]'
        )}
      >
        <Image
          //src={bg}
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${bg}`}
          alt="Testimonial background"
          fill
          priority
          className={cn(
            'object-cover transition-all duration-500',
            isMobileOrTablet && 'blur-sm scale-105'
          )}
        />

        <div
          className={cn(
            'absolute bg-white/70 text-foreground p-4 rounded shadow-md z-10 transition-all duration-500',
            montserrat.className,
            isMobileOrTablet
              ? 'inset-0 flex flex-col items-center justify-center text-center w-full max-w-sm mx-auto'
              : position === 'top-left'
              ? 'top-4 left-4 max-w-xs'
              : 'top-4 right-4 max-w-xs'
          )}
        >
          <p className="italic mb-3 text-lg font-light">{quote}</p>
          <p className="font-semibold">{name}</p>

          <div className="flex justify-center gap-4 mt-4">
            <Image
              //src={before}
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${before}`}
              alt="Before"
              width={100}
              height={70}
              className="rounded border"
            />
            <Image
              //src={after}
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${after}`}
              alt="After"
              width={100}
              height={70}
              className="rounded border"
            />
          </div>
        </div>
      </div>

      <div
        className={cn(
          'default-bg-gray p-8 flex flex-col justify-start items-center',
          isMobileOrTablet ? 'w-full' : 'w-1/2'
        )}
      >
        {step === 4 ? (
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <h2 className="text-3xl font-bold text-[#0085cc]">Thank You!</h2>
            <p className="text-gray-700 text-lg max-w-md">
              Your appointment request has been received. We will contact you
              soon to confirm your schedule.
            </p>
            <button
              onClick={() => setStep(1)}
              className="bg-[#0085cc] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0074b0] transition"
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center text-[#0085cc]">
              Book an Appointment
            </h2>
            <StepIndicator currentStep={step} />

            <form className="space-y-4 w-full" onSubmit={handleSubmit}>
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
                  <Form
                    id="allowTexts"
                    question="By giving your number you agree to receive texts from Advanced Periodontics & Implants. Message frequency varies. Msg & data rates may apply. Reply HELP for help or STOP to opt-out."
                    type="checkbox"
                    value={formData.allowTexts ? 'true' : 'false'}
                    onChange={handleChange('allowTexts')}
                    error={errors.allowTexts}
                  />
                </>
              )}

              {step === 3 && (
                <Form
                  id="HearAboutUs"
                  question="Where did you hear about us?"
                  value={formData.HearAboutUs}
                  onChange={handleChange('HearAboutUs')}
                  error={errors.HearAboutUs}
                  type="textarea"
                />
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
                {step < 3 && (
                  <button type="button" className="btn" onClick={handleNext}>
                    Next
                  </button>
                )}
                {step === 3 && (
                  <button type="submit" className="btn" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                  </button>
                )}
              </div>
            </form>
          </>
        )}
      </div>
    </section>
  )
}
