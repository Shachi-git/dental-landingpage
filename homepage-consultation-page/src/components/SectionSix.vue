<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const testimonials = [
    {
        name: 'Al Busha',
        review:
            "Highly recommended. Can't say enough about Dr. Daniel Nejat. Absolutely the best dentist I have ever had for my complicated situation. In two sessions finished 4 implants and caps of which he has a high level of touching with my sinuses in a correct way with great ease and professionalism!! Great and friendly staff.",
    },
    {
        name: 'Gordana Gelic',
        review:
            "I have been Dr. Richard Nejat's patient for 12+ years having so many different dental procedures and surgeries (some of them to be the most difficult and simple), and every time Dr. Nejat found the best possible solution and executed it with precision and brilliance, always being kind with his presence and ensuring minimal discomfort. His entire dental practice (coordinator Stephanie, his assistants (Emily in particular whom I know the longest) are all excellent professionals and will approach you with great care and make you feel like you are at home during, and post surgery follow up. Highly recommended!",
    },
    {
        name: 'Mark Bianchi',
        review:
            "As a patient of many years, I am impressed with the exemplary work of Dr. Richard Nejat as a dental professional. He explains options and details of treatment in laymen's terms. The procedural plan includes long term projections and Dr. Nejat is extremely skillful, knowledgeable and experienced. The entire staff is helpful, polite and caring. I highly recommend this practice.",
    },
    {
        name: 'Timothy Bright',
        review:
            'Had Fidel for a cleaning and it was a complete dental spa experience. Fidel was very informative during each stage of my recall appointment and did a great job checking my comfort level pertaining to sensitivity from start to finish. He told me my teeth are in great shape already but he still has them feeling better than ever!',
    },
    {
        name: 'Bruce Popolizio',
        review:
            'My implant became loose after 2 years. I went in today and they did the right thing. Their new office is state of the art. Everyone is very professional. I’m highly recommending Advanced Periodontics & Implants.',
    },
    {
        name: 'Zach Vocatura',
        review:
            'I ran out of options and was referred to Dr. Nejat. Immediately upon meeting him, he gave me the best option for my situation. It was something I was unaware of and it definitely calmed my worries down. The office staff is very helpful and great as well. I couldn’t be happier with my results.',
    },
]

const isMobile = ref(false)
const itemsPerView = computed(() => (isMobile.value ? 1 : 3))
const activeIndex = ref(0)
const containerRef = ref(null)
const isAutoScrolling = ref(false)
const isDragging = ref(false)
const startX = ref(0)
const scrollStart = ref(0)

function updateDevice() {
    isMobile.value = window.innerWidth < 768
}
onMounted(() => {
    updateDevice()
    window.addEventListener('resize', updateDevice)
})
onUnmounted(() => window.removeEventListener('resize', updateDevice))

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
function scrollToIndex(index) {
    const container = containerRef.value
    if (!container) return

    const card = container.querySelector('div') // first testimonial card
    if (!card) return

    const cardWidth = card.offsetWidth + 24 // include gap (px-4 or gap-6)
    const maxScrollIndex = testimonials.length - 1
    const clampedIndex = Math.min(index, maxScrollIndex)

    isAutoScrolling.value = true
    container.scrollTo({
        left: cardWidth * clampedIndex,
        behavior: 'smooth',
    })
    setTimeout(() => {
        isAutoScrolling.value = false
        activeIndex.value = clampedIndex
    }, 300)
}

onMounted(() => {
    updateDevice()
    window.addEventListener('resize', updateDevice)

    const container = containerRef.value
    if (!container) return

    const handleScroll = () => {
        if (isAutoScrolling.value) return
        const card = container.querySelector('div')
        if (!card) return

        const cardWidth = card.offsetWidth + 24
        const index = Math.round(container.scrollLeft / cardWidth)
        activeIndex.value = index
    }
    container.addEventListener('scroll', handleScroll)

    // Auto-scroll every 5 seconds
    const interval = setInterval(() => {
        let nextIndex = activeIndex.value + 1
        if (nextIndex > testimonials.length - 1) {
            nextIndex = 0 // loop back to start
        }
        scrollToIndex(nextIndex)
    }, 10000)

    onUnmounted(() => {
        window.removeEventListener('resize', updateDevice)
        container.removeEventListener('scroll', handleScroll)
        clearInterval(interval)
    })
})


const maxIndex = computed(() =>
    Math.max(testimonials.length - itemsPerView.value, 0)
)

</script>

<template>
    <div class="flex flex-col px-6 mx-auto container items-center py-10">
        <h1 class="text-3xl uppercase md:text-[40px] text-center w-full default-gray headingFont">
            Our Happy Clients
        </h1>
        <h2 class="text-xl text-center montserrat sub-head max-w-2xl pb-4">
            Know more about what our clients say about us!
        </h2>

        <hr className="my-1 w-full border-t border-gray-400 pb-4" />

        <div class="w-full overflow-hidden py-5 px-4 mx-auto">
            <div ref="containerRef"
                class="flex gap-6 overflow-x-scroll cursor-grab scroll-smooth md:px-12 scrollbar-hide"
                @mousedown="handleMouseDown" @mouseup="handleMouseUp" @mouseleave="handleMouseLeave"
                @mousemove="handleMouseMove">
                <div v-for="(client, index) in testimonials" :key="index"
                    class="bg-white rounded border-gray-300 border w-full flex-shrink-0"
                    :style="{ width: `${100 / itemsPerView}%` }">
                    <div class="flex flex-row justify-between px-4 pt-4">
                        <div>
                            <p class="font-semibold text-sm text-foreground">
                                {{ client.name }}
                            </p>
                            <!-- Star Rating -->
                            <div class="flex gap-1 mt-1">
                                <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    class="w-4 h-4 fill-yellow-500">
                                    <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
                                </svg>
                            </div>
                        </div>
                        <!-- Google G Icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" class="w-5 h-5 fill-black">
                            <path d="M488 261.8C488 403.3 391.1 504 248 504 
           110.8 504 0 393.2 0 256S110.8 8 248 8
           c66.8 0 123 24.5 166.3 64.9l-67.5 64.9
           C258.5 52.6 94.3 116.6 94.3 256c0 86.5 
           69.1 156.6 153.7 156.6 98.2 0 135-70.4 
           140.8-106.9H248v-85.3h236.1c2.3 12.7 
           3.9 24.9 3.9 41.4z" />
                        </svg>
                    </div>

                    <div class="h-px w-full bg-gray-200 my-3" />

                    <p class="text-sm text-justify leading-relaxed px-4 pb-4">
                        {{ client.review }}
                    </p>
                </div>
            </div>
            <!-- Pagination dots -->
            <div class="flex items-center justify-center gap-2 mt-4">
                <button v-for="index in maxIndex + 1" :key="index" @click="scrollToIndex(index - 1)" :class="[
                    'w-1 h-1 rounded-full cursor-pointer hover:bg-[#0085cc]',
                    activeIndex === index - 1
                        ? 'bg-[#0085cc] w-2 h-2'
                        : 'bg-gray-400'
                ]" :aria-label="`Go to slide ${index + 1}`" />
            </div>
        </div>
    </div>
</template>
