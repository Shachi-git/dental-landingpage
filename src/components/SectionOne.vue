// eslint-disable-next-line vue/multi-word-component-names
<script setup>
import { ref, reactive, onMounted } from 'vue'
import Input from '../props/Input.vue'
import StepIndicator from '../props/StepIndicator.vue'
import HeroTestimonial from './HeroTestimonial.vue'
import { officeOptions, serviceOptions, timeOptions } from '../lib/Options'
import { createDirectus, rest, staticToken, createItem } from '@directus/sdk'

const step = ref(1)
const errors = reactive({})
const loading = ref(false)

const formData = reactive({
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

// Tracking fields
const utmSource = ref('')
const utmMedium = ref('')
const utmCampaign = ref('')
const utmTerm = ref('')
const utmContent = ref('')
const pageUrl = ref(window.location.href) // always current page
const gclid = ref('')
const fbclid = ref('')

// Directus client
const clientDirectus = createDirectus(import.meta.env.VITE_DIRECTUS)
    .with(staticToken(import.meta.env.VITE_DIRECTUS_STATIC_TOKEN))
    .with(rest({ credentials: 'include' }))

const LOCAL_STORAGE_KEY = 'dentalImplantFormData'

// --- Tracking helpers ---
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(name) || ''
}

function saveUtmDataToStorage() {
    const utmData = {
        utm_source: getUrlParameter('utm_source'),
        utm_medium: getUrlParameter('utm_medium'),
        utm_campaign: getUrlParameter('utm_campaign'),
        utm_term: getUrlParameter('utm_term'),
        utm_content: getUrlParameter('utm_content'),
    }

    const gclid1 = getUrlParameter('gclid') || getUrlParameter('cid')
    const fbclid1 = getUrlParameter('fbclid') || getUrlParameter('fbc')

    const hasUtmData = Object.values(utmData).some(
        (v) => v && typeof v === 'string' && v.trim() !== ''
    )

    if (hasUtmData) {
        try {
            localStorage.setItem('utm_tracking_data', JSON.stringify(utmData))
        } catch (err) {
            console.warn('Failed to save UTM data:', err)
        }
    }

    let sixMonths = 60 * 60 * 24 * 30 * 6
    if (gclid1) document.cookie = `gclid=${gclid1};path=/;max-age=${sixMonths}`
    if (fbclid1) document.cookie = `fbclid=${fbclid1};path=/;max-age=${sixMonths}`
}

function getUtmDataFromStorage() {
    try {
        const stored = localStorage.getItem('utm_tracking_data')
        return stored ? JSON.parse(stored) : null
    } catch {
        return null
    }
}

function initializeTrackingFields() {
    const urlUtmSource = getUrlParameter('utm_source')
    const urlUtmMedium = getUrlParameter('utm_medium')
    const urlUtmCampaign = getUrlParameter('utm_campaign')
    const urlUtmTerm = getUrlParameter('utm_term')
    const urlUtmContent = getUrlParameter('utm_content')
    const urlGclid = getUrlParameter('gclid') || getUrlParameter('cid')
    const urlFbclid = getUrlParameter('fbclid') || getUrlParameter('fbc')

    if (
        urlUtmSource ||
        urlUtmMedium ||
        urlUtmCampaign ||
        urlUtmTerm ||
        urlUtmContent ||
        urlGclid ||
        urlFbclid
    ) {
        saveUtmDataToStorage()
        utmSource.value = urlUtmSource
        utmMedium.value = urlUtmMedium
        utmCampaign.value = urlUtmCampaign
        utmTerm.value = urlUtmTerm
        utmContent.value = urlUtmContent
        gclid.value = urlGclid
        fbclid.value = urlFbclid
    } else {
        const stored = getUtmDataFromStorage()
        if (stored) {
            utmSource.value = stored.utm_source || ''
            utmMedium.value = stored.utm_medium || ''
            utmCampaign.value = stored.utm_campaign || ''
            utmTerm.value = stored.utm_term || ''
            utmContent.value = stored.utm_content || ''
        }
        const gclidMatch = document.cookie.match(/(^| )gclid=([^;]+)/)
        const fbclidMatch = document.cookie.match(/(^| )fbclid=([^;]+)/)
        gclid.value = gclidMatch ? gclidMatch[2] : ''
        fbclid.value = fbclidMatch ? fbclidMatch[2] : ''
    }

    pageUrl.value = window.location.href
}

// --- Lifecycle ---
onMounted(() => {
    // restore form data
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (savedData) Object.assign(formData, JSON.parse(savedData))

    // initialize tracking
    initializeTrackingFields()
})

// --- Form logic (unchanged) ---
function handleChange(field, value) {
    if (field === 'allowTexts') {
        formData.allowTexts = value === 'true'
    } else {
        formData[field] = value
    }
    saveToLocalStorage()
}

function saveToLocalStorage() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData))
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validatePhone(phone) {
    const digitsOnly = phone.replace(/\D/g, '')
    return digitsOnly.length >= 10 && digitsOnly.length <= 15
}

function handleNext() {
    const requiredFields =
        step.value === 1
            ? ['office', 'service', 'time']
            : step.value === 2
                ? ['firstName', 'lastName', 'email', 'contact']
                : []

    Object.keys(errors).forEach((key) => delete errors[key])
    let fieldErrors = {}

    requiredFields.forEach((key) => {
        const value = formData[key]
        if (typeof value === 'string' && !value.trim()) {
            fieldErrors[key] = 'This field is required!'
        }
    })

    if (step.value === 2) {
        if (!validateEmail(formData.email.trim())) {
            fieldErrors.email = 'Please enter a valid email address!'
        }
        if (!validatePhone(formData.contact.trim())) {
            fieldErrors.contact = 'Please enter a valid phone number!'
        }
    }

    if (Object.keys(fieldErrors).length > 0) {
        Object.assign(errors, fieldErrors)
        return
    }

    Object.keys(errors).forEach((key) => delete errors[key])
    step.value++
    saveToLocalStorage()
}

