<script setup>
import imgSmoking from '../assets/blog/dental-implants-and-smoking-risks-effects-and-best-practices.webp'
import imgDenturesVsImplants from '../assets/blog/permanent-dentures-vs-dental-implants-making-the-right-choice-for-your-smile.webp'
import imgGumDisease from '../assets/blog/can-you-get-dental-implants-with-gum-disease.webp'
import imgInfected from '../assets/blog/can-dental-implants-get-infected-understanding-risks-and-prevention.webp'

const blogPosts = [
    {
        title: 'Dental Implants and Smoking: Risks, Effects, and Best Practices',
        date: 'July 7, 2024',
        image: imgSmoking,
        href: 'https://www.dentalimplantsusa.com/dental-implants-and-smoking-risks-effects-and-best-practices/',
    },
    {
        title: 'Permanent Dentures vs. Dental Implants: Making the Right Choice for Your Smile',
        date: 'July 7, 2024',
        image: imgDenturesVsImplants,
        href: 'https://www.dentalimplantsusa.com/permanent-dentures-vs-dental-implants-making-the-right-choice-for-your-smile/',
    },
    {
        title: 'Can You Get Dental Implants with Gum Disease?',
        date: 'July 7, 2024',
        image: imgGumDisease,
        href: 'https://www.dentalimplantsusa.com/can-you-get-dental-implants-with-gum-disease/',
    },
    {
        title: 'Can Dental Implants Get Infected? Understanding Risks and Prevention',
        date: 'July 8, 2024',
        image: imgInfected,
        href: 'https://www.dentalimplantsusa.com/can-dental-implants-get-infected-understanding-risks-and-prevention/',
    },
]
</script>


<template>
    <section class="default-bg-gray ">
        <div class="flex flex-col px-6 mx-auto py-10 items-center default-bg-gray container max-w-[1160px]">
            <h1 class="text-3xl uppercase md:text-[40px] text-center w-full default-gray headingFont">
                Our Blog
            </h1>
            <h2 class="text-xl text-center montserrat sub-head max-w-2xl pb-4">
                Discover our blog posts and stay in touch with us!
            </h2>

            <hr className="my-1 w-full border-t border-gray-400 pb-4" />

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-5 w-full px-4">
                <a v-for="(post, index) in blogPosts" :key="index" :href="post.href" target="_blank"
                    rel="noopener noreferrer"
                    class="bg-white rounded-lg border border-gray-300 shadow-sm overflow-hidden hover:shadow-md hover:scale-105 transition-transform duration-300">
                    <div class="relative h-48 w-full">
                        <img :src="post.image" :alt="post.title" class="object-cover w-full h-full" />
                    </div>
                    <div class="p-4 flex flex-col justify-between h-[calc(100%-12rem)]">
                        <h3 class="text-lg font-semibold text-foreground mb-2">
                            {{ post.title }}
                        </h3>
                        <p class="text-xs text-gray-500">{{ post.date }}</p>
                    </div>
                </a>
            </div>

            <a href="https://www.dentalimplantsusa.com/blog/" target="_blank" rel="noopener noreferrer"
                class="mt-1 btn font-semibold px-6 py-2 transition-colors">
                Show all posts
            </a>
        </div>
    </section>

</template>