'use client'

import { useState, useEffect } from 'react'
import { Form } from '../../../components/Form'
import { officeOptions, timeOptions } from '../../../lib/Options'
import cn from 'classnames'
import { useMobileOrTablet } from '@/lib/useDevice'
import { Montserrat } from 'next/font/google'
import { directus } from '@/lib/directus'
import { createItem } from '@directus/sdk'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600'],
})

export default function AppointmentSection() {
  const [step, setStep] = useState(1)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
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
    missingTeeth: '',
    gumDisease: '',
    implants: '',
    dentures: '',
    allowTexting: '',
  })

  const LOCAL_STORAGE_KEY = 'consultationFormData'

  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (savedData) setFormData(JSON.parse(savedData))
  }, [])

  const handleChange = (field: keyof typeof formData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      allowTexting: checked ? 'Allow' : 'Not Allowed',
    }))
  }

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const validatePhone = (phone: string) => {
    const digitsOnly = phone.replace(/\D/g, '')
    return digitsOnly.length >= 10 && digitsOnly.length <= 15
  }

  const handleNext = () => {
    const fieldErrors: Record<string, string> = {}
    const requiredFields =
      step === 1
        ? ['office', 'time', 'firstName', 'lastName', 'email', 'contact']
        : step === 2
        ? ['missingTeeth', 'gumDisease', 'implants', 'dentures']
        : []

    requiredFields.forEach((key) => {
      const value = formData[key as keyof typeof formData].trim()
      if (!value) fieldErrors[key] = 'This field is required!'
    })

    if (step === 1) {
      if (formData.firstName.trim() === '') {
        fieldErrors.firstName = 'First Name is required'
      } else if (!/^[a-zA-Z\s\-']+$/.test(formData.firstName.trim())) {
        fieldErrors.firstName =
          'First Name can only contain letters, spaces, hyphens, and apostrophes'
      } else if (formData.firstName.trim().length > 50) {
        fieldErrors.firstName = 'First Name cannot exceed 50 characters'
      }

      if (formData.lastName.trim() === '') {
        fieldErrors.lastName = 'Last Name is required'
      } else if (!/^[a-zA-Z\s\-']+$/.test(formData.lastName.trim())) {
        fieldErrors.lastName =
          'Last Name can only contain letters, spaces, hyphens, and apostrophes'
      } else if (formData.lastName.trim().length < 2) {
        fieldErrors.lastName = 'Last Name must be at least 2 characters long'
      } else if (formData.lastName.trim().length > 50) {
        fieldErrors.lastName = 'Last Name cannot exceed 50 characters'
      }

      if (!validateEmail(formData.email.trim())) {
        fieldErrors.email = 'Please enter a valid email address'
      }

      if (!validatePhone(formData.contact.trim())) {
        fieldErrors.contact = 'Please enter a valid phone number (10-15 digits)'
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
    if (step !== 2) return

    setIsSubmitting(true)

    try {
      const created = await directus.request(createItem('vue_forms', formData))

      console.log('Form submitted successfully:', created)

      localStorage.removeItem(LOCAL_STORAGE_KEY)
      setIsSubmitted(true)
    } catch (err) {
      console.error('Error submitting form:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleResetForm = () => {
    setFormData({
      office: '',
      service: '',
      time: '',
      firstName: '',
      lastName: '',
      email: '',
      contact: '',
      HearAboutUs: '',
      missingTeeth: '',
      gumDisease: '',
      implants: '',
      dentures: '',
      allowTexting: '',
    })
    setErrors({})
    setIsSubmitted(false)
    setStep(1)
  }

  return (
    <section className="w-full lg:px-8 pt-35 lg:pt-50 pb-15 px-10">
      <div className="max-w-2xl mx-auto text-center">
        <h1
          className={cn(
            `font-bold text-foreground uppercase ${montserrat.className}`,
            isMobileOrTablet
              ? 'text-4xl pt-5 pb-2'
              : 'text-5xl pb-4 whitespace-nowrap'
          )}
        >
          Request a Consultation
        </h1>
        <p className="text-foreground text-sm mb-8">
          Your free screening visit at our New York, New Jersey or Long Island
          offices will include the following: an oral exam, cancer screening,
          dental implant evaluation, your possible treatment options, and
          estimated costs.
        </p>
      </div>

      {isSubmitted ? (
        <div className="max-w-2xl mx-auto text-center py-10">
          <h2 className="text-2xl font-semibold default-blue">
            Thank you! Your consultation request has been submitted.
          </h2>
          <p className="mt-4 text-gray-600">
            Our team will reach out to you soon to confirm your appointment.
          </p>

          <button type="button" onClick={handleResetForm} className="btn mt-8">
            Submit Another
          </button>
        </div>
      ) : (
        <form className="max-w-2xl mx-auto space-y-6" onSubmit={handleSubmit}>
          {step === 1 && (
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  question="Phone"
                  required
                  type="text"
                  placeholder="Phone Number"
                  value={formData.contact}
                  onChange={handleChange('contact')}
                  error={errors.contact}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Form
                  id="office"
                  question="Choose Your Location"
                  value={formData.office}
                  onChange={handleChange('office')}
                  error={errors.office}
                  type="select"
                  required
                  options={officeOptions}
                />
                <Form
                  id="time"
                  question="Contact Time"
                  value={formData.time}
                  onChange={handleChange('time')}
                  error={errors.time}
                  type="select"
                  required
                  options={timeOptions}
                />
              </div>

              <div className="flex items-start gap-2 mt-4">
                <Form
                  id="allowTexting"
                  question="By giving your number you agree to receive texts from Advanced Periodontics & Implants. Message frequency varies. Msg & data rates may apply. Reply HELP for help or STOP to opt-out."
                  type="checkbox"
                  value={formData.allowTexting === 'Allow' ? 'true' : 'false'}
                  onChange={(val) => handleCheckboxChange(val === 'true')}
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <Form
                id="missingTeeth"
                question="1. Are you missing teeth?"
                value={formData.missingTeeth}
                onChange={handleChange('missingTeeth')}
                error={errors.missingTeeth}
                type="radio"
                required
                options={[
                  { value: 'No Missing', label: 'None' },
                  { value: 'One', label: 'One' },
                  { value: 'Two', label: 'Two' },
                  { value: 'Three+', label: 'Three+' },
                ]}
              />
              <Form
                id="gumDisease"
                question="2. Do you have Gum Disease?"
                value={formData.gumDisease}
                onChange={handleChange('gumDisease')}
                error={errors.gumDisease}
                type="radio"
                required
                options={[
                  { value: 'No Gum Disease', label: 'None' },
                  { value: 'Mild', label: 'Mild' },
                  { value: 'Severe', label: 'Severe' },
                ]}
              />
              <Form
                id="implants"
                question="3. Do you have any previous dental implants?"
                value={formData.implants}
                onChange={handleChange('implants')}
                error={errors.implants}
                type="radio"
                required
                options={[
                  { value: 'Yes', label: 'Yes' },
                  { value: 'No', label: 'No' },
                ]}
              />
              <Form
                id="dentures"
                question="4. Do you currently wear dentures?"
                value={formData.dentures}
                onChange={handleChange('dentures')}
                error={errors.dentures}
                type="radio"
                required
                options={[
                  { value: 'Yes', label: 'Yes' },
                  { value: 'No', label: 'No' },
                ]}
              />
            </>
          )}

          <div
            className={`flex gap-4 ${
              step > 1 ? 'justify-between' : 'justify-end'
            }`}
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
            {step < 2 && (
              <button type="button" className="btn" onClick={handleNext}>
                Next
              </button>
            )}
            {step === 2 && (
              <button type="submit" className="btn" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            )}
          </div>
        </form>
      )}
    </section>
  )
}
