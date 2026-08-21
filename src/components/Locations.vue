<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const locations = [
    {
        name: 'Konoha',
        address: 'Hidden Leaf Village, Fire Country',
    },
    {
        name: 'Musutafu',
        address: 'Naruhata District, Japan',
    },
    {
        name: 'Tokyo-3',
        address: 'Neo Tokyo-3, Japan',
    },
    {
        name: 'Soul Society',
        address: 'Seireitei, Soul Society',
    },
]

const index = ref(0)

let intervalId

onMounted(() => {
    intervalId = setInterval(() => {
        index.value = (index.value + 1) % locations.length
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
                {{ locations[index].name }}
            </span>

            {{ locations[index].address }}
        </p>
    </div>
</template>