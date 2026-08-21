<script setup>
import { ref } from 'vue'

import imgSmoking from '../assets/blog/dental-implants-and-smoking-risks-effects-and-best-practices.webp'
import imgDenturesVsImplants from '../assets/blog/permanent-dentures-vs-dental-implants-making-the-right-choice-for-your-smile.webp'
import imgGumDisease from '../assets/blog/can-you-get-dental-implants-with-gum-disease.webp'
import imgInfected from '../assets/blog/can-dental-implants-get-infected-understanding-risks-and-prevention.webp'

const blogPosts = [
    {
        title: 'Understanding Modern Dental Implants',
        date: 'August 12, 2026',
        image: imgSmoking,
        content:
            'Dental implants are a modern approach to replacing missing teeth. They are designed to provide a stable foundation for replacement teeth while helping restore everyday functions such as eating and speaking. Every treatment plan is different, so a dental professional can help determine which approach is appropriate for each patient.',
    },
    {
        title: 'Choosing the Right Tooth Replacement Option',
        date: 'August 8, 2026',
        image: imgDenturesVsImplants,
        content:
            'There are several ways to replace missing teeth, including dental implants, bridges, and dentures. The right option depends on factors such as the number of missing teeth, oral health, comfort, and individual treatment goals. Understanding the differences between these options can help patients have more informed conversations with their dental provider.',
    },
    {
        title: 'Oral Health and Your Dental Implant Journey',
        date: 'August 3, 2026',
        image: imgGumDisease,
        content:
            'Maintaining good oral health is an important part of any dental treatment journey. Healthy gums and regular dental care can help create a better environment for restorative treatment. Professional evaluations and consistent home care can also help identify potential concerns before they become more difficult to manage.',
    },
    {
        title: 'Caring for Your Smile After Dental Treatment',
        date: 'July 28, 2026',
        image: imgInfected,
        content:
            'Taking care of your smile after dental treatment is an important part of maintaining your results. Following your dental provider’s instructions, practicing good oral hygiene, and attending regular checkups can help support your long-term oral health and keep your smile feeling comfortable.',
    },
]

const selectedPost = ref(null)

function openModal(post) {
    selectedPost.value = post
}

function closeModal() {
    selectedPost.value = null
}
</script>

<template>
    <section class="default-bg-gray">
        <div class="flex flex-col px-6 mx-auto py-10 items-center container max-w-[1160px]">
            <h1 class="text-3xl uppercase md:text-[40px] text-center w-full default-gray headingFont">
                Dental Insights
            </h1>

            <h2 class="text-xl text-center montserrat sub-head max-w-2xl pb-4">
                Helpful information about dental care, implants, and maintaining a healthy smile.
            </h2>

            <hr class="my-1 w-full border-t border-gray-400 pb-4" />

            <!-- Blog Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-5 w-full px-4">
                <button v-for="(post, index) in blogPosts" :key="index" @click="openModal(post)"
                    class="bg-white rounded-lg border border-gray-300 shadow-sm overflow-hidden hover:shadow-md hover:scale-105 transition-transform duration-300 text-left cursor-pointer">
                    <div class="relative h-48 w-full">
                        <img :src="post.image" :alt="post.title" class="object-cover w-full h-full" />
                    </div>

                    <div class="p-4">
                        <h3 class="text-lg font-semibold text-foreground mb-2">
                            {{ post.title }}
                        </h3>

                        <p class="text-xs text-gray-500">
                            {{ post.date }}
                        </p>

                        <p class="text-sm text-[#0085cc] font-medium mt-3">
                            Read Article →
                        </p>
                    </div>
                </button>
            </div>
        </div>
    </section>

    <!-- Reusable Blog Modal -->
    <Teleport to="body">
        <div v-if="selectedPost" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 py-6"
            @click.self="closeModal">
            <div class="relative bg-white rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                <!-- Close Button -->
                <button @click="closeModal"
                    class="absolute top-4 right-4 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white/90 text-gray-700 hover:bg-gray-100 text-2xl cursor-pointer"
                    aria-label="Close article">
                    ×
                </button>

                <!-- Image -->
                <img :src="selectedPost.image" :alt="selectedPost.title"
                    class="w-full h-56 md:h-72 object-cover rounded-t-xl" />

                <!-- Content -->
                <div class="p-6 md:p-8">
                    <p class="text-sm text-gray-500 mb-2">
                        {{ selectedPost.date }}
                    </p>

                    <h2 class="text-2xl md:text-3xl font-bold text-foreground mb-5">
                        {{ selectedPost.title }}
                    </h2>

                    <p class="text-gray-600 leading-7 text-base md:text-lg">
                        {{ selectedPost.content }}
                    </p>
                </div>
            </div>
        </div>
    </Teleport>
</template>