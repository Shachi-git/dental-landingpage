// eslint-disable-next-line vue/multi-word-component-names
<script setup>
import Locations from './Locations.vue';
</script>

<template>
  <div
    class="border-b-0 md:border-b border-gray-200 default-bg-gray z-50 fixed top-0 left-0 right-0 text-center pt-3 md:pt-0">

    <div class="mx-auto container px-6 flex flex-col md:flex-row items-center md:justify-between md:py-3">
      <!-- Logo (always visible) -->
      <div class="flex justify-center md:justify-start w-full md:w-[30%]">
        <a href="https://dentalimplantusa.com/homepage" aria-label="Dental Implants USA Logo" class="inline-block">
          <img src="/src/assets/images/logo.webp" alt="Dental Implant USA Logo" class="w-[220px] h-auto" />
        </a>
      </div>

      <!-- Locations (desktop only) -->
      <div class="hidden lg:flex justify-center lg:w-[40%]">
        <Locations />
      </div>

      <!-- Buttons (desktop only) -->
      <div class="hidden md:flex justify-end w-full lg:w-[30%] gap-4">
        <a href="tel:8774406579" class="application-btn px-4 py-2 text-base font-medium">
          <svg aria-hidden="true" class="inline w-3.5 h-3.5 hover:fill-[#0085cc]" viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path
              d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
          </svg>
          (877) 440-6579
        </a>
        <a href="https://dentalimplantusa.com/consultation" target="_blank" rel="noopener noreferrer"
          class="application-btn px-4 py-2 text-[16px] font-medium">
          Make An Appointment
        </a>
      </div>
    </div>
    <!-- Mobile: Call to Schedule bar (outside container) -->
    <div class="w-full md:hidden mt-1">
      <div class="bg-[#0085cc] text-white text-center py-4 text-[16px] font-medium">
        <a href="tel:8774406579">
          <!-- Phone icon -->
          Call to Schedule an Appointment
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Tailwind CSS is already imported globally in main.js */
</style>
