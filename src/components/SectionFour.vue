<script setup>
import { ref } from 'vue'
import allOn4Img from '../assets/reasons/xall-on-4-diagram.webp'
import singleToothImg from '../assets/reasons/xsingle-tooth-replacement.webp'
import multipleToothImg from '../assets/reasons/xmultiple-tooth-replacement.webp'
import smileInADayImg from '../assets/reasons/xsmile-in-a-day.webp'
import zygomaticImg from '../assets/reasons/xzygomatic-implant.webp'
import denturesImg from '../assets/reasons/xdentures.webp'

// Tabs
const reasons = [
    { label: 'Full Arch Implants', key: 'allOn4' },
    { label: 'Single Tooth Implants', key: 'singleTooth' },
    { label: 'Multiple Tooth Implants', key: 'multipleTooth' },
    { label: 'Same-Day Smile', key: 'smileInADay' },
    { label: 'Advanced Implants', key: 'zygomatic' },
    { label: 'Custom Dentures', key: 'dentures' },
]

// Content
const reasonsContent = {
    allOn4: {
        text: 'Full arch dental implants provide a stable and natural-looking solution for replacing an entire row of missing or damaged teeth. By strategically positioning a small number of implants, a complete set of replacement teeth can be securely supported. This approach can restore everyday functions such as eating and speaking while providing a comfortable and confident smile.',
        image: allOn4Img,
    },
    singleTooth: {
        text: 'Replacing a missing tooth can help restore both the appearance and function of your smile. A dental implant replaces the missing tooth root and provides a strong foundation for a natural-looking replacement tooth. With proper care, an implant-supported restoration can provide a durable solution while helping maintain the surrounding structure of your smile.',
        image: singleToothImg,
    },
    multipleTooth: {
        text: 'When several teeth are missing, there are multiple options available depending on your individual needs. Implant-supported restorations can replace multiple missing teeth while providing stability and a natural appearance. Treatment may involve individual implants, implant-supported bridges, or other customized solutions designed to restore your smile.',
        image: multipleToothImg,
    },
    smileInADay: {
        text: 'Same-day smile solutions are designed to streamline the process of restoring damaged or missing teeth. Depending on the treatment plan, temporary replacement teeth may be placed during the same visit as implant treatment. This approach can help patients begin their smile restoration journey quickly while working toward a long-term result.',
        image: smileInADayImg,
    },
    zygomatic: {
        text: 'Advanced implant techniques can provide additional options for patients with more complex dental needs. Specialized implants may be considered when traditional implant placement is not suitable because of limited bone support. A personalized evaluation can help determine which treatment approach is appropriate for restoring function and confidence.',
        image: zygomaticImg,
    },
    dentures: {
        text: 'Custom dentures are a removable option for replacing multiple missing teeth and restoring everyday dental function. Modern dentures can be designed to provide a comfortable fit and natural appearance. Each restoration can be customized to complement the patient’s smile and support comfortable eating and speaking.',
        image: denturesImg,
    },
}

// State
const activeTab = ref('allOn4')
</script>

<template>
    <div class="flex flex-col container max-w-[1160px] px-6 mx-auto py-10 items-center w-full">
        <div class="w-full flex items-center justify-center pb-4">
            <h1 class="text-3xl md:text-[40px] uppercase text-center w-full default-gray headingFont">
                Why Choose Us?
            </h1>
        </div>
        <hr className="my-1 w-full border-t border-gray-400 pb-4" />

        <div class="flex flex-col items-center w-full px-4">
            <!-- Tabs -->
            <div class="flex w-full pt-5 pb-0 overflow-x-auto scrollbar-hide flex-nowrap">
                <button v-for="tab in reasons" :key="tab.key" @click="activeTab = tab.key"
                    class="flex-1 px-4 py-2 rounded-t cursor-pointer text-foreground font-semibold whitespace-nowrap"
                    :class="activeTab === tab.key ? 'bg-[#f7f7f7]' : 'bg-white'">
                    {{ tab.label }}
                </button>
            </div>

            <!-- Content -->
            <div class="text-foreground flex flex-col lg:flex-row items-start gap-6 default-bg-gray p-5">
                <img :src="reasonsContent[activeTab].image"
                    :alt="reasons.find((t) => t.key === activeTab)?.label || 'Dental Image'"
                    class="w-full md:max-w-md lg:max-w-sm rounded shadow mx-auto" />

                <p class="flex-1 text-lg min-w-[200px] text-justify">
                    {{ reasonsContent[activeTab].text }}
                </p>
            </div>
        </div>
    </div>
</template>