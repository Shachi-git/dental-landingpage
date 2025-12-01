<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const addresses = [
    '110 New Hyde Park Road Franklin Square, NY 11010',
    '230 Centre St. Nutley, NJ 07110',
    '110 East 40th St #508 New York, NY 10016',
]

const highlight = ['Long Island', 'Nutley', 'New York']

const index = ref(0)

let intervalId

onMounted(() => {
    intervalId = setInterval(() => {
        index.value = (index.value + 1) % addresses.length
    }, 3000)
})

onUnmounted(() => {
    clearInterval(intervalId)
})
</script>

<template>
    <div class="flex items-center text-center w-full">
        <p class="transition-opacity duration-500 ease-in-out opacity-100 text-foreground text-sm">
            <span class="font-bold text-lg text-[#0085cc]">
                {{ highlight[index] }}
            </span>
            {{ addresses[index] }}
        </p>
    </div>
</template>