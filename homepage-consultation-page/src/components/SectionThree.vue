<script setup>
const infoItems = [
  {
    label: 'Modern Technology',
    description: 'Advanced tools for comfortable and efficient dental care.',
    icon: 'sparkle',
  },
  {
    label: 'Expert Care',
    description: 'Personalized treatment designed around every smile.',
    icon: 'user',
  },
  {
    label: 'Smile Restoration',
    description: 'Thoughtful solutions for healthier and brighter smiles.',
    icon: 'smile',
  },
  {
    label: 'Dental Services',
    description: 'Comprehensive care for your everyday dental needs.',
    icon: 'tooth',
  },
]
</script>

<template>
  <section class="default-bg-gray">
    <div class="flex flex-wrap justify-center container max-w-[1160px] px-6 mx-auto gap-8 py-10">
      <div v-for="item in infoItems" :key="item.label"
        class="flex flex-col items-center justify-center text-center bg-white px-5 py-6 rounded-xl w-52 min-h-[170px]">
        <!-- Icon -->
        <div class="flex items-center justify-center w-12 h-12 rounded-full bg-[#0085cc]/10 text-[#0085cc] mb-3">
          <!-- Sparkle -->
          <svg v-if="item.icon === 'sparkle'" class="w-7 h-7" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z" stroke="currentColor"
              stroke-width="1.8" stroke-linejoin="round" />
            <path d="M19 16L19.8 18.2L22 19L19.8 19.8L19 22L18.2 19.8L16 19L18.2 18.2L19 16Z" stroke="currentColor"
              stroke-width="1.5" stroke-linejoin="round" />
          </svg>

          <!-- User -->
          <svg v-else-if="item.icon === 'user'" class="w-7 h-7" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="8" r="3.5" stroke="currentColor" stroke-width="1.8" />
            <path d="M5 21C5.8 16.8 8.1 14.5 12 14.5C15.9 14.5 18.2 16.8 19 21" stroke="currentColor" stroke-width="1.8"
              stroke-linecap="round" />
          </svg>

          <!-- Smile -->
          <svg v-else-if="item.icon === 'smile'" class="w-7 h-7" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8" />
            <path d="M8 14.5C9 16 10.3 16.8 12 16.8C13.7 16.8 15 16 16 14.5" stroke="currentColor" stroke-width="1.8"
              stroke-linecap="round" />
            <circle cx="9" cy="10" r="1" fill="currentColor" />
            <circle cx="15" cy="10" r="1" fill="currentColor" />
          </svg>

          <!-- Tooth -->
          <svg v-else class="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.5 4.5C5.6 4.5 4 6 4 8.2C4 12.5 6.2 14.3 6.8 18.5C7.1 20.3 8 21 9 21C10.2 21 10.5 19.2 11 17.2C11.3 16 11.6 15.5 12 15.5C12.4 15.5 12.7 16 13 17.2C13.5 19.2 13.8 21 15 21C16 21 16.9 20.3 17.2 18.5C17.8 14.3 20 12.5 20 8.2C20 6 18.4 4.5 16.5 4.5C14.9 4.5 13.8 5.2 12 5.2C10.2 5.2 9.1 4.5 7.5 4.5Z"
              stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
          </svg>
        </div>

        <!-- Content -->
        <span class="text-base font-semibold text-foreground">
          {{ item.label }}
        </span>

        <p class="text-sm text-gray-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </section>
</template>