// eslint-disable-next-line vue/multi-word-component-names
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const windowWidth = ref(window.innerWidth);
function updateWidth() {
    windowWidth.value = window.innerWidth;
}

onMounted(() => window.addEventListener('resize', updateWidth));
onUnmounted(() => window.removeEventListener('resize', updateWidth));
</script>

<template>
    <section class="container max-w-[1160px] mx-auto px-6">
        <div class="flex flex-wrap text-center gap-4 py-10">
            <div class="w-full flex items-center justify-center">
                <h1 class="text-3xl md:text-[40px] font-bold text-center w-full headingFont ">
                    Welcome to Dental Implant USA <br />Your Destination for Advanced Implant Care
                </h1>
            </div>
            <hr className="my-1 w-full border-t border-gray-400" />
            <div class="w-full flex items-center justify-center">
                <h2 class="text-lg md:text-2xl text-center">
                    Dental Implant USA provides advanced implant and periodontal care in New York City, Long Island, and
                    New Jersey. Our specialists restore smiles with natural-looking implants that feel and function like
                    real teeth, using proven techniques like All-on-Four for secure, lasting results.
                </h2>
            </div>
            <div class="w-full flex items-center justify-center">
                <h2 class="text-lg md:text-2xl text-center">
                    Patients can explore before-and-after transformations and find clear answers in our FAQs. Whether
                    replacing a single tooth or a full arch, we make treatment comfortable, efficient, and
                    confidence-boosting-helping you enjoy eating, speaking, and smiling again.
                </h2>
            </div>
            <div class="w-full flex items-center justify-center">
                <h3 class="text-base md:text-xl text-gray-500">
                    Explore real patient results and get answers to your most common questions below.
                </h3>
            </div>
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