async function handleSubmit() {
    if (step.value !== 3) return
    loading.value = true
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
            utm_source: utmSource.value,
            utm_medium: utmMedium.value,
            utm_campaign: utmCampaign.value,
            utm_term: utmTerm.value,
            utm_content: utmContent.value,
            page_url: pageUrl.value,
            gclid: gclid.value,
            fbclid: fbclid.value,
        }

        await clientDirectus.request(createItem('vue_forms', payload))

        step.value = 4
        localStorage.removeItem(LOCAL_STORAGE_KEY)
    } catch (err) {
        console.error('Error submitting form:', err)
    } finally {
        loading.value = false
    }
}

function resetForm() {
    step.value = 1
    Object.keys(errors).forEach((key) => delete errors[key])
    for (const key in formData) {
        formData[key] = key === 'allowTexts' ? false : ''
    }
}
</script>


<template>
    <section class="flex flex-col lg:flex-row w-full">
        <!-- Hero testimonial -->
        <div class="w-full lg:w-1/2">
            <HeroTestimonial />
        </div>

        <!-- Form container -->
        <div class="default-bg-gray p-5 flex flex-col justify-start items-center w-full lg:w-1/2">
            <template v-if="step === 4">
                <div class="flex flex-col items-center justify-center h-full space-y-6">
                    <h2 class="text-3xl font-bold text-[#0085cc] text-center">
                        Thank You! Your Consultation request has been submitted.
                    </h2>
                    <p class="text-foreground text-lg max-w-md text-center">
                        Your appointment request has been received. We will contact you soon to confirm your schedule.
                    </p>
                    <button @click="resetForm"
                        class="bg-[#0085cc] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0074b0] transition">
                        Submit Another Response
                    </button>
                </div>
            </template>

            <template v-else>
                <h2 class="text-xl font-bold mb-6 text-center text-[#0085cc] montserrat uppercase">
                    Book an Appointment
                </h2>
                <StepIndicator :currentStep="step" />

                <form class="space-y-4 w-full" @submit.prevent="handleSubmit">
                    <!-- Step 1 -->
                    <template v-if="step === 1">
                        <Input id="office" question="Choose your office" type="select" :value="formData.office"
                            :options="officeOptions" :error="errors.office" @update="handleChange('office', $event)"
                            required />
                        <Input id="service" question="What service are you interested in?" type="select"
                            :value="formData.service" :options="serviceOptions" :error="errors.service"
                            @update="handleChange('service', $event)" required />
                        <Input id="time" question="What time is best for you?" type="select" :value="formData.time"
                            :options="timeOptions" :error="errors.time" @update="handleChange('time', $event)"
                            required />
                    </template>

                    <!-- Step 2 -->
                    <template v-if="step === 2">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input id="firstName" question="First Name" type="text" placeholder="Enter Your First Name"
                                :value="formData.firstName" :error="errors.firstName"
                                @update="handleChange('firstName', $event)" required />
                            <Input id="lastName" question="Last Name" type="text" placeholder="Enter Your Last Name"
                                :value="formData.lastName" :error="errors.lastName"
                                @update="handleChange('lastName', $event)" required />
                        </div>
                        <Input id="email" question="Email" type="email" placeholder="Email Address"
                            :value="formData.email" :error="errors.email" @update="handleChange('email', $event)"
                            required />
                        <Input id="contact" question="Phone/Mobile" type="text" placeholder="Mobile number"
                            :value="formData.contact" :error="errors.contact" @update="handleChange('contact', $event)"
                            required />
                        <Input id="allowTexts" type="checkbox"
                            question="By giving your number you agree to receive texts..."
                            :value="formData.allowTexts ? 'true' : 'false'" :error="errors.allowTexts"
                            @update="handleChange('allowTexts', $event)" />
                    </template>

                    <!-- Step 3 -->
                    <template v-if="step === 3">
                        <Input id="HearAboutUs" question="Where did you hear about us?" type="textarea"
                            :value="formData.HearAboutUs" :error="errors.HearAboutUs"
                            @update="handleChange('HearAboutUs', $event)" />
                    </template>

                    <!-- Buttons -->
                    <div class="flex gap-4" :class="step > 1 ? 'justify-between' : 'justify-end'">
                        <button v-if="step > 1" type="button" class="btn" @click="step--">Previous</button>
                        <button v-if="step < 3" type="button" class="btn" @click="handleNext">Next</button>
                        <button v-if="step === 3" type="submit" class="btn" :disabled="loading">
                            {{ loading ? "Submitting..." : "Submit" }}
                        </button>
                    </div>
                </form>
            </template>
        </div>
    </section>
</template>

<style scoped>
@keyframes underline-draw {
    from {
        stroke-dashoffset: 400;
    }

    to {
        stroke-dashoffset: 0;
    }
}

.lora-font {
    font-family: 'Lora', sans-serif;
}

.swoosh path {
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
    animation: underline-draw 1.2s ease-out .3s forwards;
}

@media (prefers-reduced-motion: reduce) {
    .swoosh path {
        animation: none;
        stroke-dashoffset: 0;
    }
}
</style>
