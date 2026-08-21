<script setup>
import Locations from './Locations.vue';
</script>

<template>
  <div
    class="border-b-0 md:border-b border-gray-200 default-bg-gray z-50 fixed top-0 left-0 right-0 text-center pt-3 md:pt-0">
    <div class="mx-auto container px-6 md:py-3 grid grid-cols-1 md:grid-cols-3 items-center">

      <!-- Logo -->
      <div class="flex justify-center md:justify-start">
        <router-link to="/" aria-label="BrightSmile Dental" class="flex items-center gap-2">
          <div class="flex items-center justify-center w-10 h-10 rounded-full bg-[#0085cc] text-white">
            <svg aria-hidden="true" class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 21C9.5 18.5 5 14.8 5 9.5C5 6.46 7.46 4 10.5 4C11.1 4 11.6 4.1 12 4.35C12.4 4.1 12.9 4 13.5 4C16.54 4 19 6.46 19 9.5C19 14.8 14.5 18.5 12 21Z"
                stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />

              <path d="M9 9.5C9.7 10.2 10.7 10.5 12 10.5C13.3 10.5 14.3 10.2 15 9.5" stroke="currentColor"
                stroke-width="1.5" stroke-linecap="round" />
            </svg>
          </div>

          <div class="text-left">
            <div class="text-xl font-bold leading-tight text-[#0085cc]">
              BrightSmile
            </div>

            <div class="text-xs font-medium tracking-[0.2em] text-gray-500">
              DENTAL
            </div>
          </div>
        </router-link>
      </div>


      <!-- Locations -->
      <div class="hidden lg:flex justify-center items-center">
        <Locations />
      </div>


      <!-- Desktop Actions -->
      <div class="hidden md:flex justify-center md:justify-end items-center gap-4">

        <!-- Phone -->
        <a href="tel:+639171111111" class="application-btn px-4 py-2 text-base font-medium whitespace-nowrap">
          <svg aria-hidden="true" class="inline w-3.5 h-3.5 mr-1" viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path
              d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
          </svg>

          +63 917 111 1111
        </a>


        <!-- Contact Us - NOT CLICKABLE -->
        <div class="application-btn px-4 py-2 text-[16px] font-medium cursor-default">
          Contact Us
        </div>

      </div>
    </div>


    <!-- Mobile Call Bar -->
    <div class="w-full md:hidden mt-1">
      <div class="bg-[#0085cc] text-white text-center py-4 text-[16px] font-medium">
        <a href="tel:+639171111111">
          Call Us: +63 917 111 1111
        </a>
      </div>
    </div>

  </div>
</template>

<style scoped>
/* Tailwind CSS is imported globally in main.js */
</style>