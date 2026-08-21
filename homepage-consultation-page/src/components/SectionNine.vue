<script setup>
import { ref } from 'vue'

const locations = [
    {
        name: 'Konoha',
        buttonName: 'Konoha',
        address: 'Hidden Leaf Village\nFire Country',
        phone: '(555) 111-1111',
    },
    {
        name: 'Musutafu',
        buttonName: 'Musutafu',
        address: 'Hero District\nJapan',
        phone: '(555) 222-2222',
    },
    {
        name: 'Tokyo',
        buttonName: 'Tokyo',
        address: 'Jujutsu District\nTokyo, Japan',
        phone: '(555) 333-3333',
    },
    {
        name: 'Soul Society',
        buttonName: 'Soul Society',
        address: 'Seireitei District\nSoul Society',
        phone: '(555) 444-4444',
    },
    {
        name: 'Bald Cape',
        buttonName: 'Bald Cape',
        address: 'City Z\nHero Association',
        phone: '(555) 555-5555',
    },
]

const activeLocation = ref(locations[0])
</script>

<template>
    <section class="flex flex-col items-center container max-w-[1160px] px-6 mx-auto py-10">
        <div class="w-full flex items-center justify-center pb-4">
            <h1 class="text-3xl uppercase md:text-[40px] text-center w-full default-gray headingFont">
                Choose Your Location
            </h1>
        </div>

        <p class="text-center text-gray-600 max-w-2xl mb-4">
            Select a location to explore more information about your destination.
        </p>

        <hr class="my-1 w-full border-t border-gray-400 pb-4" />

        <div class="flex flex-col md:flex-row pt-5 gap-8 w-full px-4">
            <!-- Location buttons -->
            <div class="flex flex-row md:flex-col flex-wrap justify-start gap-2 mb-8">
                <button v-for="loc in locations" :key="loc.name" @click="activeLocation = loc" :class="[
                    'shadow-sm whitespace-nowrap cursor-pointer text-sm font-medium transition-colors px-4 py-3 rounded',
                    activeLocation.name === loc.name
                        ? 'loc-btn-active'
                        : 'loc-btn',
                ]">
                    {{ loc.buttonName }}
                </button>
            </div>

            <!-- Location information -->
            <div class="w-full max-w-5xl">
                <div class="default-bg-gray rounded-lg p-8 flex flex-col justify-center text-center items-center">
                    <!-- Location Icon -->
                    <div class="w-20 h-20 rounded-full bg-[#0085cc]/10 flex items-center justify-center text-4xl mb-5">
                        {{
                            activeLocation.name === 'Konoha'
                                ? '🍃'
                                : activeLocation.name === 'Musutafu'
                                    ? '⚡'
                                    : activeLocation.name === 'Tokyo'
                                        ? '🌀'
                                        : activeLocation.name === 'Soul Society'
                                            ? '⚔️'
                                            : '👊'
                        }}
                    </div>

                    <h3 class="text-2xl font-semibold text-foreground mb-3 montserrat">
                        {{ activeLocation.name }}
                    </h3>

                    <p class="text-base font-light text-foreground mb-3 whitespace-pre-line montserrat">
                        {{ activeLocation.address }}
                    </p>

                    <a :href="`tel:${activeLocation.phone.replace(/\D/g, '')}`"
                        class="text-base default-blue mb-5 cursor-pointer montserrat">
                        {{ activeLocation.phone }}
                    </a>

                    <button class="btn w-full md:w-1/3 text-sm font-medium text-center cursor-pointer">
                        Explore Location
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>