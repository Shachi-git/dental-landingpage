<script setup>
import { reactive } from 'vue'
import SectionSubTitle from './SectionSubTitle.vue'
import SubParagraphText from './SubParagraphText.vue'

const faqs = reactive([
    {
        question: 'What are dental implants?',
        answer:
            `Dental implants are artificial tooth roots designed to support replacement teeth. They are placed into the jaw and can be used to support a crown, bridge, or other dental restoration depending on the treatment plan.`,
        open: false,
    },
    {
        question: 'Who can consider dental implants?',
        answer:
            `Dental implants may be an option for people who are missing one or more teeth and are looking for a stable replacement. A dental professional can evaluate your teeth, gums, jawbone, and overall oral health to determine whether implants are appropriate.`,
        open: false,
    },
    {
        question: 'How long does the implant process take?',
        answer:
            `Treatment timelines vary depending on the individual case. Some patients may complete treatment in several appointments, while others may need additional healing time or preparatory procedures. Your dental provider can explain the expected timeline during your consultation.`,
        open: false,
    },
    {
        question: 'Can dental implants replace multiple teeth?',
        answer:
            `Yes. Dental implants can be used in several ways to replace multiple missing teeth. Depending on your needs, treatment may involve individual implant-supported teeth, an implant-supported bridge, or a full-arch restoration.`,
        open: false,
    },
    {
        question: 'How should I care for dental implants?',
        answer:
            `Implant-supported teeth should be cared for regularly, just like natural teeth. Brushing, cleaning between the teeth, maintaining regular dental visits, and following your dental professional's recommendations can help support long-term oral health.`,
        open: false,
    },
    {
        question: 'What happens during an implant consultation?',
        answer:
            `A consultation typically begins with an evaluation of your dental and oral health. Your provider may discuss your goals, examine the areas where teeth are missing, and use appropriate imaging to develop a personalized treatment plan.`,
        open: false,
    },
    {
        question: 'Are dental implants permanent?',
        answer:
            `Dental implants are designed to provide a long-term tooth replacement solution. Their longevity depends on factors such as oral hygiene, regular professional care, overall dental health, and how well the restoration is maintained over time.`,
        open: false,
    },
])

function toggle(index) {
    faqs.forEach((faq, i) => {
        faq.open = i === index ? !faq.open : false
    })
}
</script>

<template>
    <section class="relative default-bg-gray">
        <div class="container max-w-[1160px] px-6 mx-auto py-10">
            <div class="w-full flex items-center justify-center pb-4">
                <h1 class="text-3xl uppercase md:text-[40px] text-center w-full default-gray headingFont">
                    Dental Implant FAQs
                </h1>
            </div>

            <hr className="my-1 w-full border-t border-gray-400 pb-4" />

            <div v-for="(faq, index) in faqs" :key="index" class="border-b px-4 border-gray-300 py-4">
                <!-- Toggle Button -->
                <button @click="toggle(index)"
                    class="w-full hover:text-[#0085cc] cursor-pointer flex justify-between items-center text-left font-normal text-lg">
                    <SectionSubTitle class="flex-1">
                        {{ faq.question }}
                    </SectionSubTitle>

                    <svg :class="faq.open ? 'rotate-180' : ''"
                        class="w-5 h-5 flex-shrink-0 ml-2 transform transition-transform duration-200" fill="none"
                        stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                        stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </button>

                <!-- FAQ Answer -->
                <div :class="faq.open ? 'max-h-[500px]' : 'max-h-0'"
                    class="overflow-hidden transition-all duration-300 ease-in-out">
                    <SubParagraphText v-html="faq.answer" class="mt-2 text-gray-600 text-sm pb-4" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>