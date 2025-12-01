<script setup>
import { ref, reactive, onMounted } from 'vue'
import Input from '../../props/Input.vue'
import { officeOptions, timeOptions } from '../../lib/Options'
import { createDirectus, rest, staticToken, createItem } from '@directus/sdk'
import PageHeader from '../../components/PageHeader.vue'
import SectionFooter from '../../components/SectionFooter.vue'

// --- State ---
const step = ref(1)
const errors = reactive({})
const loading = ref(false)
const submitted = ref(false)

const formData = reactive({
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
    allowTexts: false,
})

// --- Tracking fields ---
const utmSource = ref('')
const utmMedium = ref('')
const utmCampaign = ref('')
const utmTerm = ref('')
const utmContent = ref('')
const pageUrl = ref(window.location.href)
const gclid = ref('')
const fbclid = ref('')

// --- Directus client ---
const clientDirectus = createDirectus(import.meta.env.VITE_DIRECTUS)
    .with(staticToken(import.meta.env.VITE_DIRECTUS_STATIC_TOKEN))
    .with(rest({ credentials: 'include' }))

const LOCAL_STORAGE_KEY = 'consultationFormData'

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
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (savedData) Object.assign(formData, JSON.parse(savedData))
    initializeTrackingFields()
})

// --- Form logic ---
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
            ? ['firstName', 'lastName', 'email', 'contact', 'office', 'time']
            : step.value === 2
                ? ['missingTeeth', 'gumDisease', 'implants', 'dentures']
                : []

    Object.keys(errors).forEach((key) => delete errors[key])
    let fieldErrors = {}

    requiredFields.forEach((key) => {
        const value = formData[key]
        if (typeof value === 'string' && !value.trim()) {
            fieldErrors[key] = 'This field is required!'
        }
    })

    if (step.value === 1) {
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
    if (step.value !== 2) return
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
                missing_teeth: formData.missingTeeth,
                gum_disease: formData.gumDisease,
                implants: formData.implants,
                dentures: formData.dentures,
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

        localStorage.removeItem(LOCAL_STORAGE_KEY)
        submitted.value = true
    } catch (err) {
        console.error('Error submitting form:', err)
    } finally {
        loading.value = false
    }
}

function resetForm() {
    step.value = 1
    submitted.value = false
    Object.keys(errors).forEach((key) => delete errors[key])
    for (const key in formData) {
        formData[key] = key === 'allowTexts' ? false : ''
    }
}
</script>

<template>
    <section class="min-h-screen flex flex-col bg-white">
        <PageHeader />
        <div class="md:h-16 h-28"></div>

        <div class="flex flex-col px-6 mx-auto max-w-[1160px] container py-10">
            <div class="mx-auto text-center">
                <h1 class="text-3xl uppercase md:text-[40px] text-center w-full default-gray headingFont">
                    Request a Consultation
                </h1>
                <p class="text-foreground text-sm mb-8">
                    Your free screening visit at our New York, New Jersey or Long Island offices will include the
                    following:
                    an oral exam, cancer screening, dental implant evaluation, your possible treatment options, and
                    estimated costs.
                </p>
                <hr className="my-1 w-full border-t border-gray-400 pb-4" />
            </div>

            <!-- Thank you state -->
            <div v-if="submitted" class="text-center py-14">
                <h2 class="text-2xl font-semibold default-blue montserrat uppercase">
                    Thank you! Your consultation request has been submitted.
                </h2>
                <p class="mt-1 text-foreground">
                    Our team will reach out to you soon to confirm your appointment.
                </p>
                <button type="button" @click="resetForm" class="btn mt-1">
                    Submit Another
                </button>
            </div>

            <!-- Form state -->
            <form v-else class="space-y-6 px-4" @submit.prevent="handleSubmit">
                <!-- Step 1 -->
                <template v-if="step === 1">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input id="firstName" question="First Name" type="text" placeholder="Enter Your First Name"
                            :value="formData.firstName" :error="errors.firstName"
                            @update="handleChange('firstName', $event)" required />
                        <Input id="lastName" question="Last Name" type="text" placeholder="Enter Your Last Name"
                            :value="formData.lastName" :error="errors.lastName"
                            @update="handleChange('lastName', $event)" required />
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input id="email" question="Email" type="email" placeholder="Email Address"
                            :value="formData.email" :error="errors.email" @update="handleChange('email', $event)"
                            required />
                        <Input id="contact" question="Phone" type="text" placeholder="Phone Number"
                            :value="formData.contact" :error="errors.contact" @update="handleChange('contact', $event)"
                            required />
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input id="office" question="Choose Your Location" type="select" :value="formData.office"
                            :options="officeOptions" :error="errors.office" @update="handleChange('office', $event)"
                            required />
                        <Input id="time" question="Contact Time" type="select" :value="formData.time"
                            :options="timeOptions" :error="errors.time" @update="handleChange('time', $event)"
                            required />
                    </div>

                    <div class="flex items-start gap-2 mt-4">
                        <Input id="allowTexts" type="checkbox"
                            question="By giving your number you agree to receive texts from Advanced Periodontics & Implants. Message frequency varies. Msg & data rates may apply. Reply HELP for help or STOP to opt-out."
                            :value="formData.allowTexts ? 'true' : 'false'" :error="errors.allowTexts"
                            @update="handleChange('allowTexts', $event)" />
                    </div>
                </template>

                <!-- Step 2 -->
                <template v-if="step === 2">
                    <Input id="missingTeeth" question="1. Are you missing teeth?" type="radio"
                        :value="formData.missingTeeth" :error="errors.missingTeeth" :options="[
                            { value: 'No Missing', label: 'None' },
                            { value: 'One', label: 'One' },
                            { value: 'Two', label: 'Two' },
                            { value: 'Three+', label: 'Three+' }
                        ]" @update="handleChange('missingTeeth', $event)" required />

                    <Input id="gumDisease" question="2. Do you have Gum Disease?" type="radio"
                        :value="formData.gumDisease" :error="errors.gumDisease" :options="[
                            { value: 'No Gum Disease', label: 'None' },
                            { value: 'Mild', label: 'Mild' },
                            { value: 'Severe', label: 'Severe' }
                        ]" @update="handleChange('gumDisease', $event)" required />

                    <Input id="implants" question="3. Do you have any previous dental implants?" type="radio"
                        :value="formData.implants" :error="errors.implants" :options="[
                            { value: 'Yes', label: 'Yes' },
                            { value: 'No', label: 'No' }
                        ]" @update="handleChange('implants', $event)" required />

                    <Input id="dentures" question="4. Do you currently wear dentures?" type="radio"
                        :value="formData.dentures" :error="errors.dentures" :options="[
                            { value: 'Yes', label: 'Yes' },
                            { value: 'No', label: 'No' }
                        ]" @update="handleChange('dentures', $event)" required />
                </template>

                <!-- Buttons -->
                <div class="flex gap-4" :class="step > 1 ? 'justify-between' : 'justify-end'">
                    <button v-if="step > 1" type="button" class="btn" @click="step--">Previous</button>
                    <button v-if="step < 2" type="button" class="btn" @click="handleNext">Next</button>
                    <button v-if="step === 2" type="submit" class="btn" :disabled="loading">
                        {{ loading ? 'Submitting...' : 'Submit' }}
                    </button>
                </div>
            </form>
        </div>
        <SectionFooter />
    </section>

</template>

<style scoped></style>