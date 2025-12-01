<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

// --- Imports for your images ---
import bg1 from '../assets/banner/top-banner-img-opt-3.webp'
import before1 from '../assets/banner/before-slide-2.webp'
import after1 from '../assets/banner/after-slide-2.webp'

import bg2 from '../assets/banner/top-banner-img-opt-2.webp'
import before2 from '../assets/banner/before-slide-1.webp'
import after2 from '../assets/banner/after-slide-1.webp'

import bg3 from '../assets/banner/top-banner-img-opt-5.webp'
import before3 from '../assets/banner/before-slide-4.webp'
import after3 from '../assets/banner/after-slide-4.webp'

import bg4 from '../assets/banner/top-banner-img-opt-4.webp'
import before4 from '../assets/banner/before-slide-3.webp'
import after4 from '../assets/banner/after-slide-3.webp'

import bgM1 from '../assets/banner/top-banner-img-1-center.webp'
import beforeM1 from '../assets/banner/before-slide-2.webp'
import afterM1 from '../assets/banner/after-slide-2.webp'

import bgM2 from '../assets/banner/top-banner-img-2-center.webp'
import beforeM2 from '../assets/banner/before-slide-1.webp'
import afterM2 from '../assets/banner/after-slide-1.webp'

import bgM3 from '../assets/banner/top-banner-img-4-center.webp'
import beforeM3 from '../assets/banner/before-slide-4.webp'
import afterM3 from '../assets/banner/after-slide-4.webp'

import bgM4 from '../assets/banner/top-banner-img-3-center.webp'
import beforeM4 from '../assets/banner/before-slide-3.webp'
import afterM4 from '../assets/banner/after-slide-3.webp'

// --- Desktop slides ---
const slides = [
    { bg: bg1, before: before1, after: after1, quote: '"I went from hiding my teeth, to smiling at strangers! This procedure has changed my life!"', name: 'Emily, All-On-Four Smile Recipient', position: 'top-left' },
    { bg: bg2, before: before2, after: after2, quote: '“When I was told I was not a candidate for dental implants, I felt completely hopeless. Discovering that I was a candidate for the All-On-Four procedure saved my life!”', name: 'Grace, All-On-Four Smile Recipient', position: 'top-left' },
    { bg: bg3, before: before3, after: after3, quote: '“I am so happy I chose to trust this office with my smile! I have never felt more confident!”', name: 'John, All-On-Four Smile Recipient', position: 'top-right' },
    { bg: bg4, before: before4, after: after4, quote: '"The All-On-Four procedure was easy, fast, and painless! I can now smile confidently again."', name: 'Greg, All-On-Four Smile Recipient', position: 'top-left' },
]

// --- Mobile slides (always centered) ---
const mobileSlides = [
    { bg: bgM1, before: beforeM1, after: afterM1, quote: '"I went from hiding my teeth, to smiling at strangers! This procedure has changed my life!"', name: 'Emily, All-On-Four Smile Recipient', position: 'center' },
    { bg: bgM2, before: beforeM2, after: afterM2, quote: '“When I was told I was not a candidate for dental implants, I felt completely hopeless. Discovering that I was a candidate for the All-On-Four procedure saved my life!”', name: 'Grace, All-On-Four Smile Recipient', position: 'center' },
    { bg: bgM3, before: beforeM3, after: afterM3, quote: '“I am so happy I chose to trust this office with my smile! I have never felt more confident!”', name: 'John, All-On-Four Smile Recipient', position: 'center' },
    { bg: bgM4, before: beforeM4, after: afterM4, quote: '"The All-On-Four procedure was easy, fast, and painless! I can now smile confidently again."', name: 'Greg, All-On-Four Smile Recipient', position: 'center' },
]

const currentImage = ref(0)
const isMobile = ref(false)
const translateX = ref(0)
const transition = ref('transform 0.3s ease')
let startX = 0
let isDragging = false

function updateDevice() {
    isMobile.value = window.innerWidth < 640 // only center on small screens
}
onMounted(() => {
    updateDevice()
    window.addEventListener('resize', updateDevice)
})
onUnmounted(() => window.removeEventListener('resize', updateDevice))

const slidesToUse = computed(() => (isMobile.value ? mobileSlides : slides))

// Auto-rotate
let interval
onMounted(() => {
    interval = setInterval(() => nextSlide(), 5000)
})
onUnmounted(() => clearInterval(interval))

function nextSlide() {
    currentImage.value = (currentImage.value + 1) % slidesToUse.value.length
}
function prevSlide() {
    currentImage.value = (currentImage.value - 1 + slidesToUse.value.length) % slidesToUse.value.length
}

// --- Drag/swipe logic ---
function handleStart(e) {
    startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX
    isDragging = true
    transition.value = '' // disable transition while dragging
}
function handleMove(e) {
    if (!isDragging) return
    const currentX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX
    translateX.value = currentX - startX
}
function handleEnd() {
    if (!isDragging) return
    transition.value = 'transform 0.3s ease'
    if (translateX.value > 100) {
        prevSlide()
    } else if (translateX.value < -100) {
        nextSlide()
    }
    translateX.value = 0
    isDragging = false
}
</script>

<template>
    <div class="relative overflow-hidden w-full h-[300px] md:h-[350px] cursor-grab lg:h-[560px]"
        @mousedown="handleStart" @mousemove="handleMove" @mouseup="handleEnd"
        @mouseleave="isDragging = false; translateX = 0" @touchstart="handleStart" @touchmove="handleMove"
        @touchend="handleEnd">
        <!-- Track with all slides -->
        <div class="flex w-full h-full" :style="{
            transform: `translateX(calc(${-currentImage * 100}% + ${translateX}px))`,
            transition: transition
        }">
            <div v-for="(slide, index) in slidesToUse" :key="index" class="w-full flex-shrink-0 relative">
                <!-- Background -->
                <img :src="slide.bg" alt="Testimonial background" draggable="false"
                    class="object-cover w-full h-full" />

                <!-- Quote box -->
                <div :class="[
                    'absolute bg-white/70 text-foreground p-4 rounded shadow-md z-10 transition-all duration-500',
                    isMobile
                        ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[85%] max-w-sm'
                        : slide.position === 'top-left'
                            ? 'top-4 left-4 max-w-xs'
                            : 'top-4 right-4 max-w-xs'
                ]">
                    <p class="italic mb-3 text-base md:text-lg font-light montserrat">{{ slide.quote }}</p>
                    <p class="font-semibold montserrat text-sm md:text-base">{{ slide.name }}</p>

                    <!-- Before/After images -->
                    <div class="flex justify-center gap-2 mt-4">
                        <img :src="slide.before" alt="Before" width="100" height="80" draggable="false"
                            class="rounded border" />
                        <img :src="slide.after" alt="After" width="100" height="80" draggable="false"
                            class="rounded border" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>