<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import imgAO from '../assets/affiliation/final-ao-logo.webp'
import imgADA from '../assets/affiliation/ada-logo.webp'
import imgNYS from '../assets/affiliation/NYS-dental-association.webp'
import imgBBB from '../assets/affiliation/a-rated.webp'
import imgABP from '../assets/affiliation/sp-img-2.webp'

const affiliations = [
    { name: 'Academy of Osseointegration', image: imgAO },
    { name: 'American Dental Society', image: imgADA },
    { name: 'New York State Dental Association', image: imgNYS },
    { name: 'Accredited BBB Rating A+', image: imgBBB },
    { name: 'American Board of Periodontology', image: imgABP },
]

const containerRef = ref(null)
const isDragging = ref(false)
const startX = ref(0)
const scrollStart = ref(0)

function handleMouseDown(e) {
    isDragging.value = true
    startX.value = e.pageX
    scrollStart.value = containerRef.value?.scrollLeft ?? 0
    containerRef.value?.classList.add('cursor-grabbing')
    document.body.classList.add('user-select-none')
}
function handleMouseUp() {
    isDragging.value = false
    containerRef.value?.classList.remove('cursor-grabbing')
    document.body.classList.remove('user-select-none')
}
function handleMouseLeave() {
    handleMouseUp()
}
function handleMouseMove(e) {
    if (!isDragging.value || !containerRef.value) return
    const delta = e.pageX - startX.value
    containerRef.value.scrollLeft = scrollStart.value - delta
}

onMounted(() => {
    const container = containerRef.value
    if (!container) return

    const card = container.querySelector('div')
    if (!card) return
    const cardWidth = card.offsetWidth + 24

    const scrollStep = () => {
        if (!container) return
        container.scrollBy({ left: cardWidth, behavior: 'smooth' })

        if (container.scrollLeft >= container.scrollWidth / 2) {
            container.scrollLeft = 0
        }
    }

    const interval = setInterval(scrollStep, 10000)
    onUnmounted(() => clearInterval(interval))
})
</script>

<template>
    <section class="flex flex-col items-center container max-w-[1160px] px-6 mx-auto py-10">
        <div class="w-full flex items-center justify-center pb-4">
            <h1 class="text-3xl uppercase md:text-[40px] text-center w-full default-gray headingFont">
                Accreditations and Affiliations
            </h1>
        </div>

        <hr className="my-1 w-full border-t border-gray-400 pb-4" />

        <div class="w-full overflow-hidden py-5 px-4">
            <div class="default-bg-gray p-5">
                <div ref="containerRef"
                    class="flex gap-6 overflow-x-scroll px-4 cursor-grab scroll-smooth scrollbar-hide"
                    @mousedown="handleMouseDown" @mouseup="handleMouseUp" @mouseleave="handleMouseLeave"
                    @mousemove="handleMouseMove">
                    <!-- Render two copies for infinite loop -->
                    <template v-for="repeat in 2">
                        <div v-for="(item, index) in affiliations" :key="`${repeat}-${index}`"
                            class="bg-white rounded-lg border border-gray-200 shadow-sm flex-shrink-0 w-64 h-40 flex flex-col items-center justify-center text-center p-4">
                            <div class="h-[130px] flex items-center justify-center mb-2">
                                <img :src="item.image" :alt="item.name" draggable="false"
                                    class="object-contain h-[120px]" loading="lazy" />
                            </div>
                            <p class="text-sm font-medium text-foreground leading-tight">
                                {{ item.name }}
                            </p>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>